const height = 20;
const width = 215;
const height2 = 25;
let horxPos = 40;
let horyPos = 0;

function setup() {
  createCanvas(640, 640);
  noLoop();
  noStroke();
}

function draw() {
  background(124, 103, 50);

//start of horizontal
//line1 horizontal bottom pattern
  fill(63, 48, 12);
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);
 
//line1 horizontal bottom pattern2
  horxPos=360;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);




//line2 horizontal top pattern1
  horxPos=-120;
  horyPos=120;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line2 horizontal top pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line2 horizontal top pattern3
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);


//line2 horizontal bottom pattern1
  horxPos=-120;
  horyPos=horyPos+35;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line2 horizontal bottom pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line2 horizontal bottom pattern3
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);





//line3 horizontal top pattern1
  horxPos=40;
  horyPos=horyPos+120;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line3 horizontal top pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);


//line3 horizontal bottom pattern1
  horxPos=40;
  horyPos=horyPos+35;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line3 horizontal bottom pattern2
  horxPos= horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);





//line4 horizontal top pattern1
  horxPos=-120;
  horyPos=horyPos+120;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line4 horizontal top pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line4 horizontal top pattern3
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);


//line4 horizontal bottom pattern1
  horxPos=-120;
  horyPos= horyPos+35;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line4 horizontal bottom pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line4 horizontal bottom pattern3
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);
  




//line5 horizontal top pattern1
  horxPos=40;
  horyPos=horyPos+120;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);

//line5 horizontal top pattern2
  horxPos=horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos - 25, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos - 25, height, height2);


//line5 horizontal bottom pattern1
  horxPos=40;
  horyPos=horyPos+35;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

//line5 horizontal bottom pattern2
  horxPos= horxPos+320;
  //long rect
  rect(horxPos, horyPos, width, height);
  //left small rect
  rect(horxPos + 35, horyPos + 20, height, height2);
  //right small rect
  rect(horxPos + width - 55, horyPos + 20, height, height2);

}