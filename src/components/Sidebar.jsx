import { useEffect, useRef, useState } from 'react';
import { modules } from '../i18n';
import { sectionIcons } from '../sketches';
import StatusDot from './StatusDot';
import Icon from './Icon';

// Compute the on-screen status of a lesson.
//   done   → any lesson the user has ticked off via the status dot
//   active → the current tab (and not yet ticked off)
//   next   → the first un-done lesson after the active one (linear order)
//   locked → everything further down the curriculum
// We check `done` BEFORE `active` so a ticked-off lesson keeps its green check
// even while it's the currently-open tab.
function computeStatus(id, activeId, visited, orderedIds) {
  if (visited.has(id)) return 'done';
  if (id === activeId) return 'active';
  const activeIdx = orderedIds.indexOf(activeId);
  const idx = orderedIds.indexOf(id);
  if (idx === activeIdx + 1) return 'next';
  return 'locked';
}

function CourseList({ t, c, activeId, onOpen, visited, orderedIds, onToggleDone }) {
  const [collapsedMods, setCollapsedMods] = useState({});
  const toggleMod = (id) => setCollapsedMods(p => ({ ...p, [id]: !p[id] }));

  return (
    <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 0' }}>
      {modules.map((mod, mi) => {
        const isPlayground = mod.id === 'm0';
        const collapsed = collapsedMods[mod.id];

        return (
          <div key={mod.id}>
            <div
              onClick={() => toggleMod(mod.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '14px 18px 5px', cursor: 'pointer', userSelect: 'none',
                color: c.textMuted
              }}
            >
              <span style={{
                transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s', display: 'inline-flex'
              }}>
                <Icon name="chevron-down" size={12} />
              </span>
              <div>
                <div style={{
                  fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
                  color: isPlayground ? c.textMuted : c.moduleLabel,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {isPlayground ? 'PLAYGROUND' : `MODULE ${mi}`}
                </div>
                {!isPlayground && (
                  <div style={{
                    fontSize: 9, fontWeight: 600, letterSpacing: '0.07em',
                    color: c.textMuted, fontFamily: 'Inter, sans-serif', marginTop: 1,
                    textTransform: 'uppercase'
                  }}>{t.modules[mod.id]}</div>
                )}
              </div>
            </div>

            {!collapsed && mod.sectionIds.map(id => {
              const isActive = id === activeId;
              const status = isPlayground
                ? 'active' // playground is a sandbox — always bright
                : computeStatus(id, activeId, visited, orderedIds);

              const locked = status === 'locked';

              return (
                <div
                  key={id}
                  onClick={() => onOpen(id)}
                  className="sb-item"
                  data-active={isActive || undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    padding: isPlayground ? '7px 18px' : '6px 18px 6px 28px',
                    cursor: 'pointer',
                    background: isActive ? c.activeRow : 'transparent',
                    borderLeft: isActive
                      ? `2px solid ${c.activeRowBorder}`
                      : '2px solid transparent',
                    transition: 'background 0.15s',
                    ['--hover-bg']: c.panelHover
                  }}
                >
                  {isPlayground ? (
                    <span style={{ color: c.accent, width: 14, display: 'inline-flex', justifyContent: 'center' }}>
                      <Icon name="edit" size={13} />
                    </span>
                  ) : (
                    <StatusDot
                      status={status}
                      t={c}
                      onToggle={() => onToggleDone(id)}
                    />
                  )}
                  <span style={{
                    fontSize: 12, fontFamily: 'Inter, sans-serif',
                    color: isActive ? c.text : locked ? c.textMuted : c.text,
                    fontWeight: isActive ? 600 : 400,
                    opacity: locked ? 0.65 : 1,
                    display: 'flex', alignItems: 'center', gap: 4,
                    flex: 1, minWidth: 0
                  }}>
                    {!isPlayground && (
                      <span style={{
                        fontSize: 10.5, color: c.textMuted, marginRight: 3,
                        fontVariantNumeric: 'tabular-nums'
                      }}>
                        {`${mi}.${mod.sectionIds.indexOf(id) + 1}`}
                      </span>
                    )}
                    <span style={{ marginRight: 4 }}>{sectionIcons[id]}</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {t.sections[id]}
                    </span>
                  </span>
                  {isActive && !isPlayground && (
                    <span style={{
                      marginLeft: 'auto', fontSize: 9, fontWeight: 700,
                      letterSpacing: '0.05em',
                      color: c.accent, background: c.accentDim,
                      border: `1px solid ${c.accentBorder}`,
                      padding: '2px 6px', borderRadius: 4, flexShrink: 0
                    }}>NOW</span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
      <div style={{ height: 32 }} />
    </div>
  );
}

// Inline input used for both "create new" (pending rows) and "rename".
// Enter confirms, Escape cancels, blur confirms (matching VS Code).
function InlineInput({ c, initial, onCommit, onCancel, placeholder }) {
  const ref = useRef(null);
  const [value, setValue] = useState(initial || '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.focus();
    // Select the name stem (before the extension) so typing replaces it cleanly
    const dot = el.value.lastIndexOf('.');
    if (dot > 0) el.setSelectionRange(0, dot);
    else el.select();
  }, []);

  return (
    <input
      ref={ref}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.key === 'Enter') { e.preventDefault(); onCommit(value); }
        else if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
      }}
      onBlur={() => onCommit(value)}
      style={{
        flex: 1, minWidth: 0,
        fontSize: 12, fontFamily: '"JetBrains Mono", monospace',
        color: c.text,
        background: c.editorBg,
        border: `1px solid ${c.accentBorder}`,
        borderRadius: 4,
        padding: '2px 6px',
        outline: 'none'
      }}
    />
  );
}

// A single row in the user file tree. Handles rename-in-place and
// delete-confirm-in-place. For folders it also exposes +file / +folder
// buttons on hover so users can nest.
function FileNode({
  node, depth, c, activeId, onOpen, onToggle,
  deletable,
  editingId, setEditingId,
  confirmDeleteId, setConfirmDeleteId,
  onStartCreate, onRename, onDelete,
  childrenNodes, pendingChild
}) {
  const isFolder = node.type === 'folder';
  const id = isFolder ? node.id : node.fileId;
  const isEditing = editingId === id;
  const isConfirming = confirmDeleteId === id;

  const rowPadding = isFolder
    ? `5px 10px 5px ${10 + depth * 14}px`
    : `5px 10px 5px ${10 + (depth + 1) * 14}px`;

  const isActive = !isFolder && node.fileId === activeId;

  const handleRowClick = () => {
    if (isEditing || isConfirming) return;
    if (isFolder) onToggle(node.id);
    else onOpen(node.fileId);
  };

  const nameLabel = (
    <span
      style={{
        fontSize: 12,
        color: isActive ? c.text : (isFolder ? c.text : c.textMuted),
        fontFamily: isFolder ? 'Inter, sans-serif' : '"JetBrains Mono", monospace',
        fontWeight: isActive ? 600 : 400,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        flex: 1, minWidth: 0
      }}
      onDoubleClick={deletable ? (e) => { e.stopPropagation(); setEditingId(id); } : undefined}
    >
      {node.name}
    </span>
  );

  const row = (
    <div
      onClick={handleRowClick}
      className="sb-item"
      data-active={isActive || undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: rowPadding,
        cursor: isEditing ? 'text' : 'pointer',
        background: isConfirming
          ? 'rgba(239, 68, 68, 0.12)'
          : isActive ? c.activeRow : 'transparent',
        borderLeft: isActive && !isFolder ? `2px solid ${c.accent}` : '2px solid transparent',
        ['--hover-bg']: c.panelHover
      }}
    >
      {isFolder && (
        <span style={{
          transform: node.open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s', display: 'inline-flex',
          color: c.textMuted, flexShrink: 0
        }}>
          <Icon name="chevron-right" size={12} />
        </span>
      )}
      <span style={{
        color: isFolder ? c.accent : (isActive ? c.accent : c.textMuted),
        display: 'inline-flex', flexShrink: 0
      }}>
        <Icon name={isFolder ? 'folder' : 'file-text'} size={isFolder ? 14 : 13} />
      </span>

      {isEditing ? (
        <InlineInput
          c={c}
          initial={node.name}
          onCommit={(v) => onRename(id, v)}
          onCancel={() => setEditingId(null)}
        />
      ) : nameLabel}

      {/* Row actions — hidden until row hover */}
      {!isEditing && deletable && (
        isConfirming ? (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(id); }}
              title="Confirm delete"
              style={{
                background: '#ef4444', border: 'none', color: 'white',
                borderRadius: 4, padding: '2px 8px', cursor: 'pointer',
                fontSize: 10.5, fontWeight: 700, letterSpacing: '0.05em',
                fontFamily: 'Inter, sans-serif', flexShrink: 0
              }}
            >DELETE</button>
            <button
              onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(null); }}
              title="Cancel"
              style={{
                background: 'none', border: `1px solid ${c.border}`, color: c.textMuted,
                borderRadius: 4, padding: '2px 6px', cursor: 'pointer',
                fontSize: 10.5, fontFamily: 'Inter, sans-serif', flexShrink: 0
              }}
            >Cancel</button>
          </>
        ) : (
          <>
            {isFolder && onStartCreate && (
              <>
                <button
                  className="sb-iconbtn file-row-action"
                  onClick={(e) => { e.stopPropagation(); onStartCreate(node.id, 'file'); }}
                  title="New file in folder"
                  aria-label="New file in folder"
                  style={iconBtn(c)}
                >
                  <Icon name="file-add" size={12} />
                </button>
                <button
                  className="sb-iconbtn file-row-action"
                  onClick={(e) => { e.stopPropagation(); onStartCreate(node.id, 'folder'); }}
                  title="New folder in folder"
                  aria-label="New folder in folder"
                  style={iconBtn(c)}
                >
                  <Icon name="folder-add" size={12} />
                </button>
              </>
            )}
            <button
              className="sb-iconbtn file-row-action"
              onClick={(e) => { e.stopPropagation(); setEditingId(id); }}
              title="Rename"
              aria-label={`Rename ${node.name}`}
              style={iconBtn(c)}
            >
              <Icon name="edit" size={12} />
            </button>
            <button
              className="sb-iconbtn file-row-action"
              onClick={(e) => { e.stopPropagation(); setConfirmDeleteId(id); }}
              title={isFolder ? 'Delete folder' : 'Delete file'}
              aria-label={`Delete ${node.name}`}
              style={{ ...iconBtn(c), ['--hover-color']: '#ef4444' }}
            >
              <Icon name="trash" size={12} />
            </button>
          </>
        )
      )}
    </div>
  );

  if (!isFolder) return row;

  return (
    <div>
      {row}
      {node.open && (
        <>
          {pendingChild && pendingChild.parentId === node.id && (
            <PendingRow
              c={c}
              depth={depth + 1}
              type={pendingChild.type}
              onCommit={pendingChild.onCommit}
              onCancel={pendingChild.onCancel}
            />
          )}
          {childrenNodes && childrenNodes.map(child => (
            <FileNode
              key={child.id}
              node={child} depth={depth + 1}
              c={c} activeId={activeId}
              onOpen={onOpen} onToggle={onToggle}
              deletable={deletable}
              editingId={editingId} setEditingId={setEditingId}
              confirmDeleteId={confirmDeleteId} setConfirmDeleteId={setConfirmDeleteId}
              onStartCreate={onStartCreate}
              onRename={onRename} onDelete={onDelete}
              childrenNodes={child.children}
              pendingChild={pendingChild}
            />
          ))}
        </>
      )}
    </div>
  );
}

// The pending "new file/folder" row — an inline input with a matching icon.
function PendingRow({ c, depth, type, onCommit, onCancel }) {
  const isFolder = type === 'folder';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: `5px 10px 5px ${10 + (depth + (isFolder ? 0 : 1)) * 14}px`,
      background: c.activeRow
    }}>
      {isFolder && (
        <span style={{ color: c.textMuted, display: 'inline-flex', flexShrink: 0 }}>
          <Icon name="chevron-right" size={12} />
        </span>
      )}
      <span style={{ color: c.accent, display: 'inline-flex', flexShrink: 0 }}>
        <Icon name={isFolder ? 'folder' : 'file-text'} size={isFolder ? 14 : 13} />
      </span>
      <InlineInput
        c={c}
        initial={isFolder ? '' : 'sketch.pde'}
        placeholder={isFolder ? 'Folder name' : 'filename.pde'}
        onCommit={onCommit}
        onCancel={onCancel}
      />
    </div>
  );
}

