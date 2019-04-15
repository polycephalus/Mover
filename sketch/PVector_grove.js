// import Circle from './Circle.js';

//sketch a constructor func that takes p?
//sketch namespace/instance mode
var sketch = function (p){
  // let ball;
  p.grove = [];
  var x = 10;
  let c;

  let circle;
  let square;

  p.setup = function() {
    p.createCanvas(460, 460);
    p.background(0, 255, 255);
    // p.colorMode(p.HSB);
    p.rectMode(p.CENTER);

    p.strokeWeight(2);
    p.stroke(255);

    p.print(x);

    square = new Square(p.width/4, p.height/2, p);
    circle = new Circle(p.width/2, p.height/2, p);

    circle.beep(square);
    console.log(square.spos.y);

    // ball = new Ball();
    // plantSaplings();
  }

  p.draw = function() {
    // p.background(0, 255, 255);//25

    p.c = p.frameCount%100; //modulo hue pulse
    p.fill(c, 100, 100);

    circle.display(square);
    square.display();

    // ball.bounce();
    // ball.move();
    // ball.display();

    // grove.forEach(function(sapling) {
    //   sapling.display(); //take ball
    // });
  }

  // function plantSaplings() {
  //   let count = 0;
  //   const margin = 2;
  //   const distance = 20;
  //   for (i=0; i<20; i++) {
  //     for (j=0; j<20; j++) {
  //       grove[count] = new Sapling((i+margin)*distance, (j+margin)*distance);
  //       count++;
  //     }
  //   }
  // }
}; //sketch namespace

let myp5 = new p5(sketch);