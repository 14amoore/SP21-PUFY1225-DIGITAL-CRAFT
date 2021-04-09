/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function setup() {
  createCanvas(500, 500);
  background(245);
  noLoop();
  noStroke();
}

function draw() {
  // big blue
  fill(0, 0, 255);
  rect(0, 350, 120, height - 350);
  fill(0);
  //   long border
  rect(0, 350, width, 12);
  //   tall border
  rect(120, 0, 12, height);
  //   1/3 rect
  rect(0, height * (7 / 24), 120, 20);
  //   big red
  fill(255, 0, 0);
  rect(132, 0, width - 132, 350);
  //   short vert
  fill(0);
  rect(width * (8 / 9), 350, 15, height - 350);
  rect(width * (8 / 9) + 15, height - 75, width - width * (8 / 9) + 15, 20);
  //   little yellow
  fill(255, 255, 0);
  rect(width * (8 / 9) + 15, height - 54, 41, 55);
}
