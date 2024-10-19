// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    text("🪨", STONE_LEFT, 150);
    text("📃", PAPER_LEFT, 150);
    text("✂️", SCISSORS_LEFT, 150);
}

function mouseMoved() {
    noFill();
    strokeWeight(4);

    if ((mouseX > 50) && (mouseX < 150) && (mouseY > 75) && (mouseY < 175)) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(STONE_LEFT, ICON_TOP, ICON_HEIGHT, ICON_WIDTH);

     if ((mouseX > 150) && (mouseX < 250) && (mouseY > 75) && (mouseY < 175)) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_HEIGHT, ICON_WIDTH);

     if ((mouseX > 250) && (mouseX < 350) && (mouseY > 75) && (mouseY < 175)) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_HEIGHT, ICON_WIDTH);

}