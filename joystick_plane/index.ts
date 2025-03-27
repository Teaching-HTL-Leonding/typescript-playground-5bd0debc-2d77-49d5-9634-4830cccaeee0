let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

let isdragged = true;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();


  stroke('red');
  fill('white');
  circle(width / 2, height - 50, 100);

  noStroke();
  fill('black');
  circle(width / 2, height - 50, 20);


}
function distance(x1: number, x2: number, y1: number, y2: number): boolean {
const x3 = mouseX - x1 
const d3 = mouseY - y1
   

const   isdragged = Math.sqrt()
}

function mousePressed() {

  if () {

  }

}


function mouseDragged() {

}

function mouseReleased() {
}
