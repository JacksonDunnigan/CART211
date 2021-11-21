
"use strict";

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
    if (this.x - this.size + this.xVelocity * 2 <= - (displayWidth * .5) || this.x + this.size + this.xVelocity * 2 >= displayWidth * .5) {
      this.xVelocity *= -1;
    }
    if (this.y - this.size + this.yVelocity * 2 <= - (displayHeight * .5) || this.y + this.size + this.yVelocity * 2  >= displayHeight * .5) {
      this.yVelocity *= -1;
    }
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
        cone(this.size, this.size);
        pop();
        break;

      case 3:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        torus(this.size, this.size/4);
        pop();
        break;

      case 4:

        push();
        translate(this.x, this.y, 0);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        sphere(this.size);
        pop();
        break;
    }
  }
}

let shapes = [];

// Sets up the canvas
function setup() {

  canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-3');
  canvas.style('position', 'fixed')
  for (var i = 0; i < 6; i++) {
    shapes.push(new Shape(random(-displayWidth/2, displayWidth/2), random(-displayHeight/2, displayHeight/2), random(75,100), floor(random(5))));
  }
}

// Draws everything to the screen
function draw() {
  background(255);

  // Moves the shapes
  // push();
  // fill(255, 204, 0);
  // stroke(5);
  // rect(-displayWidth*.45, -displayHeight*.45, displayWidth*.9, displayHeight*9);
  // pop();

  for (var i = 0; i < shapes.length; i++) {
    shapes[i].move();
  }
  for (var i = 0; i < shapes.length; i++) {
  
    shapes[i].display();
  }
}
