var f, tick = 0;
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
  	drawInfo();
  	updateRocks();
}

function drawInfo() {
	tick++;
	noStroke();
	fill(255);
	text(url, 10, height-10);
	text(tick, width-50, height-10);
	text(rocks.length, width-50, height-50);
	print(rocks);
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
	}
	this.draw = function() {
		ellipse(this.x, this.y, this.s);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateRocks() {
	if(tick%60 == 0){
		rock = new Floaty();
		append(rocks, rock);
	}
	for(let rock of rocks) {
		rock.update();
		rock.draw();
		print(rock);
	}
}
