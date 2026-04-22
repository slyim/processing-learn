// Transpile Processing (Java-flavored) source to p5.js JavaScript.
// Handles the common beginner subset: void functions, typed variables,
// typed parameters, size() -> createCanvas(), classes with Java-style
// constructors, and cast expressions like `(float) x`.

const TYPES = 'int|float|double|boolean|char|String|color|PVector|PImage|long|byte|short';
const TYPE_RE = new RegExp(`\\b(?:${TYPES})(?:\\[\\])?\\b`, 'g');

export function transpile(src) {
  let out = src;

  // Strip cast expressions: `(float) x` -> ` x`
  out = out.replace(new RegExp(`\\((?:${TYPES})\\)\\s*`, 'g'), '');

  // size(w, h) -> createCanvas(w, h)
  out = out.replace(/\bsize\s*\(/g, 'createCanvas(');

  // final keyword removed
  out = out.replace(/\bfinal\s+/g, '');

  // Rewrite classes: Java-style constructors `ClassName(` -> `constructor(`
  out = out.replace(/class\s+(\w+)\s*\{([\s\S]*?)\n\}/g, (_m, name, body) => {
    const ctorRe = new RegExp(`(^|\\n)(\\s*)${name}\\s*\\(`, 'g');
    const newBody = body.replace(ctorRe, '$1$2constructor(');
    return `class ${name} {${newBody}\n}`;
  });

  // void funcName(  at line start -> function funcName(
  out = out.replace(/(^|\n)([ \t]*)void[ \t]+(\w+)[ \t]*\(/g, (_m, lead, indent, name) => {
    return indent.length === 0 ? `${lead}function ${name}(` : `${lead}${indent}${name}(`;
  });

  // Variable declarations at statement position: `int x = 5;` -> `let x = 5;`
  out = out.replace(
    new RegExp(`(^|\\n)([ \\t]*)(?:${TYPES})(?:\\[\\])?[ \\t]+(?=\\w)`, 'g'),
    '$1$2let '
  );

  // for (int i = 0; ...) -> for (let i = 0; ...)
  out = out.replace(
    new RegExp(`for\\s*\\(\\s*(?:${TYPES})(?:\\[\\])?\\s+`, 'g'),
    'for (let '
  );

  // Java-style enhanced for: `for (Type name : list)` -> `for (let name of list)`
  out = out.replace(/for\s*\(\s*\w+\s+(\w+)\s*:\s*/g, 'for (let $1 of ');

  // Remaining type annotations (function/method parameter types) -> strip
  out = out.replace(TYPE_RE, '');
  // Clean up double-spaces left by stripped types inside parens
  out = out.replace(/\(\s+/g, '(').replace(/,\s{2,}/g, ', ');

  return out;
}
