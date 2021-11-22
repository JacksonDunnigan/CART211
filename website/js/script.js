
"use strict";

// Variables
let shapes = [];
let clicked = false;


// 3d shape class
class Shape {
  constructor(x, y, size, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type;
    this.xVelocity = random(-1, 1);
    this.yVelocity = random(-1, 1);
  }

  move () {

    // Border collision
    if (this.x - this.size + this.xVelocity * 2 <= - (displayWidth * .5) || this.x + this.size + this.xVelocity * 2 >= displayWidth * .5) {
      this.xVelocity *= -1;
    }
    if (this.y - this.size + this.yVelocity * 2 <= - (displayHeight * .5) || this.y + this.size + this.yVelocity * 2  >= displayHeight * .5) {
      this.yVelocity *= -1;
    }

    // Mouse collision
    if (dist(mouseX - displayWidth / 2, mouseY - displayHeight / 2, this.x, this.y) <= this.size && clicked == true) {
      
      this.xVelocity = (mouseX - displayWidth / 2 - (this.x + this.size / 2)) / abs(mouseX - displayWidth / 2 - (this.x + this.size / 2));
      this.yVelocity = (mouseY - displayHeight / 2- (this.y + this.size / 2)) / abs(mouseY - displayHeight / 2 - (this.y + this.size / 2));
    }

    // Moves the x and y
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  display() {
    switch(this.type) {
      case 0:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(this.size, this.size, this.size);
        pop();
        break;

      case 1:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cylinder(this.size, this.size);
        pop();
        break;

      case 2:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cone(this.size, this.size, 4);
        pop();
        break;

      case 3:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cone(this.size, this.size, 5);
        pop();
        break;

      case 4:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        torus(this.size, this.size/3, 15, 15);
        pop();
        break;

      case 5:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        sphere(this.size);
        pop();
        break;

      case 6:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cylinder(this.size, this.size, 8, 3);
        pop();
        break;
    }
  }
}


// Detects mouse input
function mousePressed() {
  clicked = true;
}

function mouseReleased() {
  clicked = false;
}

// Sets up the canvas
function setup() {

  canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-3');
  canvas.style('position', 'fixed')
  for (var i = 0; i < 6; i++) {
    shapes.push(new Shape(random(-displayWidth/2, displayWidth/2), random(-displayHeight/2, displayHeight/2), random(75,100), floor(random(7))));
  }
}

// Draws everything to the screen
function draw() {
  background(255);

  for (var i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i].display();
  }
}
