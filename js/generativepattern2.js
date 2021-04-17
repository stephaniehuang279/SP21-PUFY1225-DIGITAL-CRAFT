const largeSqu = 115;
const midSqu = 95;
const smlSqu = 55;
const diam = 45;
let xPos = 0;
let yPos = 0;


function setup() {
  createCanvas(750, 500);
  noLoop();
  noStroke();
}

function draw() {
  background(93, 84, 67);

  //line1 pattern 1
  //top left square
  //large square
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=125
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=0
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=125
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 



  //line1 pattern 2
  //top left square
  //large square
  xPos=250
  yPos=0
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=375
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=250
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=375
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 



  //line1 pattern 3
  //top left square
  //large square
  xPos=500
  yPos=0
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=625
  fill(212, 194, 164);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, 148, 124);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(212, 194, 164);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(162, 148, 124);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=500
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=625
  yPos=125
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 



  //line2 pattern 1
  //top left square
  //large square
  xPos=0
  yPos=250
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=125
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=0
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=125
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 



  //line2 pattern 2
  //top left square
  //large square
  xPos=250
  yPos=250
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=375
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=250
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=375
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 



  //line2 pattern 3
  //top left square
  //large square
  xPos=500
  yPos=250
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+35, yPos+35, diam);

  //top right square
  //large square
  xPos=625
  fill(255, 248, 240);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(250, 229, 205);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(254, 221, 185);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(250, 229, 205);
  circle(xPos+80, yPos+35, diam);

  //bottom left square
  //large square
  xPos=500
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+35, yPos+80, diam);

  //bottom right square
  //large square
  xPos=625
  yPos=375
  fill(191, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(35, 25, 24);
  square(xPos+10, yPos+10, midSqu);
  //small square
  fill(191, 182, 139);
  square(xPos+30, yPos+30, smlSqu);
  //circle
  fill(35, 25, 24);
  circle(xPos+80, yPos+80, diam); 

}