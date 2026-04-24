import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { sketches, sectionIds } from './sketches';
import { translations, modules } from './i18n';
import { transpile, P5_HOOKS } from './transpile';
import { themes } from './theme';
import { displayFileName } from './lib/fileNames';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/CodeEditor';
import RightPanel from './components/RightPanel';
import ResizeHandle from './components/ResizeHandle';

const PLAYGROUND_STORAGE_KEY = 'playground-code';
const TABS_KEY = 'studio-tabs';
const SIDEBAR_W_KEY = 'studio-sidebar-w';
const RIGHT_W_KEY = 'studio-right-w';
const SIDEBAR_COLLAPSED_KEY = 'studio-sidebar-collapsed';
const OVERVIEW_COLLAPSED_KEY = 'studio-overview-collapsed';
const VISITED_KEY = 'studio-visited';
const SIDEBAR_TAB_KEY = 'studio-sidebar-tab';
const FONT_SIZE_KEY = 'studio-font-size';
const USER_FILES_KEY = 'studio-user-files';

const DEFAULT_TABS = { ids: ['playground'], active: 'playground' };

// Default content for a freshly-created user sketch.
// Structure mirrors Processing's own New Sketch template: canvas setup
// on top, draw loop below, with a small comment explaining each half so
// beginners can see where their code belongs.
const BLANK_SKETCH = `// Runs once when the sketch starts.
void setup() {
  size(400, 400);
  background(18);
}

// Runs every frame (~60 times per second).
void draw() {
  noStroke();
  fill(255, 122, 26);
  circle(mouseX, mouseY, 40);
}
`;

function loadTabs(userNodes) {
  try {
    const raw = localStorage.getItem(TABS_KEY);
    if (!raw) return DEFAULT_TABS;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.ids)) return DEFAULT_TABS;
    const ids = parsed.ids.filter(id =>
      id === 'playground' || id in sketches || (userNodes && userNodes[id])
    );
    if (ids.length === 0) return DEFAULT_TABS;
    const active = typeof parsed.active === 'string' && ids.includes(parsed.active)
      ? parsed.active
      : ids[0];
    return { ids, active };
  } catch {
    return DEFAULT_TABS;
  }
}

function loadNum(key, fallback, min, max) {
  const n = parseFloat(localStorage.getItem(key));
  return Number.isFinite(n) && n >= min && n <= max ? n : fallback;
}

function loadBool(key, fallback) {
  const v = localStorage.getItem(key);
  if (v === 'true') return true;
  if (v === 'false') return false;
  return fallback;
}

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? new Set(arr) : new Set();
  } catch {
    return new Set();
  }
}

