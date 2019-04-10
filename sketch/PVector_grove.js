let ball;
let c;
let currVec;
let positions = []; //alt. garden?

function setup() {
  // createCanvas(460, 460);
  createCanvas(460, 460);
  // background(0);
  // colorMode(HSB, 100, 100, 100);
  colorMode(HSB);

  strokeWeight(2);
  stroke(255);
  // noStroke();

  ball = new Ball();
  initSaplings();
}

function draw() {
  background(25);
  c = frameCount%100; //modulo hue pulse
  fill(c, 100, 100);
  // currVec = ball.position;
  currVec = Object.assign({}, ball.position);
  ball.bounce();
  ball.move();
  // ball.display();

  // positions[0].display();
  positions.forEach(function(sapling) {
    sapling.display();
  });

  // fill(255);
  // textSize(52);
  // text(currVec.x , 100, 100);
}

function initSaplings() {
  //move to sapling setup func
  let scount = 0;
  let margin = 2;
  let distance = 20;
  for (i=0; i<20; i++) {
    for (j=0; j<20; j++) {
      positions[scount] = new Sapling((i+margin)*distance, (j+margin)*distance);
      scount++;
    }
  }
}
