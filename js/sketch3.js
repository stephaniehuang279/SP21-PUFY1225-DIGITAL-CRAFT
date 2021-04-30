function setup() {
  createCanvas(600,700);
  noLoop();
}

function draw() {
  background(137, 139, 144);
  save();

//line pattern
  for (let l=-50; l<height; l +=10){
  	//the white one
    stroke(255,255,255);
    line(width/2, l, l, height/4);
    //slightly grey
    stroke(182, 182, 182);
    line(width/3,l,l,height);
	//the almost disappeared one
    stroke(97, 97, 97);
    line(width/3,height,l,l);
    //the black one
    stroke(0);
    line(width,l,l,l);
  }

//top circle pattern
  for (let x=100; x<width; x+=100){
  for (let y=0; y<height/8; y+=100){
  	noStroke();
  	fill(255,255,255);
  	circle(x,y,40);
}
}


//blue line
	noFill();
	stroke(188, 221, 223);
	strokeWeight(10);
	rect(-205,177,500,200,100);



}