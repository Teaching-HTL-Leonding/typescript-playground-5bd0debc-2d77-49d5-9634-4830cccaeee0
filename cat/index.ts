function setup() {
    createCanvas(300, 300);
    background("rgb(0, 255, 255)");

    fill("lightgrey");
    circle(150, 170, 150);

    fill("black");
    circle(125, 160, 15);
    circle(175, 160, 15);

    fill("hotpink");
    triangle(140, 170, 150, 180, 160, 170);

    stroke("black");
    //Von Nase weg
    line(150, 180, 150, 200);
    //Von Nasenstrich weg
    line(150, 200, 170, 210);
    line(130, 210, 150, 200);
    //Von Nasenstriche-Striche weg
    line(130, 210, 100, 200);
    line(200, 200, 170, 210);
    //Gerade Striche 
    line(140, 195, 100, 195);
    line(200, 195, 160, 195);
    //Schräge Linie 
    line(100, 180, 140, 190);
    line(160, 190, 200, 180);

    fill("lightgray");
    triangle(120, 90, 100, 60, 80, 110);
    triangle(220, 110, 190, 60, 170, 90);
}
