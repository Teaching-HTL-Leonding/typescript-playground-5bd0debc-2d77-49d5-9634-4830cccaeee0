// Constants for the game grid
const GRID_SIZE = 300;           // The size of the Tic Tac Toe grid
const CELL_SIZE = GRID_SIZE / 3; // The size of each cell in the grid
const LINE_THICKNESS = 3;        // Thickness of the grid lines

// Canvas size
const CANVAS_WIDTH = GRID_SIZE; // Width of the canvas
const CANVAS_HEIGHT = GRID_SIZE + 50; // Height of the canvas (extra space for messages)

let lo = " ";
let mo = " ";
let ro = " ";
let lm = " ";
let mm = " ";
let rm = " ";
let lu = " ";
let mu = " ";
let ru = " ";

let actplayer = "X";
let winner = " ";

// <<< Add variables here

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

}

// Remember: The draw function is called repeatedly (once per frame) to update the display.
// In this exercise, we redraw the entire game board in each frame.
function draw() {
    background("white");
    strokeWeight(LINE_THICKNESS);
    line(CANVAS_WIDTH / 3, 0, CANVAS_WIDTH / 3, CANVAS_HEIGHT - 40);
    line(CANVAS_WIDTH / 3 * 2, 0, CANVAS_WIDTH / 3 * 2, CANVAS_HEIGHT - 40);
    line(0, (CANVAS_HEIGHT - 40) / 3, CANVAS_WIDTH, (CANVAS_HEIGHT - 40) / 3);
    line(0, (CANVAS_HEIGHT - 40) / 3 * 2, CANVAS_WIDTH, (CANVAS_HEIGHT - 40) / 3 * 2);


    textSize(30);
    textAlign(CENTER, CENTER);

    if (winner === " ") {
        text(`Player ${actplayer}'s turn`, CANVAS_WIDTH / 2, CANVAS_HEIGHT - 15);
    }
    else {
        text(`${actplayer} hat gewonnen`, CANVAS_WIDTH / 2, CANVAS_HEIGHT - 15);
    }

    textSize(50);
    text(lo, 0, 0, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(mo, CANVAS_WIDTH / 3, 0, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(ro, CANVAS_WIDTH / 3 * 2, 0, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(lm, 0, (CANVAS_HEIGHT - 40) / 3, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(mm, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(rm, CANVAS_WIDTH / 3 * 2, (CANVAS_HEIGHT - 40) / 3, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(lu, 0, (CANVAS_HEIGHT - 40) / 3 * 2, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(mu, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3 * 2, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
    text(ru, CANVAS_WIDTH / 3 * 2, (CANVAS_HEIGHT - 40) / 3 * 2, CANVAS_WIDTH / 3, (CANVAS_HEIGHT - 40) / 3);
}

function mouseClicked() {
    // wenn gewonnen reset
    if (winner === actplayer) {
        lo = " ";
        mo = " ";
        ro = " ";
        lm = " ";
        mm = " ";
        rm = " ";
        lu = " ";
        mu = " ";
        ru = " ";

        actplayer = "X";
        winner = " ";
    }
    else {

        if (mouseX <= CANVAS_WIDTH / 3 && mouseX > 0 && mouseY <= (CANVAS_HEIGHT - 40) / 3 && mouseY > 0 && lo === " ") {
            lo = actplayer;
            // spieler ändern
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if ((mouseX <= CANVAS_WIDTH / 3 * 2 && mouseX > CANVAS_WIDTH / 3 && mouseY <= (CANVAS_HEIGHT - 40) / 3 && mouseY > 0) && mo === " ") {
            mo = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if ((mouseX <= CANVAS_WIDTH && mouseX > CANVAS_WIDTH / 3 * 2 && mouseY <= (CANVAS_HEIGHT - 40) / 3 && mouseY > 0) && ro === " ") {
            ro = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH / 3 && mouseX > 0 && mouseY <= (CANVAS_HEIGHT - 40) / 3 * 2 && mouseY > (CANVAS_HEIGHT - 40) / 3 && lm === " ") {
            lm = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH / 3 * 2 && mouseX > CANVAS_WIDTH / 3 && mouseY <= (CANVAS_HEIGHT - 40) / 3 * 2 && mouseY > (CANVAS_HEIGHT - 40) / 3 && mm === " ") {
            mm = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH && mouseX > CANVAS_WIDTH / 3 * 2 && mouseY <= (CANVAS_HEIGHT - 40) / 3 * 2 && mouseY > (CANVAS_HEIGHT - 40) / 3 && rm === " ") {
            rm = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH / 3 && mouseX > 0 && mouseY <= CANVAS_HEIGHT - 40 && mouseY > (CANVAS_HEIGHT - 40) / 3 * 2 && lu === " ") {
            lu = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH / 3 * 2 && mouseX > CANVAS_WIDTH / 3 && mouseY <= CANVAS_HEIGHT - 40 && mouseY > (CANVAS_HEIGHT - 40) / 3 * 2 && mu === " ") {
            mu = actplayer;
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        if (mouseX <= CANVAS_WIDTH && mouseX > CANVAS_WIDTH / 3 * 2 && mouseY <= CANVAS_HEIGHT - 40 && mouseY > (CANVAS_HEIGHT - 40) / 3 * 2 && ru === " ") {
            ru = actplayer;
            // spieler ändern
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
        }
        // überprüfen ob gewonnen
        if ((lo === mo && mo === ro && lo != " ") || (lm === mm && mm === rm && lm != " ") || (lu === mu && mu === ru && lu != " ") ||
            (lo === lm && lm === lu && lo != " ") || (ro === rm && rm === ru && ro != " ") || (mo === mm && mm === mu && mo != " ") ||
            (lo === mm && mm === ru && lo != " ") || (ro === mm && mm === lu && ro != " ")) {
            // spieler zurück ändern
            if (actplayer === "X") {
                actplayer = "O";
            }
            else {
                actplayer = "X";
            }
            winner = actplayer;
        }
    }
}


