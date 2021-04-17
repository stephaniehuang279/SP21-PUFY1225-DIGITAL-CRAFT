const height = 20;
const width = 215;
const height2 = 25;
let horxPos = 40;
let horyPos = 0;
let verxPos = 0;
let veryPos = 0;

function setup() {
  createCanvas(655, 640);
  noLoop();
  noStroke();
}

function draw() {
  background(125,105,50);

//start of horizontal
//line1 horizontal bottom pattern
  fill(65,51,14);
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


//start of vertical
//line1 vertical right pattern1
  verxPos=-5;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line2 vertical right pattern2
  veryPos=195;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line3 vertical right pattern3
  veryPos=505;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);



//line2 vertical left pattern1
  verxPos=120;
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);
  
//line2 vertical left pattern2
  veryPos=350;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line2 vertical right pattern1
  verxPos=155;
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line2 vertical right pattern2
  veryPos=350;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);



//line3 vertical left pattern1
  verxPos=280;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line3 vertical left pattern2
  veryPos=195;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line3 vertical left pattern3
  veryPos=505;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);


//line3 vertical right pattern1
  verxPos=315;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line3 vertical right pattern2
  veryPos=195;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line3 vertical right pattern3
  veryPos=505;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);



//line4 vertical left pattern1
  verxPos=440;
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);
  
//line4 vertical left pattern2
  veryPos=350;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line4 vertical right pattern1
  verxPos=475;
  veryPos=40;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line4 vertical right pattern2
  veryPos=350;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);



  //line3 vertical left pattern1
  verxPos=600;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line3 vertical left pattern2
  veryPos=195;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);

//line3 vertical left pattern3
  veryPos=505;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos - 25, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos - 25, veryPos + width - 55, height2, height);


//line3 vertical right pattern1
  verxPos=635;
  veryPos=-115;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line3 vertical right pattern2
  veryPos=195;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);

//line3 vertical right pattern3
  veryPos=505;
  //long rect
  rect(verxPos, veryPos, height, width);
  //top small rect
  rect(verxPos + 20, veryPos + 35, height2, height);
  //bottom small rect
  rect(verxPos + 20, veryPos + width - 55, height2, height);
}