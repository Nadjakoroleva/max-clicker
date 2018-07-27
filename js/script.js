let x = 100;
let y = 250;
let d = 200;
let clicks = 0;

function setup() {
	createCanvas(800, 800);
}


function draw() {
	background(255, 255, 255);
	fill(255, 0, 0);
	ellipse(x, y, d, d);
	textSize(30);
	text(clicks, 700, 100);
	//if (mousePressed){
	//background(#FFFFFF)
	//}
}
function mouseClicked() {
	if (mouseX > x - d && mouseX < x + d) {
		if (mouseY > y - d && mouseY < y + y) {
			x = random(100, 700);
			y = random(100, 700);
			d = random(50, 500);
			clicks = clicks + 1;
		}
	}
}