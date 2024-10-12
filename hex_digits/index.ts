function setup() {
  createCanvas(400, 400);
  background("black");
  const num = Math.floor(random(0, 4096));
  const lastDigit = num % 16;
  let numWithoutLastDigit = Math.floor(num / 16);

  const digit2 = numWithoutLastDigit % 16
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  const digit3 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill();
  stroke("gold");
  rect(100, height / 2, 30, 50);
  rect(200, height / 2, 30, 50);
  rect(300, height / 2, 30, 50);

  if(lastDigit === 10){
    text("A", 315, height / 2 + 25);
  }
  else if(lastDigit === 11){
    text("B", 315, height / 2 + 25);
  }
  else if(lastDigit === 12){
    text("C", 315, height / 2 + 25);
  }
  else if(lastDigit === 13){
    text("D", 315, height / 2 + 25);
  }
  else if(lastDigit === 14){
    text("E", 315, height / 2 + 25);
  }
  else if(lastDigit === 15){
    text("F", 315, height / 2 + 25);
  }
  
  
  text(`${lastDigit}`, 315, height / 2 + 25);

  text(`${digit2}`, 215, height / 2 + 25);

  text(`${digit3}`, 115, height / 2 + 25);
}