let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

const movementRadius = 50;
const stickRadius = 10;

let stickPositionX = 0;
let stickPositionY = 0;

let isDragging = false;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");

  const speedX = stickPositionX / 5;
  const speedY = stickPositionY / 5;

  push();

  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);

  fighterPositionX += speedX;
  if (fighterPositionX > 250) {
    fighterPositionX = 250;

  } else if (fighterPositionX < -250) {
    fighterPositionX = -250;
  }

  fighterPositionY += speedY;
  if (fighterPositionY > 250) {
    fighterPositionY = 250;

  } else if (fighterPositionY < -250) {
    fighterPositionY = -250;
  }
  pop();



  push();
  translate(width / 2, height - movementRadius);

  fill("white");
  stroke("red");
  circle(0, 0, movementRadius * 2);

  fill("black");
  noStroke();
  circle(stickPositionX, stickPositionY, stickRadius * 2);
  pop();
}

function mousePressed() {
  const dist = calcDistance(
    stickPositionX,
    stickPositionY,
    mouseX - width / 2,
    mouseY - (height - movementRadius));
  isDragging = dist < stickRadius;
}

function mouseDragged() {
  if (isDragging) {
    stickPositionX = mouseX - width / 2;
    stickPositionY = mouseY - (height - movementRadius);

    const dist1 = calcDistance(
      width / 2,
      height - movementRadius,
      mouseX,
      mouseY);

    let faktor = dist1 / movementRadius;

    if (dist1 > movementRadius) {
      stickPositionX = stickPositionX / faktor
      stickPositionY = stickPositionY / faktor
    }
  }
}


function mouseReleased() {
}
function calcDistance(jsX: number, jsY: number, mX: number, mY: number): number {

  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);
}