// Build a tree from the flat userNodes map, rooted at parentId='root'.
function buildUserTree(userNodes, openFolders) {
  const byParent = {};
  for (const n of Object.values(userNodes)) {
    (byParent[n.parentId || 'root'] ||= []).push(n);
  }
  const make = (parentId) => (byParent[parentId] || [])
    .sort((a, b) => {
      // Folders before files, then alphabetical.
      if (a.type !== b.type) return a.type === 'folder' ? -1 : 1;
      return a.name.localeCompare(b.name);
    })
    .map(n => n.type === 'folder'
      ? {
          id: n.id, type: 'folder', name: n.name,
          open: openFolders[n.id] ?? true,
          children: make(n.id)
        }
      : {
          id: `file-${n.id}`, fileId: n.id, type: 'file', name: n.name
        });
  return make('root');
}

// Build the read-only course tree — each module becomes a folder, each lesson
// becomes a .pde file.
function buildCourseTree(t, openFolders) {
  return modules.map((mod, mi) => {
    const isPlayground = mod.id === 'm0';
    const folderId = `folder-${mod.id}`;
    const name = isPlayground
      ? 'Playground'
      : `Module ${mi} – ${t.modules[mod.id]}`;
    return {
      id: folderId,
      type: 'folder',
      name,
      open: openFolders[folderId] ?? (mod.id === 'm2'),
      children: mod.sectionIds.map(id => ({
        id: `file-${id}`,
        fileId: id,
        type: 'file',
        name: `${id.replace(/\s+/g, '_').toLowerCase()}.pde`
      }))
    };
  });
}

