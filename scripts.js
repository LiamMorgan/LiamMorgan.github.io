var b = 0;

function setup() {
	createCanvas(displayWidth*0.7, displayHeight*0.8);
	frameRate(60);
	url = getURL();	
	background(0); 
}

function draw() { 	
  	drawInfo();
  	wew();
}

function drawInfo() {
	noStroke();
	text(url, 10, height-10);
	print(b);
}

function wew() {
	b++;
	if(b % 5 == 0) {
		noStroke();
		fill(255);
		ellipse(random(width), random(height), random(30));
	}
}