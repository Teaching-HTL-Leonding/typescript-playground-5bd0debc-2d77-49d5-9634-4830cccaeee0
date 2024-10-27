const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    textAlign(CENTER, CENTER);
    textSize(55);
    strokeWeight(2);
    stroke("black");
    background("lightgray");
    noFill();
    rect(0, lineHeight, cellWidth, lineHeight);
    fill("black");
    text("7", 0, lineHeight, cellWidth, lineHeight);

    noFill();
    rect(cellWidth, lineHeight, cellWidth, lineHeight);
    fill("black");
    text("8", cellWidth, lineHeight, cellWidth, lineHeight);

    noFill();
    rect(cellWidth * 2, lineHeight, cellWidth, lineHeight);
    fill("black");
    text("9", cellWidth * 2, lineHeight, cellWidth, lineHeight);

    noFill();
    rect(0, lineHeight * 2, cellWidth, lineHeight);
    fill("black");
    text("4", 0, lineHeight * 2, cellWidth, lineHeight);

    noFill();
    rect(cellWidth, lineHeight * 2, cellWidth, lineHeight);
    fill("black");
    text("5", cellWidth, lineHeight * 2, cellWidth, lineHeight);

    noFill();
    rect(cellWidth * 2, lineHeight * 2, cellWidth, lineHeight);
    fill("black");
    text("6", cellWidth * 2, lineHeight * 2, cellWidth, lineHeight);

    noFill();
    rect(0, lineHeight * 3, cellWidth, lineHeight);
    fill("black");
    text("1", 0, lineHeight * 3, cellWidth, lineHeight);

    noFill();
    rect(cellWidth, lineHeight * 3, cellWidth, lineHeight);
    fill("black");
    text("2", cellWidth, lineHeight * 3, cellWidth, lineHeight);

    noFill();
    rect(cellWidth * 2, lineHeight * 3, cellWidth, lineHeight);
    fill("black");
    text("3", cellWidth * 2, lineHeight * 3, cellWidth, lineHeight);

    noFill();
    rect(0, lineHeight * 4, cellWidth * 2, lineHeight);
    fill("black");
    text("0", 0, lineHeight * 4, cellWidth * 2, lineHeight);

    noFill();
    rect(cellWidth * 2, lineHeight * 4, cellWidth, lineHeight);
    fill("black");
    text("C", cellWidth * 2, lineHeight * 4, cellWidth, lineHeight);

    textAlign(RIGHT, CENTER);
    fill("white");
    noStroke();
    rect(MARGIN_NUM, MARGIN_NUM, width - MARGIN_NUM * 2, lineHeight - MARGIN_NUM * 2);
    fill("black");
    text(`${num}`, MARGIN_NUM, MARGIN_NUM, width - MARGIN_NUM * 3, lineHeight - MARGIN_NUM);


}

function mouseClicked() {

    let gz: number = 0;

    if (mouseX > 0 && mouseX <= cellWidth && mouseY > lineHeight && mouseY <= lineHeight * 2) {
        gz = 7;
    }

    if (mouseX > cellWidth && mouseX <= cellWidth * 2 && mouseY > lineHeight && mouseY <= lineHeight * 2) {
        gz = 8;
    }

    if (mouseX > cellWidth * 2 && mouseX <= cellWidth * 3 && mouseY > lineHeight && mouseY <= lineHeight * 2) {
        gz = 9;
    }

    if (mouseX > 0 && mouseX <= cellWidth * 2 && mouseY > lineHeight * 2 && mouseY <= lineHeight * 3) {
        gz = 4;
    }

    if (mouseX > cellWidth && mouseX <= cellWidth * 2 && mouseY > lineHeight * 2 && mouseY <= lineHeight * 3) {
        gz = 5;
    }

    if (mouseX > cellWidth * 2 && mouseX <= cellWidth * 3 && mouseY > lineHeight * 2 && mouseY <= lineHeight * 3) {
        gz = 6;
    }

    if (mouseX > 0 && mouseX <= cellWidth * 2 && mouseY > lineHeight * 3 && mouseY <= lineHeight * 4) {
        gz = 1;
    }

    if (mouseX > cellWidth && mouseX <= cellWidth * 2 && mouseY > lineHeight * 3 && mouseY <= lineHeight * 4) {
        gz = 2;
    }

    if (mouseX > cellWidth * 2 && mouseX <= cellWidth * 3 && mouseY > lineHeight * 3 && mouseY <= lineHeight * 4) {
        gz = 3;
    }

    if (mouseX > cellWidth * 2 && mouseX <= cellWidth * 3 && mouseY > lineHeight * 4 && mouseY <= lineHeight * 5) {
        num = 0;
    }

    if (mouseX > 0 && mouseX <= cellWidth * 2 && mouseY > lineHeight * 4 && mouseY <= lineHeight * 5) {
        gz = 0;
    }
    num = num * 10 + gz;
}
