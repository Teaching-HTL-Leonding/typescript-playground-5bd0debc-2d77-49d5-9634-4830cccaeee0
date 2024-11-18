function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let a = 0;
    while (a < 64) {
        const row = Math.floor(a / 8);
        const col = a % 8;
        if ((row % 2 === 0 && col % 2 === 1) || (row % 2 === 1 && col % 2 === 0)) {
            fill("brown");
        } else {
            fill("lightyellow");
        }

        rect(SQUARE_SIZE + col * SQUARE_SIZE, SQUARE_SIZE + row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        a++;
    }

    textSize(20);
    textAlign(CENTER, CENTER);
    fill("white");

    a = 1;
    while (a <= 8) {
      text(a, SQUARE_SIZE / 2, height - SQUARE_SIZE * a - SQUARE_SIZE / 2);

      let file: string;
      switch (a) {
        case 1: file = "a"; break;
        case 2: file = "b"; break;
        case 3: file = "c"; break;
        case 4: file = "d"; break;
        case 5: file = "e"; break;
        case 6: file = "f"; break;
        case 7: file = "g"; break;
        case 8: file = "h"; break;
        default: break;
      }
      text(file, SQUARE_SIZE * a + SQUARE_SIZE / 2, height - SQUARE_SIZE / 2);

      a++;
    }
}
