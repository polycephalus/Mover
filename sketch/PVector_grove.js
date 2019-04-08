let ball;
let c;

function setup() {
  // createCanvas(460, 460);
  createCanvas(800, 600);
  background(0);
  colorMode(HSB, 100, 255, 255);

  strokeWeight(2);
  stroke(255);

  ball = new Ball();
}

function draw() {
  c = frameCount%100;
  fill(c, 255, 255);
  ball.bounce();
  ball.move();
  ball.display();
}

class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  move() {
    this.acc = p5.Vector.random2D();
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.pos.add(this.vel);
  }

  //fix bounce
  bounce() {
    if (this.pos.x>width || this.pos.x<0) {
      this.vel.x *= -1;
    }
    if (this.pos.y>height || this.pos.y<0) {
      this.vel.y *= -1;
    }
  }

  // p5.Vector bounce() {
  //   if (this.pos.x>width || this.pos.x<0) {
  //     this.vel.x *= -1;
  //   }
  //   if (this.pos.y>height || this.pos.y<0) {
  //     this.vel.y *= -1;
  //   }
  //   return this.pos;
  // }

  display() {
    // fill(0);
    ellipse(this.pos.x, this.pos.y, 50, 50); //20
  }
}
