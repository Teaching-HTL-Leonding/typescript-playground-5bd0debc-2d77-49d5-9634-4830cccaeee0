function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);
}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  // <<< Add your code here
}

function mouseClicked(){
    drawCircle("lime");
}


function drawCircle(color: string){

        stroke("black");
        fill(color);
        let x = random(0,400);
        let y = random(0,400);
        let diameter = random(50, 250);
        circle(x,y,diameter);


}