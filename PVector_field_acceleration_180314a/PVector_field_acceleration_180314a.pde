PVector[] positions = new PVector[400];
Ball b1;

void setup() {
  size(460, 460); //460
  colorMode(HSB);

  strokeWeight(2);
  stroke(255);

  //cursor starting position
  mouseX = width/2;
  mouseY = height/2;
  b1 = new Ball();
}

void draw() {
  background(50);

  b1.move();
  PVector pos = b1.bounce();
  yee(pos);
  //b1.display();
}

void yee(PVector pos) {
  int margin = 2;
  int distance = 20;
  for (int i=0; i<20; i++) {
    for (int j=0; j<20; j++) {
      positions[i] = new PVector((i+margin)*distance, (j+margin)*distance);
      pushMatrix();
      translate(positions[i].x, positions[i].y);
      //line(0, 0, 8, 8);

      PVector mouse = new PVector(pos.x, pos.y); //mouseX, mouseY 
      mouse.sub(positions[i]);
      mouse.normalize();
      mouse.mult(12);

      stroke(pos.x*.5, 130, 255);
      stroke(200);
      line(0, 0, mouse.x, mouse.y);
      popMatrix();
    }
  }
}

class Ball {
  PVector pos;
  PVector vel;
  PVector acc;
  Ball() {
    pos = new PVector(width/2, height/2);
    vel = new PVector(0, 0); //2.5, -2
    acc = new PVector(0, 0);
  }

  void move() {
    //acc.x += noise(0.001);
    //acc.y += noise(0.001);
    acc = PVector.random2D();
    vel.add(acc);
    vel.limit(6);
    pos.add(vel);
    //pos.x += vel.x;
    //pos.y += vel.y;
  }

  PVector bounce() {
    if (pos.x>width || pos.x<0) {
      vel.x *= -1;
    }
    if (pos.y>height || pos.y<0) {
      vel.y *= -1;
    }
    return pos;
  }

  void display() {
    fill(0);
    ellipse(pos.x, pos.y, 20, 20);
  }
}