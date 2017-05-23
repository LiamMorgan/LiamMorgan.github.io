var gameState, count;
var rocks = new Array();

function setup() {
	createCanvas(windowWidth*0.992, windowHeight*0.979);
	frameRate(60);
	url = getURL();	
	count = 0;
	img = loadImage("../images/mouseDodge.png");
}
//Default p5 js methods
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
//Draws info such as score, mouse pos, frame count.
function drawInfo() {
	textSize(12);
	noStroke();
	fill(255);
	text(url, 10, height-10);
	text(count, width-50, height-10);
	textSize(60);
	text(rocks.length, width/2, 50);
}
//Mouse properties, hitbox circle, and line trail.
function drawMouse() {
	stroke(255);fill(255); strokeWeight(4);
	line(mouseX, mouseY, pmouseX, pmouseY);
	line(pmouseX, pmouseY, ppX, ppY);
	noFill();
	strokeWeight(1);
	ellipse(mouseX, mouseY, 20)
	var ppX = pmouseX; var ppY = pmouseY;
}
//End game screen draw method.
function drawEnd() {
	background(0);
	fill(255);
	textSize(120);
	text(rocks.length, width/2, height/1.5);
	textSize(60);
	text("Press space to restart.", width/2.7, height/1.5+100);
	image(img, width/2-200, 20, img.width/3, img.height/3);
}
//
function Rock() {
	this.s = random(3, 100);
	this.f = Math.floor(random(0,2));
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
		if(this.f == 0) {
			noFill();
			stroke(255);
			ellipse(this.x, this.y, this.s);
		} else {
			fill(255);
			stroke(255);
			ellipse(this.x, this.y, this.s);
		}
		
	}
}

function windowResized() {
  resizeCanvas(windowWidth*0.992, windowHeight*0.979);
}

function updateRocks() {
	if(count%60 == 0){
		rock = new Rock();
		if(rock.x+(rock.s/2) >= mouseX-20 && rock.x-(rock.s/2) <= mouseX+20
		&& rock.y+(rock.s/2) >= mouseY-20 && rock.y-(rock.s/2) <= mouseY+20) {
			rock.x -= random(width);rock.y -= random(height);
			updateRocks();
		}
		append(rocks, rock);

	}
	for(let rock of rocks) {
		rock.update();
		rock.draw();
	}
}

function keyPressed() {
	if(keyCode == 32 && gameState == true) {
		gameState = false;
		rocks.length = 0;
		count = 0;
	}
}
