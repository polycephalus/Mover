let ball;
let c;
let currVec;

function setup() {
  // createCanvas(460, 460);
  createCanvas(800, 600);
  background(0);
  colorMode(HSB, 100, 100, 100);

  strokeWeight(2);
  // noStroke();
  stroke(255);

  ball = new Ball();
}

function draw() {
  c = frameCount%100; //modulo hue pulse
  fill(c, 100, 100);
  currVec = ball.position;
  ball.bounce();
  ball.move();
  ball.display();

  // fill(255);
  // textSize(52);
  // text(currVec.x , 100, 100);
}
