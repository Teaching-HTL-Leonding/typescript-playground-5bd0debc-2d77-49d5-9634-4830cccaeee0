// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randnum1 = 0;
let randnum2 = 0;

/*let randtext1 = 0;
let randtext2 = 0;
let randtext3 = 0;*/


// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    randnum1 = Math.floor(random(1, 101));
    randnum2 = Math.floor(random(1, 101));

    //randtext = Math.random(+, *, -);

    createCanvas(400, 400);
    background("black");

    fill("yellow");
    textSize(50);
    text(`${randnum1} - ${randnum2}`, width / 2 - 75, 50);

    const dice = Math.floor(random(1, 4));

    let message: string; 
    if (dice === 1) { message = "+"; }
    else if (dice === 2) { message = "-"; }
    else if (dice === 3) { message = "*"; }

    }



    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
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
