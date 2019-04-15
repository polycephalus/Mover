//sketch namespace/instance mode
//p5 sketch object
var sketch = function (p){
  let ball;
  let grove = [];

  // let hue;

  p.setup = function() {
    p.createCanvas(460, 460);
    p.background(0, 255, 255);
    p.colorMode(p.HSB);

    p.strokeWeight(2);
    p.stroke(255);

    ball = new Ball(p);
    plantSaplings();
  }

  p.draw = function() {
    p.background(25);

    // hue = p.frameCount%100; //modulo hue pulse
    // p.fill(hue, 100, 100);

    ball.bounce(p);
    ball.move(p);
    // ball.display(p);

    grove.forEach(function(sapling) {
      sapling.display(ball, p);
    });
  }

  function plantSaplings() {
    let count = 0;
    const margin = 2;
    const distance = 20;

    for (i=0; i<20; i++) {
      for (j=0; j<20; j++) {
        grove[count] = new Sapling((i+margin)*distance, (j+margin)*distance, p);
        count++;
      }
    }
  }

}; //sketch namespace

let myp5 = new p5(sketch);