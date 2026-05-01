// Numbered course structure.
export const modules = [
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
export function sectionNumber(id) {
  for (let mi = 0; mi < modules.length; mi++) {
    const idx = modules[mi].sectionIds.indexOf(id);
    if (idx !== -1) return `${mi + 1}.${idx + 1}`;
  }
  return '';
}

export function moduleNumber(id) {
  const i = modules.findIndex(m => m.id === id);
  return i < 0 ? '' : String(i + 1);
}

const SHARED = {
  brand: 'YTÜ Programlama',
  repoLabel: 'GitHub',
  downloadLabel: '⬇',
  uploadLabel: '⬆'
};

export const translations = {
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
        intro: 'Bir Processing çizimi iki özel fonksiyondan oluşur: setup() program başladığında bir kez çalışır, draw() ise sürekli — yaklaşık saniyede 60 kez — çalışır. Tüm görsel işler bunların içinde olur. Piksel ızgarasında (0,0) sol üstte yer alır; x sağa, y aşağı doğru artar.',
        concepts: [
          'size(genişlik, yükseklik) çizim alanınızı oluşturur. setup() içinde bir kez çağrılır.',
          'background(r, g, b) tüm tuvali tek renge boyar.',
          'fill(r, g, b) kendisinden sonra çizilen şekillerin iç rengini belirler.',
          'circle(x, y, çap) (x, y) merkezli dolgulu bir daire çizer.'
        ],
        tryIt: 'Arka plan rengini değiştirin, daireyi (50, 50) konumuna taşıyın ve çapını 20\'ye düşürün. setup()\'tan background()\'u kaldırırsanız ne olur?'
      },
      fundamentals: {
        intro: 'Processing size küçük bir temel şekil kümesi sunar. Bunları fill ve stroke ile birleştirince şaşırtıcı derecede zengin görseller oluşturabilirsiniz. Koordinatlar her zaman (x, y); genişlik/yükseklik veya yarıçap piksel cinsindendir.',
        concepts: [
          'rect(x, y, g, y) varsayılan olarak sol üst köşeyi kullanır.',
          'circle(x, y, d) ve ellipse(x, y, g, y) merkezi kullanır.',
          'triangle ve line sırasıyla üç ve iki nokta çifti alır.',
          'stroke() dış çizgi rengi; noStroke() kaldırır. strokeWeight() kalınlığı belirler.',
          'arc(x, y, g, y, baş, son) radyan cinsinden kısmi elips çizer.'
        ],
        tryIt: 'Basit bir ev çizin: gövde için dikdörtgen, çatı için üçgen, kapı için küçük dikdörtgen. Her birine farklı bir dolgu rengi verin.'
      },
      colors: {
        intro: 'Processing\'te renkler üç kanal kullanır — kırmızı, yeşil, mavi — her biri 0 ile 255 arasında. Alfa adlı dördüncü değer saydamlığı kontrol eder (0 = görünmez, 255 = opak). Üst üste çok sayıda yarı saydam şekil yumuşak geçişler yaratır.',
        concepts: [
          'fill(r, g, b, a) ve stroke(r, g, b, a) — alfa isteğe bağlıdır.',
          'Tek değerle fill(gri) kısayoldur: 0 siyah, 255 beyaz.',
          'x veya y üzerinde döngü, her sütun/satır için rengi değiştirmenizi sağlar — her gradyanın temeli budur.',
          'Düşük alfalı üst üste şekiller parlama ve karışım efektleri üretir.'
        ],
        tryIt: 'Dolu dikdörtgenleri dairelerle değiştirin. Üçüncü dikdörtgenin alfasını 80 yapın. Yataydan ziyade dikey bir gökkuşağı yapabilir misiniz?'
      },
      variables: {
        intro: 'Değişken, bir değeri tutan adlandırılmış bir yuvadır. Processing\'te tiple tanımlanır: int x = 50 tam sayı, float y = 3.14 ondalık sayı tutar. Her karede bir değişkeni güncellemek hareketi yaratır — şekil aslında hareket etmez; her kare onu biraz farklı konumda çizersiniz.',
        concepts: [
          'Kareler arasında değerini koruması için setup()/draw() dışında tanımlayın.',
          'int tam sayılar, float ondalıklar, String metin.',
          'x = x + hız: mevcut x\'i al, hızı ekle, sonucu x\'e yaz.',
          'x ekrandan çıkınca başa sarın — sürekli döngü yanılsaması elde edin.'
        ],
        tryIt: 'Farklı hızda hareket eden ikinci bir daire ekleyin. Hızı setup() içinde random(1, 5) ile rastgele seçin.'
      },
      conditionals: {
        intro: 'Programlar if ifadeleriyle karar verir. Parantez içindeki koşul ya true ya false döndürür. else alternatif yolu sunar. Koşullar karşılaştırmalardan (<, >, ==, !=) ve mantıksal operatörlerden (&& ve, || veya) oluşur.',
        concepts: [
          'if (koşul) { ... } else { ... } — else isteğe bağlıdır.',
          'Karşılaştırma boolean döndürür: true ya da false.',
          'mouseX ve mouseY imleç konumunu piksel cinsinden verir.',
          'Üçlü operatör koşul ? a : b, ifadeler için kompakt if/else\'tir.'
        ],
        tryIt: 'Tuvali dört parçaya bölün. Her parçanın kendi rengi olsun. İpucu: mouseX ve mouseY\'yi merkeze karşılaştırıp if/else\'i iç içe yazın.'
      },
      loops: {
        intro: 'for döngüsü bir kod bloğunu kontrollü sayıda tekrar eder. Üç parçası vardır: başlatma (sayaç), koşul (devam etsin), güncelleme (her seferinde yapılan). Trigonometri ile birleşince döngü, desen üreten bir motor olur.',
        concepts: [
          'for (int i = 0; i < n; i++) { ... } — n kez, i = 0 … n-1.',
          'sin(açı) ve cos(açı) -1 ile 1 arası değer döndürür.',
          'Nesneleri açıyla yerleştirmek dairesel düzen verir: (cx + cos(a) * r, cy + sin(a) * r).',
          'İç içe döngüler ızgara oluşturur: biri x için, biri y için.'
        ],
        tryIt: '12 yerine 36 kullanıp yoğun bir halka yapın. İçte küçük daireler çizen ikinci bir döngü ekleyin. Yarıçapı i\'ye bağlayarak spiral deneyin.'
      },
      functions: {
        intro: 'Fonksiyon, adlandırılmış ve yeniden kullanılabilir bir kod parçasıdır. Girdiler (parametreler) alır ve sık sık değer döndürür. Kendi fonksiyonlarınız kodu kısaltır ve daha yüksek bir soyutlama seviyesinde düşünmenize izin verir — bir düzine trig çağrısı yerine "yıldız çiz" gibi.',
        concepts: [
          'void adı(tip param, ...) bir şey döndürmeyen fonksiyon tanımlar.',
          'Parametreler yereldir; dış programı etkilemez.',
          'Bir fonksiyon farklı değerlerle defalarca çağrılabilir.',
          'beginShape() / endShape() vertex() çağrılarıyla özel çokgen tanımlamanıza izin verir.'
        ],
        tryIt: 'drawFlower(x, y, yapraklar) fonksiyonu yazın: drawStar\'ı kullansın ama merkezine bir daire eklesin. Üç kez çağırın.'
      },
      interaction: {
        intro: 'Processing fare konumunu dahili değişkenler olarak sunar — mouseX ve mouseY her karede güncellenir. mousePressed() gibi olay fonksiyonları yalnızca olay olduğunda tetiklenir. "Sürekli" değişkenlerle "tek seferlik" olaylar arasındaki bu ayrım, duyarlı çizimlerin anahtarıdır.',
        concepts: [
          'mouseX, mouseY — her karede güncellenir, draw() içinde okunur.',
          'pmouseX, pmouseY — önceki karenin konumu; iz çizmek için kullanışlı.',
          'mouseIsPressed — herhangi bir tuş basılıyken true.',
          'mousePressed() — tıklama anında bir kez çalışan geri çağırma.'
        ],
        tryIt: 'Daire boyutunu farenin hızına bağlayın. İpucu: dist(pmouseX, pmouseY, mouseX, mouseY) karedeki hareket miktarını verir.'
      },
      keyboard: {
        intro: 'Klavye girişi iki türlüdür: draw() içinde sorguladığınız sürekli keyIsDown(TUŞ) kontrolü ve keyPressed() gibi tek seferlik olaylar. Düzgün hareket için her zaman keyIsDown kullanın — tuş olayları basılma başına yalnızca bir kez tetiklenir.',
        concepts: [
          'keyIsDown(LEFT_ARROW) — basılıyken true. Diğerleri: UP_ARROW, DOWN_ARROW, RIGHT_ARROW.',
          'key son karakteri, keyCode sayısal kodu tutar.',
          'keyPressed() basılışta, keyReleased() bırakışta bir kez çalışır.',
          'constrain(değer, min, maks) ile hareketi sınırlayıp nesneleri ekranda tutun.'
        ],
        tryIt: 'Sol/sağa alternatif olarak A ve D tuşlarını ekleyin. constrain() ile topu tuvalden çıkarmayın.'
      },
      animation: {
        intro: 'Pürüzsüz animasyon, pürüzsüzce değişen değerlerden gelir. frameCount 0\'dan başlar ve her karede artar; çarpılıp sin() / cos() içine verilince -1 ile 1 arası salınan değerler üretir. Her öğeye farklı ofset vererek dalgalar, takipler ve faz desenleri yapabilirsiniz.',
        concepts: [
          'frameCount * hız salınımın ne kadar hızlı olduğunu belirler.',
          'Genlik (sin\'i çarptığınız sayı) salınımın büyüklüğüdür.',
          'Her öğeye ofset (i * 0.8 gibi) komşuları senkronsuz yapar.',
          'frameRate(fps) çizim döngüsünün hızını sınırlar veya artırır.'
        ],
        tryIt: 'Her dairenin sadece y\'sini değil boyutunu da animasyonlayın. sin(frameCount * 0.02 + i) * 127 + 128 ile renk döngüsü ekleyin.'
      },
      transforms: {
        intro: 'translate, rotate ve scale şekilleri değil koordinat sisteminin kendisini değiştirir. Bu çok güçlüdür: "bir şekli" (0, 0)\'da bir kez çizip istediğiniz yere yerleştirebilir/yönlendirebilirsiniz. push() mevcut durumu kaydeder; pop() geri yükler — her zaman eşleştirin.',
        concepts: [
          'translate(x, y) orijini taşır. Sonraki çizimler ona göredir.',
          'rotate(açı) koordinat sistemini döndürür. Açılar radyan cinsindendir (PI = 180°).',
          'scale(oran) büyütür. scale(-1, 1) yatay yansıtır.',
          'push() / pop() dönüşümleri izole eder, sonraki koda sızmaz.'
        ],
        tryIt: 'rotate\'i i * PI / 8 yaparak yaprak sayısını ikiye katlayın. İçine açıya göre kaydırılmış daha küçük yapraklar çizen başka bir döngü yerleştirin.'
      },
      trigonometry: {
        intro: 'sin ve cos yaratıcı kodlamanın iş atlarıdır. Bir açıyı -1 ile 1 arası yumuşak bir değere dönüştürürler. Bu kadar bile dalgaları, yörüngeleri, nabızları, geçişleri ve çoğu organik hareketi verir. İki kural yeter: cos birim çemberdeki x\'i, sin ise y\'yi verir.',
        concepts: [
          'Radyan: 0 = sağ, PI/2 = aşağı, PI = sol, 3*PI/2 = yukarı. TWO_PI tam turdur.',
          'Genlik * sin(...) dalgayı ölçekler; ofset + sin(...) yukarı/aşağı kaydırır.',
          'Aynı açıyla cos(açı) ve sin(açı) bir daire oluşturur.',
          'Frekans = girişin ne hızla büyüdüğü. Yüksek frekans = sıkı dalgalar.'
        ],
        tryIt: 'sin(x * 0.05 + frameCount * 0.03) ile üçüncü bir dalga ekleyin — animasyonlu olacak. Üçüncü bir renkte çizdirin.'
      },
      pvector: {
        intro: 'PVectorler uzaydaki noktaları veya yönleri temsil eder. x, y ve z\'yi tek bir nesnede toplarlar ve add(), sub() gibi matematiksel metotlar sunarlar. Fizik ve hareketle uğraşırken kodu çok daha temiz hale getirirler.',
        concepts: [
          'PVector pos = new PVector(x, y); bir vektör oluşturur.',
          'pos.add(vel) hız vektörünü kullanarak konumu günceller.',
          'PVectorler konum, hız ve ivmeyi temsil edebilir.'
        ],
        tryIt: 'Hız bileşenlerini değiştirin veya her karede hıza eklenen bir ivme vektörü ekleyin.'
      },
      particles: {
        intro: 'Hareket eden bir nesneniz olduğunda, yüz tane de neredeyse aynı kolaylıkta olur. Dizi çok sayıda öğe tutar; her karede bir for döngüsü her birini günceller. Her parçacık kendi konum ve hızına sahip küçük bir nesnedir. Ortaya çıkan davranış — sürü, alan, akış — bu basit tariften başlar.',
        concepts: [
          'Diziler çok değer tutar; .push() ekler; .length sayıyı verir.',
          'Her parçacığın en azından konumu (x, y) ve hızı (vx, vy) olmalı.',
          'Her kare: konumu hızla güncelle, sonra çiz.',
          'Kenardan sekme: konum dışarı çıkarsa ilgili hızın işaretini ters çevir.'
        ],
        tryIt: 'Her parçacığın vy\'sine her karede 0.1 ekleyerek yerçekimi uygulayın. vx ve vy\'yi 0.99 ile çarparak sürtünme ekleyin.'
      },
      classes: {
        intro: 'Sınıf bir şablondur. Veriyi (alanlar) ve davranışı (metotlar) tek bir adlandırılmış tipe gruplandırır. Her örneğin kendi veri kopyası vardır. Çok sayıda benzer nesneniz varsa, sınıflar dağınık paralel dizilerin yerini tek temiz bir nesneyle alır.',
        concepts: [
          'class Ad { ... } şablonu tanımlar.',
          'Sınıf adıyla aynı adı taşıyan fonksiyon, new Ad(...) yazıldığında çalışan yapıcıdır.',
          'this.x örneğin kendi x alanına başvurur.',
          'Metotlar (void update(), void show()) sınıfa bağlı fonksiyonlardır.'
        ],
        tryIt: 'void highlight() metodu ekleyin: fare topun yarıçapı içindeyse etrafına halka çizsin. draw()\'dan çağırın.'
      },
      noise: {
        intro: 'random() zıplar — kaos için iyi, organik hareket için kötü. Perlin gürültüsü (noise()) pürüzsüzdür: yakın girdiler yakın çıktılar verir. Artan bir zaman değeri t verilince titreme yerine sürüklenme üretir. Girdiyi kaydırarak bağımsız birden çok gürültü akımı yaratın.',
        concepts: [
          'noise(t) 0 ile 1 arası, t\'de pürüzsüz bir değer döndürür.',
          't\'yi her karede küçük bir miktarda artırın; büyük artış daha hızlı değişim demektir.',
          'noise(x, y) veya noise(x, y, t) 2B ve 3B gürültü verir — bulutlar ve araziler için birebir.',
          'Çıktıyı istediğiniz aralığa map(değer, 0, 1, alt, üst) ile eşleyin.'
        ],
        tryIt: '20 ayrı daire çizin, her biri noise(t + i * 10) kullansın — bağımsızca sürüklenecekler. Düşük alfa ile yumuşak bulut görünümü verin.'
      },
      recursion: {
        intro: 'Özyinelemeli fonksiyon, bir durma koşuluna kadar kendini daha küçük girdilerle çağırır. Kendine benzer biçimleri — ağaçlar, spiraller, kar taneleri — ifade etmenin en doğal yoludur. Dönüşümlerle birleşince birkaç satır, manuel çizimle sayfalar sürecek şekiller üretir.',
        concepts: [
          'Her özyinelemenin bir temel durumu olmalı — daha fazla çağrıyı durduran koşul.',
          'Her özyinelemeli çağrı bir parametreyi (uzunluk, derinlik) temel duruma doğru küçültür.',
          'Özyineleme içinde push() / pop() dalların dönüşümünü izole eder.',
          'Küçük değişiklikler (açı, küçültme oranı) çıktıyı çarpıcı biçimde değiştirir.'
        ],
        tryIt: 'PI/6\'yı PI/4 yapıp dalları genişletin. Üçüncü bir özyinelemeli çağrı ekleyerek ağacı gürleştirin.'
      },
      threed: {
        intro: 'Processing, WEBGL işleyicisi aracılığıyla 3B işlemeyi destekler. Z ekseni eklemek derinlik, ışıklar ve kameralar içeren sahneler oluşturmanıza olanak tanır.',
        concepts: [
          'size(w, h, WEBGL) 3B modunu etkinleştirir.',
          'translate(x, y, z) ve rotateX() / rotateY() şekilleri 3B uzayda taşır ve yönlendirir.',
          'lights() varsayılan gölgelendirmeyi ekler.'
        ],
        tryIt: 'box()\'u sphere() ile değiştirin veya farklı Z çevirileri kullanarak bir döngü ile birden çok kutu çizin.'
      },
      text: {
        intro: 'Processing\'te metin yerleştirilmez, çizilir. text(metin, x, y) mevcut dolgu rengiyle verilen koordinata metni koyar. textSize punto boyutunu, textAlign ise hizalamayı belirler. HTML\'den çok, harflerin resmini çizmeye benzer.',
        concepts: [
          'text(str, x, y) — x, y varsayılan olarak taban çizgisidir.',
          'textAlign(CENTER, CENTER) hizalamayı glif ortasına alır.',
          'textSize(n) piksel boyutu. textFont(font) yüklü bir fontu kullanır.',
          'frameCount veya noise ile her harfi animasyonlayabilirsiniz.'
        ],
        tryIt: '"p5.js"\'in her harfini bağımsız animasyonlayın — her birine sin(frameCount * 0.05 + i) temelli bir y ofseti verin.'
      },
      gradient: {
        intro: 'Yerleşik gradyan ilkeli yok — onu siz kurarsınız. Numara lerp\'tir (doğrusal enterpolasyon): lerp(a, b, t), t 0\'dan 1\'e kayarken a ile b arasında değer döndürür. Piksel satırları üzerinde dönüp her renk kanalını lerp\'leyerek istediğiniz gradyanı boyayabilirsiniz.',
        concepts: [
          'lerp(a, b, t) — t=0 ise a, t=1 ise b döner.',
          'Dikey gradyan için y satırlarında döngü kurup her satıra bir yatay çizgi çizin.',
          'lerpColor(c1, c2, t) iki rengi doğrudan karıştırır; üç lerp\'ten pratiktir.',
          'Gradyan üzerine yarı saydam daireler katmanlamak derinlik ve atmosfer yaratır.'
        ],
        tryIt: 'Gradyanı dikeyden çaprazlamasına değiştirin — t olarak (x + y) / (width + height) kullanın. Renkleri günbatımı tonlarına çevirin.'
      },
      stringBasics: {
        intro: 'String, tırnak içine alınmış karakter dizisidir. Processing\'te String ile tanımlanır ve çoğu işlem Java\'ya benzer: charAt(i) bir karakteri okur, toUpperCase()/toLowerCase() büyük/küçük harf çevirir. Bu transpile edilmiş ortamda uzunluk, metot değil özelliktir (.length).',
        concepts: [
          'String ad = "metin"; bir string tanımlar ve başlatır.',
          'ad.length karakter sayısıdır (JS tarzı; Java\'da ad.length()).',
          'ad.charAt(i) i indeksindeki karakteri döndürür.',
          'ad.toUpperCase() ve ad.toLowerCase() yeni stringler döndürür — orijinaller değişmez.'
        ],
        tryIt: 'Adınızla bir String tanımlayın. Uzunluğunu, ilk karakterini ve ters çevrilmiş halini ekrana çizdirin.'
      },
      stringOps: {
        intro: 'String\'ler + ile birleşir ve dilimleme, arama, değiştirme metotları sunar. substring(a, b) a indeksinden b\'ye (b dahil değil) parçayı verir. indexOf konum döner ya da -1. replace eşleşmeleri değiştirir.',
        concepts: [
          'a + b iki stringi yeni bir stringte birleştirir.',
          'str.substring(başla, bit) — bit dahil değil.',
          'str.indexOf(alt) konumu döner; bulamazsa -1.',
          'str.replace(eski, yeni) eşleşmeleri değiştirir.',
          'str.split(ayraç) parçaları dizi olarak döndürür.'
        ],
        tryIt: 'Bir cümleyi alın, kelimelere bölün ve her kelimeyi ayrı satırda çizin.'
      },
      stringFormat: {
        intro: 'Bazen sayıları string\'e ya da tersi gerekir. Processing\'in nf() fonksiyonu float\'ları sabit basamakla biçimler. hex() onaltılık döndürür. int() ve float() string\'i sayıya çevirir.',
        concepts: [
          'nf(değer, basamak, ondalık) sıfırlarla doldurup ondalığı kırpar.',
          'hex(255) → "FF". Renk kodları için kullanışlı.',
          'int("17") → 17. float("2.5") → 2.5.',
          '"" + sayı string\'e zorlar: "" + 42 → "42".'
        ],
        tryIt: 'frameCount\'u 6 basamaklı bir string olarak gösterin — nf(frameCount, 6) kullanın.'
      },
      arrays: {
        intro: 'Diziler, aynı tipte sabit sayıda değer tutar. int[] veya float[] ile tanımlanır, new int[N] ile ayrılır. Elemanlara [i] ile (sıfırdan başlar), eleman sayısına .length ile erişilir. Çok değerle çalışmanın temel aracıdır.',
        concepts: [
          'int[] yükseklikler = new int[10]; 10 sıfır ayırır.',
          'yükseklikler[i] i indeksindeki değeri okur veya yazar.',
          'yükseklikler.length toplam eleman sayısıdır.',
          'İndisler 0\'dan length-1\'e kadardır. Dışına çıkmak hatadır.'
        ],
        tryIt: 'Rastgele yükseklikleri sin tabanlı yapın — bir dalga oluşsun: yükseklikler[i] = 120 + sin(i * 0.5) * 70.'
      },
      twoDArrays: {
        intro: '2B dizi bir ızgarayı temsil eder: satırlar ve sütunlar. Java\'da int[][] grid; burada JavaScript stili iç içe dizi kullanırız — aynı şey. grid[x][y] ile erişilir. Karo haritaları, hücresel otomatlar, görsel ızgaraları için kullanışlı.',
        concepts: [
          'grid[x][y] hücreyi (x, y) adresler — iki indis.',
          'İç içe iki döngüyle iki boyutu da gezin.',
          'Karo haritaları, otomatlar, satranç tahtaları için ideal.',
          'Bellek karesel büyür: 100x100 ızgara 10.000 hücredir.'
        ],
        tryIt: 'Hücre rengini random yerine noise(x * 0.1, y * 0.1) ile yapın. Sonuç pürüzsüz olur, statik değil.'
      },
      arrayList: {
        intro: 'Java\'nın ArrayList\'i değişken uzunlukta liste tutar. JavaScript dizileri zaten böyle çalışır: push ekler, pop çıkarır, splice indise göre siler. Transpiler dizileri bu şekilde işler.',
        concepts: [
          'arr.push(öğe) sona ekler.',
          'arr.pop() son öğeyi çıkarır ve döndürür.',
          'arr.length otomatik olarak büyür.',
          'arr.splice(i, 1) i indeksindeki öğeyi siler.'
        ],
        tryIt: 'words.pop() çağıran bir keyPressed ekleyin — tıklama ekler, tuş çıkarır.'
      },
      mapConstrain: {
        intro: 'map() bir sayıyı bir aralıktan başkasına ölçekler — yaratıcı kodlamanın en kullanışlı fonksiyonu. constrain() bir sayıyı min ve maks ile sıkıştırır. Birlikte, kullanıcı girdisini görsel özelliklere temiz şekilde çevirir.',
        concepts: [
          'map(değer, in_min, in_max, out_min, out_max) — orantılı yeniden ölçek.',
          'constrain(değer, min, maks) aralığa sıkıştırır.',
          'map çıkış sınırlarını aşabilir — constrain ile sarın.',
          'İyi bestelenir: constrain(map(...), alt, üst).'
        ],
        tryIt: 'mouseY\'yi alpha\'ya (0..255) eşleyin, görünür kalsın diye 50..255 ile constrain\'leyin.'
      },
      lerpEasing: {
        intro: 'Doğrusal enterpolasyon (lerp) iki değer arasında karışım yapar. lerp(a, b, t) t=0\'da a, t=1\'de b döner. Her karede küçük t ile çağırmak yumuşak ease üretir — değer hedefe yaklaşır, sıçramaz.',
        concepts: [
          'lerp(a, b, t) — t [0, 1] aralığında.',
          'Ease deseni: x = lerp(x, hedef, 0.1) her karede.',
          'Küçük t = yavaş ease. 0.5 hızlı, 0.02 ağır.',
          'lerpColor(c1, c2, t) renkleri doğrudan karıştırır.'
        ],
        tryIt: '0.08\'i 0.3 yapın (canlı) ya da 0.02 (yavaş). y\'yi de mouseY\'ye lerp\'leyerek imleci pürüzsüzce takip edin.'
      },
      mathFuncs: {
        intro: 'Processing herhangi bir dilde bulacağınız matematik fonksiyonlarını sunar: abs, sqrt, pow, floor, ceil, round, min, max, dist. Sayı alır, sayı döndürür — Processing\'e özel bir lezzet yok, sürekli kullanacağınız araçlar.',
        concepts: [
          'abs(x) — mutlak değer (her zaman ≥ 0).',
          'sqrt(x), pow(x, n) — karekök ve üs.',
          'floor(x), ceil(x), round(x) — tamsayıya çevirme.',
          'dist(x1, y1, x2, y2) — iki nokta arası uzaklık.',
          'min(a, b), max(a, b) — küçük / büyük olanı seçer.'
        ],
        tryIt: 'inside(x, y, cx, cy, r) fonksiyonu yazın — daire içindeyse true döner. Üzerinden geçince daireyi vurgulayın.'
      },
      imageBasics: {
        intro: 'Görseller setup() içinde loadImage(url) ile yüklenir, image(img, x, y) ile çizilir. loadImage gerçek bir URL ister — yerel dosyalar için data/ klasörünü kullanın. Bu öğretici ortamda primitive\'lerle simüle ediyoruz, API aynı.',
        concepts: [
          'PImage img = loadImage("yol/dosya.png"); — setup\'ta bir kez.',
          'image(img, x, y) sol üst köşeye çizer.',
          'image(img, x, y, g, y) ölçekleyerek çizer.',
          'img.width ve img.height boyutları verir.'
        ],
        tryIt: 'Gerçek bir Processing skecinde bir PNG\'yi sketch klasörüne atın ve loadImage ile yükleyin. Fareyi takip etsin.'
      },
      imageTint: {
        intro: 'tint() çizilen görselleri yeniden renklendirir — her piksel verilen renkle çarpılır. tint(255, 0, 0) her şeyi kırmızılaştırır, tint(255, 100) saydamlığı %40\'a düşürür. Kapatmak için noTint().',
        concepts: [
          'tint(r, g, b) her kanalı çarpar.',
          'tint(gri, alpha) tek tonlu ve şeffaflık için.',
          'noTint() normal çizime döndürür.',
          'Aynı görseli farklı renklerle katmanlamak halftone etkisi verir.'
        ],
        tryIt: 'Bir görseli arka arkaya farklı konum ve renkle birden çok kez tint\'leyin — kromatik aberasyon etkisi.'
      },
      pixelArray: {
        intro: 'loadPixels() tuvali pixels[] dizisine kopyalar. Her piksel 4 girişten oluşur: R, G, B, A. Değiştirdikten sonra updatePixels() çağırarak geri yazın. Görselleri tek piksel düzeyinde inşa etmenin yolu — shader\'lar, mozaikler, efektler için.',
        concepts: [
          'loadPixels() pixels[]\'i mevcut tuvalden tazeler.',
          'pixels[(x + y * width) * 4 + 0] (x, y) pikselinin kırmızı kanalı.',
          '+1 yeşil, +2 mavi, +3 alpha. Her piksel 4 bayt.',
          'updatePixels() değişiklikleri tuvale yazar.'
        ],
        tryIt: 'Doğrusal gradyanı sin tabanlı şeritlerle değiştirin: kırmızı kanal sin(x * 0.1) * 127 + 128.'
      },
      getSet: {
        intro: 'set(x, y, renk) tek bir piksel yazar. get(x, y) bir piksel okur. pixels[]\'den yavaştır ama küçük işler için daha okunaklıdır. set() updatePixels() istemez — anında uygular.',
        concepts: [
          'set(x, y, color(r, g, b)) tek piksel ayarlar.',
          'get(x, y) (x, y) konumundaki rengi döndürür.',
          'Çok sayıda piksel için pixels[] daha hızlıdır.',
          'get/set normal çizimle karışık kullanılabilir.'
        ],
        tryIt: 'get(mouseX, mouseY) ile imlecin altındaki rengi örnekleyin, etrafına o renkle daireler çizin.'
      },
      imageFilter: {
        intro: 'filter() tüm tuvale yerleşik bir dönüşüm uygular. BLUR yumuşatır, GRAY griye çevirir, INVERT renkleri ters çevirir, THRESHOLD ikilik yapar. Her birinin gücü için isteğe bağlı parametre.',
        concepts: [
          'filter(BLUR, yarıçap) — Gauss bulanıklığı.',
          'filter(GRAY) — gri tona indir.',
          'filter(INVERT) — renk negatifi.',
          'filter(THRESHOLD, seviye) — yüksek kontrast siyah-beyaz.'
        ],
        tryIt: 'Sırasıyla BLUR, GRAY, INVERT uygulayın. Sıralarını değiştirin — sonuç farklı olur. Neden?'
      },
      millisTime: {
        intro: 'millis() sketch başladığından beri geçen milisaniyeyi döndürür. frameRate\'den bağımsız zamanlama için en hassas yöntem. frameCount kareleri sayar; millis duvar saatini.',
        concepts: [
          'millis() / 1000.0 — geçen saniye.',
          'sin/cos\'a girdi olarak verirseniz FPS\'den bağımsız zaman tabanlı animasyon üretir.',
          'startTime saklayıp millis() ile karşılaştırarak süre hesabı yapın.',
          'Sıfırlama: yeni bir "epoch" saklayın — Processing millis\'i kendi başına sıfırlamaz.'
        ],
        tryIt: 'millis() 5000\'i geçince bir aksiyon tetikleyin — tuvali yakın, log basın, renk değiştirin.'
      },
      dateTime: {
        intro: 'Processing sistem saatine erişir: year(), month(), day(), hour(), minute(), second(). Her biri o anki değeri sayı olarak döndürür. text() ile birleşince saatler, takvimler ve zaman duyarlı animasyonlar elde edersiniz.',
        concepts: [
          'hour() 0-23, minute() ve second() 0-59 döndürür.',
          'year() / month() / day() takvim değerleri (ay 1-12).',
          'Her çağrı taze okur — zaman geçtikçe güncellenir.',
          'nf() ile sıfır ekleyerek biçimleyin: nf(minute(), 2).'
        ],
        tryIt: 'month()\'u 0-360 hue aralığına eşleyerek tuvali mevsimlerden geçirin.'
      },
      extendsClass: {
        intro: 'Bir sınıf başkasından kalıtım alır, alanlarını ve metotlarını miras alır. Çocuk super() ile ebeveynin yapıcısını çağırır. Kalıtım, ilişkili tipler arasında davranış paylaşmanı sağlar — Shape konum verir; Circle/Square kendi draw\'larıyla genişletir.',
        concepts: [
          'class Çocuk extends Ebeveyn { ... } — kalıtım tanımlar.',
          'super(args) ebeveyn yapıcıyı çağırır.',
          'Miras alınan metotlar çocukta yeniden tanımlanarak override edilir.',
          '"-dir" ilişkisi için kalıtım, "-i var" için kompozisyon.'
        ],
        tryIt: 'Shape\'i extend eden bir Square sınıfı ekleyin (kenar uzunluğu). Aynı döngüde balonlarla karışık çizin.'
      },
      polymorphism: {
        intro: 'Çok biçimlilik: aynı metot adı, nesnenin gerçek tipine göre farklı davranış. Bir Animal listesi Dog ve Cat tutabilir; her birinde speak() farklı çıktı verir, tip kontrolü yapmadan. Strateji desenleri ve eklenti mimarilerinin temeli.',
        concepts: [
          'Metodu ebeveynde tanımla, çocuklarda override et.',
          'Ebeveyn referansta çağrı, gerçek alt sınıfa dispatch edilir.',
          'Tip kontrol eden uzun if/else zincirlerinden temiz.',
          'Strateji desenleri ve eklenti mimarilerinin temeli.'
        ],
        tryIt: '"tweet" döndüren bir Bird sınıfı ekleyin. Diziye birkaç bird push edin — döngü değişmeden çalışır.'
      },
      vertexShape: {
        intro: 'Özel çokgenler beginShape(), birkaç vertex(x, y) ve endShape(CLOSE) ile yapılır. CLOSE bayrağı son vertex\'i ilkine bağlar. İstediğiniz kadar vertex ekleyin — Processing sırayla bağlar.',
        concepts: [
          'beginShape() ve endShape(CLOSE) çokgeni çerçeveler.',
          'vertex(x, y) bir köşe ekler.',
          'beginShape\'den önce stroke() ve fill() ile stil belirleyin.',
          'beginShape(POINTS), beginShape(LINES), beginShape(TRIANGLES) — çizim modları.'
        ],
        tryIt: 'İki yarıçap (küçük ve büyük) etrafında dönerek bir yıldız yapın. Klasik 5 köşeli yıldız çıkar.'
      },
      bezierCurve: {
        intro: 'Bezier eğrileri çapa ve kontrol noktalarıyla tanımlanan pürüzsüz eğrilerdir. bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2) iki kontrol noktasına bükülmüş kübik bir eğri çizer. Kontrol noktaları eğride yer almaz, çekerler.',
        concepts: [
          'bezier() iki kontrol noktalı kübik eğri çizer.',
          'curveVertex() noktalardan geçen Catmull-Rom benzeri spline.',
          'Çapa noktaları başlangıç/bitiş; kontrol noktaları bükümü şekillendirir.',
          'SVG yolları, organik şekiller ve hareket yolları için.'
        ],
        tryIt: 'Kontrol noktalarını sin/cos ile animasyonlayın — eğri nefes alır gibi olur.'
      },
      customShapes: {
        intro: 'vertex(), trig ve parametreleri birleştirerek yeniden kullanılabilir şekil fonksiyonları yazın. drawCog(cx, cy, r, diş) merkez, yarıçap ve diş sayısını alır, bir daire etrafında iki yarıçap arasında geçiş yapar. Aynı fikir yıldızlar ve güneş ışınlarını da üretir.',
        concepts: [
          'Şekil mantığını fonksiyona sarın — aynı çağrı farklı boyutta çizer.',
          'Açıyı 0\'dan TWO_PI\'ye sürükleyerek bir daireyi gezin.',
          'Döngüde iki yarıçap arasında geçiş yapmak diş, çentik, yıldız üretir.',
          'İkinci geçiş iç detay (delik, gömme) ekleyebilir.'
        ],
        tryIt: 'Açı parametresi ekleyip frameCount * 0.01 ile dönelim. Birden çok dişliyi yan yana koyun, birbirine geçer gibi görünsün.'
      },
      physicsGravity: {
        intro: 'En basit fizik motoru: konum, hız, ivme. Her karede vel += acc, sonra pos += vel. (0, 0.2) ivmesi yerçekimidir — hız zamanla aşağı doğru artar. Sekme y hızının işaretini ters çevirir, biraz enerji kaybeder.',
        concepts: [
          'pos += vel; vel += acc; — Euler entegrasyonu.',
          'Yerçekimi sürekli aşağı bir ivme vektörüdür.',
          'Sekme: sınır dışında vel\'i ters çevirip < 1 katsayıyla çarp (enerji kaybı).',
          'PVector bu vektörleri temiz nesne metotlarına sarar.'
        ],
        tryIt: 'acc.x\'i küçük bir değere koyarak rüzgar ekleyin. Her karede vel\'i 0.99 ile çarparak hava sürtünmesi ekleyin.'
      },
      physicsSprings: {
        intro: 'Yay nesnesini, dinlenme konumuna doğru deplasmanla orantılı kuvvetle çeker. Hooke yasası: F = -k * (x - rest). Sönümleme (hızı ~0.95 ile çarp) eklerseniz salınım eninde sonunda durur.',
        concepts: [
          'force = -k * (x - rest), k sertlik.',
          'velocity += force; velocity *= sönümleme; position += velocity.',
          'Sönümleme yoksa yay sonsuza dek salınır.',
          'k ve sönümleme birer ayar — zevkinize göre değiştirin.'
        ],
        tryIt: 'k = 0.2 (çok sert) vs 0.01 (gevşek) deneyin. damping = 1 (sürekli) vs 0.85 (hızlı durur).'
      },
      physicsCollision: {
        intro: 'İkili çarpışma: her top çifti için uzaklık yarıçaplar toplamından küçükse çakışırlar — basit elastik tepki için hızlarını takas edin. O(n²)\'dir, çok nesnede yavaşlar ama düzinelerce için yeterli.',
        concepts: [
          'dist(a.pos.x, a.pos.y, b.pos.x, b.pos.y) < a.r + b.r → çarpışma.',
          'Hızları takas etmek hızlı (kayıplı) yanıttır.',
          'Gerçek elastik çarpışma vektör ve kütle kullanır — bu görsel yaklaşımdır.',
          'Çok nesne için uzamsal bölümleme (ızgara, quad tree).'
        ],
        tryIt: '30 topa çıkın ve FPS\'in düştüğüne bakın. 6\'ya düşürüp ID\'leri renklendirin, hangi çiftin çarpıştığını görün.'
      },
      flowField: {
        intro: 'Akış alanı her noktayı bir yöne eşler. Açıyı noise() ile üretmek organik, sürüklenen hareket verir. Parçacıklar yerel alanın yönünde adım atar — sonuç rüzgarı, akıntıyı, dumanı andırır.',
        concepts: [
          'açı = noise(x * ölçek, y * ölçek) * TWO_PI * n. n "girdap" sayısını belirler.',
          'Her parçacığı (cos(açı), sin(açı)) * hız ile adımlayın.',
          'Üçüncü gürültü boyutu olarak frameCount alanı zamanla geliştirir.',
          'Düşük alpha iz bırakır — akış çizgileri görünür.'
        ],
        tryIt: 'Rastgele noktaları kalıcı parçacıklarla değiştirin. Her parçacık alan boyunca yürüsün; tuvalden çıkınca sıfırlansın.'
      },
      gridGen: {
        intro: 'Üretken sanat çoğu zaman bir ızgarayla başlar. Hücreleri dolaşın; her hücre için noise, konum veya rastgele temelli karar verin. Izgara yapı, hücre mantığı çeşitlilik sağlar.',
        concepts: [
          'İç içe iki döngü ızgarayı gezer.',
          'noise(x * ölçek, y * ölçek) hücre başına yumuşak değer — komşular tutarlı.',
          'Eşik uygulayarak hücreleri görünür/görünmez yapın.',
          'Aynı ızgaradan farklı görselleştirmeler: dolgu, döndürme, alt-şekil…'
        ],
        tryIt: 'rect yerine yarıçapı noise olan circle çizin. Eşiği 0.5\'ten 0.7\'ye çıkararak tuvali seyrekleştirin.'
      },
      lSystems: {
        intro: 'L-sistemleri bir aksiyom üzerine yer değiştirme kuralları uygulayarak string üretir. Her karakteri turtle komutu olarak yorumlayınca — F = ileri, + = sağa dön, - = sola dön — birkaç iterasyonda fraktal benzeri şekiller çıkar.',
        concepts: [
          'Bir aksiyom (tek bir string) ile başlayın.',
          'Kuralları uygulayın: her karakter başka bir stringe dönüşür.',
          'N iterasyon sonra string çok uzayabilir.',
          'Turtle ile yorumlayın: ileri, sol, sağ, push, pop.'
        ],
        tryIt: '"F → F-F+F" kuralını deneyin. 5 iterasyon yapın. Dallanma için [ ve ] ekleyip ağaç yetiştirin.'
      },
      pgraphics: {
        intro: 'createGraphics(g, y) ekran dışında bağımsız çizebileceğiniz bir tuval oluşturur. Aynı çizim API\'sini destekler. Çizdikten sonra image(pg, 0, 0) ile ana tuvale aktarırsınız. Önbellekleme, katmanlama ve son işlem için kullanılır.',
        concepts: [
          'PGraphics pg = createGraphics(g, y); — tampon oluştur.',
          'Gerçek Processing\'de pg.beginDraw() / pg.endDraw() çağrılır; p5.js\'de gerek yok.',
          'pg.clear(), pg.fill(), pg.rect() — aynı API, önek ile.',
          'Bir kere tampona çizmek her kare yeniden çizmekten hızlıdır.'
        ],
        tryIt: 'Tampona bir kere yavaş bir arka plan deseni çizin. draw()\'da onu ve hareket eden bir nesneyi birlikte gösterin.'
      },
      blendModes: {
        intro: 'blendMode() yeni piksellerin var olanlarla nasıl karışacağını değiştirir. ADD aydınlatır; siyah renkliye döner. MULTIPLY karartır. SCREEN aydınlatır ama parlakları korur. blendMode(BLEND) ile sıfırlayın.',
        concepts: [
          'BLEND — varsayılan alpha kompozisyon.',
          'ADD — RGB toplar; parlama için ideal.',
          'MULTIPLY — RGB çarpar; gölge ve ton için.',
          'SCREEN — multiply\'ın tersi; vurgu için.',
          'DIFFERENCE / EXCLUSION — psikedelik sonuçlar.'
        ],
        tryIt: 'Her daire arasında MULTIPLY\'a geçin. ADD ile karşılaştırın. Aynı şekiller mod altında tamamen farklı görünür.'
      },
      saveFrame: {
        intro: 'save() o anki tuvali bir dosyaya yazar. saveFrame() aynısını yapar ve otomatik numaralandırma destekler. Gerçek Processing diske kaydeder; p5.js\'de tarayıcı indirme tetikler. Son sanatınızı dışa aktarmanın yolu.',
        concepts: [
          'save("görsel.png") tek bir görsel yazar.',
          'saveFrame("seq-####.png") frameCount ile otomatik numaralandırır.',
          'PNG saydamlığı korur; JPG düzleştirir.',
          'Tuş/fare olayından çağırın, isteğe bağlı kayıt için.'
        ],
        tryIt: 'keyPressed ekleyip mevcut tuvali kaydedin. Dosya adına hour() ve minute() ekleyin — her kayıt benzersiz olsun.'
      },
      exportSequence: {
        intro: 'Animasyonlar kare dizisi olarak dışa aktarılır. saveFrame("ad-####.png") her kareye bir PNG yazar. ffmpeg gibi bir araçla MP4 ya da GIF\'e bağlayın — Processing tek başına video yazmaz.',
        concepts: [
          'saveFrame("out-####") — #### sıfır dolgulu kare numarası.',
          'frameRate\'i hedef süreye göre sınırlayın.',
          'Her çalıştırmada dışa aktarmayın — diski doldurmamak için tetikli olarak kaydedin.',
          'Dış araçlar: ffmpeg, ImageMagick, çevrimiçi GIF üreticileri.'
        ],
        tryIt: 'Bir kare bütçesi belirleyin — örn. 60 kare 8 fps\'te 7.5 sn döngü. O sayıya kadar kaydedip noLoop().'
      },
      finalGame: {
        intro: 'Girdi, animasyon, sınıflar ve dizileri küçük bir oyunda birleştirin. Oyuncu fareyi takip eder; mermiler gökten düşer. Durum vektör ve dizilerde, davranış update + draw\'da. Bu döngüyü içselleştirince istediğiniz 2D oyunu yapabilirsiniz.',
        concepts: [
          'Oyuncuyu her karede girdiyle konumlandırın.',
          'Engelleri zamanlayıcıyla doğurun (frameCount % N).',
          'Her engeli güncelle, çiz, çarpışmayı kontrol et.',
          'Oyun sonu: doğurmayı durdur, "kaybettin" yaz, noLoop().'
        ],
        tryIt: 'Her kare artan bir skor ekleyin. Mermi oyuncuya çarpınca oyunu bitirin ve skoru gösterin.'
      },
      finalArt: {
        intro: 'Üretken sanat çoğu Processing öğrencisinin hedefidir. Başlangıç tarifi: zamanla salınan, açı bazlı bir nokta dizisi; düşük alpha ile katman katman izler. Sabitleri değiştirip tepkiyi izleyerek sonsuz varyasyon üretirsiniz.',
        concepts: [
          'Bir daire etrafında açıyla adreslenen noktalarda döngü.',
          'Zaman girdisi: frameCount * 0.02 sürekli büyür.',
          'Düşük alpha katmanları yumuşak, resimsi dokular kurar.',
          'İki parametre (sayı, frekans) çoğu zaman ilginç sonuçlar verir.'
        ],
        tryIt: 'Daire düzenini Lissajous figürüyle değiştirin: x = cos(a * 3 + t), y = sin(a * 2 + t). Farklı oranlar deneyin (3:2, 5:4).'
      }
    }
  },

  de: {
    ...SHARED,
    title: 'Processing.js Studio',
    subtitle: 'Ein praktischer Kurs für kreatives Coden · YTÜ Programlama',
    about: 'Erstellt für YTÜ Programlama — eine praktische Einführung ins kreative Coden mit Processing.',
    editor: 'CODE-EDITOR',
    editorSub: 'Processing / Java',
    run: 'Ausführen',
    reset: 'Zurücksetzen',
    download: 'Skizze herunterladen',
    upload: '.pde-Datei öffnen',
    share: 'Teilen',
    shareCopied: 'Link kopiert',
    langLabel: 'Sprache',
    themeLabel: 'Thema',
    themeDark: 'Dunkel',
    themeLight: 'Hell',
    courseLabel: 'KURS',
    moduleWord: 'Modul',
    lessonIntro: 'Überblick',
    lessonConcepts: 'Kernkonzepte',
    lessonTryIt: 'Selbst ausprobieren',
    playgroundBadge: 'SANDBOX',
    tabCourses: 'Kurse',
    tabFiles: 'Dateien',
    lessonOverview: 'LEKTIONSÜBERSICHT',
    running: 'Läuft…',
    nothingOpen: 'Nichts geöffnet',
    nothingOpenHint: 'Öffne eine Lektion im Kurse-Tab oder erstelle eine Skizze im Dateien-Tab.',
    prevLesson: 'Zurück',
    nextLesson: 'Weiter',
    modules: {
      m1: 'Grundlagen',
      m2: 'Logik & Kontrollfluss',
      m3: 'Benutzereingabe',
      m4: 'Bewegung & Transformationen',
      m5: 'Vektoren & Systeme',
      m6: 'Generativ & Rekursiv',
      m7: 'Typografie & Stil',
      m8: 'Zeichenketten',
      m9: 'Arrays vertieft',
      m10: 'Mathe-Werkzeuge',
      m11: 'Bilder',
      m12: 'Pixel & Filter',
      m13: 'Zeit & Frames',
      m14: 'Vererbung & OOP',
      m15: 'Kurven & Eigene Formen',
      m16: 'Physik-Grundlagen',
      m17: 'Generative Muster',
      m18: 'Schichten & Buffer',
      m19: 'Speichern & Teilen',
      m20: 'Abschlussprojekte'
    },
    sections: {
      playground: 'Leere Skizze',
      intro: 'Deine erste Skizze',
      fundamentals: 'Grundformen',
      colors: 'Farben & Stil',
      variables: 'Variablen & Bewegung',
      conditionals: 'Bedingungen',
      loops: 'Schleifen & Muster',
      functions: 'Funktionen',
      interaction: 'Mauseingabe',
      keyboard: 'Tastatureingabe',
      animation: 'Animation',
      transforms: 'Transformationen',
      trigonometry: 'Trigonometrie',
      pvector: 'PVektoren',
      particles: 'Arrays & Partikel',
      classes: 'Klassen (OOP)',
      noise: 'Perlin-Rauschen',
      recursion: 'Rekursion & Fraktale',
      threed: '3D-Grafiken',
      text: 'Text & Typografie',
      gradient: 'Farbverläufe',
      stringBasics: 'String-Grundlagen',
      stringOps: 'String-Operationen',
      stringFormat: 'Formatierung & Parsen',
      arrays: 'Array-Grundlagen',
      twoDArrays: '2D-Arrays',
      arrayList: 'Dynamische Arrays',
      mapConstrain: 'map & constrain',
      lerpEasing: 'Lerp & Easing',
      mathFuncs: 'Mathe-Funktionen',
      imageBasics: 'Bilder laden',
      imageTint: 'Tint & Farbe',
      pixelArray: 'Pixel-Array',
      getSet: 'get() & set()',
      imageFilter: 'Filter',
      millisTime: 'Zeit mit millis()',
      dateTime: 'Datum & Uhr',
      extendsClass: 'Vererbung',
      polymorphism: 'Polymorphismus',
      vertexShape: 'vertex()-Formen',
      bezierCurve: 'Bezier-Kurven',
      customShapes: 'Eigene Formen',
      physicsGravity: 'Schwerkraft & Sprung',
      physicsSprings: 'Federn',
      physicsCollision: 'Kollisionen',
      flowField: 'Flussfelder',
      gridGen: 'Raster-Generierung',
      lSystems: 'L-Systeme',
      pgraphics: 'Off-Screen-Buffer',
      blendModes: 'Mischmodi',
      saveFrame: 'Bilder speichern',
      exportSequence: 'Frame-Sequenzen',
      finalGame: 'Mini-Spiel',
      finalArt: 'Generative Kunst'
    },
    lessons: {
      playground: {
        intro: 'Eine leere Skizze. Schreibe hier beliebigen Processing-Code — der Editor transpiliert Processing (Java-artig) on the fly zu p5.js, sodass die meisten Beispiele aus Processing direkt laufen. Nutze diese Registerkarte zum Experimentieren, für Hausaufgaben oder Ideen außerhalb der Lektionen.',
        concepts: [
          'Sowohl void setup() als auch function setup() werden akzeptiert.',
          'Java-Typen (int, float, String, boolean, color, PVector) werden bei Variablen und Parametern unterstützt.',
          'Klassen mit Java-Konstruktoren werden in JS-Klassen übersetzt.',
          'println() und print() verweisen auf console.log().',
          'Verwende size(b, h) in setup() — es wird intern zu createCanvas(b, h).'
        ],
        tryIt: 'Füge eine Skizze aus einem Processing-Tutorial ein und drücke Ausführen. Falls sie nicht läuft, vereinfache sie — der Transpiler deckt das gängige Anfängerrepertoire ab.'
      },
      intro: {
        intro: 'Eine Processing-Skizze basiert auf zwei besonderen Funktionen: setup() läuft einmal beim Start, draw() läuft dauerhaft — etwa 60-mal pro Sekunde. Alles Visuelle passiert darin. Im Pixelraster liegt (0,0) oben links; x wächst nach rechts, y nach unten.',
        concepts: [
          'size(breite, höhe) erzeugt die Zeichenfläche. Einmalig in setup() aufrufen.',
          'background(r, g, b) übermalt die gesamte Leinwand mit einer Farbe.',
          'fill(r, g, b) setzt die Füllfarbe für nachfolgende Formen.',
          'circle(x, y, durchmesser) zeichnet einen gefüllten Kreis mit Zentrum (x, y).'
        ],
        tryIt: 'Ändere die Hintergrundfarbe, verschiebe den Kreis auf (50, 50) und verkleinere den Durchmesser auf 20. Was passiert, wenn du background() aus setup() entfernst?'
      },
      fundamentals: {
        intro: 'Processing bietet einen kleinen Satz Grundformen. Mit fill und stroke kombiniert entstehen erstaunlich reichhaltige Bilder. Koordinaten sind stets (x, y); Breiten/Höhen und Radien sind in Pixeln.',
        concepts: [
          'rect(x, y, b, h) nutzt standardmäßig die obere linke Ecke.',
          'circle(x, y, d) und ellipse(x, y, b, h) nutzen den Mittelpunkt.',
          'triangle und line nehmen drei bzw. zwei Punktpaare.',
          'stroke() setzt die Umrissfarbe; noStroke() entfernt sie. strokeWeight() steuert die Dicke.',
          'arc(x, y, b, h, start, ende) zeichnet eine Teil-Ellipse mit Bogenmaß.'
        ],
        tryIt: 'Baue ein einfaches Haus: Rechteck für den Körper, Dreieck fürs Dach, kleines Rechteck für die Tür. Gib jedem eine eigene Farbe.'
      },
      colors: {
        intro: 'Farben in Processing haben drei Kanäle — Rot, Grün, Blau — jeweils 0 bis 255. Ein vierter Wert (Alpha) steuert die Transparenz (0 = unsichtbar, 255 = deckend). Viele halbtransparente Formen übereinander ergeben weiche Übergänge.',
        concepts: [
          'fill(r, g, b, a) und stroke(r, g, b, a) — Alpha ist optional.',
          'fill(grau) mit einem einzelnen Wert: 0 ist schwarz, 255 weiß.',
          'Eine Schleife über x oder y erlaubt spaltenweise/zeilenweise Farbwechsel — Grundlage jedes Verlaufs.',
          'Überlagerte Formen mit niedrigem Alpha erzeugen Leuchten und Mischungen.'
        ],
        tryIt: 'Ersetze die Rechtecke durch Kreise. Setze beim dritten Rechteck Alpha auf 80. Kannst du einen vertikalen Regenbogen statt horizontalen bauen?'
      },
      variables: {
        intro: 'Eine Variable ist ein benannter Behälter für einen Wert. In Processing wird sie mit Typ deklariert: int x = 50 hält eine Ganzzahl, float y = 3.14 eine Kommazahl. Bewegung entsteht, indem man eine Variable pro Frame aktualisiert — die Form bewegt sich nicht wirklich; sie wird einfach jedes Frame an einem anderen Ort neu gezeichnet.',
        concepts: [
          'Außerhalb von setup() / draw() deklarieren, damit Werte zwischen Frames bleiben.',
          'int sind Ganzzahlen, float sind Kommazahlen, String ist Text.',
          'x = x + speed: den aktuellen x-Wert nehmen, speed addieren, zurückschreiben.',
          'Geht x aus dem Bild, zurücksetzen — das ergibt eine nahtlose Schleife.'
        ],
        tryIt: 'Füge einen zweiten Kreis mit anderer Geschwindigkeit hinzu. Setze speed in setup() auf einen Zufallswert zwischen 1 und 5 (random(1, 5)).'
      },
      conditionals: {
        intro: 'Programme entscheiden mit if-Anweisungen. Die Bedingung in den Klammern liefert true oder false. else bietet einen Alternativweg. Bedingungen bestehen aus Vergleichen (<, >, ==, !=) und logischen Operatoren (&& für und, || für oder).',
        concepts: [
          'if (Bedingung) { ... } else { ... } — else ist optional.',
          'Ein Vergleich liefert einen boolean: true oder false.',
          'mouseX und mouseY geben die Cursorposition in Pixeln.',
          'Der Ternär bedingung ? a : b ist ein kompaktes if/else für Ausdrücke.'
        ],
        tryIt: 'Teile die Leinwand in vier Quadranten. Jeder bekommt seine eigene Farbe. Tipp: if/else verschachteln, beide Achsen vergleichen.'
      },
      loops: {
        intro: 'Eine for-Schleife wiederholt Code kontrolliert. Drei Teile: Initialisierung (Zähler), Bedingung (weiter solange wahr), Update (was jedes Mal). Mit Trigonometrie kombiniert wird die Schleife zum Mustergenerator.',
        concepts: [
          'for (int i = 0; i < n; i++) { ... } — n Durchläufe mit i = 0 … n-1.',
          'sin(winkel) und cos(winkel) liefern Werte zwischen -1 und 1.',
          'Punkte per Winkel setzen ergibt Kreisanordnungen: (cx + cos(a) * r, cy + sin(a) * r).',
          'Verschachtelte Schleifen ergeben Raster — eine für x, eine für y.'
        ],
        tryIt: 'Ändere 12 auf 36 für einen dichteren Ring. Zweite Schleife für kleinere Kreise innen. Radius an i koppeln ergibt eine Spirale.'
      },
      functions: {
        intro: 'Eine Funktion ist ein benannter, wiederverwendbarer Codeblock. Sie nimmt Eingaben (Parameter) und gibt oft einen Wert zurück. Eigene Funktionen halten Code kurz und erlauben höhere Abstraktion — "zeichne einen Stern" statt eines Dutzend Trig-Aufrufe.',
        concepts: [
          'void name(typ param, ...) deklariert eine Funktion ohne Rückgabewert.',
          'Parameter sind lokal und beeinflussen das äußere Programm nicht.',
          'Eine Funktion kann mit unterschiedlichen Argumenten vielfach aufgerufen werden.',
          'beginShape() / endShape() erlauben eigene Polygone über vertex().'
        ],
        tryIt: 'Schreibe drawFlower(x, y, blätter), das intern drawStar nutzt und zusätzlich einen Mittelkreis zeichnet. Rufe es dreimal auf.'
      },
      interaction: {
        intro: 'Processing stellt die Mausposition als eingebaute Variablen bereit — mouseX und mouseY aktualisieren jedes Frame. Ereignisfunktionen wie mousePressed() feuern nur bei Auftreten. Diese Unterscheidung zwischen "laufenden" Variablen und "einmaligen" Events ist zentral.',
        concepts: [
          'mouseX, mouseY — jedes Frame aktualisiert, in draw() lesbar.',
          'pmouseX, pmouseY — Position des Vorframes; nützlich für Spuren.',
          'mouseIsPressed — boolean, wahr während Taste gehalten wird.',
          'mousePressed() — Callback, läuft einmal pro Klick.'
        ],
        tryIt: 'Lass die Kreisgröße mit der Mausgeschwindigkeit wachsen. Tipp: dist(pmouseX, pmouseY, mouseX, mouseY) liefert die Bewegung pro Frame.'
      },
      keyboard: {
        intro: 'Tastatureingabe hat zwei Formen: der laufende keyIsDown(TASTE)-Check im draw() und Einmal-Events wie keyPressed(). Für flüssige Bewegung stets keyIsDown nutzen — Key-Events feuern nur einmal pro Druck.',
        concepts: [
          'keyIsDown(LEFT_ARROW) — wahr solange gehalten. Weitere: UP_ARROW, DOWN_ARROW, RIGHT_ARROW.',
          'key enthält das letzte Zeichen; keyCode den numerischen Code.',
          'keyPressed() beim Drücken, keyReleased() beim Loslassen einmalig.',
          'constrain(wert, min, max) begrenzt Bewegung auf den Bildschirm.'
        ],
        tryIt: 'Füge A und D als Alternativen zu links/rechts hinzu. Mit constrain() darf der Ball die Leinwand nicht verlassen.'
      },
      animation: {
        intro: 'Flüssige Animation entsteht aus flüssig veränderlichen Werten. frameCount startet bei 0 und zählt pro Frame hoch; multipliziert und in sin() / cos() eingesetzt ergibt das oszillierende Werte zwischen -1 und 1. Mit Offsets pro Element entstehen Wellen, Verfolgungen und Phasen.',
        concepts: [
          'frameCount * geschwindigkeit steuert das Tempo.',
          'Amplitude (der Faktor vor sin) ist die Auslenkung.',
          'Ein Offset pro Element (z. B. i * 0.8) bringt Nachbarn außer Phase.',
          'frameRate(fps) deckelt oder beschleunigt die Zeichen-Schleife.'
        ],
        tryIt: 'Animiere nicht nur y, sondern auch die Größe der Kreise. Farbzyklus via sin(frameCount * 0.02 + i) * 127 + 128.'
      },
      transforms: {
        intro: 'translate, rotate und scale ändern nicht die Formen, sondern das Koordinatensystem. Das ist mächtig: eine Form einmal bei (0, 0) zeichnen und frei platzieren/drehen. push() speichert den Zustand; pop() stellt ihn wieder her — immer paarweise.',
        concepts: [
          'translate(x, y) verschiebt den Ursprung.',
          'rotate(winkel) dreht das Koordinatensystem (Bogenmaß; PI = 180°).',
          'scale(faktor) zoomt. scale(-1, 1) spiegelt horizontal.',
          'push() / pop() isolieren Transformationen — sie laufen nicht in nachfolgenden Code hinein.'
        ],
        tryIt: 'Erhöhe rotate auf i * PI / 8 für doppelt so viele Blätter. Innere Schleife mit kleineren, versetzten Blättern hinzufügen.'
      },
      trigonometry: {
        intro: 'sin und cos sind die Arbeitspferde des kreativen Codens. Sie wandeln einen Winkel in einen weichen Wert zwischen -1 und 1. Das allein gibt dir Wellen, Umlaufbahnen, Pulsieren, Easings und fast alle organische Bewegung. Zwei Regeln genügen: cos liefert x am Einheitskreis, sin liefert y.',
        concepts: [
          'Bogenmaß: 0 = rechts, PI/2 = unten, PI = links, 3*PI/2 = oben. TWO_PI ist eine volle Drehung.',
          'Amplitude * sin(...) skaliert die Welle; Offset + sin(...) hebt/senkt sie.',
          'cos(winkel) und sin(winkel) mit gleichem Winkel beschreiben einen Kreis.',
          'Frequenz = wie schnell die Eingabe wächst. Hohe Frequenz = dichte Wellen.'
        ],
        tryIt: 'Zusätzliche animierte Welle via sin(x * 0.05 + frameCount * 0.03). Zeichne sie in einer dritten Farbe.'
      },
      pvector: {
        intro: 'PVektoren repräsentieren Punkte oder Richtungen im Raum. Sie fassen x, y und z in einem einzigen Objekt zusammen und bieten Methoden für Mathematik wie add(), sub() und mult(). Sie machen Code bei der Arbeit mit Physik und Bewegung viel sauberer.',
        concepts: [
          'PVector pos = new PVector(x, y); erstellt einen Vektor.',
          'pos.add(vel) aktualisiert die Position mithilfe eines Geschwindigkeitsvektors.',
          'PVektoren können Position, Geschwindigkeit und Beschleunigung darstellen.'
        ],
        tryIt: 'Ändere die Geschwindigkeitskomponenten oder füge einen Beschleunigungsvektor hinzu, der in jedem Frame zur Geschwindigkeit addiert wird.'
      },
      particles: {
        intro: 'Wenn eine Sache sich bewegt, gehen hundert fast genauso leicht. Ein Array hält viele Elemente; eine for-Schleife aktualisiert jedes pro Frame. Jedes Partikel ist ein kleines Objekt mit eigener Position und Geschwindigkeit. Emergentes Verhalten — Schwärme, Felder, Strömungen — startet bei diesem einfachen Rezept.',
        concepts: [
          'Arrays halten viele Werte; .push() fügt hinzu; .length gibt die Anzahl.',
          'Jedes Partikel braucht mindestens Position (x, y) und Geschwindigkeit (vx, vy).',
          'Pro Frame: Position anhand der Geschwindigkeit aktualisieren, dann zeichnen.',
          'Abprallen an Rändern: Bei Verlassen Vorzeichen der Geschwindigkeit drehen.'
        ],
        tryIt: 'Füge Schwerkraft hinzu: Addiere 0.1 zu jeder vy pro Frame. Reibung: vx und vy mit 0.99 multiplizieren.'
      },
      classes: {
        intro: 'Eine Klasse ist ein Bauplan. Sie bündelt Daten (Felder) und Verhalten (Methoden) in einem benannten Typ. Jede Instanz hat eigene Daten. Bei vielen ähnlichen Dingen ersetzen Klassen verstreute parallele Arrays durch ein sauberes Objekt.',
        concepts: [
          'class Name { ... } definiert den Bauplan.',
          'Ein Konstruktor mit dem Klassennamen läuft bei new Name(...).',
          'this.x verweist auf das Feld x der Instanz.',
          'Methoden (void update(), void show()) sind an die Klasse gebundene Funktionen.'
        ],
        tryIt: 'Neue Methode void highlight(): zeichnet einen Ring um den Ball, wenn die Maus im Radius ist. Aus draw() aufrufen.'
      },
      noise: {
        intro: 'random() springt — gut für Chaos, schlecht für organische Bewegung. Perlin-Rauschen (noise()) ist weich: nahe Eingaben → nahe Ausgaben. Ein wachsender Zeitwert t liefert Drift statt Zittern. Offsets in der Eingabe erzeugen unabhängige Rausch-Ströme.',
        concepts: [
          'noise(t) liefert einen Wert zwischen 0 und 1, weich in t.',
          't pro Frame um einen kleinen Betrag erhöhen; größer = schnellerer Wechsel.',
          'noise(x, y) oder noise(x, y, t) für 2D/3D-Rauschen — perfekt für Wolken und Gelände.',
          'Mit map(wert, 0, 1, unten, oben) in deinen Zielbereich skalieren.'
        ],
        tryIt: '20 separate Kreise, jeder nutzt noise(t + i * 10) — sie driften unabhängig. Geringes Alpha → weiche Wolke.'
      },
      recursion: {
        intro: 'Eine rekursive Funktion ruft sich selbst mit kleineren Eingaben auf, bis ein Basisfall greift. Der natürlichste Weg, selbstähnliche Formen auszudrücken: Bäume, Spiralen, Schneeflocken. Mit Transforms ergeben wenige Zeilen Formen, für die sonst Seiten nötig wären.',
        concepts: [
          'Jede Rekursion braucht einen Basisfall — die Abbruchbedingung.',
          'Jeder rekursive Aufruf verkleinert meist einen Parameter (Länge, Tiefe).',
          'push() / pop() in der Rekursion isolieren Transformationen pro Zweig.',
          'Kleine Anpassungen (Winkel, Schrumpffaktor) ändern das Ergebnis dramatisch.'
        ],
        tryIt: 'Ändere PI/6 zu PI/4 für breitere Zweige. Dritter rekursiver Aufruf mit kleinerem Winkel → buschigerer Baum.'
      },
      threed: {
        intro: 'Processing unterstützt 3D-Rendering über den WEBGL-Renderer. Durch Hinzufügen einer Z-Achse kannst du Szenen mit Tiefe, Lichtern und Kameras erstellen.',
        concepts: [
          'size(w, h, WEBGL) aktiviert den 3D-Modus.',
          'translate(x, y, z) und rotateX() / rotateY() bewegen und orientieren Formen in 3D.',
          'lights() fügt Standardbeleuchtung hinzu.'
        ],
        tryIt: 'Ersetze box() durch sphere() oder zeichne mehrere Boxen mit einer Schleife und unterschiedlichen Z-Verschiebungen.'
      },
      text: {
        intro: 'Text in Processing wird gezeichnet, nicht gesetzt. text(str, x, y) platziert einen String an einer Koordinate mit der aktuellen Füllfarbe. textSize setzt die Punktgröße, textAlign steuert den Anker. Eher Malen als HTML.',
        concepts: [
          'text(str, x, y) — x, y ist standardmäßig die Grundlinie.',
          'textAlign(CENTER, CENTER) legt den Anker in die Glyphenmitte.',
          'textSize(n) setzt die Pixelgröße. textFont(font) für geladene Schriften.',
          'Mit frameCount oder noise einzelne Buchstaben animieren.'
        ],
        tryIt: 'Animiere jeden Buchstaben von "p5.js" unabhängig — y-Offset je Index über sin(frameCount * 0.05 + i).'
      },
      gradient: {
        intro: 'Einen Farbverlaufs-Primitiv gibt es nicht — du baust ihn selbst. Das Mittel ist lerp (lineare Interpolation): lerp(a, b, t) liefert einen Wert zwischen a und b, während t von 0 nach 1 läuft. Pro Pixelzeile jeden Kanal lerpen → beliebige Verläufe.',
        concepts: [
          'lerp(a, b, t) — bei t=0 liefert a, bei t=1 liefert b.',
          'Für einen vertikalen Verlauf über y iterieren und pro Zeile eine horizontale Linie zeichnen.',
          'lerpColor(c1, c2, t) mischt zwei Farben direkt — bequemer als drei Einzellerps.',
          'Halbtransparente Kreise über dem Verlauf schaffen Tiefe und Atmosphäre.'
        ],
        tryIt: 'Mach den Verlauf diagonal — nimm (x + y) / (width + height) als t. Tausche die Farben gegen Sonnenuntergangstöne.'
      },
      stringBasics: {
        intro: 'Ein String ist eine Zeichenfolge in Anführungszeichen. In Processing wird er mit String deklariert; die meisten Operationen entsprechen Java: charAt(i) liefert ein Zeichen, toUpperCase()/toLowerCase() ändern die Schreibweise. In dieser transpilierten Umgebung ist die Länge eine Eigenschaft (.length).',
        concepts: [
          'String name = "text"; deklariert und initialisiert einen String.',
          'name.length ist die Zeichenanzahl (JS-Stil; Java: name.length()).',
          'name.charAt(i) liefert das Zeichen am Index i.',
          'name.toUpperCase() und name.toLowerCase() liefern neue Strings — Originale sind unveränderlich.'
        ],
        tryIt: 'Deklariere einen String mit deinem Namen. Gib Länge, erstes Zeichen und die umgekehrte Form aus (split + reverse + join).'
      },
      stringOps: {
        intro: 'Strings verbinden sich mit + (Konkatenation) und bieten Methoden zum Schneiden, Suchen, Ersetzen. substring(a, b) liefert den Teil von Index a bis (ausschließlich) b. indexOf liefert die Position oder -1, wenn nicht vorhanden.',
        concepts: [
          'a + b verbindet zwei Strings zu einem neuen.',
          'str.substring(start, end) — end ist exklusiv.',
          'str.indexOf(sub) — Position, sonst -1.',
          'str.replace(alt, neu) ersetzt Vorkommen.',
          'str.split(trenn) liefert ein Array von Teilen.'
        ],
        tryIt: 'Nimm einen Satz, splitte ihn in Wörter und zeichne jedes Wort in einer eigenen Zeile.'
      },
      stringFormat: {
        intro: 'Manchmal brauchst du Zahlen als Strings oder umgekehrt. nf() formatiert Floats mit fester Anzahl Stellen. hex() liefert einen Hex-String. int() und float() parsen einen String zur Zahl.',
        concepts: [
          'nf(wert, stellen, dezimal) füllt mit Nullen und schneidet Nachkommastellen.',
          'hex(255) → "FF". Praktisch für Farb-Codes.',
          'int("17") → 17. float("2.5") → 2.5.',
          '"" + zahl erzwingt toString: "" + 42 → "42".'
        ],
        tryIt: 'Zeige frameCount als 6-stelligen String mit führenden Nullen — nf(frameCount, 6).'
      },
      arrays: {
        intro: 'Arrays halten eine feste Anzahl Werte gleichen Typs. Deklariere mit int[] oder float[] und allokiere mit new int[N]. Zugriff per [i] (nullbasiert), Anzahl per .length. Das Brot-und-Butter-Werkzeug für viele Werte.',
        concepts: [
          'int[] höhen = new int[10]; reserviert 10 Nullen.',
          'höhen[i] liest oder schreibt den Wert am Index i.',
          'höhen.length sagt dir die Anzahl der Elemente.',
          'Indizes laufen von 0 bis length - 1. Außerhalb ist ein Fehler.'
        ],
        tryIt: 'Ersetze Zufallshöhen durch sin-basierte Höhen, sodass das Array eine Welle bildet: höhen[i] = 120 + sin(i * 0.5) * 70.'
      },
      twoDArrays: {
        intro: 'Ein 2D-Array repräsentiert ein Raster: Zeilen und Spalten. In Java schreibt man int[][] grid; hier nutzen wir ein verschachteltes JS-Array — gleiche Form. Zugriff über grid[x][y]. Nützlich für Tiles, zelluläre Automaten, Bildraster.',
        concepts: [
          'grid[x][y] adressiert Zelle (x, y) — zwei Indizes.',
          'Mit verschachtelten Schleifen über beide Dimensionen initialisieren.',
          'Geeignet für Tile-Maps, zelluläre Automaten, Schachbretter.',
          'Speicherbedarf wächst quadratisch: ein 100x100-Raster sind 10 000 Zellen.'
        ],
        tryIt: 'Nutze noise(x * 0.1, y * 0.1) statt random für Zellfarben. Das Ergebnis wird glatt statt verrauscht.'
      },
      arrayList: {
        intro: 'Java\'s ArrayList hält eine variabel lange Liste. JavaScript-Arrays funktionieren bereits so: push fügt hinzu, pop entfernt, splice löscht per Index. Der Transpiler behandelt Arrays so direkt.',
        concepts: [
          'arr.push(item) hängt am Ende an.',
          'arr.pop() entfernt und liefert das letzte Element.',
          'arr.length wächst automatisch.',
          'arr.splice(i, 1) entfernt das Element bei Index i.'
        ],
        tryIt: 'Füge einen keyPressed hinzu, der words.pop() aufruft — Klick fügt hinzu, Taste entfernt.'
      },
      mapConstrain: {
        intro: 'map() skaliert eine Zahl von einem Bereich in einen anderen — die nützlichste Funktion im kreativen Coden. constrain() klemmt eine Zahl auf min..max. Zusammen verwandeln sie Eingaben sauber in visuelle Eigenschaften.',
        concepts: [
          'map(wert, in_min, in_max, out_min, out_max) — proportionale Umskalierung.',
          'constrain(wert, min, max) — auf den Bereich klemmen.',
          'map kann extrapolieren (out_min/out_max überschreiten). Mit constrain umfassen.',
          'Komponieren gut: constrain(map(...), low, high).'
        ],
        tryIt: 'Map mouseY auf alpha (0..255) und constrain auf 50..255, damit alles sichtbar bleibt.'
      },
      lerpEasing: {
        intro: 'Lineare Interpolation (lerp) mischt zwei Werte. lerp(a, b, t) liefert a bei t=0 und b bei t=1. Mit kleinem t pro Frame entsteht weiches Easing — der Wert nähert sich dem Ziel, statt zu springen. Easing macht Interfaces lebendig.',
        concepts: [
          'lerp(a, b, t) — t in [0, 1].',
          'Easing-Muster: x = lerp(x, ziel, 0.1) jedes Frame.',
          'Kleineres t = langsameres Easing. 0.5 schnell, 0.02 träge.',
          'lerpColor(c1, c2, t) interpoliert Farben direkt.'
        ],
        tryIt: 'Ersetze 0.08 durch 0.3 (knackig) oder 0.02 (träge). Lerpe auch y zur mouseY.'
      },
      mathFuncs: {
        intro: 'Processing bietet die Mathematik-Funktionen jeder Sprache: abs, sqrt, pow, floor, ceil, round, min, max, dist. Reine Werkzeuge ohne Processing-spezifische Eigenheiten — du nutzt sie ständig.',
        concepts: [
          'abs(x) — Betrag (immer ≥ 0).',
          'sqrt(x), pow(x, n) — Wurzel und Potenz.',
          'floor(x), ceil(x), round(x) — Ganzzahl-Konvertierung.',
          'dist(x1, y1, x2, y2) — euklidischer Abstand.',
          'min(a, b), max(a, b) — kleinerer / größerer Wert.'
        ],
        tryIt: 'Schreibe inside(x, y, cx, cy, r), das true liefert, wenn (x, y) im Kreis liegt. Markiere einen Kreis bei Hover.'
      },
      imageBasics: {
        intro: 'Bilder werden in setup() mit loadImage(url) geladen und mit image(img, x, y) gezeichnet. loadImage braucht einen echten Pfad — lokale Dateien legst du in data/ ab. Diese Lernumgebung simuliert es mit Primitiven, die API ist identisch.',
        concepts: [
          'PImage img = loadImage("pfad/bild.png"); — einmal in setup.',
          'image(img, x, y) zeichnet an der oberen linken Ecke.',
          'image(img, x, y, b, h) zeichnet skaliert.',
          'img.width und img.height liefern die Maße.'
        ],
        tryIt: 'Lege in einer echten Skizze ein PNG in den Ordner und lade es. Zeichne es an der Mausposition.'
      },
      imageTint: {
        intro: 'tint() färbt Bilder ein — jeder Pixel wird mit der Tint-Farbe multipliziert. tint(255, 0, 0) macht alles rot, tint(255, 100) reduziert die Deckkraft. Mit noTint() abschalten.',
        concepts: [
          'tint(r, g, b) multipliziert jeden Kanal.',
          'tint(grau, alpha) für monochrome und Transparenz.',
          'noTint() kehrt zur Normaldarstellung zurück.',
          'Geschichtete Tints derselben Datei → Halbton- oder Aberrations-Effekt.'
        ],
        tryIt: 'Tinte ein Bild mehrfach nacheinander an verschiedenen Positionen mit verschiedenen Farben — chromatischer Aberrations-Look.'
      },
      pixelArray: {
        intro: 'loadPixels() kopiert die Leinwand ins pixels[]-Array. Jeder Pixel belegt 4 Einträge: R, G, B, A. Nach Änderungen mit updatePixels() zurückschreiben. So baust du Bilder pixelweise — perfekt für Shader, Mosaike, Effekte.',
        concepts: [
          'loadPixels() aktualisiert pixels[] mit dem aktuellen Leinwandstand.',
          'pixels[(x + y * width) * 4 + 0] ist der Rotkanal von Pixel (x, y).',
          '+1 grün, +2 blau, +3 alpha. Jeder Pixel = 4 Bytes.',
          'updatePixels() schreibt Änderungen zurück.'
        ],
        tryIt: 'Ersetze den linearen Verlauf durch Sin-Streifen: sin(x * 0.1) * 127 + 128 als Rotkanal.'
      },
      getSet: {
        intro: 'set(x, y, color) schreibt einen einzelnen Pixel. get(x, y) liest ihn. Langsamer als pixels[] für Massen, aber lesbarer für Kleinstes. set() braucht kein updatePixels() — wirkt sofort.',
        concepts: [
          'set(x, y, color(r, g, b)) setzt einen Pixel.',
          'get(x, y) liefert die Farbe an (x, y).',
          'Für viele Pixel pixels[] verwenden — set() ist pro Aufruf langsam.',
          'get/set kombinieren mit normalem Zeichnen.'
        ],
        tryIt: 'Sample mit get(mouseX, mouseY) die Farbe unter dem Cursor und nutze sie als Füllung für umgebende Kreise.'
      },
      imageFilter: {
        intro: 'filter() wendet eine eingebaute Transformation auf die ganze Leinwand an. BLUR weicht, GRAY entsättigt, INVERT kehrt Farben um, THRESHOLD binarisiert. Stärke per optionalem Parameter.',
        concepts: [
          'filter(BLUR, radius) — Gauß-Weichzeichner.',
          'filter(GRAY) — Graustufen.',
          'filter(INVERT) — Farb-Negativ.',
          'filter(THRESHOLD, level) — kontrastreiches Schwarzweiß.'
        ],
        tryIt: 'Wende BLUR, GRAY, INVERT in Folge an. Tausche die Reihenfolge — das Ergebnis ändert sich. Warum?'
      },
      millisTime: {
        intro: 'millis() liefert die Millisekunden seit Skizzenstart. Die präziseste Zeitmessung unabhängig vom frameRate. frameCount zählt Frames; millis Wanduhrzeit.',
        concepts: [
          'millis() / 1000.0 — verstrichene Sekunden.',
          'Als Eingabe für sin/cos für FPS-unabhängige Animation.',
          'startTime speichern und mit millis() vergleichen für Dauer.',
          'Reset: einen neuen "Epoch"-Wert speichern — Processing setzt millis nicht selbst zurück.'
        ],
        tryIt: 'Trigger eine Aktion, wenn millis() 5000 überschreitet — flashe die Leinwand oder logge.'
      },
      dateTime: {
        intro: 'Processing exponiert die Systemuhr: year(), month(), day(), hour(), minute(), second(). Jede liefert den aktuellen Wert als Zahl. Mit text() baust du Uhren, Kalender und zeitabhängige Animationen.',
        concepts: [
          'hour() liefert 0-23, minute() und second() liefern 0-59.',
          'year() / month() / day() liefern Kalenderwerte (Monat 1-12).',
          'Jeder Aufruf liest frisch — sie aktualisieren sich.',
          'Mit nf() führende Nullen: nf(minute(), 2).'
        ],
        tryIt: 'Mappe month() auf einen Hue 0-360, sodass die Leinwand durch die Jahreszeiten zykliert.'
      },
      extendsClass: {
        intro: 'Eine Klasse kann eine andere erweitern und deren Felder/Methoden erben. Das Kind ruft super() für den Eltern-Konstruktor auf. Vererbung teilt Verhalten zwischen verwandten Typen — Shape gibt Position; Circle und Square erweitern mit eigenem draw.',
        concepts: [
          'class Kind extends Eltern { ... } — deklariert Vererbung.',
          'super(args) ruft den Eltern-Konstruktor auf.',
          'Geerbte Methoden überschreibst du, indem du sie im Kind neu definierst.',
          'Vererbung für "ist-ein", Komposition für "hat-ein".'
        ],
        tryIt: 'Füge eine Square-Klasse hinzu, die Shape erweitert. Zeichne Quadrate gemischt mit Bubbles in derselben Schleife.'
      },
      polymorphism: {
        intro: 'Polymorphismus: gleicher Methodenname, verschiedenes Verhalten je Typ. Eine Liste von Animals kann Dogs und Cats enthalten; speak() liefert je nach Klasse anderes — ohne if-Checks. Basis für Strategy-Patterns und Plugin-Architekturen.',
        concepts: [
          'Methode am Eltern definieren, im Kind überschreiben.',
          'Aufruf an einer Eltern-Referenz dispatcht zur tatsächlichen Unterklasse.',
          'Sauberer als lange if/else-Ketten zur Typprüfung.',
          'Basis für Strategy-Patterns und Plugin-Architekturen.'
        ],
        tryIt: 'Füge eine Bird-Klasse hinzu, die "tweet" liefert. Push einige Vögel ins Array — die Schleife läuft unverändert.'
      },
      vertexShape: {
        intro: 'Eigene Polygone baust du mit beginShape(), mehreren vertex(x, y) und endShape(CLOSE). CLOSE schließt das letzte zurück zum ersten. Beliebig viele Vertices — Processing verbindet sie der Reihe nach.',
        concepts: [
          'beginShape() / endShape(CLOSE) rahmt das Polygon.',
          'vertex(x, y) fügt eine Ecke hinzu.',
          'stroke() / fill() vor beginShape steuern den Stil.',
          'beginShape(POINTS), beginShape(LINES), beginShape(TRIANGLES) — Render-Modi.'
        ],
        tryIt: 'Baue einen Stern, indem du Vertices abwechselnd auf einem kleinen und großen Radius um einen Kreis platzierst.'
      },
      bezierCurve: {
        intro: 'Bezier-Kurven sind glatte Kurven aus Anker- und Kontrollpunkten. bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2) zeichnet eine kubische Kurve, die zu den Kontrollpunkten gebogen wird. Kontrollpunkte ziehen — sie liegen nicht auf der Kurve.',
        concepts: [
          'bezier() — kubische Kurve mit zwei Kontrollpunkten.',
          'curveVertex() — Catmull-Rom-artiger Spline durch Punkte.',
          'Anker = Start/Ende. Kontrollpunkte formen die Biegung.',
          'Für SVG-Pfade, organische Formen und Bewegungsbahnen.'
        ],
        tryIt: 'Animiere die Kontrollpunkte mit sin/cos — die Kurve atmet.'
      },
      customShapes: {
        intro: 'Kombiniere vertex(), Trig und Parameter zu wiederverwendbaren Shape-Funktionen. drawCog(cx, cy, r, zähne) nimmt Mittelpunkt, Radius, Zahnzahl und alterniert zwei Radien um einen Kreis. Dieselbe Idee erzeugt Sterne und Sonnenstrahlen.',
        concepts: [
          'Shape-Logik in eine Funktion packen — gleicher Aufruf, verschiedene Größen.',
          'Winkel von 0 bis TWO_PI um den Kreis laufen.',
          'Alternierende Radien erzeugen Zähne, Zacken oder Sterne.',
          'Ein zweiter Pass kann innen Details ergänzen.'
        ],
        tryIt: 'Füge einen Winkel-Parameter hinzu und drehe per frameCount * 0.01. Setze mehrere Zahnräder nebeneinander.'
      },
      physicsGravity: {
        intro: 'Die einfachste Physik: Position, Geschwindigkeit, Beschleunigung. Pro Frame: vel += acc; pos += vel. Eine Beschleunigung (0, 0.2) ist Schwerkraft. Sprung kehrt das Vorzeichen der y-Geschwindigkeit um, mit Energieverlust.',
        concepts: [
          'pos += vel; vel += acc; — Euler-Integration.',
          'Schwerkraft ist eine konstante abwärtsgerichtete Beschleunigung.',
          'Sprung: bei Verlassen des Bildes vel umkehren und mit < 1 multiplizieren.',
          'PVector verpackt diese Vektoren in saubere Methoden.'
        ],
        tryIt: 'Setze acc.x klein für Wind. Multipliziere vel pro Frame mit 0.99 für Luftwiderstand.'
      },
      physicsSprings: {
        intro: 'Eine Feder zieht zur Ruhelage mit zur Auslenkung proportionaler Kraft. Hooke: F = -k * (x - rest). Mit Dämpfung (Geschwindigkeit * 0.95) klingt die Schwingung ab.',
        concepts: [
          'force = -k * (x - rest), k = Steifigkeit.',
          'velocity += force; velocity *= dämpfung; position += velocity.',
          'Ohne Dämpfung schwingt die Feder ewig.',
          'k und Dämpfung sind Regler — nach Geschmack einstellen.'
        ],
        tryIt: 'k = 0.2 (steif) vs 0.01 (locker). damping = 1 (ewig) vs 0.85 (kommt schnell zur Ruhe).'
      },
      physicsCollision: {
        intro: 'Paarweise Kollision: für jedes Ball-Paar prüfen, ob der Abstand kleiner als die Summe der Radien ist. Wenn ja, Geschwindigkeiten tauschen. O(n²) und für viele Objekte ungeeignet, aber für Dutzende ok.',
        concepts: [
          'dist(a.pos.x, a.pos.y, b.pos.x, b.pos.y) < a.r + b.r → Kollision.',
          'Geschwindigkeiten tauschen als schnelle (verlustbehaftete) Antwort.',
          'Echte elastische Kollision nutzt Vektoren und Massen.',
          'Räumliche Partitionierung (Grid, Quad-Tree) skaliert.'
        ],
        tryIt: 'Erhöhe auf 30 Bälle und beobachte die FPS. Reduziere auf 6 mit Farben, um Paar-Kollisionen zu sehen.'
      },
      flowField: {
        intro: 'Ein Flussfeld bildet jeden Punkt auf eine Richtung ab. Mit noise() für den Winkel ergibt sich organische, treibende Bewegung. Partikel folgen dem lokalen Feld — wirkt wie Wind, Strömung oder Rauch.',
        concepts: [
          'angle = noise(x * scale, y * scale) * TWO_PI * n. n bestimmt die "Wirbel".',
          'Schritt: (cos(angle), sin(angle)) * speed.',
          'frameCount als dritte Noise-Dimension lässt das Feld driften.',
          'Niedriges Alpha hinterlässt Spuren — Stromlinien-Look.'
        ],
        tryIt: 'Ersetze Zufallspunkte durch persistente Partikel — sie wandern; bei Verlassen der Leinwand resetten.'
      },
      gridGen: {
        intro: 'Generative Kunst startet oft mit einem Raster. Iteriere Zellen; entscheide pro Zelle (Noise, Position, Zufall), ob/wie gezeichnet wird. Raster gibt Struktur, Zell-Logik gibt Vielfalt.',
        concepts: [
          'Zwei verschachtelte Schleifen durchlaufen das Raster.',
          'noise(x * scale, y * scale) liefert pro Zelle einen weichen Wert — Nachbarn kohärent.',
          'Mit einem Schwellwert Zellen erscheinen/verschwinden lassen.',
          'Pro Zelle Füllung, Drehung, Subform variieren — endlose Varianten.'
        ],
        tryIt: 'Ersetze rect durch circle mit noise-Radius. Erhöhe den Schwellwert von 0.5 auf 0.7 für ausgedünnte Komposition.'
      },
      lSystems: {
        intro: 'L-Systeme erzeugen Strings, indem sie Regeln auf ein Axiom anwenden. Interpretiert man jedes Zeichen als Schildkröten-Befehl — F = vor, + = rechts, - = links — entstehen nach wenigen Iterationen fraktal-artige Formen.',
        concepts: [
          'Mit einem Axiom beginnen (ein einzelner String).',
          'Regeln anwenden: jedes Zeichen wird durch einen anderen String ersetzt.',
          'Nach N Iterationen kann der String sehr lang sein.',
          'Mit einer Schildkröte interpretieren: vor, links, rechts, push, pop.'
        ],
        tryIt: 'Probiere die Regel "F → F-F+F". Mache 5 Iterationen. Füge [ und ] für Verzweigungen hinzu, um Bäume zu züchten.'
      },
      pgraphics: {
        intro: 'createGraphics(b, h) erzeugt eine eigene Off-Screen-Leinwand. Die gleiche Zeichen-API. Mit image(pg, 0, 0) wird sie auf die Hauptleinwand gepatcht. Praktisch für Caching, Layering, Post-Effekte.',
        concepts: [
          'PGraphics pg = createGraphics(b, h); — Buffer erzeugen.',
          'In echtem Processing pg.beginDraw() / pg.endDraw(); in p5.js nicht nötig.',
          'pg.clear(), pg.fill(), pg.rect() — gleiche API mit Präfix.',
          'Einmal in den Buffer zu zeichnen ist schneller als jedes Frame neu.'
        ],
        tryIt: 'Zeichne ein langsames Hintergrundmuster einmal in den Buffer. In draw() den Buffer plus eine bewegte Form.'
      },
      blendModes: {
        intro: 'blendMode() ändert, wie neue Pixel mit vorhandenen kombiniert werden. ADD hellt auf — Schwarz wird farbig. MULTIPLY verdunkelt. SCREEN hellt auf, behält Highlights. Reset mit blendMode(BLEND).',
        concepts: [
          'BLEND — Standard-Alphakompositum.',
          'ADD — RGB summieren; ideal fürs Glühen.',
          'MULTIPLY — RGB multiplizieren; gut für Schatten/Tints.',
          'SCREEN — Inverse von Multiply; gut für Highlights.',
          'DIFFERENCE / EXCLUSION — psychedelische Resultate.'
        ],
        tryIt: 'Wechsle zwischen den Kreisen zu MULTIPLY. Vergleiche mit ADD — gleiche Formen, völlig anderer Look.'
      },
      saveFrame: {
        intro: 'save() schreibt die aktuelle Leinwand in eine Datei. saveFrame() macht dasselbe mit automatischer Nummerierung. In Processing direkt auf Disk; in p5.js triggert der Browser einen Download. So exportierst du finale Werke.',
        concepts: [
          'save("bild.png") schreibt ein einzelnes Bild.',
          'saveFrame("seq-####.png") nummeriert mit frameCount.',
          'PNG behält Transparenz; JPG flacht ab.',
          'Aus Tasten-/Mausevent aufrufen, um gezielt zu speichern.'
        ],
        tryIt: 'Füge ein keyPressed hinzu, das die Leinwand speichert. Nutze hour() und minute() im Dateinamen für eindeutige Namen.'
      },
      exportSequence: {
        intro: 'Animationen exportierst du als Frame-Sequenz. saveFrame("name-####.png") schreibt pro Frame ein PNG. Mit ffmpeg & Co. zu MP4/GIF zusammenfügen — Processing schreibt selbst kein Video.',
        concepts: [
          'saveFrame("out-####") — #### wird zur null-aufgefüllten Frame-Nummer.',
          'frameRate begrenzen, um Zieldauer zu treffen.',
          'Nicht jeden Run exportieren — nur bei Trigger speichern.',
          'Externe Tools: ffmpeg, ImageMagick, Online-GIF-Generatoren.'
        ],
        tryIt: 'Setze ein Frame-Budget — z. B. 60 Frames @ 8 fps = 7,5 s Loop. Bis dahin speichern, dann noLoop().'
      },
      finalGame: {
        intro: 'Kombiniere Eingabe, Animation, Klassen und Arrays in einem kleinen Spiel. Spieler folgt der Maus; Geschosse fallen. Zustand in Vektoren und Arrays; Verhalten in update + draw. Wenn du diese Schleife verinnerlichst, baust du jedes 2D-Spiel.',
        concepts: [
          'Spielerposition pro Frame anhand der Eingabe setzen.',
          'Hindernisse per Timer spawnen (frameCount % N).',
          'Jedes Hindernis updaten, zeichnen, dann auf Kollision prüfen.',
          'Game Over: Spawnen stoppen, "verloren" zeichnen, noLoop().'
        ],
        tryIt: 'Füge einen Score hinzu, der pro Frame steigt. Beende das Spiel bei Treffer und zeige den Score an.'
      },
      finalArt: {
        intro: 'Generative Kunst ist das Ziel der meisten Processing-Lernenden. Startrezept: Ein Kreis aus Punkten, deren Positionen über die Zeit oszillieren, mit niedrigem Alpha gemalt — Spuren bauen sich auf. Konstanten anpassen, ausführen, reagieren — endlose Varianten.',
        concepts: [
          'Eine Schleife über Punkte per Winkel um einen Kreis.',
          'Zeit als Eingabe: frameCount * 0.02 wächst kontinuierlich.',
          'Niedrige Alpha-Füllungen schichten weich, malerisch.',
          'Zwei Parameter (Anzahl, Frequenz) genügen oft für Schönheit.'
        ],
        tryIt: 'Ersetze die Kreisanordnung durch eine Lissajous-Figur: x = cos(a * 3 + t), y = sin(a * 2 + t). Probiere Verhältnisse 3:2, 5:4.'
      }
    }
  }
};

export const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];
