// Sketches written in Processing (Java-flavored) syntax.
// Transpiled to p5.js JS before execution — see transpile.js.
// Color palette: YTÜ orange (#ff7a1a) and a soft amber (#ffb347) accent.
export const sketches = {
  playground: `// Welcome to your Playground.
// Write any Processing code here and press Run.
// Arrow, class, array, void/function, int/float — all supported.

void setup() {
  size(320, 240);
  background(18);
}

void draw() {
  noStroke();
  fill(255, 122, 26);
  circle(mouseX, mouseY, 40);
}`,

  intro: `void setup() {
  size(320, 240);
  background(18);
}

void draw() {
  fill(255, 122, 26);
  circle(160, 120, 80);
}`,

  fundamentals: `void setup() {
  size(320, 280);
  background(20);
  fill(255, 122, 26);
  stroke(255, 179, 71);
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
  fill(255, 122, 26, 180);
  rect(40, 160, 100, 80);
  fill(255, 179, 71, 180);
  rect(100, 180, 100, 80);
  fill(255, 220, 150, 180);
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
  fill(255, 122, 26);
  noStroke();
  circle(x, 100, diameter);
}`,

  conditionals: `void setup() {
  size(320, 240);
}

void draw() {
  background(20);
  if (mouseX < 160) {
    fill(255, 179, 71);
  } else {
    fill(255, 122, 26);
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
    fill(255, 122, 26);
    circle(x, y, 20);
  }
  for (int r = 5; r < 100; r += 10) {
    noFill();
    stroke(255, 179, 71, 140);
    circle(160, 150, r * 2);
  }
}`,

  functions: `void setup() {
  size(320, 260);
  background(20);
  noLoop();
}

void draw() {
  drawStar(80, 130, 40, 5, color(255, 122, 26));
  drawStar(160, 130, 50, 7, color(255, 179, 71));
  drawStar(240, 130, 40, 9, color(255, 220, 150));
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
  fill(255, 122, 26);
  circle(mouseX, mouseY, 30);
  if (mouseIsPressed) {
    stroke(255, 179, 71);
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
  fill(255, 122, 26);
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
    fill(255, 122, 26, 220 - i * 30);
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
    fill(255, 179, 71);
    ellipse(0, -50, 30, 80);
    pop();
  }
  fill(255, 122, 26);
  circle(0, 0, 30);
  angle += 0.01;
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
    fill(255, 122, 26);
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
  stroke(255, 122, 26);
  strokeWeight(2);
  noFill();
  beginShape();
  for (int x = 0; x < 320; x += 2) {
    float y = 130 + sin(x * 0.05) * 60;
    vertex(x, y);
  }
  endShape();
  stroke(255, 179, 71);
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
    fill(255, 122, 26, i * 5);
    circle(trail[i].x, trail[i].y, 10);
  }
  t += 0.01;
}`,

  recursion: `void setup() {
  size(320, 280);
  background(20);
  noLoop();
  stroke(255, 122, 26);
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
  fill(255, 122, 26);
  textSize(48);
  text('p5.js', 160, 80);
  fill(255, 179, 71);
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
}`
};

export const sectionIds = [
  'playground',
  'intro', 'fundamentals', 'colors', 'variables', 'conditionals',
  'loops', 'functions', 'interaction', 'keyboard', 'animation',
  'transforms', 'particles', 'classes', 'trigonometry', 'noise',
  'recursion', 'text', 'gradient'
];

export const sectionIcons = {
  playground: '🧪',
  intro: '🎨', fundamentals: '🔷', colors: '🌈', variables: '📊',
  conditionals: '🔀', loops: '🔄', functions: '🧩', interaction: '🖱️',
  keyboard: '⌨️', animation: '🎬', transforms: '🌀', particles: '✨',
  classes: '📦', trigonometry: '📐', noise: '🌊', recursion: '🌳',
  text: '🔤', gradient: '🎆'
};
