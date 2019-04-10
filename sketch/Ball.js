//change to constructor function?
class Ball {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  // get position(){
  //   return this.pos;
  // }
  get position() {
    return this.pos;
  }

  move() {
    this.acc = p5.Vector.random2D();
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.pos.add(this.vel);
  }

  bounce() {
    if (this.pos.x>width || this.pos.x<0) {
      this.vel.x *= -10; //extra speed to get away from the edges
    }
    if (this.pos.y>height || this.pos.y<0) {
      this.vel.y *= -10;
    }
  }

  display() {
    // fill(0);
    ellipse(this.pos.x, this.pos.y, 20, 20); //20
  }
}
