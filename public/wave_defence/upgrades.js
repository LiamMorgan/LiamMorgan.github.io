function Upgrades() {
    this.cursor = true;
    this.bSize = 1;
    this.bSpeed = 1;
    this.pSize = 1;
    this.pSpeed = 1;
    this.lSight = 0;

    this.draw = function(){
        this.line();
        this.cursor();        
    }

    this.cursor = function() {
        if(cursor) {
            fill(0);
            stroke(255);
            ellipse(mouseX,mouseY,10)
        }
    }
    this.line = function() {
        if(this.lSight == 1) {
            fill(0);
            stroke(255);
            line(player.x,player.y,mouseX,mouseY)
        }
    }
}

function clicked(x1,y1,x2,y2,pointX,pointY) {
    if(x1 < pointX && x2 > pointX
        && y1 < pointY && y2 > pointY) {            
            return true;
        }
    return false;
}