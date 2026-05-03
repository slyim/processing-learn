import type { ModuleDef, Translations } from './types';

// Numbered course structure.
export const modules: ModuleDef[] = [
  { id: 'm1', sectionIds: ['intro', 'fundamentals', 'colors'] },
  { id: 'm2', sectionIds: ['variables', 'conditionals', 'loops', 'functions'] },
  { id: 'm3', sectionIds: ['interaction', 'keyboard'] },
  { id: 'm4', sectionIds: ['animation', 'transforms', 'trigonometry'] },
  { id: 'm5', sectionIds: ['pvector', 'particles', 'classes'] },
  { id: 'm6', sectionIds: ['noise', 'recursion', 'threed'] },
  { id: 'm7', sectionIds: ['text', 'gradient'] },
  { id: 'm8', sectionIds: ['stringBasics', 'stringOps', 'stringFormat'] },
  { id: 'm9', sectionIds: ['arrays', 'twoDArrays', 'arrayList'] },
  { id: 'm10', sectionIds: ['mapConstrain', 'lerpEasing', 'mathFuncs'] },
  { id: 'm11', sectionIds: ['imageBasics', 'imageTint'] },
  { id: 'm12', sectionIds: ['pixelArray', 'getSet', 'imageFilter'] },
  { id: 'm13', sectionIds: ['millisTime', 'dateTime'] },
  { id: 'm14', sectionIds: ['extendsClass', 'polymorphism'] },
  { id: 'm15', sectionIds: ['vertexShape', 'bezierCurve', 'customShapes'] },
  { id: 'm16', sectionIds: ['physicsGravity', 'physicsSprings', 'physicsCollision'] },
  { id: 'm17', sectionIds: ['flowField', 'gridGen', 'lSystems'] },
  { id: 'm18', sectionIds: ['pgraphics', 'blendModes'] },
  { id: 'm19', sectionIds: ['saveFrame', 'exportSequence'] },
  { id: 'm20', sectionIds: ['finalGame', 'finalArt'] }
];

// Return "2.3" style number for a lesson section.
export function sectionNumber(id: string): string {
  for (let mi = 0; mi < modules.length; mi++) {
    const idx = modules[mi].sectionIds.indexOf(id);
    if (idx !== -1) return `${mi + 1}.${idx + 1}`;
  }
  return '';
}

export function moduleNumber(id: string): string {
  const i = modules.findIndex(m => m.id === id);
  return i < 0 ? '' : String(i + 1);
}

const SHARED = {
  brand: 'YTÜ Programlama',
  repoLabel: 'GitHub',
  downloadLabel: '⬇',
  uploadLabel: '⬆'
} as const;

