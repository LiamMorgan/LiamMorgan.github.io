let chunks = [];
p5.disableFriendlyErrors = true;
function setup() {
    createCanvas(windowWidth*.97, windowHeight*.95);
    frameRate(60);
    chunks.push(new Chunk(random(12,25)));
}

function draw() {
    background(0);
    for(i=0;i<chunks.length;i++) {
        chunks[i].update();
    }
    for(i=0;i<chunks.length;i++) {
        chunks[i].draw();
    } 
    if(random(1) < 0.5 && chunks.length <= 128) {
        chunks.push(new Chunk(random(12,25)));
    }
}
function windowResized() {
    resizeCanvas(windowWidth*.97, windowHeight*.95);
  }