let num = 0;
let posmouse number = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  textSize(25);
  textAlign(CENTER, CENTER);
  fill("yellow");
  text(num + ` in binary?`, width / 2, 50);

  noFill();
  stroke("yellow");
  rect(50, height / 2 - 40, 50, 80);
  rect(130, height / 2- 40, 50, 80);
  rect(210, height / 2- 40, 50, 80);
  rect(290, height / 2- 40, 50, 80);
}

function mouseClicked() {
  if (50 < posmouse AND posmouse < 100){

  }

}
