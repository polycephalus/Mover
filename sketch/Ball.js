class Ball {
  constructor(p) {
    this.pos = p.createVector(p.width/2, p.height/2); 
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
  }

  // get position() {
  //   return this.pos;
  // }

  move(p) {
    this.acc = p5.Vector.random2D();
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.pos.add(this.vel);
  }

  bounce(p) {
    if (this.pos.x>p.width || this.pos.x<0) {
      this.vel.x *= -10; //extra speed to get away from the edges
    }
    if (this.pos.y>p.height || this.pos.y<0) {
      this.vel.y *= -10;
    }
  }

  display(p) {
    p.ellipse(this.pos.x, this.pos.y, 50, 50);
  }
}
