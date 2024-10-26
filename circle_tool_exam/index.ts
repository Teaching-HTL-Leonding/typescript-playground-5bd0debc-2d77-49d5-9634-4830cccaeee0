let mx = 0;
let my = 0;


function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);

}

function draw(){
    
    noFill();
    stroke("white");
    background("black");
    ellipse(width / 2, height / 2, width - mx, height - my);

}

function mouseMoved(){
    
    mx = mouseX * 2;
    my = mouseY * 2;
}


