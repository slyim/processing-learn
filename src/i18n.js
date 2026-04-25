// Numbered course structure.
export const modules = [
  { id: 'm1', sectionIds: ['intro', 'fundamentals', 'colors'] },
  { id: 'm2', sectionIds: ['variables', 'conditionals', 'loops', 'functions'] },
  { id: 'm3', sectionIds: ['interaction', 'keyboard'] },
  { id: 'm4', sectionIds: ['animation', 'transforms', 'trigonometry'] },
  { id: 'm5', sectionIds: ['particles', 'classes', 'noise', 'recursion'] },
  { id: 'm6', sectionIds: ['text', 'gradient'] }
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
      m5: 'Systems & Generation',
      m6: 'Typography & Color'
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
      particles: 'Arrays & Particles',
      classes: 'Classes (OOP)',
      noise: 'Perlin Noise',
      recursion: 'Recursion & Fractals',
      text: 'Text & Typography',
      gradient: 'Gradients'
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
      m5: 'Sistemler ve Üretim',
      m6: 'Tipografi ve Renk'
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
      particles: 'Diziler ve Parçacıklar',
      classes: 'Sınıflar (OOP)',
      noise: 'Perlin Gürültüsü',
      recursion: 'Özyineleme ve Fraktallar',
      text: 'Metin ve Tipografi',
      gradient: 'Gradyanlar'
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
      m5: 'Systeme & Generierung',
      m6: 'Typografie & Farbe'
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
      particles: 'Arrays & Partikel',
      classes: 'Klassen (OOP)',
      noise: 'Perlin-Rauschen',
      recursion: 'Rekursion & Fraktale',
      text: 'Text & Typografie',
      gradient: 'Farbverläufe'
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
      }
    }
  }
};

export const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];
