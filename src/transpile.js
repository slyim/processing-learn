// Transpile Processing (Java-flavored) source to p5.js JavaScript.
//
// Scope: the common Processing beginner/intermediate subset — void + typed-return
// functions, typed variables and parameters, size() → createCanvas(), classes
// with Java-style constructors, cast expressions, Java arrays (new Type[N] and
// {literal, ...}), println/print aliases, and enhanced-for loops.
//
// Not handled: generic types (<T>), interfaces, lambdas, try/catch on Java
// exceptions, operator overloading, and Processing APIs with no p5.js equivalent.
// The transpile step is string-based — it does NOT protect identifiers that
// appear inside string literals. Keep this in mind for edge cases.

const TYPE_LIST = ['int', 'float', 'double', 'boolean', 'char', 'String', 'color', 'PVector', 'PImage', 'PFont', 'PShape', 'long', 'byte', 'short', 'void'];
const NUMERIC = new Set(['int', 'float', 'double', 'long', 'byte', 'short', 'color']);
const TYPES = TYPE_LIST.join('|');
const ARRAY_ALLOC = new RegExp(`\\bnew\\s+(${TYPES})\\s*\\[([^\\]]*)\\]`, 'g');

// Hooks p5.js exposes on its instance. Used by App.jsx to bind top-level
// functions onto the p5 instance (instance mode).
export const P5_HOOKS = [
  'preload', 'setup', 'draw', 'windowResized',
  'mousePressed', 'mouseReleased', 'mouseMoved', 'mouseDragged',
  'mouseClicked', 'doubleClicked', 'mouseWheel',
  'keyPressed', 'keyReleased', 'keyTyped',
  'touchStarted', 'touchMoved', 'touchEnded',
  'deviceMoved', 'deviceTurned', 'deviceShaken'
];

export function transpile(src) {
  let out = src;

  // 1. Strip access / misc modifiers. Processing rarely uses them, but pasted
  //    Java code often does.
  out = out.replace(/\b(?:public|private|protected|static|abstract|final)\s+/g, '');

  // 2. Strip primitive cast expressions: `(float) x` -> `x`. Also support
  //    `(int[]) x` for safety, even though Processing learners rarely use it.
  out = out.replace(new RegExp(`\\((?:${TYPES})(?:\\[\\])?\\)\\s*`, 'g'), '');

  // 3. size(w, h) -> createCanvas(w, h); new PVector(...) -> createVector(...)
  //    (p5.js exposes createVector; the PVector class isn't a global.)
  out = out.replace(/\bsize\s*\(/g, 'createCanvas(');
  out = out.replace(/\bnew\s+PVector\s*\(/g, 'createVector(');

  // 4. println / print → console.log. p5.js does expose print(), but the
  //    global window.print() opens a print dialog, so aliasing is safer.
  out = out.replace(/\bprintln\s*\(/g, 'console.log(');
  out = out.replace(/(?<![.\w])print\s*\(/g, 'console.log(');

  // 5. Rewrite classes: Java `ClassName(` constructor → JS `constructor(`.
  //    Non-greedy body match ends at the first newline followed by a
  //    column-zero `}` — standard style in Processing sketches.
  out = out.replace(/class\s+(\w+)(\s+extends\s+\w+)?\s*\{([\s\S]*?)\n\}/g, (_m, name, ext, body) => {
    const ctorRe = new RegExp(`(^|\\n)([ \\t]*)${name}\\s*\\(`, 'g');
    const newBody = body.replace(ctorRe, '$1$2constructor(');
    return `class ${name}${ext || ''} {${newBody}\n}`;
  });

  // 6. Java array allocation: `new int[n]` → `new Array(n).fill(0)`,
  //    `new String[n]` → `new Array(n)`, etc.
  out = out.replace(ARRAY_ALLOC, (_m, type, size) => {
    const trimmed = size.trim();
    const n = trimmed === '' ? '0' : trimmed;
    if (NUMERIC.has(type)) return `new Array(${n}).fill(0)`;
    if (type === 'boolean') return `new Array(${n}).fill(false)`;
    if (type === 'char') return `new Array(${n}).fill('')`;
    return `new Array(${n})`;
  });

  // 7. Java array literal in initializer: `int[] a = {1, 2, 3}` → `let a = [1, 2, 3]`.
  //    Must run before the generic type-stripping below so we can spot the
  //    array context and swap `{...}` → `[...]`.
  out = out.replace(
    new RegExp(`(^|\\n)([ \\t]*)(?:${TYPES})\\[\\][ \\t]+(\\w+)[ \\t]*=[ \\t]*\\{([^}]*)\\}`, 'g'),
    '$1$2let $3 = [$4]'
  );

  // 8. Function declarations at top-level or as class methods:
  //    `void foo(`, `int add(`, `String title(`, ... — distinguished from
  //    variable declarations by the trailing `(`. Top-level becomes
  //    `function foo(`; indented (class method) drops the type and keeps
  //    bare-method syntax.
  out = out.replace(
    new RegExp(`(^|\\n)([ \\t]*)(?:${TYPES})(?:\\[\\])?[ \\t]+(\\w+)[ \\t]*\\(`, 'g'),
    (_m, lead, indent, name) => indent.length === 0
      ? `${lead}function ${name}(`
      : `${lead}${indent}${name}(`
  );

  // 9. Typed variable declarations at statement position: `int x = 5;` → `let x = 5;`.
  //    Requires the type be followed by at least one whitespace and an identifier
  //    character — so it won't match `int(x)` (a cast-style Processing call).
  out = out.replace(
    new RegExp(`(^|\\n)([ \\t]*)(?:${TYPES})(?:\\[\\])?[ \\t]+(?=\\w)`, 'g'),
    '$1$2let '
  );

  // 10. for-loop init with typed counter: `for (int i = 0; ...)` → `for (let i = 0; ...)`
  out = out.replace(
    new RegExp(`for\\s*\\(\\s*(?:${TYPES})(?:\\[\\])?\\s+`, 'g'),
    'for (let '
  );

  // 11. Java enhanced for: `for (Type name : list)` → `for (let name of list)`.
  //     Keep the identifier type-agnostic so `for (Ball b : balls)` works too.
  out = out.replace(/for\s*\(\s*\w+(?:\[\])?\s+(\w+)\s*:\s*/g, 'for (let $1 of ');

  // 12. Strip remaining type annotations (function/method parameter types and
  //     stray usage). Word-boundary on the type name so we don't touch
  //     identifiers like `intro`, and a negative lookahead so we don't strip
  //     conversion calls that p5.js actually exposes as functions —
  //     `color(...)`, `int(...)`, `float(...)`, `boolean(...)`.
  out = out.replace(new RegExp(`\\b(?:${TYPES})\\b(?!\\s*\\()(?:\\[\\])?`, 'g'), '');

  // 13. Clean up whitespace left by stripped types in parameter lists and calls.
  out = out
    .replace(/\(\s+/g, '(')
    .replace(/[ \t]+\)/g, ')')
    .replace(/,\s{2,}/g, ', ');

  return out;
}
