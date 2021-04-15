//runs once and setups the scene
function setup(){
	createCanvas(700,700);
}

//runs FOREVER
function draw(){
	background(255,255,255);
	
	//most bottom layer
	noStroke();
	fill(172, 154, 117);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(234, -10);
	vertex(710, -10);
	vertex(710, 710);
	vertex(234, 710);
	endShape(CLOSE);

	noStroke();
	fill(21, 53, 98);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(0, 710);
	vertex(234, 468);
	vertex(710, 710);
	endShape(CLOSE);

	noStroke();
	fill(172, 154, 117);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(216, -10);
	vertex(710, -10);
	vertex(710, 368);
	vertex(378, 230);
	vertex(378, 200);
	vertex(216, 126);
	endShape(CLOSE);

	noStroke();
	fill(190, 174, 139);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(400, 270);
	vertex(710, 400);
	vertex(710, 575);
	vertex(400, 432);
	endShape(CLOSE);

	noStroke();
	fill(116, 104, 78);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(400, 270);
	vertex(710, 400);
	vertex(710, 440);
	vertex(400, 306);
	endShape(CLOSE);

	noStroke();
	fill(255, 255, 255);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(349, 216);
	vertex(710, 368);
	vertex(710, 405);
	vertex(349, 252);
	endShape(CLOSE);

	noStroke();
	fill(190, 174, 139);
	strokeWeight(9);
	stroke(51, 51, 51);
	beginShape();
	vertex(36, -10);
	vertex(126, -10);
	vertex(126, 710);
	vertex(36, 710);
	endShape(CLOSE);

}