function setup() {
    createCanvas(300, 300);
    background("gold");
}

function mouseClicked() {
    fill("red");
    noStroke();
    circle(mouseX, mouseY, 10);

    fill("gold");
    noStroke();
    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height-5);
}
function mouseMoved() {
    noStroke();
    fill("lime");
    circle(mouseX, mouseY, 10);

    fill("gold");
    noStroke();
    rect(150,height - 20, width / 2, height-5);

    fill ("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 200, height-5);
}