export const translations: Record<string, Translations> = {
  en: {
    ...SHARED,
    title: 'Processing.js Studio',
    subtitle: 'A hands-on course in creative coding · YTÜ Programlama',
    about: 'Made for YTÜ Programlama — a hands-on introduction to creative coding with Processing.',
    editor: 'CODE EDITOR',
    editorSub: 'Processing / Java',
    run: 'Run',
    reset: 'Reset',
    download: 'Download sketch',
    upload: 'Open .pde file',
    share: 'Share',
    shareCopied: 'Link copied',
    langLabel: 'Language',
    themeLabel: 'Theme',
    themeDark: 'Dark',
    themeLight: 'Light',
    courseLabel: 'COURSE',
    moduleWord: 'Module',
    lessonIntro: 'Overview',
    lessonConcepts: 'Key concepts',
    lessonTryIt: 'Try it yourself',
    playgroundBadge: 'SANDBOX',
    tabCourses: 'Courses',
    tabFiles: 'Files',
    lessonOverview: 'LESSON OVERVIEW',
    running: 'Running…',
    nothingOpen: 'Nothing is open',
    nothingOpenHint: 'Open a lesson from the Courses tab, or create a sketch in the Files tab.',
    prevLesson: 'Previous',
    nextLesson: 'Next',
    modules: {
      m1: 'Foundations',
      m2: 'Logic & Control Flow',
      m3: 'User Input',
      m4: 'Motion & Transformations',
      m5: 'Vectors & Systems',
      m6: 'Generative & Recursive',
      m7: 'Typography & Style',
      m8: 'Strings & Text Data',
      m9: 'Arrays in Depth',
      m10: 'Math Toolkit',
      m11: 'Images',
      m12: 'Pixels & Filters',
      m13: 'Time & Frames',
      m14: 'Inheritance & OOP',
      m15: 'Curves & Custom Shapes',
      m16: 'Physics Basics',
      m17: 'Generative Patterns',
      m18: 'Layers & Buffers',
      m19: 'Saving & Sharing',
      m20: 'Final Projects'
    },
    sections: {
      playground: 'Blank Sketch',
      intro: 'Your First Sketch',
      fundamentals: 'Basic Shapes',
      colors: 'Colors & Style',
      variables: 'Variables & Motion',
      conditionals: 'Conditionals',
      loops: 'Loops & Patterns',
      functions: 'Functions',
      interaction: 'Mouse Input',
      keyboard: 'Keyboard Input',
      animation: 'Animation',
      transforms: 'Transformations',
      trigonometry: 'Trigonometry',
      pvector: 'PVectors',
      particles: 'Arrays & Particles',
      classes: 'Classes (OOP)',
      noise: 'Perlin Noise',
      recursion: 'Recursion & Fractals',
      threed: '3D Graphics',
      text: 'Text & Typography',
      gradient: 'Gradients',
      stringBasics: 'String Basics',
      stringOps: 'String Operations',
      stringFormat: 'Formatting & Parsing',
      arrays: 'Array Basics',
      twoDArrays: '2D Arrays',
      arrayList: 'Dynamic Arrays',
      mapConstrain: 'Map & Constrain',
      lerpEasing: 'Lerp & Easing',
      mathFuncs: 'Math Functions',
      imageBasics: 'Loading Images',
      imageTint: 'Tint & Color',
      pixelArray: 'Pixel Array',
      getSet: 'get() & set()',
      imageFilter: 'Filters',
      millisTime: 'Time with millis()',
      dateTime: 'Date & Clock',
      extendsClass: 'Inheritance',
      polymorphism: 'Polymorphism',
      vertexShape: 'vertex() Shapes',
      bezierCurve: 'Bezier Curves',
      customShapes: 'Custom Shapes',
      physicsGravity: 'Gravity & Bounce',
      physicsSprings: 'Springs',
      physicsCollision: 'Collisions',
      flowField: 'Flow Fields',
      gridGen: 'Grid Generation',
      lSystems: 'L-Systems',
      pgraphics: 'Off-Screen Buffers',
      blendModes: 'Blend Modes',
      saveFrame: 'Saving Images',
      exportSequence: 'Frame Sequences',
      finalGame: 'Mini Game',
      finalArt: 'Generative Art'
    },
    lessons: {
      playground: {
        intro: 'A blank sketch. Write any Processing code here — the editor transpiles Processing (Java-flavored) to p5.js on the fly, so most sketches from the Processing examples will run. Use this tab to experiment with your own ideas, paste homework, or try things outside the lessons.',
        concepts: [
          'Both void setup() and function setup() are accepted.',
          'Java types (int, float, String, boolean, color, PVector) are supported as declarations and parameters.',
          'Classes with Java-style constructors are transpiled to JS classes.',
          'println() and print() are aliased to console.log().',
          'Use size(w, h) in setup() — it becomes createCanvas(w, h) under the hood.'
        ],
        tryIt: 'Paste a sketch from a Processing tutorial and press Run. If something fails to run, simplify until it does — the transpiler covers the common beginner subset.'
      },
      intro: {
        intro: 'A Processing sketch is built from two special functions: setup() runs exactly once when the program starts, and draw() runs continuously — roughly 60 times per second. Everything visual happens inside them. The pixel grid places (0,0) at the top-left and increases to the right and down.',
        concepts: [
          'size(width, height) creates your drawing area. Call it once, in setup().',
          'background(r, g, b) paints a solid color over the entire canvas.',
          'fill(r, g, b) sets the color used to fill shapes drawn after it.',
          'circle(x, y, diameter) draws a filled circle centered at (x, y).'
        ],
        tryIt: 'Change the background color, move the circle to (50, 50), and shrink its diameter to 20. What happens if you remove background() from setup()?' 
      },
      fundamentals: {
        intro: 'Processing gives you a small set of primitive shapes. Once you combine them with fill and stroke, you can compose surprisingly rich images. Coordinates are always (x, y), width/height or radii are in pixels.',
        concepts: [
          'rect(x, y, w, h) uses the top-left corner by default.',
          'circle(x, y, d) and ellipse(x, y, w, h) use the center.',
          'triangle and line take three pairs / two pairs of points.',
          'stroke() sets the outline color; noStroke() removes it. strokeWeight() sets thickness.',
          'arc(x, y, w, h, start, stop) draws a partial ellipse using radian angles.'
        ],
        tryIt: 'Recreate a simple house: a rectangle for the body, a triangle for the roof, and a small rectangle for the door. Give each its own fill.'
      },
      colors: {
        intro: 'Colors in Processing use three channels — red, green, and blue — each from 0 to 255. A fourth value called alpha controls transparency (0 = invisible, 255 = opaque). Drawing many semi-transparent shapes on top of each other creates smooth blends.',
        concepts: [
          'fill(r, g, b, a) and stroke(r, g, b, a) — alpha is optional.',
          'fill(gray) with a single value is a shortcut: 0 is black, 255 is white.',
          'Looping over x or y lets you change the color per column or row — the basis of any gradient.',
          'Overlapping shapes with low alpha produces glow and blending effects.'
        ],
        tryIt: 'Replace the solid rectangles with circles. Change the third rectangle to use alpha = 80. Can you make a vertical rainbow instead of horizontal?'
      },
      variables: {
        intro: 'A variable is a named slot that holds a value. In Processing you declare it with a type: int x = 50 holds a whole number, float y = 3.14 holds a decimal. Updating a variable every frame is how motion is created — the shape doesn\'t actually move; each frame just draws it at a slightly different position.',
        concepts: [
          'Declare outside setup() / draw() for values that persist between frames.',
          'int is whole numbers, float is decimal numbers. String is text.',
          'x = x + speed is read as: take the current x, add speed, store back into x.',
          'When x goes off-screen, reset it to wrap — the illusion of a continuous loop.'
        ],
        tryIt: 'Add a second circle that moves at a different speed. Make speed a random value between 1 and 5 (use random(1, 5) in setup()).'
      },
      conditionals: {
        intro: 'Programs make decisions using if statements. The condition inside the parentheses must evaluate to true or false. else offers an alternative path. Conditions are built from comparisons (<, >, ==, !=) and logical operators (&& for and, || for or).',
        concepts: [
          'if (condition) { ... } else { ... } — else is optional.',
          'Comparison returns a boolean: true or false.',
          'mouseX and mouseY give the cursor position in pixels.',
          'The ternary condition ? a : b is a compact if/else for expressions.'
        ],
        tryIt: 'Split the canvas into four quadrants. Each quadrant should get its own color. Hint: nest if/else, comparing both mouseX and mouseY to the center.'
      },
      loops: {
        intro: 'A for loop repeats a block of code a controlled number of times. The three parts are: initialization (start counter), condition (keep looping while true), and update (what to do each pass). Combined with trigonometry, loops become a pattern-generation engine.',
        concepts: [
          'for (int i = 0; i < n; i++) { ... } — runs n times with i = 0 … n-1.',
          'sin(angle) and cos(angle) return values between -1 and 1.',
          'Placing points by angle gives circular arrangements: (cx + cos(a) * r, cy + sin(a) * r).',
          'Nested loops produce grids: one for x, one for y.'
        ],
        tryIt: 'Change 12 to 36 for a denser ring. Add a second loop that draws smaller circles inside the first. Try mapping the radius to i for a spiral.'
      },
      functions: {
        intro: 'A function is a named, reusable chunk of code. Functions take inputs (parameters) and often return a value. Writing your own functions keeps code short and lets you think at a higher level of abstraction — "draw a star" instead of a dozen trig calls.',
        concepts: [
          'void funcName(type param, ...) declares a function that returns nothing.',
          'Parameters are local to the function; they don\'t affect the outer program.',
          'A function can be called many times with different arguments.',
          'beginShape() / endShape() let you define custom polygons from vertex() calls.'
        ],
        tryIt: 'Write a function drawFlower(x, y, petals) that uses drawStar internally but adds a central circle. Call it three times.'
      },
      interaction: {
        intro: 'Processing exposes the mouse position as built-in variables — mouseX and mouseY update every frame. Event functions like mousePressed() fire only when the event happens. This distinction between "continuous" variables and "one-shot" events is key to responsive sketches.',
        concepts: [
          'mouseX, mouseY — updated every frame, readable in draw().',
          'pmouseX, pmouseY — the previous frame\'s position; useful for drawing trails.',
          'mouseIsPressed — boolean, true while any button is down.',
          'mousePressed() — a callback, runs once at the moment of a click.'
        ],
        tryIt: 'Make the circle size grow with how fast the mouse moves. Hint: dist(pmouseX, pmouseY, mouseX, mouseY) gives movement distance per frame.'
      },
      keyboard: {
        intro: 'Keyboard input comes in two flavors: the continuous keyIsDown(KEY) check you poll from draw(), and one-shot events like keyPressed(). For smooth movement always use keyIsDown — key events only fire once per press.',
        concepts: [
          'keyIsDown(LEFT_ARROW) — true while held. Other constants: UP_ARROW, DOWN_ARROW, RIGHT_ARROW.',
          'key contains the most recent character; keyCode the numeric code.',
          'keyPressed() fires once on press, keyReleased() once on release.',
          'Constrain movement with constrain(value, min, max) to keep objects on-screen.'
        ],
        tryIt: 'Add keys A and D as alternatives to left/right. Use constrain() so the ball can\'t leave the canvas.'
      },
      animation: {
        intro: 'Smooth animation comes from smoothly changing values. frameCount starts at 0 and counts up every frame; multiplied and fed into sin() / cos() it produces oscillating values between -1 and 1. By offsetting the input per element, you get waves, chases, and phase patterns.',
        concepts: [
          'frameCount * speed controls how fast the oscillation moves.',
          'amplitude (the number you multiply sin by) is how far it swings.',
          'Adding a per-element offset (like i * 0.8) desynchronizes neighbors.',
          'frameRate(fps) lets you cap or speed up the draw loop.'
        ],
        tryIt: 'Animate the size (not just y) of each circle. Add color cycling using sin(frameCount * 0.02 + i) * 127 + 128.'
      },
      transforms: {
        intro: 'translate, rotate, and scale change the coordinate system itself rather than the shapes. That\'s powerful: you can draw "a shape" once at (0, 0) and place/orient it freely. push() saves the current coordinate state; pop() restores it — always pair them.',
        concepts: [
          'translate(x, y) moves the origin. Subsequent draws are relative to it.',
          'rotate(angle) spins the coordinate system. Angles are in radians (PI = 180°).',
          'scale(factor) zooms. scale(-1, 1) mirrors horizontally.',
          'push() / pop() isolate transforms so they don\'t leak to later code.'
        ],
        tryIt: 'Increase rotate to i * PI / 8 to double the petals. Nest another loop inside that draws smaller petals offset by angle.'
      },
      trigonometry: {
        intro: 'sin and cos are the workhorses of creative coding. They turn an angle into a smooth value that swings between -1 and 1. That alone gives you waves, orbits, pulses, easing, and most organic motion. Two rules are enough: cos gives x on the unit circle, sin gives y.',
        concepts: [
          'Radians: 0 = right, PI/2 = down, PI = left, 3*PI/2 = up. TWO_PI is one full rotation.',
          'Amplitude * sin(...) scales the wave; offset + sin(...) shifts it up/down.',
          'cos(angle) and sin(angle) with the same angle produce a circle.',
          'Frequency = how fast the input grows. High frequency = tight waves.'
        ],
        tryIt: 'Add a third wave using sin(x * 0.05 + frameCount * 0.03) — an animated wave. Make it draw in a third color.'
      },
      pvector: {
        intro: 'PVectors represent points or directions in space. They pack x, y, and z into a single object, with built-in methods for math like add(), sub(), and mult(). They make code cleaner when dealing with physics and movement.',
        concepts: [
          'PVector pos = new PVector(x, y); creates a vector.',
          'pos.add(vel) updates position using a velocity vector.',
          'PVectors can represent position, velocity, and acceleration.'
        ],
        tryIt: 'Change the velocity components or add an acceleration vector that gets added to velocity every frame.'
      },
      particles: {
        intro: 'Once you have one moving thing, a hundred is almost as easy. An array holds many items; a for loop updates each one per frame. Each particle is a small object with its own position and velocity. Emergent behavior — swarms, fields, flows — starts from this simple recipe.',
        concepts: [
          'Arrays hold many values; .push() appends; .length gives the count.',
          'Each particle needs at least position (x, y) and velocity (vx, vy).',
          'Every frame: update position by velocity, then draw.',
          'Bouncing off edges: if position exits, flip the sign of the corresponding velocity.'
        ],
        tryIt: 'Add gravity by adding 0.1 to each particle\'s vy each frame. Add friction by multiplying vx and vy by 0.99.'
      },
      classes: {
        intro: 'A class is a blueprint. It groups data (fields) and behavior (methods) into one named type. Each instance has its own copy of the data. When you have many similar things, classes replace scattered parallel arrays with a single clean object.',
        concepts: [
          'class Name { ... } defines the blueprint.',
          'A constructor with the class name runs when you write new Name(...).',
          'this.x refers to the instance\'s own field x.',
          'Methods (void update(), void show()) are functions attached to the class.'
        ],
        tryIt: 'Add a new method void highlight() that draws a ring around the ball if the mouse is within its radius. Call it from draw().'
      },
      noise: {
        intro: 'random() jumps around — useful for chaos, bad for organic motion. Perlin noise (noise()) is smooth: nearby inputs give nearby outputs. Feeding it an increasing time value t produces values that drift instead of jitter. Offset the input to create multiple independent noise streams.',
        concepts: [
          'noise(t) returns a value between 0 and 1, smooth in t.',
          'Increment t by a small amount per frame; bigger increments mean faster change.',
          'noise(x, y) or noise(x, y, t) give 2D and 3D noise — perfect for clouds and terrains.',
          'Map the output with map(value, 0, 1, low, high) to your desired range.'
        ],
        tryIt: 'Draw 20 separate circles, each using noise(t + i * 10) — they\'ll drift independently. Draw them with low alpha for a soft cloud.'
      },
      recursion: {
        intro: 'A recursive function calls itself with smaller inputs until it hits a base case. It\'s the most natural way to express self-similar forms: trees, spirals, snowflakes. Combined with transforms, a handful of lines produces shapes that would take pages of manual drawing.',
        concepts: [
          'Every recursion needs a base case — the condition that stops further calls.',
          'Each recursive call usually shrinks a parameter (length, depth) toward the base case.',
          'push() / pop() inside recursion isolates transforms per branch.',
          'Small tweaks (angle, shrink factor) transform the output dramatically.'
        ],
        tryIt: 'Change PI/6 to PI/4 for wider branches. Add a third recursive call with a smaller angle to make the tree bushier.'
      },
      threed: {
        intro: 'Processing supports 3D rendering via the WEBGL renderer. Adding a Z-axis allows you to build scenes with depth, lights, and cameras.',
        concepts: [
          'size(w, h, WEBGL) enables 3D mode.',
          'translate(x, y, z) and rotateX() / rotateY() move and orient shapes in 3D.',
          'lights() adds default shading.'
        ],
        tryIt: 'Change box() to sphere() or draw multiple boxes using a loop with varying Z translations.'
      },
      text: {
        intro: 'Text in Processing is drawn, not laid out. text(string, x, y) places a string at a coordinate using the current fill color. textSize sets point size, textAlign controls anchoring. It\'s less like HTML and more like painting letters.',
        concepts: [
          'text(str, x, y) — x, y is the baseline by default.',
          'textAlign(CENTER, CENTER) moves the anchor to the glyph\'s middle.',
          'textSize(n) sets pixel size. textFont(font) uses a loaded font.',
          'Combine with frameCount or noise to animate individual letters.'
        ],
        tryIt: 'Animate each letter of "p5.js" independently — give each a y offset based on sin(frameCount * 0.05 + i).'
      },
      gradient: {
        intro: 'There\'s no built-in gradient primitive — you build one. The trick is lerp (linear interpolation): lerp(a, b, t) returns a value partway between a and b as t slides from 0 to 1. Loop over pixel rows and lerp each color channel to paint any gradient you can imagine.',
        concepts: [
          'lerp(a, b, t) — when t is 0 you get a, when t is 1 you get b.',
          'Loop over y rows and draw a horizontal line per row for a vertical gradient.',
          'lerpColor(c1, c2, t) blends two colors directly, handier than three lerps.',
          'Layering translucent circles over a gradient creates depth and atmosphere.'
        ],
        tryIt: 'Change the gradient from vertical to diagonal — use (x + y) / (width + height) as your t. Swap the colors for sunset tones.'
      },
      stringBasics: {
        intro: 'A String is a sequence of characters in quotes. In Processing it\'s declared with String, and most operations match Java: charAt(i) reads a character, toUpperCase() / toLowerCase() change case. In this transpiled environment you read length as a property (.length) instead of a method.',
        concepts: [
          'String name = "text"; declares and initializes a string.',
          'name.length is the character count (JS-style; Java uses name.length()).',
          'name.charAt(i) returns the character at index i.',
          'name.toUpperCase() and name.toLowerCase() return new strings — originals are immutable.'
        ],
        tryIt: 'Declare a String of your name. Print its length, first character, and reversed version (split + reverse + join).'
      },
      stringOps: {
        intro: 'Strings combine with + (concatenation) and offer methods to slice, search, and replace. substring(a, b) returns the part from index a up to (but not including) b. indexOf returns the position of a substring or -1 if missing. replace swaps occurrences.',
        concepts: [
          'a + b joins two strings into a new one.',
          'str.substring(start, end) — end is exclusive.',
          'str.indexOf(sub) returns the position, or -1 if not found.',
          'str.replace(old, new) swaps occurrences.',
          'str.split(sep) returns an array of pieces.'
        ],
        tryIt: 'Take a sentence, split it into words, and draw each word on its own line.'
      },
      stringFormat: {
        intro: 'Sometimes you need numbers as strings or vice versa. Processing\'s nf() formats floats with a fixed number of digits. hex() returns a hex string. int() and float() parse a string into a number — handy for cleaning user input.',
        concepts: [
          'nf(value, digits, decimals) pads with zeros and trims decimals.',
          'hex(255) → "FF". Useful for color codes.',
          'int("17") → 17. float("2.5") → 2.5.',
          'Concatenating with "" forces a toString call: "" + 42 → "42".'
        ],
        tryIt: 'Display the current frameCount as a 6-digit string with leading zeros — use nf(frameCount, 6).'
      },
      arrays: {
        intro: 'Arrays hold a fixed number of values of the same type. Declare them with int[] or float[] and allocate with new int[N]. Access elements with [i] (zero-indexed) and use .length to get the count. They\'re your bread and butter for working with many values at once.',
        concepts: [
          'int[] heights = new int[10]; allocates 10 zeros.',
          'heights[i] reads or writes the value at index i.',
          'heights.length tells you how many elements.',
          'Indices run from 0 to length - 1. Going outside is an error.'
        ],
        tryIt: 'Replace random heights with sin-based heights so the array forms a wave: heights[i] = 120 + sin(i * 0.5) * 70.'
      },
      twoDArrays: {
        intro: 'A 2D array represents a grid: rows and columns. Java declares it as int[][] grid; here we use a JavaScript-style nested array — same shape. Access with grid[x][y]. Useful for tile maps, cellular automata, image grids, and chess boards.',
        concepts: [
          'grid[x][y] addresses cell (x, y) — two indices.',
          'Initialize with nested loops over both dimensions.',
          'Useful for tile maps, cellular automata, image grids.',
          'Memory grows quadratically: a 100x100 grid is 10,000 cells.'
        ],
        tryIt: 'Use noise(x * 0.1, y * 0.1) instead of random for cell colors. The result is smooth and coherent rather than static-y.'
      },
      arrayList: {
        intro: 'Java\'s ArrayList holds a variable-length list — items in, items out, length changes. JavaScript arrays already work this way: push adds, pop removes, splice deletes by index. The transpiler treats arrays this way out of the box.',
        concepts: [
          'arr.push(item) appends to the end.',
          'arr.pop() removes and returns the last item.',
          'arr.length grows automatically.',
          'arr.splice(i, 1) removes the item at index i.'
        ],
        tryIt: 'Add a keyPressed handler that calls words.pop() — clicking adds, key removes. Watch the list grow and shrink.'
      },
      mapConstrain: {
        intro: 'map() rescales a number from one range to another — the most useful function in creative coding. constrain() clamps a number to a min and max so it never goes out of range. Combined, they translate user input into visual properties cleanly.',
        concepts: [
          'map(value, in_min, in_max, out_min, out_max) — proportional rescaling.',
          'constrain(value, min, max) clamps to the range.',
          'map can extrapolate (go past out_min/out_max). Wrap with constrain to prevent that.',
          'They compose well: constrain(map(...), low, high).'
        ],
        tryIt: 'Map mouseY to fill alpha (0..255) and constrain to keep things visible (50..255). What changes when you remove the constrain?'
      },
      lerpEasing: {
        intro: 'Linear interpolation (lerp) blends between two values. lerp(a, b, t) returns a when t=0 and b when t=1. Calling lerp every frame with a small t produces smooth easing — the value approaches the target instead of snapping to it. Easing makes interfaces feel alive.',
        concepts: [
          'lerp(a, b, t) — t in [0, 1].',
          'Easing pattern: x = lerp(x, target, 0.1) every frame.',
          'Smaller t = slower ease. 0.5 is snappy, 0.02 is sluggish.',
          'lerpColor(c1, c2, t) interpolates colors directly.'
        ],
        tryIt: 'Replace 0.08 with 0.3 for snappy, or 0.02 for sluggish. Try lerping y to mouseY too so the ball follows the cursor smoothly.'
      },
      mathFuncs: {
        intro: 'Processing exposes the same math functions you\'d find in any language: abs, sqrt, pow, floor, ceil, round, min, max, dist. They take and return numbers, with no special Processing flavor — pure utilities you reach for constantly.',
        concepts: [
          'abs(x) — absolute value (always non-negative).',
          'sqrt(x), pow(x, n) — square root and exponent.',
          'floor(x), ceil(x), round(x) — integer conversions.',
          'dist(x1, y1, x2, y2) — euclidean distance between two points.',
          'min(a, b), max(a, b) — pick the smaller / larger.'
        ],
        tryIt: 'Write a function inside(x, y, cx, cy, r) that returns true if (x, y) is inside a circle. Use it to highlight a circle when the mouse is over it.'
      },
      imageBasics: {
        intro: 'Images are loaded with loadImage(url) in setup() and drawn with image(img, x, y). loadImage needs a real URL or path — for local files you place them in a data/ folder. This learning sandbox doesn\'t fetch images, so we simulate the look with primitives, but the API is identical.',
        concepts: [
          'PImage img = loadImage("path/to/image.png"); — load once, in setup.',
          'image(img, x, y) draws at the top-left corner (x, y).',
          'image(img, x, y, w, h) draws the image scaled.',
          'img.width and img.height tell you its dimensions.'
        ],
        tryIt: 'In a real Processing sketch, drop a PNG into the sketch folder and call loadImage. Draw it at the mouse position so it follows the cursor.'
      },
      imageTint: {
        intro: 'tint() recolors images as you draw them — every pixel\'s RGB is multiplied by the tint color. tint(255, 0, 0) makes everything red, tint(255, 100) sets transparency to ~40%. Call noTint() to disable.',
        concepts: [
          'tint(r, g, b) multiplies each channel.',
          'tint(gray, alpha) for monochrome and transparency.',
          'noTint() returns to normal drawing.',
          'Layering tinted copies of one image gives halftone and split-tone effects.'
        ],
        tryIt: 'Tint an image multiple times in a row, each at a different position and tint color, for a halftone or chromatic-aberration effect.'
      },
      pixelArray: {
        intro: 'loadPixels() copies the canvas into the pixels[] array. Each pixel takes 4 entries: R, G, B, A. After modifying, call updatePixels() to write back. This is how you build images one pixel at a time — perfect for shaders, mosaics, and effects.',
        concepts: [
          'loadPixels() refreshes the pixels[] array with current canvas state.',
          'pixels[(x + y * width) * 4 + 0] is the red channel of pixel (x, y).',
          '+1 = green, +2 = blue, +3 = alpha. Each pixel is 4 bytes.',
          'updatePixels() pushes the modified buffer back to the canvas.'
        ],
        tryIt: 'Replace the linear gradient with sin-based stripes: use sin(x * 0.1) * 127 + 128 as the red channel.'
      },
      getSet: {
        intro: 'set(x, y, color) writes a single pixel. get(x, y) reads one. They\'re slower than pixels[] for bulk work but more readable for small operations. set() doesn\'t need updatePixels() — it pushes immediately.',
        concepts: [
          'set(x, y, color(r, g, b)) sets one pixel.',
          'get(x, y) returns the color at (x, y).',
          'For loops over many pixels, use pixels[] instead — set() is per-call slow.',
          'You can mix get/set with regular drawing for hybrid effects.'
        ],
        tryIt: 'Use get(mouseX, mouseY) to sample the color under the cursor and use it as the new fill for circles drawn around it.'
      },
      imageFilter: {
        intro: 'filter() applies a built-in transformation to the entire canvas. BLUR softens, GRAY desaturates, INVERT flips colors, THRESHOLD binarizes. Each takes an optional parameter for strength. Filters happen after drawing — call them last.',
        concepts: [
          'filter(BLUR, radius) — Gaussian blur.',
          'filter(GRAY) — desaturate to grayscale.',
          'filter(INVERT) — color negative.',
          'filter(THRESHOLD, level) — high-contrast black & white.'
        ],
        tryIt: 'Apply BLUR, then GRAY, then INVERT in sequence. Swap their order — the result is different. Why?'
      },
      millisTime: {
        intro: 'millis() returns the number of milliseconds since the sketch started. It\'s the most precise way to time events independent of frameRate. While frameCount counts frames, millis counts wall-clock time.',
        concepts: [
          'millis() / 1000.0 — seconds elapsed.',
          'Use it as input to sin/cos for time-based animation that runs at the same rate regardless of FPS.',
          'Compare millis() to a stored startTime for elapsed durations.',
          'Reset by storing a new "epoch" — Processing doesn\'t restart millis itself.'
        ],
        tryIt: 'Trigger an action when millis() crosses 5000 — flash the canvas, log a message, or change the color.'
      },
      dateTime: {
        intro: 'Processing exposes the system clock: year(), month(), day(), hour(), minute(), second(). Each returns the current value as a number. Combine with text() to build clocks, calendars, and date-aware animations.',
        concepts: [
          'hour() returns 0-23, minute() and second() return 0-59.',
          'year() / month() / day() return calendar values (month is 1-12).',
          'These read fresh on each call — they update as time passes.',
          'Combine with nf() to format with leading zeros: nf(minute(), 2).'
        ],
        tryIt: 'Make the canvas color cycle through seasons by mapping month() to a hue between 0-360.'
      },
      extendsClass: {
        intro: 'A class can extend another, inheriting its fields and methods. The child uses super() to call the parent\'s constructor. Inheritance lets you share behavior across related types — Shape might define position; Circle and Square extend it with their own draw.',
        concepts: [
          'class Child extends Parent { ... } — declares inheritance.',
          'super(args) calls the parent constructor.',
          'Inherited methods can be overridden by redefining in the child.',
          'Use inheritance for "is-a" relationships, composition for "has-a".'
        ],
        tryIt: 'Add a Square class that extends Shape with a side length. Draw squares mixed in with bubbles in the same loop.'
      },
      polymorphism: {
        intro: 'Polymorphism: same method name, different behavior depending on the object\'s actual type. A list of Animals can hold Dogs and Cats; calling speak() on each gives different output without any if-checks. The basis of strategy patterns and plugin architectures.',
        concepts: [
          'Define a method on the parent. Override it in each child.',
          'Calling the method on a parent-typed reference dispatches to the actual subclass.',
          'Cleaner than long if/else chains checking the type.',
          'The basis of strategy patterns and plugin architectures.'
        ],
        tryIt: 'Add a Bird class that returns "tweet". Push some birds into the array — the loop works unchanged.'
      },
      vertexShape: {
        intro: 'Custom polygons are built with beginShape(), several vertex(x, y) calls, and endShape(CLOSE). The CLOSE flag joins the last vertex back to the first. Add as many vertices as you like — Processing connects them in order.',
        concepts: [
          'beginShape() and endShape(CLOSE) frame the polygon.',
          'vertex(x, y) adds a corner.',
          'stroke() and fill() before beginShape control the styling.',
          'beginShape(POINTS), beginShape(LINES), beginShape(TRIANGLES) — render modes.'
        ],
        tryIt: 'Build a star by alternating vertices on two radii (small and big) around a circle. The result is a classic 5-point star.'
      },
      bezierCurve: {
        intro: 'Bezier curves are smooth curves defined by anchor points and control points. bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2) draws a cubic curve from (x1, y1) to (x2, y2) bent toward the two control points. The control points pull the curve without lying on it.',
        concepts: [
          'bezier() draws a cubic curve with two control points.',
          'curveVertex() defines a Catmull-Rom-like spline through points.',
          'Anchor points are start/end. Control points shape the bend.',
          'Used for SVG-style paths, organic shapes, and motion paths.'
        ],
        tryIt: 'Animate the control points with sin/cos to make the curve breathe. Tie the anchors to the canvas corners.'
      },
      customShapes: {
        intro: 'Combine vertex(), trig, and parameters to write reusable shape functions. drawCog(cx, cy, r, teeth) takes a center, radius, and tooth count, then iterates around a circle alternating between two radii. The same idea generates stars, sun rays, and gear teeth.',
        concepts: [
          'Wrap shape logic in a function so the same call draws different sizes.',
          'Loop angle from 0 to TWO_PI to walk a circle.',
          'Alternate radii in the loop to create teeth, jags, or stars.',
          'A second pass can add inner details (a hole, an inset).'
        ],
        tryIt: 'Add an angle parameter and rotate the cog by frameCount * 0.01. Place several gears side by side so they appear to mesh.'
      },
      physicsGravity: {
        intro: 'The simplest physics engine has three actors: position, velocity, acceleration. Each frame, vel += acc and pos += vel. An acceleration of (0, 0.2) is gravity — velocity increases downward over time. Bouncing flips the y velocity sign with some energy lost.',
        concepts: [
          'pos += vel; vel += acc; — Euler integration.',
          'Gravity is a constant downward acceleration vector.',
          'Bounce: when out of bounds, flip vel and multiply by a coefficient < 1 (energy loss).',
          'PVector wraps these vectors into clean object methods.'
        ],
        tryIt: 'Add wind by setting acc.x to a small non-zero value. Add air resistance by multiplying vel by 0.99 each frame.'
      },
      physicsSprings: {
        intro: 'A spring pulls an object toward a rest position with force proportional to displacement. Hooke\'s law: F = -k * (x - rest). Add damping (multiply velocity by ~0.95) so the oscillation eventually settles.',
        concepts: [
          'force = -k * (x - rest), where k is stiffness.',
          'velocity += force; velocity *= damping; position += velocity.',
          'Without damping, the spring oscillates forever.',
          'k and damping are both knobs — adjust to taste.'
        ],
        tryIt: 'Try k = 0.2 (very stiff) vs 0.01 (loose). Try damping = 1 (perpetual motion) vs 0.85 (quick stop).'
      },
      physicsCollision: {
        intro: 'Pairwise collision: for every pair of balls, check if their distance is less than the sum of their radii. If so, they overlap — swap velocities for a basic elastic response. This is O(n²) and breaks down for many objects, but is fine for dozens.',
        concepts: [
          'dist(a.pos.x, a.pos.y, b.pos.x, b.pos.y) < a.r + b.r → collision.',
          'Swap velocities for a quick (lossy) response.',
          'Real elastic collision uses vectors and mass — this is a visual approximation.',
          'Spatial partitioning (grids, quad trees) speeds up many objects.'
        ],
        tryIt: 'Increase to 30 balls and watch the FPS drop. Cut to 6 and color them by ID so you can see which pair collided.'
      },
      flowField: {
        intro: 'A flow field maps each point in space to a direction. Using noise() for the angle gives organic, drifting motion. Particles step in the direction of their local field — the result resembles wind, currents, or smoke.',
        concepts: [
          'angle = noise(x * scale, y * scale) * TWO_PI * n. n controls how many "swirls".',
          'Step each particle by (cos(angle), sin(angle)) * speed.',
          'Adding frameCount as a third noise dimension makes the field evolve over time.',
          'Low alpha leaves trails — the impression of streamlines.'
        ],
        tryIt: 'Replace random points with persistent particles. Each particle steps along the field; reset it when it leaves the canvas.'
      },
      gridGen: {
        intro: 'Generative art often starts with a grid. Iterate cells; for each cell, decide whether to draw and how — based on noise, position, or randomness. The grid gives structure; the per-cell logic gives variety.',
        concepts: [
          'Two nested loops walk the grid.',
          'noise(x * scale, y * scale) gives a smooth value per cell — coherent neighbors.',
          'Threshold the noise to make cells appear or disappear.',
          'Vary fill, rotation, or sub-shape per cell for endless variations.'
        ],
        tryIt: 'Replace the rect with a circle whose radius is the noise value. Make the canvas sparser by raising the threshold from 0.5 to 0.7.'
      },
      lSystems: {
        intro: 'L-systems generate strings by repeatedly applying replacement rules to an axiom. Interpreting each character as a turtle command — F = forward, + = turn right, - = turn left — produces fractal-like shapes after a few iterations.',
        concepts: [
          'Start with an axiom (a single string).',
          'Apply rules: each char gets replaced by another string.',
          'After N iterations, the string can be very long.',
          'Interpret with a turtle: forward, left, right, push, pop.'
        ],
        tryIt: 'Add the rule "F → F-F+F" instead. Try 5 iterations. Add [ and ] for branching to grow trees.'
      },
      pgraphics: {
        intro: 'createGraphics(w, h) creates an off-screen canvas you can draw into independently. It supports the same drawing API. Once you\'ve drawn, image(pg, 0, 0) blits it onto the main canvas. Use it for caching, layering, and post-processing.',
        concepts: [
          'PGraphics pg = createGraphics(w, h); — create a buffer.',
          'In real Processing call pg.beginDraw() / pg.endDraw(); p5.js doesn\'t need it.',
          'pg.clear(), pg.fill(), pg.rect() — same API, prefixed.',
          'Drawing once into a buffer is faster than rebuilding every frame.'
        ],
        tryIt: 'Draw a slow background pattern into the buffer once. In draw(), blit the buffer plus a moving foreground shape.'
      },
      blendModes: {
        intro: 'blendMode() changes how new pixels combine with existing ones. ADD lights up; black turns to colored. MULTIPLY darkens. SCREEN brightens but preserves brights. Reset with blendMode(BLEND).',
        concepts: [
          'BLEND — default alpha compositing.',
          'ADD — sums RGB; great for glow.',
          'MULTIPLY — multiplies RGB; great for shadows and tints.',
          'SCREEN — inverse of multiply; great for highlights.',
          'DIFFERENCE / EXCLUSION — psychedelic results.'
        ],
        tryIt: 'Switch to MULTIPLY between drawing each circle. Compare with ADD. The same shapes look completely different under each mode.'
      },
      saveFrame: {
        intro: 'save() writes the current canvas to a file. saveFrame() does the same and supports auto-numbering. In real Processing they save to disk; in p5.js the browser triggers a download. Either way, this is how you export final art.',
        concepts: [
          'save("image.png") writes a single image.',
          'saveFrame("seq-####.png") auto-numbers with frameCount.',
          'PNG preserves transparency; JPG flattens it.',
          'Call from a key/mouse handler to capture on demand.'
        ],
        tryIt: 'Add a keyPressed that saves the current canvas. Use a name that includes hour() and minute() so each save has a unique filename.'
      },
      exportSequence: {
        intro: 'Animations export as a sequence of frames. saveFrame("name-####.png") writes one PNG per frame. Stitch them into MP4 or GIF with a tool like ffmpeg — Processing itself doesn\'t write video.',
        concepts: [
          'saveFrame("out-####") — #### becomes the zero-padded frame number.',
          'Cap frameRate to keep the sequence at a target duration.',
          'Don\'t export every run — save only when triggered, or you fill the disk.',
          'External tools: ffmpeg, ImageMagick, online GIF makers.'
        ],
        tryIt: 'Set a frame budget — for example, 60 frames at 8 fps = a 7.5s loop. Save until that count, then noLoop().'
      },
      finalGame: {
        intro: 'Combine input, animation, classes, and arrays into a small game. The player follows the mouse; bullets fall from the sky. State lives in vectors and arrays; behavior in update + draw. Once you\'ve internalized this loop, you can build any 2D game.',
        concepts: [
          'Position the player based on input each frame.',
          'Spawn obstacles on a timer (frameCount % N).',
          'Update each obstacle, draw it, then check collisions.',
          'Game over: stop spawning, draw "you lose", call noLoop().'
        ],
        tryIt: 'Add a score that increases each frame. End the game when a bullet hits the player. Show the score on game over.'
      },
      finalArt: {
        intro: 'Generative art is the goal of most Processing learners. Here\'s a starting recipe: a circle of points whose positions oscillate over time, painted with low alpha so trails build up. Tweaking constants gives endless variations — change a number, run, react, repeat.',
        concepts: [
          'A loop over points addressed by an angle around a circle.',
          'Time as input: frameCount * 0.02 grows continuously.',
          'Low-alpha fills layer over time, building soft, painterly textures.',
          'Two parameters (count, frequency) often give interesting results.'
        ],
        tryIt: 'Replace the circle layout with a Lissajous figure: x = cos(a * 3 + t), y = sin(a * 2 + t). Try different frequency ratios (3:2, 5:4).'
      }
    }
  },

  tr: {
    ...SHARED,
    title: 'Processing.js Stüdyosu',
    subtitle: 'Yaratıcı kodlama için uygulamalı kurs · YTÜ Programlama',
    about: 'YTÜ Programlama için hazırlandı — Processing ile yaratıcı kodlamaya uygulamalı giriş.',
    editor: 'KOD EDİTÖRÜ',
    editorSub: 'Processing / Java',
    run: 'Çalıştır',
    reset: 'Sıfırla',
    download: 'Çizimi indir',
    upload: '.pde dosyası aç',
    share: 'Paylaş',
    shareCopied: 'Bağlantı kopyalandı',
    langLabel: 'Dil',
    themeLabel: 'Tema',
    themeDark: 'Koyu',
    themeLight: 'Açık',
    courseLabel: 'KURS',
    moduleWord: 'Modül',
    lessonIntro: 'Genel Bakış',
    lessonConcepts: 'Anahtar Kavramlar',
    lessonTryIt: 'Kendiniz Deneyin',
    playgroundBadge: 'DENEME ALANI',
    tabCourses: 'Dersler',
    tabFiles: 'Dosyalar',
    lessonOverview: 'DERS ÖZETİ',
    running: 'Çalışıyor…',
    nothingOpen: 'Hiçbir şey açık değil',
    nothingOpenHint: 'Dersler sekmesinden bir ders açın veya Dosyalar sekmesinde yeni bir çizim oluşturun.',
    prevLesson: 'Önceki',
    nextLesson: 'Sonraki',
    modules: {
      m1: 'Temeller',
      m2: 'Mantık ve Akış Kontrolü',
      m3: 'Kullanıcı Girişi',
      m4: 'Hareket ve Dönüşümler',
      m5: 'Vektörler ve Sistemler',
      m6: 'Üretken ve Özyinelemeli',
      m7: 'Tipografi ve Stil',
      m8: 'Metin Verileri',
      m9: 'Diziler Derinlemesine',
      m10: 'Matematik Araçları',
      m11: 'Görseller',
      m12: 'Pikseller ve Filtreler',
      m13: 'Zaman ve Kareler',
      m14: 'Kalıtım ve OOP',
      m15: 'Eğriler ve Özel Şekiller',
      m16: 'Fizik Temelleri',
      m17: 'Üretken Desenler',
      m18: 'Katmanlar ve Tamponlar',
      m19: 'Kaydetme ve Paylaşma',
      m20: 'Bitirme Projeleri'
    },
    sections: {
      playground: 'Boş Çizim',
      intro: 'İlk Çiziminiz',
      fundamentals: 'Temel Şekiller',
      colors: 'Renkler ve Stil',
      variables: 'Değişkenler ve Hareket',
      conditionals: 'Koşullar',
      loops: 'Döngüler ve Desenler',
      functions: 'Fonksiyonlar',
      interaction: 'Fare Girişi',
      keyboard: 'Klavye Girişi',
      animation: 'Animasyon',
      transforms: 'Dönüşümler',
      trigonometry: 'Trigonometri',
      pvector: 'PVectorler',
      particles: 'Diziler ve Parçacıklar',
      classes: 'Sınıflar (OOP)',
      noise: 'Perlin Gürültüsü',
      recursion: 'Özyineleme ve Fraktallar',
      threed: '3B Grafikler',
      text: 'Metin ve Tipografi',
      gradient: 'Gradyanlar',
      stringBasics: 'String Temelleri',
      stringOps: 'String İşlemleri',
      stringFormat: 'Biçimleme ve Ayrıştırma',
      arrays: 'Dizi Temelleri',
      twoDArrays: '2B Diziler',
      arrayList: 'Dinamik Diziler',
      mapConstrain: 'map ve constrain',
      lerpEasing: 'Lerp ve Yumuşama',
      mathFuncs: 'Matematik Fonksiyonları',
      imageBasics: 'Görsel Yükleme',
      imageTint: 'Tint ve Renk',
      pixelArray: 'Piksel Dizisi',
      getSet: 'get() ve set()',
      imageFilter: 'Filtreler',
      millisTime: 'millis() ile Zaman',
      dateTime: 'Tarih ve Saat',
      extendsClass: 'Kalıtım',
      polymorphism: 'Çok Biçimlilik',
      vertexShape: 'vertex() Şekilleri',
      bezierCurve: 'Bezier Eğrileri',
      customShapes: 'Özel Şekiller',
      physicsGravity: 'Yerçekimi ve Sekme',
      physicsSprings: 'Yaylar',
      physicsCollision: 'Çarpışmalar',
      flowField: 'Akış Alanları',
      gridGen: 'Izgara Üretimi',
      lSystems: 'L-Sistemleri',
      pgraphics: 'Ekran Dışı Tamponlar',
      blendModes: 'Karışım Modları',
      saveFrame: 'Görsel Kaydetme',
      exportSequence: 'Kare Dizileri',
      finalGame: 'Mini Oyun',
      finalArt: 'Üretken Sanat'
    },
    lessons: {
      playground: {
        intro: 'Boş bir çizim alanı. İstediğiniz Processing kodunu buraya yazın — editör Processing (Java tadında) kodunu anında p5.js\'e çevirir, bu yüzden Processing örneklerinin büyük kısmı doğrudan çalışır. Bu sekmeyi kendi fikirlerinizi denemek, ödev yapıştırmak veya derslerin dışına çıkmak için kullanın.',
        concepts: [
          'Hem void setup() hem function setup() kabul edilir.',
          'Java tipleri (int, float, String, boolean, color, PVector) değişken ve parametre tanımlarında desteklenir.',
          'Java tarzı yapıcılara sahip sınıflar JS sınıflarına çevrilir.',
          'println() ve print(), console.log()\'a yönlendirilir.',
          'setup() içinde size(g, y) kullanın — arka planda createCanvas(g, y)\'ye dönüşür.'
        ],
        tryIt: 'Bir Processing eğitiminden bir çizim yapıştırın ve Çalıştır\'a basın. Çalışmazsa sadeleştirerek hata ayıklayın — transpiler başlangıç düzeyindeki çoğu özelliği kapsar.'
      },
      intro: {
        intro: 'Processing çizimi iki özel fonksiyondan oluşur: setup() program başladığında tam olarak bir kez çalışır ve draw() sürekli olarak çalışır — saniyede yaklaşık 60 kez. Görsel her şey bunların içinde gerçekleşir. Piksel ızgarası (0,0)\'ı sol üst köşeye yerleştirir ve sağa ve aşağıya doğru artar.',
        concepts: [
          'size(genişlik, yükseklik) çizim alanınızı oluşturur. Bir kez, setup() içinde çağırın.',
          'background(r, g, b) tuvalin tamamını düz bir renge boyar.',
          'fill(r, g, b) sonraki şekilleri doldurmak için kullanılan rengi ayarlar.',
          'circle(x, y, çap) (x, y)\'nin merkezinde dolu bir daire çizer.'
        ],
        tryIt: 'Arka plan rengini değiştirin, daireyi (50, 50)\'ye taşıyın ve çapını 20\'ye küçültün. setup() içinden background()\'u kaldırırsanız ne olur?'
      },
      fundamentals: {
        intro: 'Processing size küçük bir ilkel şekil seti verir. Bir kez fill ve stroke ile birleştirdiğinizde, şaşırtıcı derecede zengin görüntüler oluşturabilirsiniz. Koordinatlar her zaman (x, y), genişlik/yükseklik veya yarıçaplar piksel cinsindendir.',
        concepts: [
          'rect(x, y, g, y) varsayılan olarak sol üst köşeyi kullanır.',
          'circle(x, y, ç) ve ellipse(x, y, g, y) merkezi kullanır.',
          'triangle ve line üç çift / iki çift nokta alır.',
          'stroke() dış çizgi rengini ayarlar; noStroke() onu kaldırır. strokeWeight() kalınlığı ayarlar.',
          'arc(x, y, g, y, başlangıç, dur) radyan açıları kullanarak kısmi bir elips çizer.'
        ],
        tryIt: 'Basit bir ev yeniden oluşturun: gövde için bir dikdörtgen, çatı için bir üçgen ve kapı için küçük bir dikdörtgen. Her birine kendi fill rengini verin.'
      },
      colors: {
        intro: 'Processing\'teki renkler üç kanal kullanır — kırmızı, yeşil ve mavi — her biri 0 ile 255 arasındadır. Alfa olarak adlandırılan dördüncü bir değer saydamlığı kontrol eder (0 = görünmez, 255 = opak). Üst üste birçok yarı saydam şekil çizmek pürüzsüz karışımlar oluşturur.',
        concepts: [
          'fill(r, g, b, a) ve stroke(r, g, b, a) — alfa isteğe bağlıdır.',
          'fill(gray) tek bir değerle kısayoldur: 0 siyahtır, 255 beyazdır.',
          'x veya y üzerinde döngü yapmak, sütun veya satır başına rengi değiştirmenizi sağlar — herhangi bir gradyanın temelidir.',
          'Düşük alfa ile üst üste binen şekiller parlama ve karışma efektleri üretir.'
        ],
        tryIt: 'Düz dikdörtgenleri dairelerle değiştirin. Üçüncü dikdörtgeni alfa = 80 kullanacak şekilde değiştirin. Dikey bir gökkuşağı yapabilir misiniz?'
      },
      variables: {
        intro: 'Değişken, bir değer tutan adlandırılmış bir yuvadır. Processing\'te bir türle bildirirsiniz: int x = 50 bir tam sayı tutar, float y = 3.14 bir ondalık tutar. Her karede bir değişkeni güncellemek hareketin nasıl oluşturulduğudur — şekil aslında hareket etmez; her kare onu biraz farklı bir konumda çizer.',
        concepts: [
          'Kareler arasında devam eden değerler için setup() / draw() dışında bildirin.',
          'int tam sayılardır, float ondalık sayılardır. String metindir.',
          'x = x + hız şu şekilde okunur: mevcut x\'i al, hız ekle, x\'e geri depola.',
          'x ekrandan çıktığında, sürekli döngü illüzyonu için sıfırlayın.'
        ],
        tryIt: 'Farklı bir hızda hareket eden ikinci bir daire ekleyin. Hızı 1 ile 5 arasında rastgele bir değer yapın (setup() içinde random(1, 5) kullanın).'
      },
      conditionals: {
        intro: 'Programlar if deyimlerini kullanarak karar verir. Parantezlerin içindeki koşul true veya false olarak değerlendirilmelidir. else alternatif bir yol sunar. Koşullar karşılaştırmalar (<, >, ==, !=) ve mantıksal operatörler (&& için ve, || için veya) ile oluşturulur.',
        concepts: [
          'if (koşul) { ... } else { ... } — else isteğe bağlıdır.',
          'Karşılaştırma bir boolean döndürür: true veya false.',
          'mouseX ve mouseY imleç konumunu piksel olarak verir.',
          'Üçlü koşul ? a : b ifadeler için kompakt bir if/else\'dir.'
        ],
        tryIt: 'Tuvali dört çeyreğe bölün. Her çeyrek kendi rengini almalıdır. İpucu: hem mouseX hem de mouseY\'yi merkezle karşılaştırarak if/else iç içe yerleştirin.'
      },
      loops: {
        intro: 'for döngüsü, bir kod bloğunu kontrollü sayıda tekrarlar. Üç bölüm şunlardır: başlatma (sayaç başlat), koşul (true olduğu sürece döngüye devam et) ve güncelleme (her geçişte ne yapılacağı). Trigonometri ile birleştirildiğinde, döngüler bir desen oluşturma motoru haline gelir.',
        concepts: [
          'for (int i = 0; i < n; i++) { ... } — i = 0 … n-1 ile n kez çalışır.',
          'sin(açı) ve cos(açı) -1 ile 1 arasında değer döndürür.',
          'Noktaları açıya göre yerleştirmek dairesel düzenlemeler verir: (cx + cos(a) * r, cy + sin(a) * r).',
          'İç içe döngüler ızgaralar üretir: biri x için, biri y için.'
        ],
        tryIt: '12\'yi daha yoğun bir halka için 36\'ya değiştirin. İçine daha küçük daireler çizen ikinci bir döngü ekleyin. Spiral için yarıçapı i\'ye eşlemeyi deneyin.'
      },
      functions: {
        intro: 'Fonksiyon, adlandırılmış, yeniden kullanılabilir bir kod parçasıdır. Fonksiyonlar girdi (parametre) alır ve genellikle bir değer döndürür. Kendi fonksiyonlarınızı yazmak kodu kısa tutar ve daha yüksek bir soyutlama düzeyinde düşünmenizi sağlar — "yıldız çiz" yerine düzinece trig çağrısı.',
        concepts: [
          'void funcName(tür param, ...) hiçbir şey döndürmeyen bir fonksiyon bildirir.',
          'Parametreler fonksiyona özeldir; dış programı etkilemezler.',
          'Bir fonksiyon farklı argümanlarla birçok kez çağrılabilir.',
          'beginShape() / endShape() vertex() çağrılarından özel poligonlar tanımlamanıza olanak tanır.'
        ],
        tryIt: 'İçinde drawStar kullanan ancak merkeze bir daire ekleyen drawFlower(x, y, yapraklar) fonksiyonu yazın. Üç kez çağırın.'
      },
      interaction: {
        intro: 'Processing, fare konumunu yerleşik değişkenler olarak sunar — mouseX ve mouseY her karede güncellenir. mousePressed() gibi olay fonksiyonları yalnızca olay gerçekleştiğinde çalışır. Bu "sürekli" değişkenler ile "tek atışlı" olaylar arasındaki ayrım, duyarlı çizimler için anahtardır.',
        concepts: [
          'mouseX, mouseY — her karede güncellenir, draw() içinde okunabilir.',
          'pmouseX, pmouseY — önceki karenin konumu; iz çizmek için kullanışlıdır.',
          'mouseIsPressed — boolean, herhangi bir düğme basılı olduğunda true.',
          'mousePressed() — bir geri çağrı, tıklama anında bir kez çalışır.'
        ],
        tryIt: 'Daire boyutunu fare ne kadar hızlı hareket ederse o kadar büyütün. İpucu: dist(pmouseX, pmouseY, mouseX, mouseY) kare başına hareket mesafesini verir.'
      },
      keyboard: {
        intro: 'Klavye girişi iki türde gelir: draw() içinden sorguladığınız sürekli keyIsDown(KEY) kontrolü ve keyPressed() gibi tek atışlı olaylar. Pürüzsüz hareket için her zaman keyIsDown kullanın — tuş olayları basış başına yalnızca bir kez ateşlenir.',
        concepts: [
          'keyIsDown(LEFT_ARROW) — basılı tutulduğunda true. Diğer sabitler: UP_ARROW, DOWN_ARROW, RIGHT_ARROW.',
          'key en son karakteri içerir; keyCode sayısal kodu içerir.',
          'keyPressed() basışta bir kez çalışır, keyReleased() bırakıldığında bir kez çalışır.',
          'Hareketi constrain(değer, min, max) ile sınırlayarak nesneleri ekranda tutun.'
        ],
        tryIt: 'A ve D tuşlarını sol/sağ alternatifleri olarak ekleyin. Topun tuvalden çıkmaması için constrain() kullanın.'
      },
      animation: {
        intro: 'Pürüzsüz animasyon, değerlerin pürüzsüz bir şekilde değişmesinden gelir. frameCount 0\'dan başlar ve her karede artar; sin() / cos()\'a beslendiğinde -1 ile 1 arasında salınan değerler üretir. Girdi başına eleman ofseti ekleyerek dalgalar, kovalamalar ve faz desenleri elde edersiniz.',
        concepts: [
          'frameCount * hız salınımın ne kadar hızlı hareket ettiğini kontrol eder.',
          'genlik (sin ile çarptığınız sayı) ne kadar sallandığıdır.',
          'Eleman başına ofset (i * 0.8 gibi) komşuları desenkronize eder.',
          'frameRate(fps) draw döngüsünü sınırlamanıza veya hızlandırmanıza olanak tanır.'
        ],
        tryIt: 'Her dairenin boyutunu (sadece y değil) canlandırın. Renk döngüsü eklemek için sin(frameCount * 0.02 + i) * 127 + 128 kullanın.'
      },
      transforms: {
        intro: 'translate, rotate ve scale koordinat sisteminin kendisini değiştirir, şekilleri değil. Bu güçlüdür: bir şekli (0, 0)\'da bir kez çizebilir ve serbestçe yerleştirebilir/oriente edebilirsiniz. push() mevcut koordinat durumunu kaydeder; pop() geri yükler — her zaman çiftleyin.',
        concepts: [
          'translate(x, y) orijini hareket ettirir. Sonraki çizimler buna görelidir.',
          'rotate(açı) koordinat sistemini döndürür. Açılar radyan cinsindendir (PI = 180°).',
          'scale(çarpan) yakınlaştırır. scale(-1, 1) yatay olarak aynalar.',
          'push() / pop() dönüşümlerin sonraki koda sızmamasını sağlar.'
        ],
        tryIt: 'rotate değerini i * PI / 8\'e artırarak yaprakları iki katına çıkarın. Açıya göre daha küçük yapraklar çizen başka bir döngüyü iç içe yerleştirin.'
      },
      trigonometry: {
        intro: 'sin ve cos yaratıcı kodlamanın iş atlarıdır. Bir açıyı -1 ile 1 arasında salınan pürüzsüz bir değere dönüştürürler. Bu tek başına dalgalar, yörüngeler, nabızlar, yumuşatma ve çoğu organik hareket verir. İki kural yeterlidir: cos birim dairede x verir, sin y verir.',
        concepts: [
          'Radyanlar: 0 = sağ, PI/2 = aşağı, PI = sol, 3*PI/2 = yukarı. TWO_PI bir tam dönüştür.',
          'Genlik * sin(...) dalgayı ölçekler; ofset + sin(...) yukarı/aşağı kaydırır.',
          'Aynı açı ile cos(açı) ve sin(açı) bir daire üretir.',
          'Frekans = girdinin ne kadar hızlı büyüdüğü. Yüksek frekans = sıkı dalgalar.'
        ],
        tryIt: 'sin(x * 0.05 + frameCount * 0.03) kullanan üçüncü bir dalga ekleyin — canlandırılmış bir dalga. Üçüncü bir renkte çizin.'
      },
      pvector: {
        intro: 'PVektörler uzaydaki noktaları veya yönleri temsil eder. x, y ve z\'yi tek bir nesneye paketler, add(), sub() ve mult() gibi yerleşik matematik yöntemleriyle birlikte. Fizik ve hareketle uğraşırken kodu daha temiz hale getirirler.',
        concepts: [
          'PVector pos = new PVector(x, y); bir vektör oluşturur.',
          'pos.add(vel) hız vektörü kullanarak konumu günceller.',
          'PVektörler konumu, hızı ve ivmeyi temsil edebilir.'
        ],
        tryIt: 'Hız bileşenlerini değiştirin veya her karede hıza eklenen bir ivme vektörü ekleyin.'
      },
      particles: {
        intro: 'Bir kez hareket eden bir şeye sahip olduğunuzda, yüzü neredeyse aynı kolaydır. Bir dizi birçok öğe tutar; bir for döngüsü her birini kare başına günceller. Her parçacık kendi konumuna ve hızına sahip küçük bir nesnedir. Ortaya çıkan davranış — sürüler, alanlar, akışlar — bu basit tariften başlar.',
        concepts: [
          'Diziler birçok değer tutar; .push() ekler; .length sayıyı verir.',
          'Her parçacık en azından konum (x, y) ve hız (vx, vy) gerektirir.',
          'Her kare: konumu hızla güncelle, sonra çiz.',
          'Kenarlardan sekme: konum çıkarsa, ilgili hızın işaretini ters çevir.'
        ],
        tryIt: 'Her parçacığın vy değerine her karede 0.1 ekleyerek yerçekimi ekleyin. Sürtünme eklemek için vx ve vy değerlerini 0.99 ile çarpın.'
      },
      classes: {
        intro: 'Bir sınıf bir şablondur. Verileri (alanlar) ve davranışı (yöntemler) tek bir adlandırılmış türe gruplar. Her örneğin verilerin kendi kopyası vardır. Birçok benzer şeyiniz olduğunda, sınıflar dağınık paralel dizileri tek temiz bir nesneyle değiştirir.',
        concepts: [
          'class Name { ... } şablonu tanımlar.',
          'Sınıf adıyla bir yapıcı new Name(...) yazıldığında çalışır.',
          'this.x örneğin kendi x alanına atıfta bulunur.',
          'Yöntemler (void update(), void show()) sınıfa bağlı fonksiyonlardır.'
        ],
        tryIt: 'Fare topun yarıçapı içindeyse topun etrafında bir halka çizen void highlight() adlı yeni bir yöntem ekleyin. draw() içinden çağırın.'
      },
      noise: {
        intro: 'random() her yere zıplar — kaos için kullanışlı, organik hareket için kötü. Perlin noise (noise()) pürüzsüzdür: yakındaki girdiler yakındaki çıktılar verir. Artan bir zaman değeri t beslemek, titreşim yerine sürüklenen değerler üretir. Girdiyi ofsetleyerek bağımsız noise akışları oluşturun.',
        concepts: [
          'noise(t) 0 ile 1 arasında pürüzsüz bir değer döndürür.',
          't değerini kare başına küçük bir miktar artırın; daha büyük artışlar daha hızlı değişim anlamına gelir.',
          'noise(x, y) veya noise(x, y, t) 2B ve 3B noise verir — bulutlar ve araziler için mükemmel.',
          'Çıktıyı map(value, 0, 1, düşük, yüksek) ile istediğiniz aralığa eşleyin.'
        ],
        tryIt: 'Her biri noise(t + i * 10) kullanan 20 ayrı daire çizin — bağımsız olarak sürüklenirler. Yumuşak bir bulut için düşük alfa ile çizin.'
      },
      recursion: {
        intro: 'Özyinelemeli bir fonksiyon, daha küçük girdilerle kendini çağırırken bir temel duruma ulaşana kadar kendini çağırır. Kendine benzeyen formları ifade etmenin en doğal yoludur: ağaçlar, sarmallar, kar taneleri. Dönüşümlerle birleştirildiğinde, bir avuç satır elle çizim sayfaları alacak şekiller üretir.',
        concepts: [
          'Her özyineleme bir temel duruma ihtiyaç duyar — daha fazla çağrıyı durduran koşul.',
          'Her özyinelemeli çağrı genellikle bir parametreyi (uzunluk, derinlik) temel duruma doğru küçültür.',
          'Özyineleme içinde push() / pop() dönüşümleri her dal için izole eder.',
          'Küçük ayarlamalar (açı, küçültme faktörü) çıktıyı dramatik bir şekilde dönüştürür.'
        ],
        tryIt: 'PI/6 değerini PI/4 olarak değiştirin daha geniş dallar için. Ağacı daha çalı hale getirmek için daha küçük bir açıyla üçüncü bir özyinelemeli çağrı ekleyin.'
      },
      threed: {
        intro: 'Processing, WEBGL oluşturucusu aracılığıyla 3B oluşturmayı destekler. Z ekseni eklemek, derinlik, ışık ve kameralara sahip sahneler oluşturmanıza olanak tanır.',
        concepts: [
          'size(g, y, WEBGL) 3B modunu etkinleştirir.',
          'translate(x, y, z) ve rotateX() / rotateY() şekilleri 3B\'de hareket ettirir ve yönlendirir.',
          'lights() varsayılan gölgelendirme ekler.'
        ],
        tryIt: 'box() değerini sphere() olarak değiştirin veya değişen Z çevirileri kullanan bir döngü ile birden fazla kutu çizin.'
      },
      text: {
        intro: 'Processing\'teki metin çizilir, yerleştirilmez. text(string, x, y) geçerli fill rengini kullanarak bir dizeyi bir koordinata yerleştirir. textSize punto boyutunu ayarlar, textAlign sabitlemeyi kontrol eder. HTML\'den daha az, harfleri boyamaya daha fazla benzer.',
        concepts: [
          'text(str, x, y) — varsayılan olarak x, y taban çizgisidir.',
          'textAlign(CENTER, CENTER) sabitlemeyi glifin ortasına taşır.',
          'textSize(n) piksel boyutunu ayarlar. textFont(font) yüklenen bir font kullanır.',
          'Tek tek harfleri canlandırmak için frameCount veya noise ile birleştirin.'
        ],
        tryIt: '"p5.js"nin her harfini bağımsız olarak canlandırın — her birine sin(frameCount * 0.05 + i) tabanlı bir y ofseti verin.'
      },
      gradient: {
        intro: 'Yerleşik bir gradyan ilkeli yoktur — siz oluşturursunuz. İpucu lerp (lineer interpolasyon): lerp(a, b, t), t 0\'dan 1\'e kayarken a ile b arasında bir değer döndürür. Piksel satırları üzerinde döngü yapın ve hayal edebileceğiniz herhangi bir gradyanı boyamak için her renk kanalını lerp edin.',
        concepts: [
          'lerp(a, b, t) — t 0 olduğunda a alırsınız, t 1 olduğunda b alırsınız.',
          'Dikey bir gradyan için y satırları üzerinde döngü yapın ve satır başına yatay bir çizgi çizin.',
          'lerpColor(c1, c2, t) doğrudan iki rengi karıştırır, üç lerp\'den daha pratiktir.',
          'Yarı saydam daireleri bir gradyanın üzerine katmanlamak derinlik ve atmosfer yaratır.'
        ],
        tryIt: 'Gradyanı dikeyden çapraz olarak değiştirin — t olarak (x + y) / (genişlik + yükseklik) kullanın. Gün batımı tonları için renkleri değiştirin.'
      },
      stringBasics: {
        intro: 'Bir String, tırnak içindeki bir karakter dizisidir. Processing\'te String ile bildirilir ve çoğu işlem Java ile eşleşir: charAt(i) bir karakter okur, toUpperCase() / toLowerCase() büyük/küçük harf değiştirir. Bu transpile edilmiş ortamda uzunluğu bir özellik olarak (.length) okursunuz.',
        concepts: [
          'String name = "text"; bir dize bildirir ve başlatır.',
          'name.length karakter sayısıdır (JS tarzı; Java name.length() kullanır).',
          'name.charAt(i) i indeksindeki karakteri döndürür.',
          'name.toUpperCase() ve name.toLowerCase() yeni dizeler döndürür — orijinaller değişmez.'
        ],
        tryIt: 'Adınızın bir String değişkenini bildirin. Uzunluğunu, ilk karakterini ve ters çevrilmiş halini (split + reverse + join) yazdırın.'
      },
      stringOps: {
        intro: 'Stringler + (birleştirme) ile birleşir ve dilimlemek, aramak ve değiştirmek için yöntemler sunar. substring(a, b), a indeksinden b\'ye kadar (ancak dahil değil) kısmı döndürür. indexOf bir alt dizinin konumunu veya eksikse -1 döndürür. replace oluşumları değiştirir.',
        concepts: [
          'a + b iki dizeyi yeni birine birleştirir.',
          'str.substring(başlangıç, bitiş) — bitiş hariçtir.',
          'str.indexOf(alt) konumu döndürür veya bulunamazsa -1.',
          'str.replace(eski, yeni) oluşumları değiştirir.',
          'str.split(ayraç) bir parça dizisi döndürür.'
        ],
        tryIt: 'Bir cümle alın, kelimelere bölün ve her kelimeyi kendi satırına çizin.'
      },
      stringFormat: {
        intro: 'Bazen sayılara string veya bunun tersi olarak ihtiyaç duyarsınız. Processing\'in nf() sabit sayıda basamakla float biçimlendirir. hex() bir onaltılık string döndürür. int() ve float() bir stringi sayıya ayrıştırır — kullanıcı girdisini temizlemek için kullanışlıdır.',
        concepts: [
          'nf(değer, basamak, ondalık) sıfırlarla doldurur ve ondalıkları keser.',
          'hex(255) → "FF". Renk kodları için kullanışlıdır.',
          'int("17") → 17. float("2.5") → 2.5.',
          '"" ile birleştirmek toString çağrısını zorlar: "" + 42 → "42".'
        ],
        tryIt: 'Mevcut frameCount değerini baştaki sıfırlarla birlikte 6 basamaklı bir string olarak görüntüleyin — nf(frameCount, 6) kullanın.'
      },
      arrays: {
        intro: 'Diziler aynı türden sabit sayıda değer tutar. int[] veya float[] ile bildirin ve new int[N] ile ayırın. [i] ile elemanlara erişin (sıfır indeksli) ve sayıyı almak için .length kullanın. Bir kerede birçok değerle çalışırken en temel araçlarınızdır.',
        concepts: [
          'int[] heights = new int[10]; 10 sıfır ayırır.',
          'heights[i] i indeksindeki değeri okur veya yazar.',
          'heights.length kaç eleman olduğunu söyler.',
          'İndeksler 0\'dan length - 1\'e kadar çalışır. Dışına çıkmak bir hatadır.'
        ],
        tryIt: 'Rastgele yükseklikleri sin tabanlı yüksekliklerle değiştirin, böylece dizi bir dalga oluşturur: heights[i] = 120 + sin(i * 0.5) * 70.'
      },
      twoDArrays: {
        intro: '2B dizi bir ızgara temsil eder: satırlar ve sütunlar. Java bunu int[][] grid olarak bildirir; burada JavaScript tarzı iç içe bir dizi kullanıyoruz — aynı şekil. grid[x][y] ile erişin. Karo haritaları, hücresel otomatlar, görüntü ızgaraları ve satranç tahtaları için kullanışlıdır.',
        concepts: [
          'grid[x][y] (x, y) hücresine erişir — iki indeks.',
          'Her iki boyut üzerinde iç içe döngülerle başlatın.',
          'Karo haritaları, hücresel otomatlar, görüntü ızgaraları için kullanışlıdır.',
          'Bellek kuadratik olarak büyür: 100x100 bir ızgara 10.000 hücredir.'
        ],
        tryIt: 'Hücre renkleri için random yerine noise(x * 0.1, y * 0.1) kullanın. Sonuç statik yerine pürüzsüz ve tutarlıdır.'
      },
      arrayList: {
        intro: 'Java\'nın ArrayList değişken uzunlukta bir liste tutar — öğeler giriş, öğeler çıkış, uzunluk değişir. JavaScript dizileri zaten bu şekilde çalışır: push ekler, pop kaldırır, splice indekse göre siler. Transpiler dizileri kutudan çıkar çıkmaz bu şekilde işler.',
        concepts: [
          'arr.push(öğe) sona ekler.',
          'arr.pop() son öğeyi kaldırır ve döndürür.',
          'arr.length otomatik olarak büyür.',
          'arr.splice(i, 1) i indeksindeki öğeyi kaldırır.'
        ],
        tryIt: 'words.pop() çağıran bir keyPressed işleyici ekleyin — tıklamak ekler, tuş kaldırır. Listenin büyüyüp küçüldüğünü izleyin.'
      },
      mapConstrain: {
        intro: 'map() bir sayıyı bir aralıktan başka bir aralığa yeniden ölçeklendirir — yaratıcı kodlamadaki en kullanışlı fonksiyondur. constrain() bir sayıyı bir minimum ve maksimuma sınırlar, böylece asla aralığın dışına çıkmaz. Birleştirildiğinde, kullanıcı girdisini temiz bir şekilde görsel özelliklere çevirirler.',
        concepts: [
          'map(değer, girdi_min, girdi_maks, çıktı_min, çıktı_maks) — orantılı yeniden ölçeklendirme.',
          'constrain(değer, min, maks) aralığa sınırlar.',
          'map ekstrapole edebilir (çıktı_min/çıktı_maks ötesine geçebilir). Bunu önlemek için constrain ile sarın.',
          'İyi birleşirler: constrain(map(...), düşük, yüksek).'
        ],
        tryIt: 'mouseY değerini fill alfasına (0..255) eşleyin ve görünür tutmak için constrain kullanın (50..255). constrain kaldırıldığında ne değişir?'
      },
      lerpEasing: {
        intro: 'Doğrusal interpolasyon (lerp) iki değer arasında karıştırır. lerp(a, b, t), t=0 olduğunda a döndürür ve t=1 olduğunda b döndürür. Her karede küçük bir t ile lerp çağırmak pürüzsüz yumuşatma üretir — değer hedefe aniden sıçramak yerine yaklaşır. Yumuşatma arayüzleri canlı hissettirir.',
        concepts: [
          'lerp(a, b, t) — t [0, 1] aralığında.',
          'Yumuşatma deseni: x = lerp(x, hedef, 0.1) her kare.',
          'Daha küçük t = daha yavaş yumuşatma. 0.5 hızlıdır, 0.02 yavaştır.',
          'lerpColor(c1, c2, t) doğrudan renkleri interpolasyonlar.'
        ],
        tryIt: '0.08 değerini hızlı için 0.3 veya yavaş için 0.02 ile değiştirin. Topun imleci pürüzsüz bir şekilde takip etmesi için y değerini de mouseY değerine lerp etmeyi deneyin.'
      },
      mathFuncs: {
        intro: 'Processing, herhangi bir dilde bulacağınız aynı matematik fonksiyonlarını sunar: abs, sqrt, pow, floor, ceil, round, min, max, dist. Sayıları alır ve döndürür, özel bir Processing tadı yoktur — sürekli ulaştığınız saf yardımcı programlar.',
        concepts: [
          'abs(x) — mutlak değer (her zaman negatif değildir).',
          'sqrt(x), pow(x, n) — kare kök ve üs.',
          'floor(x), ceil(x), round(x) — tam sayı dönüşümleri.',
          'dist(x1, y1, x2, y2) — iki nokta arasındaki öklid mesafesi.',
          'min(a, b), max(a, b) — daha küçüğü / büyüğü seç.'
        ],
        tryIt: '(x, y) bir dairenin içindeyse true döndüren inside(x, y, cx, cy, r) fonksiyonu yazın. Fare üzerindeyken bir daireyi vurgulamak için kullanın.'
      },
      imageBasics: {
        intro: 'Görseller setup() içinde loadImage(url) ile yüklenir ve image(img, x, y) ile çizilir. loadImage gerçek bir URL veya yol gerektirir — yerel dosyalar için bunları bir data/ klasörüne yerleştirirsiniz. Bu öğrenme sanal alanı görüntü getirmez, bu yüzden ilkel şekillerle görünümü simüle ederiz, ancak API aynıdır.',
        concepts: [
          'PImage img = loadImage("path/to/image.png"); — bir kez yükleyin, setup içinde.',
          'image(img, x, y) sol üst köşede (x, y) çizer.',
          'image(img, x, y, g, y) görüntüyü ölçeklendirilmiş çizer.',
          'img.width ve img.height boyutlarını söyler.'
        ],
        tryIt: 'Gerçek bir Processing çiziminde, bir PNG dosyasını çizim klasörüne bırakın ve loadImage çağrısı yapın. İmleci takip etmesi için farenin konumunda çizin.'
      },
      imageTint: {
        intro: 'tint(), çizerken görselleri yeniden renklendirir — her pikselin RGB\'si tint rengiyle çarpılır. tint(255, 0, 0) her şeyi kırmızı yapar, tint(255, 100) saydamlığı ~%40 olarak ayarlar. Devre dışı bırakmak için noTint() çağırın.',
        concepts: [
          'tint(r, g, b) her kanalı çarpar.',
          'tint(gray, alpha) tek renk ve saydamlık için.',
          'noTint() normal çizime geri döner.',
          'Bir görüntünün tintli kopyalarını katmanlamak yarı ton ve renk kayması efektleri verir.'
        ],
        tryIt: 'Bir görüntüyü arka arkaya birden fazla kez, her biri farklı bir konumda ve tint renginde, yarı ton veya kromatik sapma efekti için tintleyin.'
      },
      pixelArray: {
        intro: 'loadPixels() tuvali pixels[] dizisine kopyalar. Her piksel 4 giriş alır: R, G, B, A. Değiştirdikten sonra geri yazmak için updatePixels() çağırın. Bu, görüntüleri bir pikseli bir piksel oluşturmanın yoludur — gölgelendiriciler, mozaikler ve efektler için mükemmel.',
        concepts: [
          'loadPixels() pixels[] dizisini mevcut tuval durumuyla yeniler.',
          'pixels[(x + y * width) * 4 + 0], piksel (x, y)\'nin kırmızı kanalıdır.',
          '+1 = yeşil, +2 = mavi, +3 = alfa. Her piksel 4 bayttır.',
          'updatePixels() değiştirilmiş arabelleği tuvale geri iter.'
        ],
        tryIt: 'Doğrusal gradyanı sin tabanlı şeritlerle değiştirin: kırmızı kanal olarak sin(x * 0.1) * 127 + 128 kullanın.'
      },
      getSet: {
        intro: 'set(x, y, color) tek bir piksel yazar. get(x, y) bir tane okur. Toplu iş için pixels[]\'den daha yavaştır ancak küçük işlemler için daha okunabilirdir. set() updatePixels() gerektirmez — hemen iter.',
        concepts: [
          'set(x, y, color(r, g, b)) bir piksel ayarlar.',
          'get(x, y) (x, y)\'deki rengi döndürür.',
          'Birçok piksel üzerinde döngüler için bunun yerine pixels[] kullanın — set() çağrı başına yavaştır.',
          'Karma efektler için get/set ile normal çizimi karıştırabilirsiniz.'
        ],
        tryIt: 'İmlecin altındaki rengi örneklemek için get(mouseX, mouseY) kullanın ve etrafında çizilen daireler için yeni fill olarak kullanın.'
      },
      imageFilter: {
        intro: 'filter() tuvalin tamamına yerleşik bir dönüşüm uygular. BLUR yumuşatır, GRAY renk doygunluğunu azaltır, INVERT renkleri tersine çevirir, THRESHOLD ikili hale getirir. Her biri güçlüğü için isteğe bağlı bir parametre alır. Filtreler çizimden sonra gerçekleşir — onları en son çağırın.',
        concepts: [
          'filter(BLUR, yarıçap) — Gauss bulanıklığı.',
          'filter(GRAY) — gri tonlamaya dönüştürme.',
          'filter(INVERT) — renk negatifi.',
          'filter(THRESHOLD, seviye) — yüksek kontrast siyah ve beyaz.'
        ],
        tryIt: 'Sırayla BLUR, sonra GRAY, sonra INVERT uygulayın. Sıralarını değiştirin — sonuç farklıdır. Neden?'
      },
      millisTime: {
        intro: 'millis() çizim başladığından bu yana geçen milisaniye sayısını döndürür. frameRate bağımsız olarak olayları zamanlamanın en hassas yoludur. frameCount kareleri sayarken, millis duvar saati zamanını sayar.',
        concepts: [
          'millis() / 1000.0 — geçen saniyeler.',
          'FPS ne olursa olsun aynı hızda çalışan zaman tabanlı animasyon için girdi olarak sin/cos ile kullanın.',
          'Geçen süreler için saklanan startTime ile millis() karşılaştırın.',
          'Yeni bir "çağ" depolayarak sıfırlayın — Processing kendisi millis yeniden başlatmaz.'
        ],
        tryIt: 'millis() 5000\'i geçtiğinde bir eylem tetikleyin — tuvali yanıp söndürün, bir mesaj günlüğe kaydedin veya rengi değiştirin.'
      },
      dateTime: {
        intro: 'Processing sistem saatini açığa çıkarır: year(), month(), day(), hour(), minute(), second(). Her biri mevcut değeri sayı olarak döndürür. Saatler, takvimler ve tarihe duyarlı animasyonlar oluşturmak için text() ile birleştirin.',
        concepts: [
          'hour() 0-23 döndürür, minute() ve second() 0-59 döndürür.',
          'year() / month() / day() takvim değerlerini döndürür (ay 1-12 arasındadır).',
          'Bunlar her çağrıda yenilenir — zaman geçtikçe güncellenirler.',
          'Öndeki sıfırlarla biçimlendirmek için nf() ile birleştirin: nf(minute(), 2).'
        ],
        tryIt: 'Tuval rengini mevsimler boyunca döngüye sokmak için month() değerini 0-360 arası bir renge eşleyin.'
      },
      extendsClass: {
        intro: 'Bir sınıf başka bir sınıfı genişletebilir, alanlarını ve yöntemlerini devralabilir. Alt sınıf, üst sınıfın yapıcısını çağırmak için super() kullanır. Kalıtım, ilgili türler arasında davranış paylaşmanıza olanak tanır — Shape konumu tanımlayabilir; Circle ve Square kendi draw işlemleriyle bunu genişletir.',
        concepts: [
          'class Child extends Parent { ... } — kalıtımı bildirir.',
          'super(args) üst sınıf yapıcısını çağırır.',
          'Devralınan yöntemler, alt sınıfta yeniden tanımlanarak geçersiz kılınabilir.',
          'Kalıtımı "is-a" ilişkileri için, kompozisyonu "has-a" için kullanın.'
        ],
        tryIt: 'Kenar uzunluğu ile Shape\'i genişleten Square sınıfı ekleyin. Aynı döngüde kareleri baloncuklarla karışık olarak çizin.'
      },
      polymorphism: {
        intro: 'Çok biçimlilik: aynı yöntem adı, nesnenin gerçek türüne bağlı olarak farklı davranış. Hayvanlar listesi Köpekler ve Kediler tutabilir; her birinde speak() çağırmak herhangi bir if kontrolü olmadan farklı çıktı verir. Strateji desenlerinin ve eklenti mimarilerinin temelidir.',
        concepts: [
          'Ana sınıf üzerinde bir yöntem tanımlayın. Her alt sınıfta onu geçersiz kılın.',
          'Ana sınıf türündeki bir referans üzerinde yöntemi çağırmak, gerçek alt sınıfa yönlendirir.',
          'Türü kontrol eden uzun if/else zincirlerinden daha temiz.',
          'Strateji desenlerinin ve eklenti mimarilerinin temelidir.'
        ],
        tryIt: '"cik cik" döndüren Bird sınıfı ekleyin. Diziye bazı kuşlar ekleyin — döngü değişmeden çalışır.'
      },
      vertexShape: {
        intro: 'Özel poligonlar beginShape(), birkaç vertex(x, y) çağrısı ve endShape(CLOSE) ile oluşturulur. CLOSE bayrağı son köşeyi ilk köşeye geri birleştirir. İstediğiniz kadar köşe ekleyin — Processing bunları sırayla birleştirir.',
        concepts: [
          'beginShape() ve endShape(CLOSE) çokgeni çerçeveler.',
          'vertex(x, y) bir köşe ekler.',
          'stroke() ve fill() beginShape öncesi stilimi kontrol eder.',
          'beginShape(POINTS), beginShape(LINES), beginShape(TRIANGLES) — oluşturma modları.'
        ],
        tryIt: 'Bir dairenin etrafında iki yarıçap (küçük ve büyük) üzerinde köşeleri alterne ederek bir yıldız oluşturun. Sonuç klasik bir 5 köşeli yıldızdır.'
      },
      bezierCurve: {
        intro: 'Bezier eğrileri, sabit noktalar ve kontrol noktaları tarafından tanımlanan pürüzsüz eğrilerdir. bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2), (x1, y1)\'den (x2, y2)\'ye iki kontrol noktasına doğru bükülmüş kübik bir eğri çizer. Kontrol noktaları eğriyi üzerinde olmadan çeker.',
        concepts: [
          'bezier() iki kontrol noktası ile kübik bir eğri çizer.',
          'curveVertex() noktalar boyunca Catmull-Rom benzeri bir spline tanımlar.',
          'Sabit noktalar başlangıç/bitiştir. Kontrol noktaları bükülmeyi şekillendirir.',
          'SVG tarzı yollar, organik şekiller ve hareket yolları için kullanılır.'
        ],
        tryIt: 'Eğrinin nefes almasını sağlamak için kontrol noktalarını sin/cos ile canlandırın. Sabit noktaları tuval köşelerine bağlayın.'
      },
      customShapes: {
        intro: 'vertex(), trig ve parametreleri birleştirerek yeniden kullanılabilir şekil fonksiyonları yazın. drawCog(cx, cy, r, teeth) bir merkez, yarıçap ve diş sayısı alır, sonra iki yarıçap arasında alterne ederek bir dairenin etrafında döner. Aynı fikir yıldızlar, güneş ışınları ve dişli dişleri üretir.',
        concepts: [
          'Aynı çağrının farklı boyutlarda çizmesi için şekil mantığını bir fonksiyona sarın.',
          'Bir daireyi dolaşmak için açıyı 0\'dan TWO_PI\'ye döngüye sokun.',
          'Dişler, çıkıntılar veya yıldızlar oluşturmak için döngüde yarıçapları alterne edin.',
          'İkinci bir geçiş iç detaylar ekleyebilir (bir delik, bir iç çekme).'
        ],
        tryIt: 'Bir açı parametresi ekleyin ve dişliyi frameCount * 0.01 ile döndürün. Birbirine dişlendiği gibi görünmeleri için birkaç dişliyi yan yana yerleştirin.'
      },
      physicsGravity: {
        intro: 'En basit fizik motorunun üç oyuncusu vardır: konum, hız, ivme. Her karede, vel += acc ve pos += vel. (0, 0.2) ivmesi yerçekimidir — zamanla hız aşağı doğru artar. Sekme, y hız işaretini bazı enerji kaybıyla tersine çevirir.',
        concepts: [
          'pos += vel; vel += acc; — Euler integrasyonu.',
          'Yerçekimi sabit bir aşağı doğru ivme vektörüdür.',
          'Sekme: sınırların dışına çıkıldığında, vel işaretini çevirin ve < 1 bir katsayı ile çarpın (enerji kaybı).',
          'PVector bu vektörleri temiz nesne yöntemlerine sarar.'
        ],
        tryIt: 'Küçük sıfır dışı bir değerle acc.x ayarlayarak rüzgar ekleyin. Hava direnci eklemek için her karede vel değerini 0.99 ile çarpın.'
      },
      physicsSprings: {
        intro: 'Bir yay, yerçekimi kuvvetiyle orantılı bir kuvvetle bir nesneyi dinlenme konumuna doğru çeker. Hooke yasası: F = -k * (x - rest). Sönümlendirme ekleyin (hızı ~0.95 ile çarpın), böylece salınım sonunda yerleşir.',
        concepts: [
          'kuvvet = -k * (x - rest), burada k sertliktir.',
          'hız += kuvvet; hız *= sönüm; konum += hız.',
          'Sönüm olmadan, yay sonsuza kadar salınır.',
          'k ve sönüm her ikisi de düğmelerdir — zevkinize göre ayarlayın.'
        ],
        tryIt: 'k = 0.2 (çok sert) ile 0.01 (gevşek) karşılaştırmasını deneyin. sönüm = 1 (sürekli hareket) ile 0.85 (hızlı durma) karşılaştırmasını deneyin.'
      },
      physicsCollision: {
        intro: 'Çiftli çarpışma: her bir top çifti için, mesafelerinin yarıçaplarının toplamından az olup olmadığını kontrol edin. Öyleyse, üst üste biniyorlar — temel elastik bir yanıt için hızları değiştirin. Bu O(n²) ve birçok nesne için bozulur, ancak düzineler için uygundur.',
        concepts: [
          'dist(a.pos.x, a.pos.y, b.pos.x, b.pos.y) < a.r + b.r → çarpışma.',
          'Hızları değiştirmek için hızlı (kaybı) bir yanıt.',
          'Gerçek elastik çarpışma vektörleri ve kütle kullanır — bu bir görsel yaklaşımdır.',
          'Uzamsal bölümlendirme (ızgara, dörtlü ağaçlar) birçok nesneyi hızlandırır.'
        ],
        tryIt: '30 topa çıkarın ve FPS düşüşünü izleyin. Hangi çiftin çarpıştığını görmek için 6\'ya indirin ve bunları kimliğe göre renklendirin.'
      },
      flowField: {
        intro: 'Bir akış alanı, uzaydaki her noktayı bir yöne eşler. Açı için noise() kullanmak organik, sürüklenen hareket verir. Parçacıklar yerel alanlarının yönünde adım atar — sonuç rüzgar, akıntılar veya dumanı andırır.',
        concepts: [
          'açı = noise(x * ölçek, y * ölçek) * TWO_PI * n. n kaç "girdap" kontrol eder.',
          'Her parçacığı (cos(açı), sin(açı)) * hız ile adımlandırın.',
          'Zamanın üçüncü bir noise boyutu olarak eklenmesi alanın zamanla gelişmesini sağlar.',
          'Düşük alfa izler bırakır — akış çizgilerinin izlenimi.'
        ],
        tryIt: 'Rastgele noktaları kalıcı parçacıklarla değiştirin. Her parçacık alan boyunca adım atar; tuvalden çıktığında sıfırlayın.'
      },
      gridGen: {
        intro: 'Üretken sanat genellikle bir ızgaradan başlar. Hücreleri yineleyin; her hücre için, noise, konum veya rastgeleliğe dayalı olarak çizip çizmemeye ve nasıl çizmemeye karar verin. Izgara yapı verir; hücre başına mantık çeşitlilik verir.',
        concepts: [
          'İki iç içe döngü ızgarayı yürütür.',
          'noise(x * ölçek, y * ölçek) hücre başına pürüzsüz bir değer verir — tutarlı komşular.',
          'Hücrelerin görünmesi veya kaybolması için noise eşik değerini kullanın.',
          'Sonsuz varyasyonlar için hücre başına dolgu, döndürme veya alt şekil değiştirin.'
        ],
        tryIt: 'Rect değerini noise değerinin yarıçapı olan bir daire ile değiştirin. Eşik değerini 0.5\'ten 0.7\'ye yükselterek tuvali daha seyrek hale getirin.'
      },
      lSystems: {
        intro: 'L-sistemler, bir aksiyoma dönüştürme kurallarını tekrar tekrar uygulayarak dizeler oluşturur. Her karakteri bir kaplumbağa komutu olarak yorumlamak — F = ileri, + = sağa dön, - = sola dön — birkaç yinelemeden sonra fraktal benzeri şekiller üretir.',
        concepts: [
          'Bir aksiyomla (tek bir dize) başlayın.',
          'Kuralları uygulayın: her karakter başka bir dizeyle değiştirilir.',
          'N yinelemeden sonra, dize çok uzun olabilir.',
          'Bir kaplumbağa ile yorumlayın: ileri, sola, sağa, it, pop.'
        ],
        tryIt: 'Kuralı "F → F-F+F" olarak ekleyin. 5 yineleme deneyin. Ağaç yetiştirmek için dallanma için [ ve ] ekleyin.'
      },
      pgraphics: {
        intro: 'createGraphics(g, y) bağımsız olarak çizebileceğiniz bir ekran dışı tuval oluşturur. Aynı çizim API\'sini destekler. Bir kez çizdikten sonra, image(pg, 0, 0) onu ana tuvele blit eder. Önbelleğe alma, katmanlama ve son işleme için kullanın.',
        concepts: [
          'PGraphics pg = createGraphics(g, y); — bir arabellek oluşturun.',
          'Gerçek Processing\'te pg.beginDraw() / pg.endDraw() çağırın; p5.js bunu gerektirmez.',
          'pg.clear(), pg.fill(), pg.rect() — aynı API, ön ekli.',
          'Bir kere arabelleğe çizmek, her kare yeniden oluşturmaktan daha hızlıdır.'
        ],
        tryIt: 'Arabelleğe bir kez yavaş bir arka plan deseni çizin. draw() içinde arabelleği blit edin ve hareketli bir ön plan şekli ekleyin.'
      },
      blendModes: {
        intro: 'blendMode() yeni piksellerin mevcut olanlarla nasıl birleştiğini değiştirir. ADD aydınlatır; siyah renkli hale gelir. MULTIPLY karartır. SCREEN aydınlatır ancak parlaklıkları korur. blendMode(BLEND) ile sıfırlayın.',
        concepts: [
          'BLEND — varsayılan alfa birleştirme.',
          'ADD — RGB toplar; parlama için harika.',
          'MULTIPLY — RGB çarpar; gölgeler ve tonlar için harika.',
          'SCREEN — çarpmanın tersi; vurgular için harika.',
          'DIFFERENCE / EXCLUSION — psikedelik sonuçlar.'
        ],
        tryIt: 'Her daireyi çizerken MULTIPLY değerine geçin. ADD ile karşılaştırın. Aynı şekiller her modun altında tamamen farklı görünür.'
      },
      saveFrame: {
        intro: 'save() mevcut tuvali bir dosyaya yazar. saveFrame() aynısını yapar ve otomatik numaralandırmayı destekler. Gerçek Processing\'te diske kaydederler; p5.js tarayıcı bir indirme tetikler. Her iki durumda da, bu nihai sanatı nasıl dışa aktaracağınızdır.',
        concepts: [
          'save("image.png") tek bir görüntü yazar.',
          'saveFrame("seq-####.png") frameCount ile otomatik numaralandırır.',
          'PNG saydamlığı korur; JPG düzleştirir.',
          'İstek üzerine yakalamak için bir tuş/fare işleyiciden çağırın.'
        ],
        tryIt: 'Mevcut tuvali kaydeden bir keyPressed ekleyin. Her kaydın benzersiz bir dosya adına sahip olması için adına hour() ve minute() dahil edin.'
      },
      exportSequence: {
        intro: 'Animasyonlar kare dizileri olarak dışa aktarılır. saveFrame("name-####.png") kare başına bir PNG yazar. Bunları ffmpeg gibi bir araçla MP4 veya GIF olarak birleştirin — Processing kendisi video yazmaz.',
        concepts: [
          'saveFrame("out-####") — #### sıfır dolgulu kare numarası olur.',
          'Hedef süreyi korumak için frameRate değerini sınırlandırın.',
          'Her çalıştırmayı dışa aktarmayın — yalnızca tetiklendiğinde kaydedin, aksi takdirde diski doldurursunuz.',
          'Harici araçlar: ffmpeg, ImageMagick, çevrimiçi GIF yapıcılar.'
        ],
        tryIt: 'Bir kare bütçesi ayarlayın — örneğin, 8 fps\'de 60 kare = 7.5 saniyelik bir döngü. Bu sayıya ulaşana kadar kaydedin, sonra noLoop().'
      },
      finalGame: {
        intro: 'Girdi, animasyon, sınıflar ve dizileri küçük bir oyunda birleştirin. Oyuncu fareyi takip eder; mermiler gökyüzünden düşer. Durum vektörler ve dizilerde yaşar; davranış update + draw içindedir. Bu döngüyü içselleştirdikten sonra, herhangi bir 2B oyunu oluşturabilirsiniz.',
        concepts: [
          'Her karede girdiye dayalı olarak oyuncuyu konumlandırın.',
          'Zamanlayıcı üzerinde engeller oluşturun (frameCount % N).',
          'Her engeli güncelleyin, çizin, sonra çarpışmaları kontrol edin.',
          'Oyun bitti: oluşturmayı durdurun, "kaybettiniz" yazın, noLoop() çağırın.'
        ],
        tryIt: 'Her karede artan bir skor ekleyin. Bir mermi oyuncuya çarptığında oyunu bitirin. Oyun bittiğinde skoru gösterin.'
      },
      finalArt: {
        intro: 'Üretken sanat çoğu Processing öğrencisinin hedefidir. İşte bir başlangıç tarifi: konumları zamanla salınan bir daire noktaları, izler biriktirmek için düşük alfa ile boyanmış. Sabitleri ayarlamak sonsuz varyasyonlar verir — bir sayı değiştirin, çalıştırın, tepki verin, tekrarlayın.',
        concepts: [
          'Bir dairenin etrafındaki açıyla adreslenen bir nokta döngüsü.',
          'Girdi olarak zaman: frameCount * 0.02 sürekli büyür.',
          'Düşük alfa dolgular zamanla katmanlanır, yumuşak, boyamsı dokular oluşturur.',
          'İki parametre (sayı, frekans) genellikle ilginç sonuçlar verir.'
        ],
        tryIt: 'Daire düzenini bir Lissajous şekli ile değiştirin: x = cos(a * 3 + t), y = sin(a * 2 + t). Farklı frekans oranlarını deneyin (3:2, 5:4).'
      }
    }
  }
};

export const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
] as const;
