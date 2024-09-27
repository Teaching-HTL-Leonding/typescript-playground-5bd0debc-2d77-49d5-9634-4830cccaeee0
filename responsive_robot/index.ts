function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Start Punkt oben links vom rect DER X WERT
  const headY = height / 2 - headHeight / 2; // Start Punkt oben links vom rect DER Y WERT
  const eye1X = headX + headWidth * 0.25;
  const eyeY = headY + headHeight * 0.25;
  const eye2X = headX + headWidth * 0.75;
  const eyediameter = Math.min(headWidth, headHeight) * 0.20;
  const mouthheight = headHeight * 0.10;
  const mouthweight = headWidth * 0.50;
  const mouthX = headX + headWidth * 0.25;
  const mouthY = headY + headHeight * 0.70;
  const liniestartX = width * 0.50;
  const liniestartY = headY - headHeight * 0.25;
  const lineendX = width * 0.50;
  const linelength = headHeight * 0.25;
  const lineendY = liniestartY + linelength;
  const antennediameter = eyediameter * 0.50;


  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  // Add your code here
  // Eyes
  fill("black");
  circle(eye1X, eyeY, eyediameter);
  circle(eye2X, eyeY, eyediameter);

  //Mouth
  fill("white");
  rect(mouthX, mouthY, mouthweight, mouthheight);

  // Antenne
  line(liniestartX, liniestartY, lineendX, lineendY);

  circle(liniestartX, liniestartY, antennediameter);
}