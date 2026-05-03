// Sketches written in Processing (Java-flavored) syntax.
// Transpiled to p5.js JS before execution — see transpile.js.
// Color palette: YTÜ green (#22c55e) and a soft mint (#4ade80) accent.
export const sketches = {
  intro: `void setup() {
  size(320, 240);
  background(18);
}

void draw() {
  fill(34, 197, 94);
  circle(160, 120, 80);
}`,

  fundamentals: `void setup() {
  size(320, 280);
  background(20);
  fill(34, 197, 94);
  stroke(74, 222, 128);
  strokeWeight(2);
}

void draw() {
  noLoop();
  rect(10, 10, 60, 50);
  circle(120, 35, 60);
  triangle(220, 10, 250, 60, 190, 60);
  line(10, 100, 290, 100);
  ellipse(70, 180, 100, 60);
  point(200, 180);
  arc(260, 180, 80, 80, 0, PI);
}`,

  colors: `void setup() {
  size(320, 280);
  background(20);
  noLoop();
}

void draw() {
  for (int i = 0; i < 320; i++) {
    stroke(i * 255 / 320, 120 + i * 0.2, 40);
    line(i, 0, i, 140);
  }
  noStroke();
  fill(34, 197, 94, 180);
  rect(40, 160, 100, 80);
  fill(74, 222, 128, 180);
  rect(100, 180, 100, 80);
  fill(134, 239, 172, 180);
  rect(160, 200, 100, 60);
}`,

  variables: `int x = 50;
int speed = 2;
int diameter = 30;

void setup() {
  size(320, 200);
}

void draw() {
  background(20);
  x = x + speed;
  if (x > 320 + diameter) x = -diameter;
  fill(34, 197, 94);
  noStroke();
  circle(x, 100, diameter);
}`,

  conditionals: `void setup() {
  size(320, 240);
}

void draw() {
  background(20);
  if (mouseX < 160) {
    fill(74, 222, 128);
  } else {
    fill(34, 197, 94);
  }
  noStroke();
  rect(0, 0, width / 2, height);
  fill(240);
  textSize(14);
  textAlign(CENTER);
  if (mouseX < 160) {
    text('LEFT', 160, 130);
  } else {
    text('RIGHT', 160, 130);
  }
}`,

  loops: `void setup() {
  size(320, 300);
  background(20);
  noLoop();
}

void draw() {
  noStroke();
  for (int i = 0; i < 12; i++) {
    float angle = i * PI / 6;
    float x = 160 + cos(angle) * 80;
    float y = 150 + sin(angle) * 80;
    fill(34, 197, 94);
    circle(x, y, 20);
  }
  for (int r = 5; r < 100; r += 10) {
    noFill();
    stroke(74, 222, 128, 140);
    circle(160, 150, r * 2);
  }
}`,

  functions: `void setup() {
  size(320, 260);
  background(20);
  noLoop();
}

void draw() {
  drawStar(80, 130, 40, 5, color(34, 197, 94));
  drawStar(160, 130, 50, 7, color(74, 222, 128));
  drawStar(240, 130, 40, 9, color(134, 239, 172));
}

void drawStar(float cx, float cy, float r, int n, color c) {
  fill(c);
  noStroke();
  beginShape();
  for (int i = 0; i < n * 2; i++) {
    float rad = i % 2 == 0 ? r : r / 2;
    float a = i * PI / n;
    vertex(cx + cos(a) * rad, cy + sin(a) * rad);
  }
  endShape(CLOSE);
}`,

  interaction: `void setup() {
  size(320, 300);
  background(20);
}

void draw() {
  noStroke();
  fill(34, 197, 94);
  circle(mouseX, mouseY, 30);
  if (mouseIsPressed) {
    stroke(74, 222, 128);
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

void mousePressed() {
  background(20);
}`,

  keyboard: `int x = 160;
int y = 150;

void setup() {
  size(320, 300);
}

void draw() {
  background(20);
  if (keyIsDown(LEFT_ARROW)) x -= 3;
  if (keyIsDown(RIGHT_ARROW)) x += 3;
  if (keyIsDown(UP_ARROW)) y -= 3;
  if (keyIsDown(DOWN_ARROW)) y += 3;
  noStroke();
  fill(34, 197, 94);
  circle(x, y, 30);
  fill(220);
  textAlign(CENTER);
  text('Use arrow keys', 160, 20);
}`,

  animation: `void setup() {
  size(320, 240);
}

void draw() {
  background(20);
  noStroke();
  for (int i = 0; i < 5; i++) {
    float y = 120 + sin(frameCount * 0.05 + i * 0.8) * 50;
    fill(34, 197, 94, 220 - i * 30);
    circle(40 + i * 60, y, 40);
  }
}`,

  transforms: `float angle = 0;

void setup() {
  size(320, 300);
}

void draw() {
  background(20);
  translate(160, 150);
  rotate(angle);
  noStroke();
  for (int i = 0; i < 8; i++) {
    push();
    rotate(i * PI / 4);
    fill(74, 222, 128);
    ellipse(0, -50, 30, 80);
    pop();
  }
  fill(34, 197, 94);
  circle(0, 0, 30);
  angle += 0.01;
}`,

  pvector: `PVector pos;
PVector vel;

void setup() {
  size(320, 300);
  pos = new PVector(160, 150);
  vel = new PVector(2.5, 3.2);
}

void draw() {
  background(20);
  pos.add(vel);

  if (pos.x < 15 || pos.x > width - 15) vel.x *= -1;
  if (pos.y < 15 || pos.y > height - 15) vel.y *= -1;

  fill(34, 197, 94);
  noStroke();
  circle(pos.x, pos.y, 30);
}`,

  particles: `let particles = [];

void setup() {
  size(320, 300);
  for (int i = 0; i < 30; i++) {
    particles.push({
      x: random(320), y: random(300),
      vx: random(-2, 2), vy: random(-2, 2),
      size: random(5, 15)
    });
  }
}

void draw() {
  background(20, 50);
  noStroke();
  for (Particle p : particles) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > 320) p.vx *= -1;
    if (p.y < 0 || p.y > 300) p.vy *= -1;
    fill(34, 197, 94);
    circle(p.x, p.y, p.size);
  }
}`,

  classes: `class Ball {
  Ball(float x_, float y_) {
    this.x = x_;
    this.y = y_;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.r = random(10, 25);
    this.c = color(random(180, 255), random(100, 180), random(30, 80));
  }
  void update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > height - this.r) this.vy *= -1;
  }
  void show() {
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let balls = [];

void setup() {
  size(320, 280);
  for (int i = 0; i < 8; i++) {
    balls.push(new Ball(random(320), random(280)));
  }
}

void draw() {
  background(20);
  for (Ball b : balls) {
    b.update();
    b.show();
  }
}`,

  trigonometry: `void setup() {
  size(320, 260);
  background(20);
  noLoop();
}

void draw() {
  stroke(34, 197, 94);
  strokeWeight(2);
  noFill();
  beginShape();
  for (int x = 0; x < 320; x += 2) {
    float y = 130 + sin(x * 0.05) * 60;
    vertex(x, y);
  }
  endShape();
  stroke(74, 222, 128);
  beginShape();
  for (int x = 0; x < 320; x += 2) {
    float y = 130 + cos(x * 0.05) * 60;
    vertex(x, y);
  }
  endShape();
}`,

  noise: `float t = 0;
let trail = [];

void setup() {
  size(320, 240);
}

void draw() {
  background(20, 40);
  float x = noise(t) * 320;
  float y = noise(t + 100) * 240;
  trail.push({x: x, y: y});
  if (trail.length > 50) trail.shift();
  noStroke();
  for (int i = 0; i < trail.length; i++) {
    fill(34, 197, 94, i * 5);
    circle(trail[i].x, trail[i].y, 10);
  }
  t += 0.01;
}`,

  recursion: `void setup() {
  size(320, 280);
  background(20);
  noLoop();
  stroke(34, 197, 94);
  strokeWeight(1);
}

void draw() {
  translate(160, 260);
  branch(70);
}

void branch(float len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(PI / 6);
    branch(len * 0.7);
    pop();
    push();
    rotate(-PI / 6);
    branch(len * 0.7);
    pop();
  }
}`,

  text: `void setup() {
  size(320, 240);
  background(20);
  noLoop();
}

void draw() {
  textAlign(CENTER, CENTER);
  fill(34, 197, 94);
  textSize(48);
  text('p5.js', 160, 80);
  fill(74, 222, 128);
  textSize(18);
  text('creative coding', 160, 130);
  fill(220);
  textSize(12);
  for (int i = 0; i < 6; i++) {
    text('star ' + i, 60 + i * 40, 190);
  }
}`,

  gradient: `void setup() {
  size(320, 260);
  noLoop();
}

void draw() {
  for (int y = 0; y < height; y++) {
    float t = y / (float) height;
    float r = lerp(20, 255, t);
    float g = lerp(10, 140, t);
    float b = lerp(10, 40, t);
    stroke(r, g, b);
    line(0, y, width, y);
  }
  noStroke();
  for (int i = 0; i < 20; i++) {
    float t = i / 19.0;
    fill(255, 255, 255, 40 + t * 60);
    circle(lerp(40, 280, t), 130 + sin(t * TWO_PI) * 40, 20);
  }
}`,

  threed: `void setup() {
  size(320, 260, WEBGL);
}

void draw() {
  background(20);
  lights();

  translate(0, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);

  noStroke();
  fill(34, 197, 94);
  box(80);
}`,

  // === M8 Strings & Text Data ===
  stringBasics: `String name = "Processing";

void setup() {
  size(320, 240);
  background(20);
  noLoop();
}

void draw() {
  fill(34, 197, 94);
  textAlign(CENTER, CENTER);
  textSize(22);
  text(name, 160, 90);
  fill(220);
  textSize(12);
  text("length: " + name.length, 160, 140);
  text("upper: " + name.toUpperCase(), 160, 165);
  text("char[0]: " + name.charAt(0), 160, 190);
}`,

  stringOps: `void setup() {
  size(320, 260);
  background(20);
  noLoop();
}

void draw() {
  fill(34, 197, 94);
  textAlign(CENTER, CENTER);
  textSize(15);

  String greet = "Hello, ";
  String who = "world";
  String full = greet + who + "!";

  text(full, 160, 70);
  fill(220);
  textSize(11);
  text("substring(7, 12) = '" + full.substring(7, 12) + "'", 160, 110);
  text("indexOf(',') = " + full.indexOf(','), 160, 135);
  text("replace = " + full.replace("world", "p5"), 160, 160);
  text("split(' ').length = " + full.split(' ').length, 160, 185);
}`,

  stringFormat: `void setup() {
  size(320, 240);
  background(20);
  noLoop();
}

void draw() {
  fill(34, 197, 94);
  textAlign(CENTER, CENTER);
  textSize(13);

  int n = 42;
  float pie = 3.14159;

  text("n = " + n, 160, 60);
  text("nf(pie, 1, 2) = " + nf(pie, 1, 2), 160, 90);
  text("hex(255) = " + hex(255), 160, 120);
  text("int('17') = " + int("17"), 160, 150);
  text("float('2.5') + 1 = " + (float("2.5") + 1), 160, 180);
}`,

  // === M9 Arrays in Depth ===
  arrays: `int[] heights = new int[10];

void setup() {
  size(320, 240);
  noLoop();
  for (int i = 0; i < heights.length; i++) {
    heights[i] = (int) random(40, 200);
  }
}

void draw() {
  background(20);
  noStroke();
  fill(34, 197, 94);
  for (int i = 0; i < heights.length; i++) {
    float x = i * 32;
    rect(x + 4, 240 - heights[i], 24, heights[i]);
  }
}`,

  twoDArrays: `int cols = 16;
int rows = 12;
let grid = [];

void setup() {
  size(320, 240);
  noLoop();
  for (int x = 0; x < cols; x++) {
    grid.push([]);
    for (int y = 0; y < rows; y++) {
      grid[x].push((int) random(0, 255));
    }
  }
}

void draw() {
  background(20);
  noStroke();
  for (int x = 0; x < cols; x++) {
    for (int y = 0; y < rows; y++) {
      fill(grid[x][y], 100, 30);
      rect(x * 20, y * 20, 20, 20);
    }
  }
}`,

  arrayList: `let words = [];

void setup() {
  size(320, 260);
  textAlign(LEFT);
  textSize(14);
  words.push("Processing");
  words.push("p5");
  words.push("creative");
}

void draw() {
  background(20);
  fill(34, 197, 94);
  for (int i = 0; i < words.length; i++) {
    text(i + ": " + words[i], 30, 50 + i * 22);
  }
  fill(220);
  textSize(10);
  text("Click to add a word. words.length = " + words.length, 30, 240);
}

void mousePressed() {
  words.push("word" + words.length);
}`,

  // === M10 Math Toolkit ===
  mapConstrain: `void setup() {
  size(320, 240);
}

void draw() {
  background(20);
  float d = map(mouseX, 0, width, 10, 120);
  d = constrain(d, 10, 120);
  noStroke();
  fill(34, 197, 94);
  circle(width / 2, height / 2, d);
  fill(220);
  textSize(11);
  textAlign(CENTER);
  text("d = " + nf(d, 1, 1), width / 2, 30);
  text("(move mouse to map mouseX -> diameter)", width / 2, height - 20);
}`,

  lerpEasing: `float x = 50;
float targetX = 50;

void setup() {
  size(320, 200);
}

void draw() {
  background(20);
  x = lerp(x, targetX, 0.08);
  fill(34, 197, 94);
  noStroke();
  circle(x, 100, 30);
  fill(220);
  textSize(11);
  textAlign(CENTER);
  text("Click to set target. x eases toward it.", 160, 30);
}

void mousePressed() {
  targetX = mouseX;
}`,

  mathFuncs: `void setup() {
  size(320, 280);
  noLoop();
}

void draw() {
  background(20);
  fill(34, 197, 94);
  textAlign(LEFT);
  textSize(13);
  text("abs(-7) = " + abs(-7), 30, 50);
  text("sqrt(81) = " + sqrt(81), 30, 80);
  text("pow(2, 10) = " + pow(2, 10), 30, 110);
  text("dist(0,0, 3,4) = " + dist(0, 0, 3, 4), 30, 140);
  text("floor(2.9) = " + floor(2.9), 30, 170);
  text("ceil(2.1) = " + ceil(2.1), 30, 200);
  text("min(5, 12) = " + min(5, 12), 30, 230);
  text("max(5, 12) = " + max(5, 12), 30, 260);
}`,

  // === M11 Images ===
  imageBasics: `void setup() {
  size(320, 240);
  background(20);
  noLoop();
}

void draw() {
  noStroke();
  for (int x = 0; x < width; x += 8) {
    fill(34, 197, 94, x);
    rect(x, 80, 8, 80);
  }
  fill(220);
  textAlign(CENTER);
  textSize(12);
  text("loadImage('cat.png') in setup()", width / 2, 50);
  text("image(img, x, y) draws it on canvas", width / 2, 200);
}`,

  imageTint: `void setup() {
  size(320, 240);
  background(20);
  noLoop();
}

void draw() {
  noStroke();
  for (int i = 0; i < 10; i++) {
    fill(255 - i * 18, 122, 26 + i * 12, 80);
    circle(60 + i * 26, 120, 50);
  }
  fill(220);
  textSize(11);
  textAlign(CENTER);
  text("tint(r, g, b) recolors images", width / 2, 30);
  text("noTint() turns it back off", width / 2, 210);
}`,

  // === M12 Pixels & Filters ===
  pixelArray: `void setup() {
  size(320, 240);
  noLoop();
}

void draw() {
  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      let i = (x + y * width) * 4;
      pixels[i] = (x * 255) / width;
      pixels[i + 1] = 122;
      pixels[i + 2] = (y * 255) / height;
      pixels[i + 3] = 255;
    }
  }
  updatePixels();
}`,

  getSet: `void setup() {
  size(320, 240);
  noLoop();
}

void draw() {
  background(20);
  for (int x = 0; x < width; x += 4) {
    for (int y = 0; y < height; y += 4) {
      set(x, y, color(x % 255, y % 255, 100));
      set(x + 1, y, color(x % 255, y % 255, 100));
    }
  }
  updatePixels();
}`,

  imageFilter: `void setup() {
  size(320, 240);
  noLoop();
}

void draw() {
  background(20);
  noStroke();
  for (int i = 0; i < 30; i++) {
    fill(random(255), random(122, 255), random(26, 100));
    circle(random(width), random(height), random(20, 60));
  }
  filter(BLUR, 3);
}`,

  // === M13 Time & Frames ===
  millisTime: `void setup() {
  size(320, 200);
  textAlign(CENTER, CENTER);
  textSize(22);
}

void draw() {
  background(20);
  fill(34, 197, 94);
  let secs = millis() / 1000.0;
  text(nf(secs, 1, 2) + "s", width / 2, height / 2);
  fill(220);
  textSize(11);
  text("millis() since sketch start", width / 2, height - 30);
}`,

  dateTime: `void setup() {
  size(320, 200);
  textAlign(CENTER, CENTER);
  textSize(18);
}

void draw() {
  background(20);
  fill(34, 197, 94);
  let h = hour();
  let m = minute();
  let s = second();
  text(nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2), width / 2, height / 2 - 10);
  fill(220);
  textSize(11);
  text(year() + "-" + nf(month(), 2) + "-" + nf(day(), 2), width / 2, height / 2 + 25);
}`,

  // === M14 Inheritance & OOP Patterns ===
  extendsClass: `class Shape {
  Shape(float x_, float y_) {
    this.x = x_;
    this.y = y_;
  }
  void draw() {
    // base — overridden by subclasses
  }
}

class Bubble extends Shape {
  Bubble(float x_, float y_, float r_) {
    super(x_, y_);
    this.r = r_;
  }
  void draw() {
    fill(34, 197, 94);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let shapes = [];

void setup() {
  size(320, 240);
  for (int i = 0; i < 5; i++) {
    shapes.push(new Bubble(40 + i * 60, 120, 18));
  }
}

void draw() {
  background(20);
  for (Shape s : shapes) {
    s.draw();
  }
}`,

  polymorphism: `class Animal {
  String speak() {
    return "...";
  }
}
class Dog extends Animal {
  String speak() { return "woof"; }
}
class Cat extends Animal {
  String speak() { return "meow"; }
}

let animals = [];

void setup() {
  size(320, 240);
  noLoop();
  animals.push(new Dog());
  animals.push(new Cat());
  animals.push(new Dog());
}

void draw() {
  background(20);
  fill(34, 197, 94);
  textSize(20);
  textAlign(CENTER, CENTER);
  for (int i = 0; i < animals.length; i++) {
    text(animals[i].speak(), width / 2, 50 + i * 50);
  }
}`,

  // === M15 Curves & Custom Shapes ===
  vertexShape: `void setup() {
  size(320, 240);
  noLoop();
  background(20);
}

void draw() {
  noStroke();
  fill(34, 197, 94);
  beginShape();
  vertex(80, 60);
  vertex(240, 60);
  vertex(280, 180);
  vertex(160, 220);
  vertex(40, 180);
  endShape(CLOSE);
}`,

  bezierCurve: `void setup() {
  size(320, 240);
  noLoop();
  background(20);
}

void draw() {
  noFill();
  stroke(34, 197, 94);
  strokeWeight(3);
  bezier(20, 200, 80, 20, 240, 20, 300, 200);
  noStroke();
  fill(220);
  circle(20, 200, 6);
  circle(300, 200, 6);
  fill(100, 200, 255);
  circle(80, 20, 6);
  circle(240, 20, 6);
}`,

  customShapes: `void setup() {
  size(320, 240);
  noLoop();
  background(20);
}

void draw() {
  drawCog(160, 120, 80, 12);
}

void drawCog(float cx, float cy, float r, int teeth) {
  noStroke();
  fill(34, 197, 94);
  beginShape();
  for (int i = 0; i < teeth * 2; i++) {
    float a = i * TWO_PI / (teeth * 2);
    float rad = i % 2 == 0 ? r : r * 0.7;
    vertex(cx + cos(a) * rad, cy + sin(a) * rad);
  }
  endShape(CLOSE);
  fill(20);
  circle(cx, cy, r * 0.5);
}`,

  // === M16 Physics Basics ===
  physicsGravity: `let pos;
let vel;
let acc;

void setup() {
  size(320, 240);
  pos = createVector(160, 30);
  vel = createVector(2, 0);
  acc = createVector(0, 0.2);
}

void draw() {
  background(20, 80);
  vel.add(acc);
  pos.add(vel);
  if (pos.y > height - 15) {
    pos.y = height - 15;
    vel.y *= -0.85;
  }
  if (pos.x < 15 || pos.x > width - 15) vel.x *= -1;
  fill(34, 197, 94);
  noStroke();
  circle(pos.x, pos.y, 30);
}`,

  physicsSprings: `let x = 160;
let v = 0;
let restX = 160;

void setup() {
  size(320, 200);
}

void draw() {
  background(20);
  let force = -0.05 * (x - restX);
  v += force;
  v *= 0.95;
  x += v;
  stroke(74, 222, 128);
  strokeWeight(2);
  line(restX, 100, x, 100);
  noStroke();
  fill(34, 197, 94);
  circle(x, 100, 30);
}

void mousePressed() {
  x = mouseX;
  v = 0;
}`,

  physicsCollision: `class Ball {
  Ball(float x_, float y_) {
    this.pos = createVector(x_, y_);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = 18;
  }
  void update() {
    this.pos.add(this.vel);
    if (this.pos.x < this.r || this.pos.x > width - this.r) this.vel.x *= -1;
    if (this.pos.y < this.r || this.pos.y > height - this.r) this.vel.y *= -1;
  }
  void show() {
    fill(34, 197, 94);
    noStroke();
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

let balls = [];

void setup() {
  size(320, 240);
  for (int i = 0; i < 6; i++) {
    balls.push(new Ball(random(width), random(height)));
  }
}

void draw() {
  background(20);
  for (Ball b : balls) {
    b.update();
    b.show();
  }
  for (int i = 0; i < balls.length; i++) {
    for (int j = i + 1; j < balls.length; j++) {
      let d = dist(balls[i].pos.x, balls[i].pos.y, balls[j].pos.x, balls[j].pos.y);
      if (d < balls[i].r + balls[j].r) {
        let tmp = balls[i].vel;
        balls[i].vel = balls[j].vel;
        balls[j].vel = tmp;
      }
    }
  }
}`,

  // === M17 Generative Patterns ===
  flowField: `void setup() {
  size(320, 260);
  background(20);
}

void draw() {
  noStroke();
  for (int i = 0; i < 12; i++) {
    let x = random(width);
    let y = random(height);
    let n = noise(x * 0.01, y * 0.01, frameCount * 0.005);
    let a = n * TWO_PI * 2;
    let dx = cos(a) * 4;
    let dy = sin(a) * 4;
    fill(34, 197, 94, 100);
    circle(x + dx, y + dy, 3);
  }
}`,

  gridGen: `void setup() {
  size(320, 240);
  noLoop();
}

void draw() {
  background(20);
  noStroke();
  int cells = 16;
  float w = width / cells;
  float h = height / cells;
  for (int x = 0; x < cells; x++) {
    for (int y = 0; y < cells; y++) {
      float r = noise(x * 0.3, y * 0.3);
      if (r > 0.5) {
        fill(34, 197, 94, r * 220);
        rect(x * w + 2, y * h + 2, w - 4, h - 4);
      }
    }
  }
}`,

  lSystems: `String axiom = "F";
let rules = {"F": "F+F-F-F+F"};
String state = axiom;
int generations = 4;
float angleStep = PI / 2;

void setup() {
  size(320, 260);
  noLoop();
  for (int g = 0; g < generations; g++) {
    state = applyRules(state);
  }
}

void draw() {
  background(20);
  stroke(34, 197, 94);
  strokeWeight(1);
  translate(40, 220);
  for (int i = 0; i < state.length; i++) {
    let c = state.charAt(i);
    if (c == "F") {
      line(0, 0, 6, 0);
      translate(6, 0);
    } else if (c == "+") {
      rotate(angleStep);
    } else if (c == "-") {
      rotate(-angleStep);
    }
  }
}

String applyRules(String s) {
  String out = "";
  for (int i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    out += rules[c] != null ? rules[c] : c;
  }
  return out;
}`,

  // === M18 Layers & Buffers ===
  pgraphics: `let pg;

void setup() {
  size(320, 240);
  pg = createGraphics(width, height);
}

void draw() {
  background(20);
  pg.clear();
  pg.noStroke();
  pg.fill(34, 197, 94, 200);
  pg.circle(mouseX, mouseY, 80);
  image(pg, 0, 0);
  fill(220);
  textSize(11);
  text("off-screen buffer drawn back to canvas", 10, 20);
}`,

  blendModes: `void setup() {
  size(320, 240);
  noLoop();
}

void draw() {
  background(20);
  noStroke();
  blendMode(ADD);
  fill(255, 0, 0, 180);
  circle(120, 120, 140);
  fill(0, 255, 0, 180);
  circle(180, 120, 140);
  fill(0, 0, 255, 180);
  circle(150, 170, 140);
  blendMode(BLEND);
}`,

  // === M19 Saving & Sharing ===
  saveFrame: `void setup() {
  size(320, 200);
  noLoop();
}

void draw() {
  background(20);
  fill(34, 197, 94);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("save('art.png') in real Processing", width / 2, 70);
  text("writes a PNG to disk", width / 2, 100);
  text("Click to log a save call", width / 2, 130);
}

void mousePressed() {
  console.log("save('art.png') would write here");
}`,

  exportSequence: `int frameNum = 0;

void setup() {
  size(320, 200);
  frameRate(8);
}

void draw() {
  background(20);
  fill(34, 197, 94);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("frame " + frameNum, width / 2, height / 2);
  fill(220);
  textSize(10);
  text("In Processing: saveFrame('out-####.png')", width / 2, height - 30);
  frameNum++;
}`,

  // === M20 Final Projects ===
  finalGame: `let player;
let bullets = [];

void setup() {
  size(320, 280);
  player = createVector(160, 240);
}

void draw() {
  background(20, 60);
  player.x = lerp(player.x, mouseX, 0.2);
  fill(34, 197, 94);
  noStroke();
  rect(player.x - 15, player.y, 30, 8);

  if (frameCount % 12 == 0) {
    bullets.push(createVector(random(width), -10));
  }
  fill(74, 222, 128);
  for (let b of bullets) {
    b.y += 4;
    circle(b.x, b.y, 8);
  }
  fill(220);
  textSize(11);
  textAlign(LEFT);
  text("dodge!", 10, 20);
}`,

  finalArt: `void setup() {
  size(320, 320);
  background(20);
  noStroke();
}

void draw() {
  let t = frameCount * 0.02;
  for (int i = 0; i < 12; i++) {
    let a = i * TWO_PI / 12 + t;
    let r = 80 + sin(t + i) * 30;
    let x = width / 2 + cos(a) * r;
    let y = height / 2 + sin(a) * r;
    fill(255, 122 + sin(t + i) * 50, 26, 30);
    circle(x, y, 40);
  }
}`
};

