function setup() {
  // Diameter of a point from the dice
  const dicePointDiameter: number = 30;

  createCanvas(200, 200);
  background("black");

  // Generate an integer random number 
  // between 1 (including) and 7 (excluding)
  const dice = Math.floor(random(1, 7));

  noStroke();
  fill("white");
  if (dice === 1) {
    // One point in the middle of the dice
    circle(width / 2, height / 2, dicePointDiameter);
  } else if (dice === 2) {
    // One point in the left upper corner, one
    // in the lower right corner
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
  } else if (dice === 3) {
    // Draw three dots (combination of 1 and 2)
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 2, height / 2, dicePointDiameter);
  } /* ... add the other cases here */
  else if (dice === 4) {
    // Draw four dots
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 4 * 3, height / 4, dicePointDiameter);
    circle(width / 4, 3 * height / 4, dicePointDiameter);
  } else if (dice === 5) {
    // Draw four dots and one in the middle
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 4 * 3, height / 4, dicePointDiameter);
    circle(width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 2, height / 2, dicePointDiameter);
  } else if (dice === 6) {
    // Draw six dots
    circle(width / 4, height / 4, dicePointDiameter);
    circle(3 * width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 4 * 3, height / 4, dicePointDiameter);
    circle(width / 4, 3 * height / 4, dicePointDiameter);
    circle(width / 4, height / 4 * 2, dicePointDiameter);
    circle(3 * width / 4, 2 * height / 4, dicePointDiameter);
  }
}
