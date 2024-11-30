function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    // <<< Add your code here
    let i = GRID;
    while (i < SIZE - GRID) {
        fill("yellow");
        rect(i, i, GRID, GRID);
        i += GRID;
    }

    let j = SIZE - GRID * 2;
    let y = GRID;
    while (j >= GRID) {
        fill("green");
        rect(j, y, GRID, GRID);
        j += -GRID;
        y += GRID;
    }
}
