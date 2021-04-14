function setup() {
  createCanvas(800, 800);
  background(150);
  noStroke();
  noLoop();
  colorMode(HSB);
}

function draw() {
  // circle 1
  fill(5, 255, 255);
  ellipse(200, 200, 50, 50);
  // circle 2
  fill(50, 255, 255);
  ellipse(250, 250, 50, 50);
  // circle 3
  fill(100, 255, 255);
  ellipse(300, 300, 50, 50);
  // circle 4
  fill(150, 255, 255);
  ellipse(350, 350, 50, 50);
  // circle 5
  fill(200, 255, 255);
  ellipse(400, 400, 50, 50);
}
