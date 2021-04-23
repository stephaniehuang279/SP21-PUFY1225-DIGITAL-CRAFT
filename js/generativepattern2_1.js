const largeSqu = 50;
const midSqu = 50;
const smlSqu = 50;
const diam = 40;
let xPos = 0;
let yPos = 0;
let countX = 0;

function setup() {
  createCanvas(730, 500);
  noLoop();
  strokeWeight(3);
  colorMode(RGB);
}

function draw() {
  let rFill = random(100, 255);
  let rFill1 = random(100, 255);
  let rFill2 = random(100,255);
  let rFill3 = random(100,255);
  let rFill4 = random(100,255);

  background(247, 219, 183);
  stroke(255,255,255);

function medS(val) {
  const inc = 20 + countX;
  return inc + val;
}

function smlS(val) {
  const inc = 50 + countX;
  return inc + val;
}

function cir(val) {
  const inc = 50 + countX;
  return inc + val;
}

function cir1(val) {
  const inc = 50 + countX;
  return inc + val;
}

function gap(val) {
  const inc = 150 + countX;
  return inc + val;
}

function gap1(val) {
  const inc = countX - 150;
  return inc + val;
}
  //line1 pattern 1
  //top left square
  //large square
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir(xPos), cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir1(xPos), cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos),cir1(yPos), diam); 



  //line1 pattern 2
  //top left square
  //large square
  xPos=gap(xPos)
  yPos=gap1(yPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir(xPos), cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos),medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir1(xPos), cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos), cir1(yPos), diam); 



  //line1 pattern 3
  //top left square
  //large square
  xPos=gap(xPos)
  yPos=gap1(yPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir(xPos), cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill1, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(213, 170, rFill);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill1, 124);
  circle(cir1(xPos), cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos),medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos), cir1(yPos), diam); 



  //line2 pattern 1
  //top left square
  //large square
  xPos=0
  yPos=250
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir(xPos),cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir1(xPos), cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos),cir1(yPos), diam); 



  //line2 pattern 2
  //top left square
  //large square
  xPos=gap(xPos)
  yPos=gap1(yPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos),medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir(xPos),cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir1(xPos), cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos),medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos),cir1(yPos), diam); 



  //line2 pattern 3
  //top left square
  //large square
  xPos=gap(xPos)
  yPos=gap1(yPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir(xPos),cir(yPos), diam);

  //top right square
  //large square
  xPos=gap(xPos)
  fill(213, 170, rFill);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(213, 170, rFill2);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(254, 221, 185);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(213, 170, rFill2);
  circle(cir1(xPos),cir(yPos), diam);

  //bottom left square
  //large square
  xPos=gap1(xPos)
  yPos=gap(yPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos),medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir(xPos), cir1(yPos), diam);

  //bottom right square
  //large square
  xPos=gap(xPos)
  fill(rFill3, 182, 139);
  square(xPos, yPos, largeSqu);
  //medium square
  fill(162, rFill4, 124);
  square(medS(xPos), medS(yPos), midSqu);
  //small square
  fill(rFill3, 182, 139);
  square(smlS(xPos), smlS(yPos), smlSqu);
  //circle
  fill(162, rFill4, 124);
  circle(cir1(xPos),cir1(yPos), diam); 

}