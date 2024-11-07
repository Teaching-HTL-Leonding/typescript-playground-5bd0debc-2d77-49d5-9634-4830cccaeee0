// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
// nummern oben
let randnum1 = 0;
let randnum2 = 0;
// nummern unten
let randnum3 = 0;
let randnum4 = 0;
let randnum5 = 0;

let correct = 0;


// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    // random nummern oben
    randnum1 = Math.floor(random(1, 101));
    randnum2 = Math.floor(random(1, 101));
    // random nummern unten
    randnum3 = Math.floor(random(1, 101));
    randnum4 = Math.floor(random(1, 101));
    randnum5 = Math.floor(random(1, 101));

    createCanvas(400, 400);
    background("black");

    const dice = Math.floor(random(1, 4));
    let message: string;
    if (dice === 1) {
        message = "+";
        correct = randnum1 + randnum2;
    }
    else if (dice === 2) {
        message = "-";
        correct = randnum1 - randnum2;
    }
    else if (dice === 3) {
        message = "*";
        correct = randnum1 * randnum2;
    }

    const computerSymbolId = Math.floor(random(0, 3));
    if (computerSymbolId === 0) {
        randnum3 = correct;
    } else if (computerSymbolId === 1) {
        randnum4 = correct;
    } else if (computerSymbolId === 2) {
        randnum5 = correct;
    }

    fill("yellow");
    textSize(50);
    // Text oben
    text(`${randnum1} ${message} ${randnum2}`, width / 2 - 75, 50);
    // Text unten
    text(`${randnum3}`, width / 6 - 40, height / 2 + 15);
    text(`${randnum4}`, width / 6 * 3 - 25, height / 2 + 15);
    text(`${randnum5}`, width / 6 * 5 - 20, height / 2 + 15);

}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    if (mouseX > 28 && mouseX < 81 && mouseY > 170 && mouseY < 220 && randnum3 === correct) {
        fill("green");
        textSize(50);
        text(`${correct} ist richtig!`, width / 2 - 150, height - 100);
    } else if(mouseX > 28 && mouseX < 81 && mouseY > 170 && mouseY < 220 && randnum3 !== correct) {
        fill("red");
        textSize(50);
        text(`${randnum3} ist falsch!`, width / 2 - 150, height - 100);
    }
    if (mouseX > 179 && mouseX < 233 && mouseY > 170 && mouseY < 220 && randnum4 === correct) {
        fill("green");
        textSize(50);
        text(`${correct} ist richtig!`, width / 2 - 150, height - 100);
    } else if(mouseX > 179 && mouseX < 233 && mouseY > 170 && mouseY < 220 && randnum4 !== correct) {
        fill("red");
        textSize(50);
        text(`${randnum4} ist falsch!`, width / 2 - 150, height - 100);
    }
    if (mouseX > 320 && mouseX < 376 && mouseY > 170 && mouseY < 220 && randnum5 === correct) {
        fill("green");
        textSize(50);
        text(`${correct} ist richtig!`, width / 2 - 150, height - 100);
    } else if(mouseX > 320 && mouseX < 376 && mouseY > 170 && mouseY < 220 && randnum5 !== correct){
        fill("red");
        textSize(50);
        text(`${randnum5} ist falsch!`, width / 2 - 150, height - 100);
    }
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
