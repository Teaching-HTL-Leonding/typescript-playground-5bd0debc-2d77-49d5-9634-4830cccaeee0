const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

  // <<< Draw the tree
  let DreieckBreite = INITIAL_TRIANGLE_BASE_WIDTH / 2;
  for (let i = 1; i <= 4; i += 1) {
    triangle(width / 2 - DreieckBreite, TOP_MARGIN + DreieckBreite,  //x1 y1
      width / 2 + DreieckBreite, TOP_MARGIN + DreieckBreite,   // x2 y2
      width / 2, TOP_MARGIN);   // x3 y3
    translate(0, DreieckBreite / 1.5);
    DreieckBreite *= 1.5;

  }
}
