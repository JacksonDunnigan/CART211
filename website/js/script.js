
"use strict";

// Variables
let shapes = [];
let shapeAmount = 12;
let holding = false;

// 3d shape class
class Shape {
  constructor(x, y, size, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type;
    this.xVelocity = random(-1, 1);
    this.yVelocity = random(-1, 1);
    this.rotateSpeed = random(0.001, 0.005);
    this.holding = false;
  }

  move () {

    // Border collision
    if (this.x - this.size + this.xVelocity * 2 <= - (displayWidth * .5) || this.x + this.size + this.xVelocity * 2 >= displayWidth * .5) {
      this.xVelocity *= -1;
    }
    if (this.y - this.size + this.yVelocity * 2 <= - (displayHeight * .5) || this.y + this.size + this.yVelocity * 2  >= displayHeight * .5) {
      this.yVelocity *= -1;
    }

    if (this.holding) {
      this.x = mouseX - (displayWidth / 2);
      this.y = mouseY - (displayHeight / 2);
    }

    // Moves the x and y
    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }

  // Rotates the shape
  rotation() {
    rotateZ(frameCount * this.rotateSpeed);
    rotateX(frameCount * this.rotateSpeed);
    rotateY(frameCount * this.rotateSpeed);
  }

  display() {
    //noFill();
    //normalMaterial();

    switch(this.type) {
      case 0:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        box(this.size, this.size, this.size);
        pop();
        break;

      case 1:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        cylinder(this.size, this.size);
        pop();
        break;

      case 2:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        cone(this.size, this.size, 4);
        pop();
        break;

      case 3:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        cone(this.size, this.size, 5);
        pop();
        break;

      case 4:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        torus(this.size, this.size/3, 15, 15);
        pop();
        break;

      case 5:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        sphere(this.size, 12, 12);
        pop();
        break;

      case 6:

        push();
        translate(this.x, this.y, 0);
        this.rotation();
        cylinder(this.size/2, this.size, 5, 3);
        pop();
        break;
    }
  }
}


// Detects mouse input
function mousePressed() {
   for (var i = 0; i < shapes.length; i++) {
    if (dist(mouseX - displayWidth / 2, mouseY - displayHeight / 2, shapes[i].x, shapes[i].y) <= shapes[i].size ) {
      shapes[i].holding = true;
      break;
    } 
  }
}

function mouseReleased() {
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].holding = false;
  }
}

// Sets up the canvas
function setup() {

  canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-3');
  canvas.style('position', 'fixed')
  for (var i = 0; i < shapeAmount; i++) {
    shapes.push(new Shape(random(-displayWidth/2, displayWidth/2), random(-displayHeight/2, displayHeight/2), random(75,100), floor(random(7))));
  }
}

// Draws everything to the screen
function draw() {
  background(255);

 

  // Draws the shapes
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i].display();
  }
}
