    function Player() {
    this.lives = 3;
    this.size = 50;
    this.speed = 7.5;
    this.x = width/2;
    this.y = height/1.25;
    this.xStep=0;this.yStep=0;
    this.score = 0;

    this.update = function() {
        this.x+=this.xStep;
        this.y+=this.yStep;
        this.wrap();
    }

    this.draw = function() {
        fill(0);
        stroke(255);
        ellipse(this.x,this.y,this.size);
        fill(255);
        ellipse(this.x,this.y,this.size/3);
    }

    this.wrap = function() {
        if (player.x < playArea - player.size) {
            player.x = width+player.size-1;
        } else if (player.x > width + player.size) {
            player.x = playArea-player.size-1;
        }
        if (player.y < 0 - player.size) {
            player.y = height+player.size-1;
        } else if (player.y > height + player.size) {
            player.y = 0-player.size-1;
        }		
    }
	
	this.alive = function() {
		if(this.lives <= 0) {
			return false;
		}
		return true;
    }      
}

function keyPressed() {
	if (keyCode === LEFT_ARROW || keyCode == 65) {
        player.xStep = player.speed*-1;
	} else if (keyCode === RIGHT_ARROW || keyCode == 68) {
        player.xStep = player.speed;
    } 
    if (keyCode === UP_ARROW || keyCode == 87) {
        player.yStep = (player.speed*-1)+player.speed/5;
	} else if (keyCode === DOWN_ARROW || keyCode == 83) {
		player.yStep = player.speed-player.speed/5;;
    } 
}

function keyReleased() {
	if (keyCode === LEFT_ARROW || keyCode == 65) {
        player.xStep = 0
  	} else if (keyCode === RIGHT_ARROW || keyCode == 68) {
        player.xStep = 0
    } 
    if (keyCode === UP_ARROW || keyCode == 87) {
        player.yStep = 0
  	} else if (keyCode === DOWN_ARROW || keyCode == 83) {
        player.yStep = 0
    }
    if(keyCode == 90) {
        console.log(player);
        console.log(shots);
        console.log(enemies);
        player.score = 500;
    }
    if(keyCode == 32 && !(player.lives > 0)) {
        setup();
    } else if(keyCode == 32 && player.lives > 0){
        paused = !paused;
    }
}

function mousePressed() {
    if(player.lives > 0 && mouseX > 225) {
        shots.push(new Shot(player.x,player.y, mouseX, mouseY));
    }
    if(mouseX < 225 && clicked(0,165,225,215,mouseX,mouseY) && upgrades.bSize < 5 && player.score >= upgrades.bSize*10) { //bullet size
        player.score -= upgrades.bSize*10;
        upgrades.bSize++;
        gShotSize *= 1.5;        
    }
    if(mouseX < 225 && clicked(0,215,225,265,mouseX,mouseY) && upgrades.bSpeed < 5 && player.score >= upgrades.bSpeed*10) {//bullet speed
        player.score -= upgrades.bSpeed*10;
        upgrades.bSpeed++;
        gShotSpeed *= 1.25;
            }
    if(mouseX < 225 && clicked(0,265,225,315,mouseX,mouseY) && upgrades.pSize < 5 && player.score >= upgrades.pSize*10) {//player size
        player.score -= upgrades.pSize*10;
        upgrades.pSize++;
        player.size -= 7.5;        
    }
    if(mouseX < 225 && clicked(0,315,225,365,mouseX,mouseY) && upgrades.pSpeed < 5 && player.score >= upgrades.pSpeed*10) {//player speed
        player.score -= upgrades.pSpeed*10;
        upgrades.pSpeed++;
        player.speed +=2;        
    }
    if(mouseX < 225 && clicked(0,365,225,415,mouseX,mouseY) && upgrades.lSight < 1 && player.score >= 50) {//laser sight
        player.score -= upgrades.lSight*50;
        upgrades.lSight = 1;        
    }
}