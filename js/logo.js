
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function draw() {
  background(133,203,199);



//triangles
  for (let x=width/2-50; x<=width/1.9; x+=60){
  for (let y=height/2+25; y<=height/1.8; y+=100){
    noFill();
    stroke(255);
    strokeWeight(5)
    triangle(x, y, x+50, y-45, x-50, y-45);
    triangle(x, y, x+180, y-45, x-180, y-45);
  }}

//save();
}

