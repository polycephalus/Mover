class Sapling {
  constructor(posx, posy) {
    // this.posx = posx;
    // this.posy = posy;
    this.svec = createVector(posx, posy);
    // this.point;
  }

  display() {
    //upsetting
    // this.point = createVector(ball.pos.x, ball.pos.y);
    fill(0, 100, 100);
    // ellipse(this.posx, this.posy, 10, 10); //20

    push();
    translate(this.posx, this.posy);
    this.point.sub(this.svec);
    this.point.normalize();
    this.point.mult(12);
    

    stroke(200);
    line(0, 0, this.point.x, this.point.y)

    pop();
  }
}