function FileManager({
  t, c, activeId, onOpen,
  userNodes, onCreate, onDeleteNode, onRenameNode
}) {
  const [openFolders, setOpenFolders] = useState({});
  const [pending, setPending] = useState(null); // {parentId, type}
  const [editingId, setEditingId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // Any click outside the confirm row cancels the confirmation.
  useEffect(() => {
    if (!confirmDeleteId) return;
    const h = () => setConfirmDeleteId(null);
    // Attach on next tick so the initial click that opened the confirm
    // doesn't immediately dismiss it.
    const id = setTimeout(() => document.addEventListener('click', h), 0);
    return () => { clearTimeout(id); document.removeEventListener('click', h); };
  }, [confirmDeleteId]);

  const toggle = (id) => setOpenFolders(p => ({
    ...p,
    [id]: !(p[id] ?? (id === 'folder-m2'))
  }));

  const startCreate = (parentId, type) => {
    // Make sure we can see the input: if it's inside a folder, open that folder.
    if (parentId && parentId !== 'root') {
      setOpenFolders(p => ({ ...p, [parentId]: true }));
    }
    setEditingId(null);
    setConfirmDeleteId(null);
    setPending({ parentId: parentId || 'root', type });
  };

  const commitCreate = (raw) => {
    const p = pending;
    setPending(null);
    const name = (raw || '').trim();
    if (!p || !name) return;
    onCreate(p.parentId, p.type, name);
  };

  const commitRename = (id, raw) => {
    setEditingId(null);
    const name = (raw || '').trim();
    if (!name) return;
    onRenameNode(id, name);
  };

  const handleDelete = (id) => {
    setConfirmDeleteId(null);
    onDeleteNode(id);
  };

  const userTree = buildUserTree(userNodes, openFolders);
  const courseTree = buildCourseTree(t, openFolders);
  const hasUserNodes = userTree.length > 0;
  const hasRootPending = pending && pending.parentId === 'root';

  const pendingChildRender = pending && pending.parentId !== 'root' ? {
    parentId: pending.parentId,
    type: pending.type,
    onCommit: commitCreate,
    onCancel: () => setPending(null)
  } : null;

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
      <div style={{
        padding: '10px 12px 4px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
          color: c.textMuted, fontFamily: 'Inter, sans-serif'
        }}>MY FILES</span>
        <div style={{ display: 'flex', gap: 2 }}>
          <button
            onClick={() => startCreate('root', 'file')}
            title="New file"
            aria-label="New file"
            className="sb-iconbtn"
            style={iconBtn(c)}
          >
            <Icon name="file-add" size={14} />
          </button>
          <button
            onClick={() => startCreate('root', 'folder')}
            title="New folder"
            aria-label="New folder"
            className="sb-iconbtn"
            style={iconBtn(c)}
          >
            <Icon name="folder-add" size={14} />
          </button>
        </div>
      </div>

      {!hasUserNodes && !hasRootPending && (
        <div style={{
          padding: '6px 18px 14px',
          fontSize: 11.5, color: c.textMuted, fontFamily: 'Inter, sans-serif',
          lineHeight: 1.5
        }}>
          Create your own .pde sketches here. They stay in your browser.
        </div>
      )}

      {hasRootPending && (
        <PendingRow
          c={c}
          depth={0}
          type={pending.type}
          onCommit={commitCreate}
          onCancel={() => setPending(null)}
        />
      )}

      {userTree.map(node => (
        <FileNode
          key={node.id}
          node={node} depth={0}
          c={c} activeId={activeId}
          onOpen={onOpen} onToggle={toggle}
          deletable
          editingId={editingId} setEditingId={setEditingId}
          confirmDeleteId={confirmDeleteId} setConfirmDeleteId={setConfirmDeleteId}
          onStartCreate={startCreate}
          onRename={commitRename} onDelete={handleDelete}
          childrenNodes={node.children}
          pendingChild={pendingChildRender}
        />
      ))}

      <div style={{
        borderTop: `1px solid ${c.border}`, margin: '10px 0 2px'
      }} />

      <div style={{
        padding: '10px 12px 4px',
        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
        color: c.textMuted, fontFamily: 'Inter, sans-serif'
      }}>COURSE FILES</div>

      {courseTree.map(node => (
        <FileNode
          key={node.id}
          node={node} depth={0}
          c={c} activeId={activeId}
          onOpen={onOpen} onToggle={toggle}
          deletable={false}
          editingId={null} setEditingId={() => {}}
          confirmDeleteId={null} setConfirmDeleteId={() => {}}
          childrenNodes={node.children}
        />
      ))}
      <div style={{ height: 24 }} />
    </div>
  );
}

