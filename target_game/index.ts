//Die Radien der Kreise
let bluerad = 50;
let grayrad = 70;
// Koordinaten des Blauen Kreises
let spawnX = 0;
let spawnY = 0;
// Kooredinaten des Grauen Kreises
let spawnX2 = 0;
let spawnY2 = 0;

let dragging = false;



function setup() {
  createCanvas(800, 600);

  spawnX = random(bluerad, width - bluerad);
  spawnY = random(bluerad, height - bluerad);

  spawnX2 = random(grayrad, width - grayrad);
  spawnY2 = random(grayrad, height - grayrad);

  while(!kreisistausserhalb(spawnX, spawnY, bluerad, spawnX2, spawnY2, grayrad)) {
    spawnX = random(bluerad, width - bluerad);
    spawnY = random(bluerad, height - bluerad);

    spawnX2 = random(grayrad, width - grayrad);
    spawnY2 = random(grayrad, height - grayrad);
  }
}

function draw() {
  background("lightgray");

  fill('blue');
  noStroke();
  circle(spawnX, spawnY, bluerad * 2);


  noFill();
  stroke('black');
  circle(spawnX2, spawnY2, grayrad * 2);


  // <<< Add drawing logic here
}
function distance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function mousePressed() {
  const distanceToStick = distance(mouseX, mouseY, spawnX, spawnY);
  if (distanceToStick < bluerad) {
    dragging = true;
  }
}

function mouseDragged() {
  if (dragging) {
    spawnX = mouseX;
    spawnY = mouseY;
  }
}

function mouseReleased() {
  dragging = false;

}

function kreisistausserhalb(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): boolean {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance > r1 + r2;

}

// <<< Add additional functions here
