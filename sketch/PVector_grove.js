//sketch namespace/instance mode
//p5 sketch object
var sketch = function (p){
  let ball;
  let grove = [];

  let hue;

  p.setup = function() {
    p.createCanvas(800, 600);
    p.background(0);
    p.colorMode(p.HSB, 100);

    p.strokeWeight(2);
    p.stroke(100);

    ball = new Ball(p);
  }

  p.draw = function() {
    hue = p.frameCount%100; //modulo hue pulse
    p.fill(hue, 100, 100);

    ball.bounce(p);
    ball.move(p);
    ball.display(p);
  }
}; //sketch namespace

let myp5 = new p5(sketch);