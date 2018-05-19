var matty;

function setup() {
	frameRate(15);
	createCanvas(windowWidth, windowHeight)
	url = getURL();
	matty = new Matty();
}

function draw() {
	background(0);
	noFill();
	stroke(255);
	rect(0,0,width-2,height-2);
	matty.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/**function keyPressed() {
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
	}**/
}
