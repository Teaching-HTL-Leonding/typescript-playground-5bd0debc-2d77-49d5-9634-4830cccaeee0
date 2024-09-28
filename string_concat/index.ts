function setup() {
  createCanvas(600, 600);
  background("lightblue");
}
let lastX: number = 0;
let lastY: number = 0;
let Koordinaten: string = '0/0, '; 

function mouseClicked() {
  // alten kreis löschen
  fill("lightblue");
  stroke("lightblue");
  circle(lastX, lastY, 30); 
  // variablen zuweisen
  lastX = mouseX
  lastY = mouseY
  // neuer kreis
  fill("aqua");
  stroke("aqua");
  circle(mouseX, mouseY, 30);

  fill("black")
  stroke("black");;
  text(`${Koordinaten}`, 10, 10, 200, 200);
}


