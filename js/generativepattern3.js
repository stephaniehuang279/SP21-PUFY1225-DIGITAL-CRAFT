const height = 150;
const width = 267;
const width2 = 167;
const height2 = 50;
const diam = 15;
const diam2 = 75;
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(600, 675);
  noLoop();
  strokeWeight(4);
}

function draw() {
  background(186, 133, 88);

//line0 vertical pattern1
  xPos=-133.5
  yPos=150
  stroke(196,187,155);
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);

//line0 vertical pattern2
  yPos=450
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);



//line1 vertical pattern1
  xPos=0
  yPos=0
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);  
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

//line1 vertical pattern2
  yPos=300
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

//line1 vertical pattern3
  yPos=600
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);



//line2 vertical pattern1
  xPos=133.5
  yPos=150
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);

//line2 vertical pattern2
  yPos=450
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);



 //line3 vertical pattern1
  xPos=267
  yPos=0
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

 //line3 vertical pattern2
  yPos=300
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

 //line3 vertical pattern3
  yPos=600
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);



//line4 vertical pattern1
  xPos=400.5
  yPos=150
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);

//line4 vertical pattern2
  yPos=450
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(xPos+50, yPos+50, width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);



 //line5 vertical pattern1
  xPos=534
  yPos=0
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

 //line5 vertical pattern2
  yPos=300
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

 //line5 vertical pattern3
  yPos=600
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPos+height/2, diam);
  //left small circle
  circle(xPos, yPos+height/2, diam);
  //small ellipse
  rect(xPos+50, yPos+50, width2, height2, diam2);

}