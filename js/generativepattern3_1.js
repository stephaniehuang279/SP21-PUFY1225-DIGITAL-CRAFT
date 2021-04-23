const height = 150;
const width = 300;
const width2 = 200;
const height2 = 80;
const diam = 50;
const diam2 = 30;
let xPos = 0;
let yPos = 0;
let countX = 0;

function setup() {
  createCanvas(600, 675);
  noLoop();
  strokeWeight(8);
  colorMode(RGB);
}

function draw() {
  let rFill = random(100, 255);
  let rFill1 = random(100, 255);

function smlE(val) {
  const inc = 50 + countX;
  return inc + val;
}

function yPosSmlC(val) {
  const inc = countX+height/2;
  return inc + val;
}

function yPosGap(val){
  const inc = countX+ 2*height;
  return inc+val;
}

function yPosGap1(val){
  const inc = countX-3*height;
  return inc+val;
}

function xPosGap(val){
  const inc = countX+ width/2;
  return inc+val;
}


  background(186, rFill1, 88);
//line0 vertical pattern1
  xPos=-133.5
  yPos=150
  stroke(rFill,187,155);
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);

//line0 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);



//line1 vertical pattern1
  xPos=xPosGap(xPos)
  yPos=yPosGap1(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);  
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

//line1 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

//line1 vertical pattern3
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);



//line2 vertical pattern1
  xPos=xPosGap(xPos)
  yPos=yPosGap1(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);

//line2 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);



 //line3 vertical pattern1
  xPos=xPosGap(xPos)
  yPos=yPosGap1(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

 //line3 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

 //line3 vertical pattern3
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);



//line4 vertical pattern1
  xPos=xPosGap(xPos)
  yPos=yPosGap1(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);

//line4 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //small ellipse
  fill(216, 180, 150);
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);



 //line5 vertical pattern1
  xPos=xPosGap(xPos)
  yPos=yPosGap1(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

 //line5 vertical pattern2
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width,yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

 //line5 vertical pattern3
  yPos=yPosGap(yPos)
  noFill();
  //big ellipse
  rect(xPos, yPos, width, height, diam2);
  //right small circle
  fill(218, 212, 196);
  circle(xPos+width, yPosSmlC(yPos), diam);
  //left small circle
  circle(xPos, yPosSmlC(yPos), diam);
  //small ellipse
  rect(smlE(xPos), smlE(yPos), width2, height2, diam2);

}