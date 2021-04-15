const diam = 100;
let xPos = 350
let yPos = 350

function setup() {
  createCanvas(600, 600);
  noStroke();
  noLoop();
}

function draw() {
  background(250);
//left ear
  fill(148, 121, 104);
  ellipse(xPos - 50, yPos - 45, diam/2, diam/2);
//right ear
  fill(148, 121, 104);
  ellipse(xPos + 50, yPos - 45, diam/2, diam/2);
//head
  fill(134, 107, 90);
  ellipse(xPos, yPos, diam + 30, diam);
//nose
  fill(191, 166, 150 );
  ellipse(xPos, yPos + 10, diam - 50, diam - 70);
//left eye
  fill(66, 54, 47);
  ellipse(xPos-30, yPos - 8, diam/5, diam/5)
//right eye
  fill(66, 54, 47);
  ellipse(xPos+30, yPos - 8, diam/5, diam/5)
//pink nose
  fill(230, 198, 214);
  ellipse(xPos, yPos, 20, 10);
}