class Sapling {
  constructor(posx, posy, p) {
    this.svec = p.createVector(posx, posy);
    this.point;
  }

  display(temp_ball, p) {
    this.point = p.createVector(temp_ball.pos.x, temp_ball.pos.y);
    p.fill(0, 100, 100);

    p.push();
    p.translate(this.svec.x, this.svec.y);
    this.point.sub(this.svec);
    this.point.normalize();
    this.point.mult(12);
    

    p.stroke(200);
    p.line(0, 0, this.point.x, this.point.y)

    p.pop();
  }
}
