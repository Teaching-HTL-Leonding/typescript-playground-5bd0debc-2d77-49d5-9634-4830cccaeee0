function setup() {
  createCanvas(600, 600);
  background("lightblue");
}
let lastX: number = 0;
let lastY: number = 0;
let Koordinaten: string = '0/0, ';

function mouseClicked() {
  // alten kreis und alten text überschreiben
  background("lightblue");
  // variablen zuweisen
  lastX = Math.round(mouseX);
  lastY = Math.round(mouseY);
  // neuer kreis
  fill("aqua");
  stroke("aqua");
  circle(lastX, lastY, 30);
  // text erweitern 
  Koordinaten = Koordinaten + `${lastX}/${lastY}, `;
  fill("black");
  stroke("black");
  text(`${Koordinaten}`, 10, 10, 590, 600);
}