export const sectionIds = [
  // M1
  'intro', 'fundamentals', 'colors',
  // M2
  'variables', 'conditionals', 'loops', 'functions',
  // M3
  'interaction', 'keyboard',
  // M4
  'animation', 'transforms', 'trigonometry',
  // M5
  'pvector', 'particles', 'classes',
  // M6
  'noise', 'recursion', 'threed',
  // M7
  'text', 'gradient',
  // M8 Strings
  'stringBasics', 'stringOps', 'stringFormat',
  // M9 Arrays
  'arrays', 'twoDArrays', 'arrayList',
  // M10 Math
  'mapConstrain', 'lerpEasing', 'mathFuncs',
  // M11 Images
  'imageBasics', 'imageTint',
  // M12 Pixels
  'pixelArray', 'getSet', 'imageFilter',
  // M13 Time
  'millisTime', 'dateTime',
  // M14 Inheritance
  'extendsClass', 'polymorphism',
  // M15 Curves
  'vertexShape', 'bezierCurve', 'customShapes',
  // M16 Physics
  'physicsGravity', 'physicsSprings', 'physicsCollision',
  // M17 Generative
  'flowField', 'gridGen', 'lSystems',
  // M18 Layers
  'pgraphics', 'blendModes',
  // M19 Saving
  'saveFrame', 'exportSequence',
  // M20 Projects
  'finalGame', 'finalArt'
];

