let gShotSize = 5;
let gShotSpeed = 10;
let defaultShotSpeed = gShotSpeed;
let defaultShotSize = gShotSize;

function Shot(x, y, xD, yD) {
    this.size = gShotSize;
    this.x = x;
    this.y = y;    
    this.bulletSpd = gShotSpeed;
    this.angle = Math.atan2(xD - this.x, yD - this.y);
    this.xVel = (this.bulletSpd) * Math.sin(this.angle);
    this.yVel = (this.bulletSpd) * Math.cos(this.angle);

    this.update = function() {
        this.x+=this.xVel;
        this.y+=this.yVel;
        this.hit();
    }

    this.draw = function() {
        fill(255);
        stroke(255);
        ellipse(this.x,this.y,this.size);        
    }
	
	this.remove = function() {
		if(this.x-this.size > width || this.x < 0-this.size
			|| this.y-this.size > height || this.y < 0-this.size) {
				return true;
		}
		return false;
    }
    
    this.hit = function() {
        for(enemy in enemies) {
            let e = enemies[enemy];            
            if(e != null) {	
                if(dist(e.x,e.y,this.x,this.y) < abs(this.size + e.size)/2) {
                    enemies[enemy] = null;
                    player.score++;
                    return true;
                }
            }
        }
        return false;
    }
}