function iconBtn(c) {
  return {
    background: 'none', border: 'none', cursor: 'pointer',
    padding: 4, borderRadius: 4,
    color: c.textMuted,
    display: 'flex', alignItems: 'center',
    ['--hover-color']: c.accent
  };
}

export default function Sidebar({
  t, c, collapsed, setCollapsed, tab, setTab,
  activeId, onOpen, visited, orderedIds, width,
  onToggleDone,
  userNodes, onCreateNode, onDeleteNode, onRenameNode
}) {
  if (collapsed) {
    return (
      <div style={{
        width: 40, background: c.panel,
        borderRight: `1px solid ${c.border}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '10px 0', gap: 4, flexShrink: 0,
        transition: 'width 0.25s'
      }}>
        <button
          onClick={() => setCollapsed(false)}
          title="Expand sidebar"
          aria-label="Expand sidebar"
          style={{
            background: c.accentDim, border: `1px solid ${c.accentBorder}`,
            borderRadius: 6, color: c.accent, cursor: 'pointer', padding: 5,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 4
          }}
        >
          <Icon name="chevron-right" size={16} />
        </button>
        {[
          { id: 'courses', title: t.tabCourses, icon: 'book-open' },
          { id: 'files', title: t.tabFiles, icon: 'folder' }
        ].map(tb => (
          <button
            key={tb.id}
            title={tb.title}
            onClick={() => { setTab(tb.id); setCollapsed(false); }}
            className="sb-iconbtn"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 7, borderRadius: 6,
              color: tab === tb.id ? c.accent : c.textMuted,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              ['--hover-color']: c.text
            }}
          >
            <Icon name={tb.icon} size={16} />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{
      width, background: c.panel,
      borderRight: `1px solid ${c.border}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      transition: 'width 0.25s', minWidth: 0
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', padding: '0 8px',
        borderBottom: `1px solid ${c.border}`, height: 42, gap: 4, flexShrink: 0
      }}>
        <div style={{ display: 'flex', flex: 1, gap: 2 }}>
          {[
            { id: 'courses', label: t.tabCourses, icon: 'book-open' },
            { id: 'files', label: t.tabFiles, icon: 'folder' }
          ].map(tb => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              style={{
                background: tab === tb.id ? c.accentDim : 'none',
                border: `1px solid ${tab === tb.id ? c.accentBorder : 'transparent'}`,
                borderRadius: 6,
                color: tab === tb.id ? c.accent : c.textMuted,
                fontSize: 11.5, fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer', padding: '4px 10px',
                transition: 'all 0.15s', letterSpacing: '0.01em',
                display: 'flex', alignItems: 'center', gap: 5
              }}
            >
              <Icon name={tb.icon} size={12} />
              {tb.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCollapsed(true)}
          title="Collapse sidebar"
          aria-label="Collapse sidebar"
          className="sb-iconbtn"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 4, borderRadius: 5, color: c.textMuted,
            display: 'flex', alignItems: 'center',
            ['--hover-color']: c.text
          }}
        >
          <Icon name="chevron-left" size={14} />
        </button>
      </div>

      {tab === 'courses'
        ? <CourseList
            t={t} c={c} activeId={activeId} onOpen={onOpen}
            visited={visited} orderedIds={orderedIds}
            onToggleDone={onToggleDone}
          />
        : <FileManager
            t={t} c={c} activeId={activeId} onOpen={onOpen}
            userNodes={userNodes}
            onCreate={onCreateNode}
            onDeleteNode={onDeleteNode}
            onRenameNode={onRenameNode}
          />
      }
    </div>
  );
}
