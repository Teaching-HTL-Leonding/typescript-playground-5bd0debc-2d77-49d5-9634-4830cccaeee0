function setup() {
    createCanvas(250, 250);
    background("black");

    strokeWeight(5);
    stroke("red");
    strokeCap(SQUARE);

    let y = 25;
    while (y <= 225) {
        line(25, y, 225, y);
        y += 50;
    }
    stroke("aqua");
    let x = 25;
    while (x <= 225) {
        line(x, 25, x, 225);
        x += 50;
    }

}

function draw() {
}
