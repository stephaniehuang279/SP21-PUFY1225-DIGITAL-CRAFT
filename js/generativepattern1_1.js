const height = 10;
const width = 215;
const height2 = 10;
let horxPos = 0;
let horyPos = 0;
let verxPos = 0;
let veryPos = 0;
let countX = 0;

function setup() {
  createCanvas(655, 640);
  noLoop();
  noStroke();
  colorMode(RGB);
  background(11, 51, 102);
}

function draw() {
  let rFill = random(0, 360);
  let rFill1 = random(0, 360);

function horxGap(val) {
  const inc = 320 + countX;
  return inc + val;
}

function horyGap(val){
  const inc = 35 + countX;
  return inc + val;
}

function horyGap1(val){
  const inc = 120 + countX;
  return inc + val;
}

function veryGap(val){
  const inc = 310 + countX;
  return inc + val;
}

function verxGap(val){
  const inc = 125 + countX;
  return inc + val;
}

function horxSmL(val){
  const inc = 40 + countX;
  return inc + val;
}

function horySmL1(val){
  const inc = 55 - countX;
  return inc + val;
}

function horxSmR(val){
  const inc = countX + width - 60;
  return inc + val;
}

function horySmL(val){
  const inc = 40 + countX;
  return inc + val;
}

function verxSmL(val){
  const inc = 180 + countX;
  return inc + val;
}

//start of horizontal
//line1 horizontal bottom pattern1
  fill(rFill, 169, 200);
  horxPos = 40;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);
 
//line1 horizontal bottom pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);



//line2 horizontal top pattern1
  horxPos=-120;
  horyPos=120;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line2 horizontal top pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line2 horizontal top pattern3
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);


//line2 horizontal bottom pattern1
  horxPos=-120;
  horyPos=horyGap(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line2 horizontal bottom pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line2 horizontal bottom pattern3
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);




//line3 horizontal top pattern1
  horxPos=40;
  horyPos=horyGap1(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line3 horizontal top pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);


//line3 horizontal bottom pattern1
  horxPos=40;
  horyPos=horyGap(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line3 horizontal bottom pattern2
  horxPos= horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);





//line4 horizontal top pattern1
  horxPos=-120;
  horyPos=horyGap1(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line4 horizontal top pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line4 horizontal top pattern3
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);


//line4 horizontal bottom pattern1
  horxPos=-120;
  horyPos= horyGap(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line4 horizontal bottom pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line4 horizontal bottom pattern3
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);
  




//line5 horizontal top pattern1
  horxPos=40;
  horyPos=horyGap1(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);

//line5 horizontal top pattern2
  horxPos=horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL1(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL1(horyPos), height, height2);


//line5 horizontal bottom pattern1
  horxPos=40;
  horyPos=horyGap(horyPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);

//line5 horizontal bottom pattern2
  horxPos= horxGap(horxPos);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxSmL(horxPos), horySmL(horyPos), height, height2);
  //right small rect
  rect(horxSmR(horxPos), horySmL(horyPos), height, height2);




//start of vertical
//line1 vertical right pattern1
  fill(rFill1, 169, 200);
  verxPos=-5;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line2 vertical right pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical right pattern3
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);



//line2 vertical left pattern1
  verxPos=verxGap(verxPos);
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);
  
//line2 vertical left pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), veryPos + 35, height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);



//line2 vertical right pattern1
  verxPos=horyGap(verxPos);
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line2 vertical right pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);



//line3 vertical left pattern1
  verxPos=verxGap(verxPos);
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical left pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos),horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical left pattern3
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);


//line3 vertical right pattern1
  verxPos=horyGap(verxPos);
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical right pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical right pattern3
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);



//line4 vertical left pattern1
  verxPos=verxGap(verxPos);
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);
  
//line4 vertical left pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);


//line4 vertical right pattern1
  verxPos=horyGap(verxPos);
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line4 vertical right pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);



  //line3 vertical left pattern1
  verxPos=verxGap(verxPos);
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical left pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos),horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical left pattern3
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(horySmL1(verxPos),horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(horySmL1(verxPos), horxSmR(veryPos), height2, height);


//line3 vertical right pattern1
  verxPos=horyGap(verxPos);
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical right pattern2
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);

//line3 vertical right pattern3
  veryPos=veryGap(veryPos);
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxSmL(verxPos), horxSmL(veryPos), height2, height);
  //bottom small rect
  rect(verxSmL(verxPos), horxSmR(veryPos), height2, height);
}