let ball;

function setup() {
  createCanvas(460, 460);
  background(255, 200, 200);
  // colorMode(HSB);
  //
  strokeWeight(2);
  stroke(255);

  ball = new Ball();
}

function draw() {
  // ellipse(mouseX, mouseY, 50, 50);
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
    fill(0);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}
