let ball;
let c;
let currVec;

function setup() {
  // createCanvas(460, 460);
  createCanvas(800, 600);
  background(0);
  colorMode(HSB, 100, 100, 100);

  strokeWeight(2);
  // noStroke();
  stroke(255);

  ball = new Ball();
}

function draw() {
  c = frameCount%100; //modulo hue pulse
  fill(c, 100, 100);
  currVec = ball.position;
  ball.bounce();
  ball.move();
  ball.display();

  // fill(255);
  // textSize(52);
  // text(currVec.x , 100, 100);
}

class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  get position(){
    return this.pos;
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
      this.vel.x *= -10;
    }
    if (this.pos.y>height || this.pos.y<0) {
      this.vel.y *= -10;
    }
  }

  //new bounce works anyway
  // bounce_reset() {
  //   if (this.pos.x>width) {
  //     this.pos.x = width;
  //     this.vel.x *= -10;
  //   }
  //   if (this.pos.x<0) {
  //     this.pos.x = 0;
  //     this.vel.x *= -10;
  //   }
  //   if (this.pos.y>height) {
  //     this.pos.y = height;
  //     this.vel.y *= -10;
  //   }
  //   if (this.pos.y<0) {
  //     this.pos.y = 0;
  //     this.vel.y *= -10;
  //   }
  // }

  display() {
    // fill(0);
    ellipse(this.pos.x, this.pos.y, 50, 50); //20
  }
}
