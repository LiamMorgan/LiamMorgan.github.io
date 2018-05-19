function Matty() {
	this.x = width/2
	this.y = height/2;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 16,16)
	}
}
