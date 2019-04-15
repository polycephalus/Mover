function Square(xpos, ypos, p) {
    this.spos = p.createVector(xpos, ypos);

    this.display = function(){
        p.fill(255, 255, 0);
        p.rect(this.spos.x, this.spos.y, 20, 20);
    }
}