function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(180, 228, 225);

let gap = 20;

//moving squares
  for (let x = 0; x < gap; x++) {
  for (let y = 0; y < gap; y++) {

      let move1 = mouseX / 20 * random(-1, 0);
      let move2 = mouseX / 20 * random(-1, 0);
 
      let xPos = width / 20 * x;
      let yPos = height / 20 * y;
     
      fill(133,203,199,100);
      noStroke();

      //squares
      push();
      translate(xPos, yPos);
      square(move1,move2,100);
      pop();
    }}


//logo
  for (let x=width/2-50; x<=width/1.9; x+=60){
  for (let y=height/2+25; y<=height/1.8; y+=100){
    noFill();
    stroke(255);
    strokeWeight(5)
    triangle(x, y, x+50, y-45, x-50, y-45);
    triangle(x, y, x+180, y-45, x-180, y-45);
  }}


}