export const sectionIcons = {
  intro: '🎨', fundamentals: '🔷', colors: '🌈', variables: '📊',
  conditionals: '🔀', loops: '🔄', functions: '🧩', interaction: '🖱️',
  keyboard: '⌨️', animation: '🎬', transforms: '🌀', pvector: '↗️', particles: '✨',
  classes: '📦', trigonometry: '📐', noise: '🌊', recursion: '🌳',
  threed: '🧊', text: '🔤', gradient: '🎆',
  stringBasics: '📝', stringOps: '✂️', stringFormat: '🔢',
  arrays: '📋', twoDArrays: '🗂️', arrayList: '📚',
  mapConstrain: '🗺️', lerpEasing: '↔️', mathFuncs: '➕',
  imageBasics: '🖼️', imageTint: '🎨',
  pixelArray: '🔍', getSet: '👁️', imageFilter: '🌗',
  millisTime: '⏱️', dateTime: '📅',
  extendsClass: '🧬', polymorphism: '🎭',
  vertexShape: '🔺', bezierCurve: '⤴️', customShapes: '💠',
  physicsGravity: '🌌', physicsSprings: '🪀', physicsCollision: '🎱',
  flowField: '🌬️', gridGen: '🔳', lSystems: '🌿',
  pgraphics: '🖥️', blendModes: '🌈',
  saveFrame: '💾', exportSequence: '🎞️',
  finalGame: '🎮', finalArt: '🖌️'
};
