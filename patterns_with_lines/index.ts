function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    colorMode(HSB);

    stroke("aqua");

    // <<< Add your code here

    for (let i = 0; i <= height; i++) {
        stroke(i, i + 360, 100);
        translate(0, 10);
        line(0, 0, 10, 5);
        line(10, 5, 0, 10);

        push();
        for (let i = 0; i <= width; i++) {

            line(0, 0, 10, 5);
            line(10, 5, 0, 10);

            translate(10, 0);
        } pop();
    }

    let x = Math.round(mouseX);
    let y = Math.round(mouseX / width * 100);

    resetMatrix();
    noStroke();
    fill("black");
    rect(0, 280, 601);

    fill("white");
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text(`${x} of 601 = ${y}%`, 0, 295, 601);

}


