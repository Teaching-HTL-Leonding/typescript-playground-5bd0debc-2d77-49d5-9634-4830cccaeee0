let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  textSize(25);
  textAlign(CENTER, CENTER);
  fill("yellow");
  text(num + ` in binary?`, width / 2, 50);

}

function mouseClicked() {

}
