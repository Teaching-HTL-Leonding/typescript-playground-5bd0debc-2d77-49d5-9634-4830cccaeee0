function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    
    fill("yellow");
    rect(0, 0, width / 3);

    fill("red");
    rect(width / 3, 0, width / 3);

    fill("green");
    rect(width / 3 * 2, 0, width / 3);
}

function mouseClicked() {

    // The message variable will recive the message to print
    let message: string;

    // Note the `ìf` statement here. It checks is the mouse click
    // was in the area (yellow). If it was, the message is "Yellow".

}