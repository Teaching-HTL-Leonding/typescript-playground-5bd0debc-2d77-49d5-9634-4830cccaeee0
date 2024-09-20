function setup() {
    createCanvas(400, 400);
    frameRate(200);
}

let x = 150;

function draw() {
    background("black");
    fill("yellow");
    circle(x, x, 50);
    x += random(-10, 10);
    
    
}

