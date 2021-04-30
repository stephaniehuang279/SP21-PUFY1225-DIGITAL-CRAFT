function setup() {
  createCanvas(700,700);
  noLoop();
}

function draw() {
  background(26, 26, 26);

//background triangle pattern
  for (let x=30; x<width; x+=60){
  for (let y=0; y<height; y+=45){
  	noStroke();
  	fill(44, 43, 43);
  	triangle(x, y, x-30, y+45, x+30, y+45);
  }
  }



//slanted square pattern
  for (let i=0; i<width; i+=95){
  for (let s=0; s<height; s+=100){
  for (let x=10; x<70; x +=10){	
  	stroke(95, 91, 87);
  	strokeWeight(2);

  	//grey squares
  	fill(77, 73, 68);
  	square(i,s,random(x+40,x));
  	//dark orange squares
  	fill(156, 101, 35);
  	square(i,s,random(x+5,x));
  	//squares with no fill
  	noFill();
  	//smallest
  	square(i,s,random(x+10,x));
  	//medium
  	square(i,s,random(x+20,x));
  	//largest
  	square(i,s,random(x+30,x));
  	//orange squares
  	fill(216, 142, 53);
  	square(i,s,random(x,20));
  	//corner triangles
  	noStroke();
  	fill(185, 173, 158);
  	triangle(i, s, i, s+25, i+25, s);
  }
  }
  }
  

 

 }