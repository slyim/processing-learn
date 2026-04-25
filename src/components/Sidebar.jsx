import { useEffect, useRef, useState } from 'react';
import { modules } from '../i18n';
import { sectionIcons } from '../sketches';
import { displayFileName } from '../lib/fileNames';
import StatusDot from './StatusDot';
import Icon, { PdeIcon, DataFolderIcon } from './Icon';

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

function CourseList({ t, c, activeId, onOpen, visited, orderedIds, onToggleDone, onPrev, onNext }) {
  const [collapsedMods, setCollapsedMods] = useState({});
  const toggleMod = (id) => setCollapsedMods(p => ({ ...p, [id]: !p[id] }));

  const navIdx = orderedIds.indexOf(activeId);
  const prevDisabled = navIdx <= 0;
  const nextDisabled = navIdx === -1 || navIdx >= orderedIds.length - 1;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', gap: 6,
        padding: '10px 12px',
        borderBottom: `1px solid ${c.border}`, flexShrink: 0
      }}>
        <button
          onClick={onPrev}
          disabled={prevDisabled}
          title={t.prevLesson || 'Previous'}
          aria-label={t.prevLesson || 'Previous'}
          className="btn-ghost"
          style={lessonNavBtn(c, prevDisabled)}
        >
          <Icon name="arrow-back" size={13} />
          <span>{t.prevLesson || 'Previous'}</span>
        </button>
        <button
          onClick={onNext}
          disabled={nextDisabled}
          title={t.nextLesson || 'Next'}
          aria-label={t.nextLesson || 'Next'}
          className="btn-ghost"
          style={lessonNavBtn(c, nextDisabled)}
        >
          <span>{t.nextLesson || 'Next'}</span>
          <Icon name="arrow-forward" size={13} />
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 0' }}>
        {modules.map((mod, mi) => {
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
                  color: c.moduleLabel,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {`MODULE ${mi + 1}`}
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.07em',
                  color: c.textMuted, fontFamily: 'Inter, sans-serif', marginTop: 1,
                  textTransform: 'uppercase'
                }}>{t.modules[mod.id]}</div>
              </div>
            </div>

            {!collapsed && mod.sectionIds.map(id => {
              const isActive = id === activeId;
              const status = computeStatus(id, activeId, visited, orderedIds);
              const isDone = status === 'done';
              const borderColor = isActive ? c.activeRowBorder : 'transparent';

              return (
                <div
                  key={id}
                  onClick={() => onOpen(id)}
                  className="sb-item"
                  data-active={isActive || undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    padding: '6px 18px 6px 28px',
                    cursor: 'pointer',
                    background: isActive ? c.activeRow : 'transparent',
                    borderLeft: `2px solid ${borderColor}`,
                    transition: 'background 0.15s',
                    ['--hover-bg']: c.panelHover
                  }}
                >
                  <StatusDot
                    status={status}
                    t={c}
                    onToggle={() => onToggleDone(id)}
                  />
                  <span style={{
                    fontSize: 12, fontFamily: 'Inter, sans-serif',
                    color: isActive
                      ? c.text
                      : isDone ? c.textMuted : c.text,
                    fontWeight: isActive ? 600 : 400,
                    opacity: isDone ? 0.55 : 1,
                    display: 'flex', alignItems: 'center', gap: 4,
                    flex: 1, minWidth: 0
                  }}>
                    <span style={{
                      fontSize: 10.5, color: c.textMuted, marginRight: 3,
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      {`${mi + 1}.${mod.sectionIds.indexOf(id) + 1}`}
                    </span>
                    <span style={{ marginRight: 4 }}>{sectionIcons[id]}</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {t.sections[id]}
                    </span>
                  </span>
                  {isActive && (
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
    </div>
  );
}

function lessonNavBtn(c, disabled) {
  return {
    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
    background: disabled ? 'transparent' : c.resetBg,
    color: disabled ? c.textDim : c.text,
    border: `1px solid ${disabled ? c.borderLight : c.resetBorder}`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '5px 10px', borderRadius: 6,
    fontSize: 11.5, fontWeight: 600,
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.15s',
    ['--hover-border']: c.accentBorder
  };
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

// A single row in the user file tree. Handles rename-in-place,
// delete-confirm-in-place, and drag-and-drop moves.
// For folders it also exposes +file / +folder buttons on hover so users
// can nest, and acts as a drop target for reorganization.
function FileNode({
  node, depth, c, activeId, onOpen, onToggle,
  deletable,
  editingId, setEditingId,
  confirmDeleteId, setConfirmDeleteId,
  onStartCreate, onRename, onDelete,
  childrenNodes, pendingChild,
  draggedId, setDraggedId,
  dragOverId, setDragOverId,
  onDropTo
}) {
  const isFolder = node.type === 'folder';
  const id = isFolder ? node.id : node.fileId;
  const isEditing = editingId === id;
  const isConfirming = confirmDeleteId === id;
  const isBeingDragged = deletable && draggedId === id;
  const isDropTarget = deletable && isFolder && dragOverId === node.id;

  const rowPadding = isFolder
    ? `5px 10px 5px ${10 + depth * 14}px`
    : `5px 10px 5px ${10 + (depth + 1) * 14}px`;

  const isActive = !isFolder && node.fileId === activeId;

  const handleRowClick = () => {
    if (isEditing || isConfirming) return;
    if (isFolder) onToggle(node.id);
    else onOpen(node.fileId);
  };

  // Drag handlers — only enabled on user nodes (deletable).
  const dragProps = deletable ? {
    draggable: !isEditing,
    onDragStart: (e) => {
      e.stopPropagation();
      e.dataTransfer.effectAllowed = 'move';
      // Some browsers refuse to start a drag without data on the transfer.
      try { e.dataTransfer.setData('text/plain', id); } catch { /* ignore */ }
      setDraggedId(id);
    },
    onDragEnd: () => {
      setDraggedId(null);
      setDragOverId(null);
    }
  } : {};

  // Drop handlers — user folders become drop targets. Hovering a folder
  // while dragging auto-opens it so you can drop deeper.
  const folderDropProps = (deletable && isFolder) ? {
    onDragOver: (e) => {
      if (!draggedId || draggedId === node.id) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'move';
      if (dragOverId !== node.id) setDragOverId(node.id);
    },
    onDragLeave: (e) => {
      // Only clear if we're actually leaving this row (not entering a child).
      if (e.currentTarget.contains(e.relatedTarget)) return;
      if (dragOverId === node.id) setDragOverId(null);
    },
    onDrop: (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (draggedId && draggedId !== node.id) {
        onDropTo(node.id);
      }
      setDraggedId(null);
      setDragOverId(null);
    }
  } : {};

  // Icon choice:
  //   folder named "data" → data-stack glyph (Processing's sketch-asset folder)
  //   any other folder    → plain folder
  //   .pde file           → the blue "P" tile
  //   other files         → generic text document
  const isDataFolder = isFolder && /^data$/i.test(node.name);
  const isPde = !isFolder && /\.pde$/i.test(node.name);

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
      {isPde ? displayFileName(node.name) : node.name}
    </span>
  );

  const row = (
    <div
      onClick={handleRowClick}
      className="sb-item"
      data-active={isActive || undefined}
      {...dragProps}
      {...folderDropProps}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: rowPadding,
        cursor: isEditing ? 'text' : (deletable ? 'grab' : 'pointer'),
        background: isConfirming
          ? 'rgba(239, 68, 68, 0.12)'
          : isDropTarget
            ? c.accentDim
            : isActive ? c.activeRow : 'transparent',
        borderLeft: isDropTarget
          ? `2px solid ${c.accent}`
          : (isActive && !isFolder ? `2px solid ${c.accent}` : '2px solid transparent'),
        opacity: isBeingDragged ? 0.4 : 1,
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
        {isDataFolder
          ? <DataFolderIcon size={14} />
          : isPde
            ? <PdeIcon size={13} />
            : <Icon name={isFolder ? 'folder' : 'file-text'} size={isFolder ? 14 : 13} />}
      </span>

      {isEditing ? (
        <InlineInput
          c={c}
          initial={isPde ? displayFileName(node.name) : node.name}
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
              draggedId={draggedId} setDraggedId={setDraggedId}
              dragOverId={dragOverId} setDragOverId={setDragOverId}
              onDropTo={onDropTo}
            />
          ))}
        </>
      )}
    </div>
  );
}

// The pending "new file/folder/sketch" row — an inline input with a matching icon.
function PendingRow({ c, depth, type, onCommit, onCancel }) {
  const isFolder = type === 'folder' || type === 'sketch';
  const isSketch = type === 'sketch';
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
        {isSketch
          ? <PdeIcon size={13} />
          : <Icon name={isFolder ? 'folder' : 'file-text'} size={isFolder ? 14 : 13} />}
      </span>
      <InlineInput
        c={c}
        initial=""
        placeholder={
          isSketch ? 'Sketch name'
          : isFolder ? 'Folder name'
          : 'Filename'
        }
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

function FileManager({
  c, activeId, onOpen,
  userNodes, onCreate, onDeleteNode, onRenameNode, onMoveNode
}) {
  const [openFolders, setOpenFolders] = useState({});
  const [pending, setPending] = useState(null); // {parentId, type}
  const [editingId, setEditingId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);
  const [rootDragOver, setRootDragOver] = useState(false);

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
    [id]: !(p[id] ?? true) // default folders open so newly created items are visible
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

  const handleDropTo = (parentId) => {
    if (!draggedId || !onMoveNode) return;
    onMoveNode(draggedId, parentId || 'root');
    setDraggedId(null);
    setDragOverId(null);
    setRootDragOver(false);
    // Make sure the destination folder is visible so the move is obvious.
    if (parentId && parentId !== 'root') {
      setOpenFolders(p => ({ ...p, [parentId]: true }));
    }
  };

  const userTree = buildUserTree(userNodes, openFolders);
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
          {/* Three creation actions, each with a distinct purpose:
              - New sketch: folder + matching .pde (the real-Processing layout)
              - New file:   a loose file (e.g. notes.txt, a scratch .pde)
              - New folder: empty folder
              Same distinction holds for the per-row hover actions below. */}
          <button
            onClick={() => startCreate('root', 'sketch')}
            title="New sketch (folder + matching .pde)"
            aria-label="New sketch"
            className="sb-iconbtn"
            style={{ ...iconBtn(c), color: c.accent }}
          >
            <PdeIcon size={14} />
          </button>
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
          draggedId={draggedId} setDraggedId={setDraggedId}
          dragOverId={dragOverId} setDragOverId={setDragOverId}
          onDropTo={handleDropTo}
        />
      ))}

      {/* Root drop zone — catches drops that aren't on a folder so users can
          move items back out of nested folders. Only "armed" while dragging. */}
      {draggedId && userNodes[draggedId]?.parentId !== 'root' && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (!rootDragOver) setRootDragOver(true);
          }}
          onDragLeave={() => setRootDragOver(false)}
          onDrop={(e) => { e.preventDefault(); handleDropTo('root'); }}
          style={{
            margin: '4px 10px 0',
            padding: '10px 12px',
            border: `1.5px dashed ${rootDragOver ? c.accent : c.border}`,
            borderRadius: 6,
            background: rootDragOver ? c.accentDim : 'transparent',
            fontSize: 11, color: c.textMuted,
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            pointerEvents: 'auto'
          }}
        >
          Drop here to move to MY FILES root
        </div>
      )}

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
  userNodes, onCreateNode, onDeleteNode, onRenameNode, onMoveNode,
  onPrevLesson, onNextLesson
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
            background: 'none', border: `1px solid ${c.border}`, cursor: 'pointer',
            padding: '6px 8px', borderRadius: 6, color: c.textMuted,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, minWidth: 30, minHeight: 28,
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
            onPrev={onPrevLesson} onNext={onNextLesson}
          />
        : <FileManager
            c={c} activeId={activeId} onOpen={onOpen}
            userNodes={userNodes}
            onCreate={onCreateNode}
            onDeleteNode={onDeleteNode}
            onRenameNode={onRenameNode}
            onMoveNode={onMoveNode}
          />
      }
    </div>
  );
}
