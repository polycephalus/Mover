class Sapling {
  constructor(posx, posy) {
    this.svec = createVector(posx, posy);
    this.point;
  }

  //take ball
  display() {
    this.point = createVector(ball.pos.x, ball.pos.y);
    // this.point = createVector(temp_ball.pos.x, temp_ball.pos.y);
    fill(0, 100, 100);

    push();
    translate(this.svec.x, this.svec.y);
    this.point.sub(this.svec);
    this.point.normalize();
    this.point.mult(12);
    

    stroke(200);
    line(0, 0, this.point.x, this.point.y)

    pop();
  }
}
