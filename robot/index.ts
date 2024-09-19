function setup() {
    createCanvas(1000, 1000);

    background("lightgray");

    //Kopf vom Roboter
    fill("gray");
    rect(100, 400, 400);

    //Antenne
    line(300, 250, 300, 400);

    //Antennenkopf
    fill("white");
    circle(300, 250, 40);

    //Augen
    fill("black");
    circle(150, 550, 70);
    circle(450, 550, 70);

    //Mund
    fill("white");
    rect(150, 650, 300, 50);
}

