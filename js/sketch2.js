function setup() {
  createCanvas(700,700);
  noLoop();
}

function draw() {
  background(241, 236, 227);

//triangle pattern
  for (let x=30; x<width; x+=60){
  for (let y=0; y<height; y+=45){
  	noStroke();
  	fill(222, 217, 211);
  	triangle(x, y, x-30, y+45, x+30, y+45);
  }
  }



//slanted square pattern
  for (let i=0; i<width; i+=90){
  for (let s=0; s<height; s+=120){	
  	fill(241, 236, 227);
  	stroke(153, 138, 116);
  	strokeWeight(2);
  	shearX(PI/170);
  	//square(i,s,50);
  	shearY(PI/150);
  	square(i,s,50);
  }
  }

}