var gameState, count;
var rocks = new Array();
function setup() {
	createCanvas(windowWidth*0.992, windowHeight*0.979);
	frameRate(60);
	url = getURL();	
	var f = new Floaty();
	append(rocks, f);
	count = 0;
	img = loadImage("../images/mouseDodge.png");
}

function draw() {
	background(0);
	if(!gameState) {
		count++;
	  	drawInfo();
	  	updateRocks();
	  	drawMouse();
	} else {
		drawEnd();
	}
}

function drawInfo() {
	textSize(12);
	noStroke();
	fill(255);
	text(url, 10, height-10);
	text(mouseX, 10, height-25); text(mouseY, 10, height-40);
	text(count, width-50, height-10);
	textSize(60);
	text(rocks.length, width/2, 50);
}

function Floaty() {
	this.s = random()*100;
	this.x = random(width); this.y = random(height);
	this.xMove = random(-10, 11); this.yMove = random(-10, 11);
	this.update = function() {
		this.x += this.xMove;
		this.y += this.yMove;
		if(this.x >= width+this.s) {
			this.x = 0-this.s;
		}
		if(this.x <= -10-this.s) {
			this.x = width+this.s;
		}
		if(this.y >= height+this.s) {
			this.y = 0-this.s;
		}
		if(this.y <= -10-this.s) {
			this.y = height+this.s;
		}
		if(this.x+(this.s/2) >= mouseX-20 && this.x-(this.s/2) <= mouseX+20
			&& this.y+(this.s/2) >= mouseY-20 && this.y-(this.s/2) <= mouseY+20) {
			gameState = true;
		}
	}
	this.draw = function() {
		ellipse(this.x, this.y, this.s);
	}
}

function windowResized() {
  resizeCanvas(windowWidth*0.992, windowHeight*0.979);
}

function updateRocks() {
	if(count%60 == 0){
		rock = new Floaty();
		append(rocks, rock);
	}
	for(let rock of rocks) {
		rock.update();
		rock.draw();
	}
}

function drawMouse() {
	stroke(255);fill(255); strokeWeight(4);
	line(mouseX, mouseY, pmouseX, pmouseY);
	line(pmouseX, pmouseY, ppX, ppY);
	noFill();
	strokeWeight(1);
	ellipse(mouseX, mouseY, 20)
	var ppX = pmouseX; var ppY = pmouseY;
}

function drawEnd() {
	background(0);
	fill(255);
	textSize(120);
	text(rocks.length, width/2, height/2);
	textSize(60);
	text("Press space to restart.", width/3, height/2+100);
	image(img, width/2-img.width, 20, img.width/3, img.height/3);
}
function keyPressed() {
	if(keyCode == 32 && gameState == true) {
		gameState = false;
		rocks.length = 0;
		count = 0;
	}
}
