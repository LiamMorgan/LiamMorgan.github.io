let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let yMin = 4; let yMax = 12;
let textMin = 8; let textMax = 36;

function Chunk(len) {
    len = Math.floor(len);
    this.x;this.y;this.ystep;this.word;this.size;this.opac;
    this.setup = function() {
        this.x = windowWidth/257*Math.floor(random(257)); 
        this.y = windowHeight*-1; 
        this.ystep = random(yMin,yMax);
        this.word = newWord(len);
        this.size = mapNumber(this.ystep,yMin,yMax,textMin,textMax);
        this.opac = mapNumber(this.ystep,yMin,yMax,0,255);
    }
    this.setup();
    this.update = function() {
        this.y+=this.ystep;      
    }
    this.draw = function() {
        textSize(this.size);
        fill(0,255,0,this.opac);
        text(this.word,this.x,this.y)
        if(this.y > windowHeight) {
            this.setup();
        }
    }    
}

function newWord(len) {
    let word = "";
    for(i = 0; i < len; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length));
        word += "\n"
    }
    return word;
}

function mapNumber(number, in_min, in_max, out_min, out_max)  {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}