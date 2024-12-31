// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;

// Player numbers
const playerNumbers: number[] = [1, 17, 22, 4, 20, 6, 15, 5, 11, 7, 9];

// First names
const firstNames: string[] = [
  "Thibaut", "Lucas", "Antonio", "David", "Fran",
  "Eduardo", "Federico", "Jude", "Rodrygo", "Vinícius", "Kylian"
];

// Last names
const lastNames: string[] = [
  "Courtois", "Vázquez", "Rüdiger", "Alaba", "García",
  "Camavinga", "Valverde", "Bellingham", "Goes", "Júnior", "Mbappé"
];

function setup() {
  createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
  background("green");

  strokeWeight(0.5);
  stroke("white");
  noFill();
  angleMode(DEGREES);

  push();

  // Note that we scale everything by the constant SCALE. We use the size values
  // in meters as if they were pixels, and then scale them up by the SCALE factor.
  scale(SCALE);
  translate(MARGIN, MARGIN);

  // Field (100x70m)
  rect(0, 0, 100, 70);

  // <<< Add your code to draw the rest if the soccer field here
  fill("white");
  circle(50, 35, 0.5);
  circle(11, 35, 0.3);
  circle(89, 35, 0.3);

  noFill();
  circle(50, 35, 9.15 * 2);

  arc(0, 0, 2, 2, 0, 90);
  arc(100, 0, 2, 2, 90, 180);
  arc(0, 70, 2, 2, 270, 0);
  arc(100, 70, 2, 2, 180, 270);
  line(50, 0, 50, 70);

  rect(0, 15, 16.5, 40);
  rect(100 - 16.5, 15, 16.5, 40);
  rect(0, 26, 5.5, 18);
  rect(100 - 5.5, 26, 5.5, 18);

  rect(-3, 35 - 3.6, 3, 7.2);
  rect(100, 35 - 3.6, 3, 7.2);

  arc(11, 35, 9.15 * 2, 9.15 * 2, 360 - 52, 52);
  arc(89, 35, 9.15 * 2, 9.15 * 2, 180 - 52, 180 + 52);




  // Draw a semi-transparent rectangle as a background for the player names and numbers
  // NEW: Note that the color value has EIGHT hex digits, not six.
  // The last two digits represent the alpha value (transparency).
  // The hex value d0 (208 in decimal) is 80% opaque.
  fill("#008000d0");
  noStroke();
  rect(10, 5, 80, 60);

  // <<< Add your code to draw the player numbers and names here

  pop();
}
