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

    noFill();
    stroke("aqua");

    // <<< Add your code here

    for (let i = 0; i <= 301; i++) {

        line(0, 0, 10, 5);
        line(10, 5, 0, 10);

        translate(0, 10);

        push();
        for (let i = 0; i <= 600; i++) {

            line(0, 0, 10, 5);
            line(10, 5, 0, 10);

            translate(10, 0);
        } 
        pop();
    }
}

