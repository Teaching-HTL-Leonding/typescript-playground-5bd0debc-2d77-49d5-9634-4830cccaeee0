function setup() {
  createCanvas(1000, 1000);
}

function mouseMoved() {
  background("lightblue");

  // My code
  noFill();
  strokeWeight(2);
  // Erster Kreis
  circle(mouseX, mouseY, 40);
  // Zweiter Kreis
  circle(mouseX, mouseY, 15);
  // Linie eins und zwei
  line(mouseX, mouseY - 30, mouseX, mouseY + 30);
  line(mouseX - 30, mouseY, mouseX + 30, mouseY);

}
