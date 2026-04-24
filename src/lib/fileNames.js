// Helpers for displaying and normalizing user filenames.
//
// The IDE only supports Processing sketches, so showing ".pde" everywhere just
// adds noise. Storage keeps the extension so downloads still produce .pde
// files; the UI strips it on display.

// Strip the trailing .pde (case-insensitive). Leaves other extensions
// (e.g. "notes.txt") untouched.
export function displayFileName(name) {
  if (!name) return '';
  return name.replace(/\.pde$/i, '');
}

// Inverse: if the user typed a bare name, append .pde so storage stays
// consistent. Pre-existing extensions (.pde, .txt, …) are kept.
export function storageFileName(name) {
  const trimmed = (name || '').trim();
  if (!trimmed) return '';
  if (/\.[a-z0-9]+$/i.test(trimmed)) return trimmed;
  return `${trimmed}.pde`;
}

// True when the filename refers to a Processing sketch (the IDE's native type).
export function isPdeFile(name) {
  return /\.pde$/i.test(name || '');
}
