const width = 2000;
const height = 2000;
const yGap = 400;
const xGap = 500;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function draw() {
  background(133,203,199);
  
xPos = 0;
yPos = -50;
//logo pattern
//small triangle to the left
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
  	noFill();
  	stroke(255);
  	strokeWeight(2);
  	triangle(x-50, y, x, y-45, x-100, y-45);
  }}

//small triangle to the right
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x, y, x+50, y-45, x-50, y-45);
  }}

//large triangle to the left
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x, y, x+180, y-45, x-180, y-45);
  }}

//large triangle to the right
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x-50, y, x+130, y-45, x-230, y-45);
  }}




xPos=-250;
yPos=-250;
//offset logo pattern
//small triangle to the left
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    strokeWeight(3);
    triangle(x-50, y, x, y-45, x-100, y-45);
  }}

//small triangle to the right
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x, y, x+50, y-45, x-50, y-45);
  }}

//large triangle to the left
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x, y, x+180, y-45, x-180, y-45);
  }}

//large triangle to the right
  for (let x=xPos; x<width; x+=xGap){
  for (let y=yPos; y<height; y+=yGap){
    triangle(x-50, y, x+130, y-45, x-230, y-45);
  }}

//save();

}

