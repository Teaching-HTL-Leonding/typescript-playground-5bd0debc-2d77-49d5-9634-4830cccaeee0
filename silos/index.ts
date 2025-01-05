// Set the initial fill levels for the silos. The fill levels are separated by commas.
const INITIAL_FILL = "3,7,8,3,10,2"

const SILO_MAX = 10; // Maximum fill for each silo
const CRICITAL_FILL = 8; // Critical fill level for each silo

// Store the fill values for the silos. Will be a value between 0 and SILO_MAX.
const silos: number[] = [];

// Constants for the layout
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;

const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos

const BUTTON_SIZE = 20; // Size of the buttons ("add" and "remove")
const BUTTON_GAP = 15; // Gap between the bottom of the buttons and the top of the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the buttons

// Arrays to store the x-coordinates of each silo
const silos_x: number[] = [];

// Arrays to store the x-coordinates of the "add" and "remove" buttons
const up_x: number[] = [];
const down_x: number[] = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // <<< Add your code here
  let num = 0;
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    if (INITIAL_FILL[i] === ",") {
      silos.push(num);
      num = 0;
    } else {
      num = num * 10 + parseInt(INITIAL_FILL[i].trim());
    }
  }
  silos.push(num);
  // Calculate the x-coordinates of the silos and the buttons
  for (let i = 0; i < silos.length; i++) {
    silos_x.push(SILO_GAP + i * (SILO_WIDTH + SILO_GAP));
    const x = SILO_GAP + i * (SILO_WIDTH + SILO_GAP);
    up_x.push(x);
    down_x.push(x + SILO_WIDTH - BUTTON_SIZE);
  }
}

function draw() {
  background("black");

  // <<< Add your code here
}

function mouseClicked() {
  // <<< Add your code here
}
