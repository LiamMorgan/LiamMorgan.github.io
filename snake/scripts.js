var gameState, count = 0, tail = [], snake, fruit;
function setup() {
	frameRate(15);
	createCanvas(600, 600)
	url = getURL();	
	snake = new Snake();
	fruit = new Fruit();
	gameState = true;
	tail.length = 0;
}

function draw() {
	drawInfo();
	count++;

	snake.update();
	snake.draw();

	fruit.update();
	fruit.draw();

	drawEnd();
}

function drawInfo() {
	background(0);
	noFill();
	stroke(255);
	rect(0,0,width-2,height-2);	
	fill(255);
	noStroke();
	text(tail.length, 10, 20);
	console.log(tail);
	text(url, 10, height-10);
}

function Snake() {
	this.x = this.y = width/2;
	this.xMov = 10; this.yMov = 0;

	this.update = function() {			
		this.x>width-5?gameState = false:false;
		this.x<0?gameState = false:false;
		this.y>height-5?gameState = false:false;
		this.y<0?gameState = false:false;
		this.x += this.xMov;
		this.y += this.yMov;
		snake.death();
		if(tail.length > 0) {
			for(var i=0; i<tail.length;i++) {
				tail[i] = tail[i+1];	
			}
			tail[tail.length-1] = createVector(this.x, this.y);
		} else if(tail.length < 1) {
			tail[0] = createVector(this.x, this.y);
		}

	}
	this.draw = function() {
		fill(255);
		stroke(0);
		rect(this.x, this.y, 10, 10);
		for(var i = 0; i < tail.length-1; i++) {
			rect(tail[i].x, tail[i].y, 10, 10);
		}		
	}

	this.addTail = function(x, y) {
		append(tail, createVector(x, y));		
	}

	this.death = function() {
		for(var i=0; i<tail.length;i++) {
			var d = dist(this.x, this.y, tail[i].x, tail[i].y);
			if(d<1) {
				gameState = false;
			}
		}
	}
}

function Fruit() {	
	this.x = Math.floor(Math.random()*59)*10;
	this.y = Math.floor(Math.random()*59)*10;	

	this.update = function() {		
		if(snake.x == fruit.x && snake.y == fruit.y) {
			snake.addTail(this.x, this.y)
			this.x = Math.floor(Math.random()*60)*10
			this.y = Math.floor(Math.random()*60)*10			
		}
	}
	this.draw = function() {
		fill(255);
		stroke(0);
		rect(this.x, this.y, 10, 10);
	}
}

function gameCheck(gs) {
	if(gs === false) {
		setup();
		draw();
	}
}

//End game screen draw method.
function drawEnd() {
	if(gameState == false) {
		background(0);
		noFill();
		stroke(255);
		rect(0,0,width-2,height-2);
		fill(255);
		textSize(60);
		text(tail.length, width/2, height/3);
		textSize(30);
		text("Press space to restart.", width/3.5, height/2);
	}
}

function keyPressed() {
	if (keyCode === LEFT_ARROW && snake.xMov != 10) {
    	snake.xMov = -10; snake.yMov = 0;
  	} else if (keyCode === RIGHT_ARROW && snake.xMov != -10) {
	    snake.xMov = 10; snake.yMov = 0;
  	} else if (keyCode === UP_ARROW && snake.yMov != 10) {
	    snake.yMov = -10; snake.xMov = 0;
  	} else if (keyCode === DOWN_ARROW && snake.yMov != -10) {
	    snake.yMov = 10; snake.xMov = 0;
  	} else if(keyCode == 32 && gameState == false) {
		gameCheck(gameState);
	}
}
