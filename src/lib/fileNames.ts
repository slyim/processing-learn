// Helpers for displaying and normalizing user filenames.
//
// The IDE shows the full filename including .pde — matches Processing's
// convention and makes it obvious which files are sketches vs. assets.

export function displayFileName(name: string | undefined): string {
  return name || '';
}

// Inverse: if the user typed a bare name, append .pde so storage stays
// consistent. Pre-existing extensions (.pde, .txt, …) are kept.
export function storageFileName(name: string | undefined): string {
  const trimmed = (name || '').trim();
  if (!trimmed) return '';
  if (/\.[a-z0-9]+$/i.test(trimmed)) return trimmed;
  return `${trimmed}.pde`;
}

// True when the filename refers to a Processing sketch (the IDE's native type).
export function isPdeFile(name: string | undefined): boolean {
  return /\.pde$/i.test(name || '');
}
