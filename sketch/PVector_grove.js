let ball;
let grove = [];

function setup() {
  createCanvas(460, 460);
  colorMode(HSB);

  strokeWeight(2);
  stroke(255);

  ball = new Ball();
  initSaplings();
}

function draw() {
  background(25);

  let c = frameCount%100; //modulo hue pulse
  fill(c, 100, 100);

  ball.bounce();
  ball.move();
  // ball.display();

  grove.forEach(function(sapling) {
    sapling.display(); //take ball
  });
}

function initSaplings() {
  let count = 0;
  const margin = 2;
  const distance = 20;
  for (i=0; i<20; i++) {
    for (j=0; j<20; j++) {
      grove[count] = new Sapling((i+margin)*distance, (j+margin)*distance);
      count++;
    }
  }
}
