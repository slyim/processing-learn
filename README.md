# Processing.js Studio — YTÜ Programlama

A browser-based studio for learning [Processing](https://processing.org/) through p5.js. Lessons run side-by-side with a live code editor and canvas — you change the code, you see the result.

Written for students of **YTÜ Programlama** (Yıldız Teknik Üniversitesi), available in Turkish, English, and German.

> 🇹🇷 [Türkçe sürüm aşağıda](#türkçe).

![Stack](https://img.shields.io/badge/Vite-8-646cff) ![React](https://img.shields.io/badge/React-19-61dafb) ![p5.js](https://img.shields.io/badge/p5.js-1.7-ed225d)

---

## What this is

- **18 structured lessons** grouped into 6 modules — shapes, color, variables, control flow, input, animation, transforms, OOP, noise, recursion, typography, gradients.
- **Playground tab** — a blank sketch where you can paste anything or start from scratch. Your work is saved in `localStorage`, so closing the tab doesn't lose it.
- **Live transpiler** — write Processing (Java-flavored) code; it's rewritten to p5.js in the browser on every keystroke.
- **Runs fully in the browser.** No Java, no Processing IDE, no install. Just `npm run dev` or open the deployed site.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production bundle in dist/
npm run lint      # eslint
```

Requires Node 20+. The app loads p5.js from a CDN via [index.html](index.html), so no runtime dependency needs to ship — only the editor and transpiler.

## The transpiler

Processing is Java-flavored; p5.js is JavaScript. [src/transpile.js](src/transpile.js) bridges them with a string-to-string rewrite that covers the beginner/intermediate subset:

| Processing                           | Becomes                              |
| ------------------------------------ | ------------------------------------ |
| `void draw() {}`                     | `function draw() {}`                 |
| `int add(int a, int b) { ... }`      | `function add(a, b) { ... }`         |
| `int x = 5;`                         | `let x = 5;`                         |
| `int[] xs = {1, 2, 3};`              | `let xs = [1, 2, 3];`                |
| `int[] xs = new int[10];`            | `let xs = new Array(10).fill(0);`    |
| `size(320, 240)`                     | `createCanvas(320, 240)`             |
| `new PVector(0, 0)`                  | `createVector(0, 0)`                 |
| `println(...)` / `print(...)`        | `console.log(...)`                   |
| `(float) x`                          | `x`                                  |
| `for (Ball b : balls)`               | `for (let b of balls)`               |
| `class Ball { Ball() { ... } }`      | `class Ball { constructor() { ... } }` |
| `public`, `private`, `static`, etc.  | *(stripped)*                         |

**Kept as-is** because p5.js already exposes them as functions: `color(r, g, b)`, `int(str)`, `float(str)`, `boolean(str)`.

### What's **not** supported

The transpiler is ~50 lines of regex — it isn't a full parser. These won't work:

- Generics (`ArrayList<Ball>`). Use plain arrays.
- Interfaces, inheritance beyond a single `extends`.
- Lambdas, try/catch on Java-specific exceptions.
- Method overloading (JS has no such concept — the last definition wins).
- `String.equals()`, `.length()` as a method (use `.length` property).
- Code that relies on string literals containing Java-looking syntax — the rewrite doesn't protect strings.

If something from a Processing tutorial doesn't run, simplify it. The Playground tab is the right place to try.

## Project layout

```
src/
  App.jsx           Single-page studio (layout, editor, runner, sidebar)
  transpile.js      Processing → p5.js string rewrite
  sketches.js       Starter sketch per lesson
  i18n.js           Course structure, lesson copy in en/tr/de
  theme.js          Dark (neutral + orange) and light palettes
  main.jsx          Entry point
```

The app is deliberately small — one screen, one runtime, no routing. Adding a lesson means adding an entry to `sketches.js`, `i18n.js`, and the appropriate module in `modules` (in `i18n.js`).

## Contributing a lesson

1. Pick an id (camelCase, unique), e.g. `vectors`.
2. Add the starter code to `sketches.js` under that id, plus an icon in `sectionIcons`.
3. Add the lesson copy (title + intro + concepts + tryIt) to each language in `i18n.js`.
4. Place the id in one of the `modules` arrays in the order you want it to appear.

That's it — the sidebar, numbering, and lesson panel pick it up automatically.

## Credits

- [p5.js](https://p5js.org/) — the runtime.
- [CodeMirror 6](https://codemirror.net/) — the editor.
- Course content written for **YTÜ Programlama**.

---

<a id="türkçe"></a>

# 🇹🇷 Türkçe

**Processing.js Stüdyosu**, tarayıcıda çalışan bir Processing öğrenme ortamıdır. Dersler canlı bir kod editörü ve çizim alanıyla yan yana çalışır — kodu değiştirirsiniz, sonucu anında görürsünüz.

Yıldız Teknik Üniversitesi **YTÜ Programlama** öğrencileri için hazırlanmıştır. Türkçe, İngilizce ve Almanca desteklenir.

## Özellikler

- **18 ders · 6 modül** — şekiller, renk, değişkenler, koşullar, döngüler, fonksiyonlar, fare/klavye girişi, animasyon, dönüşümler, trigonometri, diziler, sınıflar (OOP), Perlin gürültüsü, özyineleme, metin, gradyan.
- **Deneme Alanı (Playground) sekmesi** — boş bir çizim alanı. Yazdığınız kod `localStorage`'a kaydedilir; sekmeyi kapatınca kaybolmaz.
- **Anlık transpiler** — Processing (Java tadında) yazarsınız, arka planda p5.js'e çevrilir.
- **Kurulum gerektirmez.** Java, Processing IDE, hiçbir şey yüklemenize gerek yok; sadece tarayıcı.

## Hızlı başlangıç

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # üretim paketini dist/ altında oluşturur
npm run lint
```

Node 20 veya üzeri gerekir. p5.js CDN'den yüklenir ([index.html](index.html)), bu yüzden paketlenmiş sürüm küçüktür.

## Transpiler hakkında

Processing Java tarzıdır; p5.js JavaScript. [src/transpile.js](src/transpile.js) başlangıç ve orta seviye öğeleri kapsayan bir dönüştürme yapar:

| Processing                           | JavaScript karşılığı                 |
| ------------------------------------ | ------------------------------------ |
| `void draw() {}`                     | `function draw() {}`                 |
| `int add(int a, int b) { ... }`      | `function add(a, b) { ... }`         |
| `int x = 5;`                         | `let x = 5;`                         |
| `int[] xs = {1, 2, 3};`              | `let xs = [1, 2, 3];`                |
| `int[] xs = new int[10];`            | `let xs = new Array(10).fill(0);`    |
| `size(320, 240)`                     | `createCanvas(320, 240)`             |
| `new PVector(0, 0)`                  | `createVector(0, 0)`                 |
| `println(...)` / `print(...)`        | `console.log(...)`                   |
| `(float) x`                          | `x` *(tür dönüşümü atılır)*          |
| `for (Ball b : balls)`               | `for (let b of balls)`               |
| `class Ball { Ball() { ... } }`      | `class Ball { constructor() { ... } }` |

### Desteklenmeyenler

Regex tabanlı bir dönüştürme olduğu için tam parser değil. Çalışmayacaklar:

- Generics (`ArrayList<Ball>`) — düz dizi kullanın.
- Interface, çoklu `extends`.
- Lambda, Java'ya özel `try/catch` sınıfları.
- Fonksiyon aşırı yüklemesi (overload) — JS'de tek tanım kalır.
- `.equals()`, metot olarak `.length()` — property olarak `.length` kullanın.
- Java'ya benzer içerik barındıran string literal'ler — rewrite stringleri korumaz.

Processing örneği çalışmıyorsa sadeleştirin; Deneme Alanı sekmesi tam olarak bunun için var.

## Katkıda bulunma — yeni ders eklemek

1. Benzersiz bir id seçin (camelCase), örn. `vectors`.
2. [src/sketches.js](src/sketches.js) içine başlangıç kodunu ve `sectionIcons` altına bir emoji ekleyin.
3. [src/i18n.js](src/i18n.js) içine üç dilde (en/tr/de) ders metnini yazın (intro + concepts + tryIt).
4. `modules` dizisinde uygun modülün `sectionIds` listesine id'yi ekleyin.

Sidebar ve numaralandırma otomatik olarak güncellenir.

## Katkılar / Teşekkür

- [p5.js](https://p5js.org/) — çalışma zamanı.
- [CodeMirror 6](https://codemirror.net/) — editör.
- İçerik **YTÜ Programlama** için yazılmıştır.
