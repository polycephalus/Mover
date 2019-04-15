function Circle(posx, posy, p) {
    this.cpos = p.createVector(posx, posy);

    this.beep = function(sqr) {
        //altering square
        //local square var is a reference that points to the same object as the original
        let square = sqr;
        square.spos.y = p.height/4;
        console.log(square.spos.y);
    };

    this.display = function() {
        p.fill(255, 0, 255);
        p.ellipse(this.cpos.x, this.cpos.y, 20, 20);
    };
}