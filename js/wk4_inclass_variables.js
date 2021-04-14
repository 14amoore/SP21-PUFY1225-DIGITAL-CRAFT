const diam = 50;
let xPos = 200;
let yPos = 200;
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
  ellipse(xPos, yPos, diam, diam);
  // circle 2
  xPos += 50;
  yPos += 50;
  fill(50, 255, 255);
  ellipse(xPos, yPos, diam, diam);
  // circle 3
  xPos += 50;
  yPos += 50;
  fill(100, 255, 255);
  ellipse(xPos, yPos, diam, diam);
  // circle 4
  xPos += 50;
  yPos += 50;
  fill(150, 255, 255);
  ellipse(xPos, yPos, diam, diam);
  // circle 5
  xPos += 50;
  yPos += 50;
  fill(200, 255, 255);
  ellipse(xPos, yPos, diam, diam);
}
