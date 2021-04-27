function setup() {
  createCanvas(700,700);
  noStroke();
  noLoop();
}

function draw() {
  background(64, 66, 66);

//random color pattern
  for (let x = 0; x < width; x += 55){
    for (let y=0; y < height; y +=55){
    fill(random(80,255));
    square (y,x,50)
  }
  }
  
  for (let i = 0; i < width; i +=15){
    for (let y=0; y < height; y +=15){
    fill(255,255,255);
    ellipse (i, y, 2, 2)
  }
  }

  stroke(random(180,255));
  strokeWeight(2);
  for (let l=0; l<height; l+=30){
  line(l, l, l+185, 300);
}

noStroke();

//shadow
  beginShape();
  //start from top then go bottom right
  fill(47, 83, 85);
  vertex(86,-45);
  vertex(200,630);
  vertex(200,700);
  vertex(90,700);
  endShape();

//left wall
  beginShape();
  fill(207, 221, 231);
  //start from top left then go right
  vertex(0, 0);
  vertex(90, 0);
  vertex(100,700);
  vertex(0,700);
  endShape();


//right wall
  fill(207, 221, 231);
  beginShape();
  //start from top left then go right
  vertex(124, 0);
  vertex(700, 0);
  vertex(700,610);
  vertex(450,610);
  vertex(320,30);
  endShape();


  //table
  beginShape();
  fill(24, 56, 58);
  //start from bottom left then go to middle pt
  vertex(15, 700);
  vertex(200,630);
  vertex(210,680);
  vertex(448,600);
  vertex(446,590);
  vertex(700,610);
  vertex(700,700);
  endShape(); 

}


