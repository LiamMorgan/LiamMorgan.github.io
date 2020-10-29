function Enemy(x, y) {
    this.size = 25;
    this.x = x
    this.y = y
    this.xStep=0;this.yStep=random(2,6);

    this.update = function() {
        this.remove(false);
        this.x+=this.xStep;
        this.y+=this.yStep;
    }

    this.draw = function() {
        fill(255);
        stroke(255);
        ellipse(this.x,this.y,this.size);
        fill(0);
        ellipse(this.x,this.y,this.size/3);
    }
	
	this.remove = function(now) {
        if(!now) {
            if(dist(player.x,player.y,this.x,this.y) < abs(this.size + player.size)/2 || this.y-this.size > height) {
                return true;
            }
        } else {
            return true;
        }
		return false;
	}
}