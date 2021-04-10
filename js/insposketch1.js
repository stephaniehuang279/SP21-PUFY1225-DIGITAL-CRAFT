//runs once and setups the scene
function setup(){
	createCanvas(700,700);
}

//runs FOREVER
function draw(){
	background(211,175,139);
	
	//most bottom layer
	noStroke();
	fill(203,184,171);
	strokeWeight(9);
	stroke(139, 117, 109);
	ellipse(580, 350, 430, 940);

	noStroke();
	fill(211,175,139);
	strokeWeight(9);
	stroke(139, 117, 109);
	ellipse(650, 400, 430, 940);

	noStroke();
	fill(211,175,139);
	beginShape();
	vertex(300, 350);
	vertex(750, 350);
	vertex(750, 710);
	vertex(300, 710);
	endShape(CLOSE);

	noStroke();
	fill(203,184,171);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(162, 90);
	vertex(750, 90);
	vertex(750, 648);
	vertex(162, 648);
	endShape(CLOSE);
	
	noStroke();
	fill(196, 153, 108);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(162, 90);
	vertex(750, 90);
	vertex(750, 350);
	vertex(162, 350);
	endShape(CLOSE);
	
	noStroke();
	fill(237,189,141);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(432, 350);
	vertex(750, 350);
	vertex(720, 522);
	vertex(432, 522);
	endShape(CLOSE);

	noStroke();
	fill(255, 255, 255);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(432, 350);
	vertex(750, 350);
	vertex(740, 450);
	vertex(432, 450);
	endShape(CLOSE);

	noStroke();
	fill(248, 210, 111);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(350, 410);
	vertex(750, 410);
	vertex(740, 450);
	vertex(350, 450);
	endShape(CLOSE);

	noStroke();
	fill(237,189,141);
	strokeWeight(9);
	stroke(139, 117, 109);
	beginShape();
	vertex(-10, 500);
	vertex(380, 500);
	vertex(380, 720);
	vertex(-10, 720);
	endShape(CLOSE);

}