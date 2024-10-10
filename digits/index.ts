function setup() {
  createCanvas(400, 400);
  background("black");
  const num = Math.floor(random(0, 1_000_000));

  // Add the necessary code here
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}
