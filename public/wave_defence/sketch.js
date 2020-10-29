let player;
let upgrades;
let shots;
let enemies;
let spawnRate; //60 is 1 a second
let playArea = 225;
let wave = 1;
let paused = false;

function setup() {
    createCanvas(windowWidth*.97, windowHeight*.95);
    frameRate(60);
    player = new Player();
    upgrades = new Upgrades();
    shots = [];
    enemies = [];
    spawnRate = 60;
    gShotSpeed = defaultShotSpeed;
    gShotSize = defaultShotSize;
}

function draw() {
    background(0);
    if(!paused) {
        playerLoop();
        enemyLoop();        
    } else {
        player.draw();
        for(enemy in enemies) {
            enemies[enemy].draw();
        }
        for(shot in shots) {
            shots[shot].draw();
        }
    }
    
    info();
    cleanup();    
}

function playerLoop() {
    if(player.lives > 0) {
        player.update();
        player.draw();
        for(shot in shots) {
            let s = shots[shot];
            if(s != null) {                
                if(s.hit() && s != null) {
                    shots[shot] = null;
                    continue;
                }
                shots[shot].update();
                shots[shot].draw();
                if(s.remove() && s != null) {
                    shots[shot] = null;
                }
            }
        }        
    } else {
        player.size = 0;
        fill(255);
        stroke(0);
        textSize(72);
        text("u ded\npress space to go agen",width/3,height/2);
        spawnRate = 2;
        playArea = 0;
    }
}

function enemyLoop() {
	for(enemy in enemies) {
        let e = enemies[enemy];
        if(e != null) {
            if (e.remove(false)) {
                enemies[enemy] = null;
                player.lives--;
			}			
			e.update();
			e.draw();			
		}
    }
	if(frameCount % spawnRate == 0) {
        enemies.push(new Enemy((random(225,width-20)),-25));
    }
}

function cleanup() {
    for(enemy in enemies) {
        let e = enemies[enemy];
        if(e == null) {
            enemies.splice(enemy, 1)
        }
    }
    for(shot in shots) {
        let s = shots[shot];
        if(s == null) {
            shots.splice(shot, 1)
        }
    }
}

function info() {
    if(player.lives > 0) {
        fill(30);
        stroke(255);
        rect(0,0,225,height);
        for(i=40;i<(player.lives*60)+40;i+=60) {
            fill(0);
            stroke(255);
            ellipse(i,80,50);
            fill(255);
            ellipse(i,80,50/3);
        }
        strokeWeight(2);
        stroke(255);
        fill(60);
        rect(0,165,225,50);
        rect(0,215,225,50);
        rect(0,265,225,50);
        rect(0,315,225,50);
        rect(0,365,225,50);


        fill(255);
        strokeWeight(1);
        stroke(0);
        textSize(36);
        text("$"+player.score,20,40);    
        text("Upgrades",30,150);    
        text("Wave "+wave,width-150,40)
        textSize(18);
        if(upgrades.bSize < 5) {
            text("Bullet size - " + upgrades.bSize + "/5 - $" + upgrades.bSize*10,20,195);
        } else {
            text("Bullet size - " + upgrades.bSize + "/5",20,195);
        }
        if(upgrades.bSpeed < 5) {
            text("Bullet speed - " + upgrades.bSpeed + "/5 - $" + upgrades.bSpeed*10,20,245);
        } else {
            text("Bullet speed - " + upgrades.bSpeed + "/5",20,245);
        }
        if(upgrades.pSize < 5) {
            text("Player size - " + upgrades.pSize + "/5 - $" + upgrades.pSize*10,20,295);
        } else {
            text("Player size - " + upgrades.pSize + "/5",20,295);
        }
        if(upgrades.pSpeed < 5) {
            text("Player speed - " + upgrades.pSpeed + "/5 - $" + upgrades.pSpeed*10,20,345);
        } else {
            text("Player speed - " + upgrades.pSpeed + "/5",20,345);
        }
        if(upgrades.lSight < 1) {
            text("Laser sight - " + upgrades.lSight + "/1 - $" + 50,20,395);
        } else {
            text("Laser sight - " + upgrades.lSight + "/1",20,395);
        }
        textSize(12);
        text("liammorgan.github.io",5,height-10);
        upgrades.draw();
    }
}