var f, gameState;
var rocks = new Array();
function setup() {
	createCanvas(windowWidth*0.992, windowHeight*0.979);
	frameRate(60);
	url = getURL();	
	f = new Floaty();
	append(rocks, f);
}

function draw() {
	background(0);
	if(!gameState) {
	  	drawInfo();
	  	updateRocks();
	  	drawTrail();
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
	text(frameCount, width-50, height-10);
	textSize(60);
	text(rocks.length, width/2, 50);
}

function Floaty() {
	this.s = random()*30;
	this.x = random(width); this.y = random(height);
	this.xMove = Math.floor(random(-10, 11)); this.yMove = Math.floor(random(-10, 11));
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
		if(this.x >= mouseX-10 && this.x <= mouseX+10
			&& this.y >= mouseY-10 && this.y <= mouseY+10) {
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
	if(frameCount%60 == 0){
		rock = new Floaty();
		append(rocks, rock);
	}
	for(let rock of rocks) {
		rock.update();
		rock.draw();
	}
}

function drawTrail() {
	stroke(255);fill(255); strokeWeight(4);
	line(mouseX, mouseY, pmouseX, pmouseY);
	line(pmouseX, pmouseY, ppX, ppY);
	var ppX = pmouseX; var ppY = pmouseY;
}

function drawEnd() {
	background(0);
	textSize(120);
	text(rocks.length, width/2, height/2);
	text("wew lad.", width/2-175, height/2+100);
}
