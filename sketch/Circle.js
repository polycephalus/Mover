function Circle(posx, posy) {
    this.hue = 2;
    this.cpos = createVector(posx, posy);

    this.display = function() {
        fill(this.hue, 255, 255);
        ellipse(this.cpos.x, this.cpos.y, 20, 20);
    };
    this.display2 = function() {
        fill(200, 255, 255);
        ellipse(this.cpos.x, this.cpos.y, 20, 20);
    };
}