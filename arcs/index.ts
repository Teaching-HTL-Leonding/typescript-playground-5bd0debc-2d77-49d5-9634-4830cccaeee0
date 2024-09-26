function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  stroke("black");
  strokeWeight(10);
  fill("yellow");

  circle(200, 200, 375);

  fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);

  noFill();

  // +---------------------------- x coordinate
  // |    +----------------------- y coordinate
  // |    |    +------------------ width
  // |    |    |    +------------- height
  // |    |    |    |    +-------- start angle
  // |    |    |    |    |   +---- end angle
  // v    v    v    v    v   v
  arc(200, 250, 200, 150, 15, 170);
}