function loadUserNodes() {
  try {
    const raw = localStorage.getItem(USER_FILES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    return parsed;
  } catch {
    return {};
  }
}

function initialCodeFor(id, userNodes) {
  if (id === 'playground') {
    return localStorage.getItem(PLAYGROUND_STORAGE_KEY) || sketches.playground;
  }
  if (userNodes && userNodes[id] && userNodes[id].type === 'file') {
    return userNodes[id].content || '';
  }
  return sketches[id] || '';
}

function nextUserName(userNodes, parentId, base) {
  // Returns a name that doesn't collide with siblings in the same folder.
  const siblings = new Set(
    Object.values(userNodes)
      .filter(n => (n.parentId || 'root') === (parentId || 'root'))
      .map(n => n.name)
  );
  if (!siblings.has(base)) return base;
  const m = base.match(/^(.*?)(\.[^.]+)?$/);
  const stem = m[1];
  const ext = m[2] || '';
  for (let i = 2; i < 1000; i++) {
    const n = `${stem} ${i}${ext}`;
    if (!siblings.has(n)) return n;
  }
  return `${base}-${Date.now()}`;
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function ProcessingStudio() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [themeName, setThemeName] = useState(() => localStorage.getItem('theme') || 'dark');
  const [userNodes, setUserNodes] = useState(loadUserNodes);
  const [tabs, setTabs] = useState(() => loadTabs(loadUserNodes()));
  const [buffers, setBuffers] = useState(() => {
    const initialNodes = loadUserNodes();
    const initial = loadTabs(initialNodes);
    const b = {};
    for (const id of initial.ids) b[id] = initialCodeFor(id, initialNodes);
    return b;
  });
  const [sidebarW, setSidebarW] = useState(() => loadNum(SIDEBAR_W_KEY, 240, 210, 380));
  const [rightW, setRightW] = useState(() => loadNum(RIGHT_W_KEY, 360, 260, 540));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => loadBool(SIDEBAR_COLLAPSED_KEY, false));
  const [overviewCollapsed, setOverviewCollapsed] = useState(() => loadBool(OVERVIEW_COLLAPSED_KEY, false));
  const [sidebarTab, setSidebarTab] = useState(() => localStorage.getItem(SIDEBAR_TAB_KEY) || 'courses');
  // Font size is persisted but there's no UI to change it yet — hence no setter.
  const [fontSize] = useState(() => loadNum(FONT_SIZE_KEY, 13, 11, 20));
  const [visited, setVisited] = useState(loadSet(VISITED_KEY));
  const [running, setRunning] = useState(false);
  const [error, setError] = useState(null);

  const canvasRef = useRef(null);
  const p5Instance = useRef(null);
  const runTimerRef = useRef(null);
  const runningTimerRef = useRef(null);

  const t = translations[lang];
  const c = themes[themeName];
  const activeId = tabs.active;
  const code = buffers[activeId] ?? initialCodeFor(activeId, userNodes);
  const isPlayground = activeId === 'playground';
  const isUserFile = !!userNodes[activeId];

  // Ordered list of non-playground lesson IDs for prev/next nav + status calc
  const orderedIds = useMemo(() => sectionIds.filter(id => id !== 'playground'), []);

  const currentModule = useMemo(
    () => modules.find(m => m.sectionIds.includes(activeId)),
    [activeId]
  );
  const moduleIndex = modules.findIndex(m => m.id === currentModule?.id);
  const sectionNum = useMemo(() => {
    if (!currentModule || isPlayground || isUserFile) return '';
    return `${moduleIndex}.${currentModule.sectionIds.indexOf(activeId) + 1}`;
  }, [currentModule, moduleIndex, activeId, isPlayground, isUserFile]);
  const moduleLabel = useMemo(() => {
    if (isUserFile) return 'MY FILES';
    if (!currentModule) return '';
    if (isPlayground) return t.playgroundBadge;
    return `${t.moduleWord} ${moduleIndex} · ${t.modules[currentModule.id]}`;
  }, [currentModule, moduleIndex, isPlayground, isUserFile, t]);

  // Build a synthetic "lesson" payload for the overview panel. For user files
  // we fall back to a minimal blurb since there's no curriculum copy.
  const lesson = useMemo(() => {
    if (isUserFile) {
      return {
        id: activeId,
        intro: 'Your own sketch. It autosaves to this browser — use Download to keep a copy, Upload to bring one in.',
        concepts: [
          'Edits stream into the Preview as you type.',
          'Rename by double-clicking in the sidebar.',
          'Use the trash icon to delete. This cannot be undone.'
        ],
        tryIt: 'Write something weird. The Playground and your files all share the same transpiler.'
      };
    }
    return { ...t.lessons[activeId], id: activeId };
  }, [activeId, isUserFile, t]);

  const sectionTitle = useMemo(() => {
    if (isUserFile) return userNodes[activeId].name;
    return t.sections[activeId];
  }, [activeId, isUserFile, userNodes, t]);

  // Persist everything
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('theme', themeName); }, [themeName]);
  useEffect(() => { localStorage.setItem(TABS_KEY, JSON.stringify(tabs)); }, [tabs]);
  useEffect(() => { localStorage.setItem(SIDEBAR_W_KEY, String(sidebarW)); }, [sidebarW]);
  useEffect(() => { localStorage.setItem(RIGHT_W_KEY, String(rightW)); }, [rightW]);
  useEffect(() => { localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(sidebarCollapsed)); }, [sidebarCollapsed]);
  useEffect(() => { localStorage.setItem(OVERVIEW_COLLAPSED_KEY, String(overviewCollapsed)); }, [overviewCollapsed]);
  useEffect(() => { localStorage.setItem(SIDEBAR_TAB_KEY, sidebarTab); }, [sidebarTab]);
  useEffect(() => { localStorage.setItem(FONT_SIZE_KEY, String(fontSize)); }, [fontSize]);
  useEffect(() => { localStorage.setItem(VISITED_KEY, JSON.stringify([...visited])); }, [visited]);
  useEffect(() => { localStorage.setItem(USER_FILES_KEY, JSON.stringify(userNodes)); }, [userNodes]);

  // Body bg follows theme (prevents white flash on route-load)
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = c.bg;
    return () => { document.body.style.background = prev; };
  }, [c.bg]);

  // NOTE: visited is user-driven now — no auto-mark on tab switch.
  // Users click the status dot in the sidebar to tick a lesson off.

  const openTab = useCallback((id) => {
    setTabs(prev => ({
      ids: prev.ids.includes(id) ? prev.ids : [...prev.ids, id],
      active: id
    }));
    setBuffers(prev => id in prev ? prev : { ...prev, [id]: initialCodeFor(id, userNodes) });
  }, [userNodes]);

  const focusTab = useCallback((id) => {
    setTabs(prev => prev.active === id ? prev : { ...prev, active: id });
  }, []);

  const closeTab = useCallback((id) => {
    setTabs(prev => {
      if (prev.ids.length <= 1) return prev;
      const idx = prev.ids.indexOf(id);
      if (idx === -1) return prev;
      const ids = prev.ids.filter(x => x !== id);
      const active = prev.active === id
        ? ids[Math.min(idx, ids.length - 1)]
        : prev.active;
      return { ids, active };
    });
    setBuffers(prev => {
      if (!(id in prev)) return prev;
      if (id === 'playground') return prev;
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const newTab = useCallback(() => {
    // "+" in the editor tabbar opens the playground sandbox.
    openTab('playground');
  }, [openTab]);

  const toggleDone = useCallback((id) => {
    setVisited(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  // ----- User file/folder operations -----
  // All three callbacks receive the final name from the Sidebar's inline UI —
  // no window.prompt() / confirm() because Electron's chrome doesn't
  // implement them and they throw "not supported". The Sidebar collects
  // input via an <input> element instead.
  //
  // type === 'sketch' is a convenience action that mirrors how the real
  // Processing IDE stores sketches: a folder + a .pde file inside sharing the
  // folder's name. Creating one in a single click is the expected UX and also
  // makes room for a `data/` subfolder per Processing conventions.
  const createUserNode = useCallback((parentId, type, rawName) => {
    const name = (rawName || '').trim();
    if (!name) return;
    const parent = parentId || 'root';

    if (type === 'sketch') {
      // Strip .pde if the user typed one — the sketch name is the folder name,
      // and we'll append .pde to the main file automatically.
      const cleanName = name.replace(/\.pde$/i, '').trim();
      if (!cleanName) return;
      const folderName = nextUserName(userNodes, parent, cleanName);
      const folderId = makeId('ufd');
      const fileId = makeId('uf');
      const fileName = `${folderName}.pde`;
      setUserNodes(prev => ({
        ...prev,
        [folderId]: { id: folderId, type: 'folder', name: folderName, parentId: parent },
        [fileId]: { id: fileId, type: 'file', name: fileName, parentId: folderId, content: BLANK_SKETCH }
      }));
      setBuffers(prev => ({ ...prev, [fileId]: BLANK_SKETCH }));
      setTabs(prev => ({
        ids: prev.ids.includes(fileId) ? prev.ids : [...prev.ids, fileId],
        active: fileId
      }));
      return;
    }

    const desired = type === 'file' && !/\.[a-z0-9]+$/i.test(name)
      ? `${name}.pde`
      : name;
    const finalName = nextUserName(userNodes, parent, desired);
    const id = makeId(type === 'folder' ? 'ufd' : 'uf');
    setUserNodes(prev => ({
      ...prev,
      [id]: type === 'folder'
        ? { id, type: 'folder', name: finalName, parentId: parent }
        : { id, type: 'file', name: finalName, parentId: parent, content: BLANK_SKETCH }
    }));
    if (type === 'file') {
      setBuffers(prev => ({ ...prev, [id]: BLANK_SKETCH }));
      setTabs(prev => ({
        ids: prev.ids.includes(id) ? prev.ids : [...prev.ids, id],
        active: id
      }));
    }
  }, [userNodes]);

  const deleteUserNode = useCallback((id) => {
    const node = userNodes[id];
    if (!node) return;

    // Collect descendants (BFS) so we drop child files from tabs/buffers too.
    const toDelete = new Set([id]);
    let changed = true;
    while (changed) {
      changed = false;
      for (const n of Object.values(userNodes)) {
        if (toDelete.has(n.parentId) && !toDelete.has(n.id)) {
          toDelete.add(n.id);
          changed = true;
        }
      }
    }

    setUserNodes(prev => {
      const next = { ...prev };
      for (const k of toDelete) delete next[k];
      return next;
    });

    // Remove any open tabs for deleted files, reassign active if needed.
    setTabs(prev => {
      const ids = prev.ids.filter(x => !toDelete.has(x));
      if (ids.length === 0) return DEFAULT_TABS;
      const active = toDelete.has(prev.active)
        ? ids[ids.length - 1]
        : prev.active;
      return { ids, active };
    });
    setBuffers(prev => {
      const next = { ...prev };
      for (const k of toDelete) delete next[k];
      return next;
    });
  }, [userNodes]);

  const moveUserNode = useCallback((id, newParentId) => {
    const node = userNodes[id];
    if (!node) return;
    const targetParent = newParentId || 'root';
    if ((node.parentId || 'root') === targetParent) return; // no-op

    // Guard: can't move a folder into itself or a descendant (would orphan the tree).
    if (node.type === 'folder') {
      const descendants = new Set([id]);
      let grew = true;
      while (grew) {
        grew = false;
        for (const n of Object.values(userNodes)) {
          if (descendants.has(n.parentId) && !descendants.has(n.id)) {
            descendants.add(n.id);
            grew = true;
          }
        }
      }
      if (descendants.has(targetParent)) return;
    }

    // If there's a name collision in the new parent, nudge with a suffix so
    // nothing silently overwrites.
    const siblings = Object.values(userNodes)
      .filter(n => n.id !== id && (n.parentId || 'root') === targetParent)
      .map(n => n.name);
    let finalName = node.name;
    if (siblings.includes(finalName)) {
      finalName = nextUserName(
        Object.fromEntries(Object.entries(userNodes).filter(([k]) => k !== id)),
        targetParent, node.name
      );
    }

    setUserNodes(prev => ({
      ...prev,
      [id]: { ...prev[id], parentId: targetParent, name: finalName }
    }));
  }, [userNodes]);

  const renameUserNode = useCallback((id, rawName) => {
    const node = userNodes[id];
    if (!node) return;
    const name = (rawName || '').trim();
    if (!name) return;
    // If we stripped .pde for display, put it back on save so on-disk naming
    // stays canonical. Only do this for existing .pde files so the user can
    // still rename a file to a different extension (e.g. "notes.txt").
    const desired = node.type === 'file' && /\.pde$/i.test(node.name) && !/\.[a-z0-9]+$/i.test(name)
      ? `${name}.pde`
      : name;
    if (desired === node.name) return;
    const finalName = nextUserName(
      Object.fromEntries(Object.entries(userNodes).filter(([k]) => k !== id)),
      node.parentId, desired
    );

    // Sketch-folder convention: if you rename a folder, any child .pde that
    // shared the folder's old name should follow along. This keeps the
    // Processing "folder == sketch" identity intact.
    let extraUpdates = {};
    if (node.type === 'folder') {
      const oldPde = `${node.name}.pde`;
      for (const child of Object.values(userNodes)) {
        if (child.parentId === id && child.type === 'file' && child.name === oldPde) {
          // finalName may have a numeric suffix from collision-nudging, but
          // that's exactly what we want the child to mirror.
          const newChildName = `${finalName}.pde`;
          // Guard against collision with other siblings the new name might hit.
          const safeChildName = nextUserName(
            Object.fromEntries(
              Object.entries(userNodes)
                .filter(([k]) => k !== child.id)
            ),
            id, newChildName
          );
          extraUpdates[child.id] = { ...child, name: safeChildName };
        }
      }
    }

    setUserNodes(prev => ({
      ...prev,
      [id]: { ...prev[id], name: finalName },
      ...extraUpdates
    }));
  }, [userNodes]);

  const onCodeChange = useCallback((v) => {
    setBuffers(prev => ({ ...prev, [activeId]: v }));
    if (activeId === 'playground') {
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, v);
    } else if (userNodes[activeId]) {
      setUserNodes(prev => ({
        ...prev,
        [activeId]: { ...prev[activeId], content: v }
      }));
    }
  }, [activeId, userNodes]);

  const runSketch = useCallback(() => {
    setError(null);
    if (p5Instance.current) {
      p5Instance.current.remove();
      p5Instance.current = null;
    }
    if (!window.p5 || !canvasRef.current) return;
    try {
      const jsCode = transpile(code);
      let wrapped = jsCode;
      for (const h of P5_HOOKS) {
        wrapped = wrapped.replace(
          new RegExp(`function\\s+${h}\\s*\\(`, 'g'),
          `p.${h} = function(`
        );
      }
      p5Instance.current = new window.p5((p) => {
        new Function('p', `with (p) { ${wrapped} }`)(p);
      }, canvasRef.current);
    } catch (err) {
      console.error('Sketch error:', err);
      setError(err.message);
    }
  }, [code]);

  useEffect(() => {
    if (runTimerRef.current) clearTimeout(runTimerRef.current);
    runTimerRef.current = setTimeout(runSketch, 150);
    return () => clearTimeout(runTimerRef.current);
  }, [runSketch]);

  useEffect(() => () => { if (p5Instance.current) p5Instance.current.remove(); }, []);

  const handleRun = useCallback(() => {
    if (runningTimerRef.current) clearTimeout(runningTimerRef.current);
    setRunning(true);
    runSketch();
    runningTimerRef.current = setTimeout(() => setRunning(false), 650);
  }, [runSketch]);

  const resetCurrent = () => {
    if (isPlayground) {
      localStorage.removeItem(PLAYGROUND_STORAGE_KEY);
      setBuffers(prev => ({ ...prev, playground: sketches.playground }));
    } else if (isUserFile) {
      // Reset a user file back to the blank template.
      setBuffers(prev => ({ ...prev, [activeId]: BLANK_SKETCH }));
      setUserNodes(prev => ({
        ...prev,
        [activeId]: { ...prev[activeId], content: BLANK_SKETCH }
      }));
    } else {
      setBuffers(prev => ({ ...prev, [activeId]: sketches[activeId] }));
    }
  };

  const downloadSketch = () => {
    let slug = activeId || 'sketch';
    if (isUserFile) slug = userNodes[activeId].name.replace(/\.[^.]+$/, '');
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.pde`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadSketch = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      // Upload creates a NEW user file so the imported code doesn't stomp the
      // playground. Keeps intent obvious: imported sketch shows up in MY FILES.
      const finalName = nextUserName(userNodes, 'root', file.name || 'uploaded.pde');
      const id = makeId('uf');
      setUserNodes(prev => ({
        ...prev,
        [id]: { id, type: 'file', name: finalName, parentId: 'root', content: text }
      }));
      setBuffers(prev => ({ ...prev, [id]: text }));
      setTabs(prev => ({
        ids: prev.ids.includes(id) ? prev.ids : [...prev.ids, id],
        active: id
      }));
      setSidebarTab('files');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const gotoRelative = (delta) => {
    if (isPlayground || isUserFile) {
      openTab(orderedIds[0]);
      return;
    }
    const idx = orderedIds.indexOf(activeId);
    if (idx === -1) return;
    const next = orderedIds[Math.max(0, Math.min(orderedIds.length - 1, idx + delta))];
    openTab(next);
  };

  const tabLabelFor = (id) => {
    if (userNodes[id]) return displayFileName(userNodes[id].name);
    return t.sections[id] || id;
  };

  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'flex', flexDirection: 'column',
      background: c.bg, color: c.text, overflow: 'hidden',
      fontFamily: 'Inter, sans-serif'
    }}>
      <Header
        theme={themeName} setTheme={setThemeName}
        lang={lang} setLang={setLang}
        t={t} c={c}
      />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
        <Sidebar
          t={t} c={c}
          collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed}
          tab={sidebarTab} setTab={setSidebarTab}
          activeId={activeId}
          onOpen={openTab}
          visited={visited}
          orderedIds={orderedIds}
          width={sidebarW}
          onToggleDone={toggleDone}
          userNodes={userNodes}
          onCreateNode={createUserNode}
          onDeleteNode={deleteUserNode}
          onRenameNode={renameUserNode}
          onMoveNode={moveUserNode}
        />
        {!sidebarCollapsed && (
          <ResizeHandle
            direction="vertical" t={c}
            onDrag={(delta) => setSidebarW(w => Math.max(210, Math.min(380, w + delta)))}
          />
        )}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
          <CodeEditor
            t={t} c={c}
            code={code} onCodeChange={onCodeChange}
            fontSize={fontSize}
            tabs={tabs.ids} activeId={activeId}
            tabLabelFor={tabLabelFor}
            userNodes={userNodes}
            onFocusTab={focusTab} onCloseTab={closeTab} onNewTab={newTab}
            onRun={handleRun} onReset={resetCurrent}
            onDownload={downloadSketch} onUpload={uploadSketch}
            onPrev={() => gotoRelative(-1)} onNext={() => gotoRelative(+1)}
            error={error} running={running}
          />
        </div>
        <ResizeHandle
          direction="vertical" t={c}
          onDrag={(delta) => setRightW(w => Math.max(260, Math.min(540, w - delta)))}
        />
        <div style={{ width: rightW, flexShrink: 0, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <RightPanel
            t={t} c={c}
            canvasRef={canvasRef}
            lesson={lesson}
            sectionNum={sectionNum}
            sectionTitle={sectionTitle}
            moduleLabel={moduleLabel}
            overviewCollapsed={overviewCollapsed}
            setOverviewCollapsed={setOverviewCollapsed}
            showOverview={!isUserFile}
          />
        </div>
      </div>
    </div>
  );
}
