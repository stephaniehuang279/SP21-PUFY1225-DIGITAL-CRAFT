//runs once and setups the scene
function setup(){
	createCanvas(700,700);
}

//runs FOREVER
function draw(){
	background(52, 52, 52);
	
	//most bottom layer
	noStroke();
	fill(245, 238, 211);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(-10, -10);
	vertex(260, -10);
	vertex(198, 414);
	vertex(-10, 270);
	endShape(CLOSE);

	noStroke();
	fill(123, 114, 82);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(260, -10);
	vertex(402, -10);
	vertex(342, 360);
	vertex(198, 414);
	endShape(CLOSE);

	noStroke();
	fill(245, 238, 211);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(522, -10);
	vertex(710, -10);
	vertex(710, 216);
	vertex(486, 144);
	endShape(CLOSE);

	noStroke();
	fill(245, 238, 211);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(288, 540);
	vertex(421, 656);
	vertex(425, 710);
	vertex(300, 710);
	endShape(CLOSE);

	noStroke();
	fill(123, 114, 82);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(421, 656);
	vertex(710, 468);
	vertex(710, 710);
	vertex(425, 710);
	endShape(CLOSE);

	noStroke();
	fill(205, 192, 145);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(288, 540);
	vertex(710, 288);
	vertex(710, 468);
	vertex(421, 656);
	endShape(CLOSE);

	noStroke();
	fill(245, 238, 211);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(-10, 612);
	vertex(43, 641);
	vertex(45, 710);
	vertex(-10, 710);
	endShape(CLOSE);

	noStroke();
	fill(205, 192, 145);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(-10, 450);
	vertex(168, 576);
	vertex(43, 641);
	vertex(-10, 612);
	endShape(CLOSE);

	noStroke();
	fill(123, 114, 82);
	strokeWeight(9);
	stroke(22, 15, 2);
	beginShape();
	vertex(43, 641);
	vertex(168, 576);
	vertex(173, 710);
	vertex(45, 710);
	endShape(CLOSE);

}