const RAILROAD_WIDTH = 225;
const RAILROAD_HEIGHT = 160;

const WAGON_WIDTH = 160;
const WAGON_HEIGHT = 113;

let railroad: p5.Image;
const trainCars: p5.Image[] = [];

/** Array of wagons for train (for base requirements) */
let train: p5.Image[] = [];

/** Array of trains on tracks (for ADVANCED requirements)
  * 
  * This is an array of arrays. The outer array contains the trains on the tracks.
  * Each inner array contains the train wagons of a single train.
  */
let trains: p5.Image[][] = [];

/** Input text for base requirements */
const TRAIN = "TLB,TCCG,TCTL,TCW,TCL,TCCR"

/** Input text for ADVANCED requirements */
const TRACKS = "TLB,TCCG,TCTL,TCW,TCL,TCCR;TEDA,TEDB,TEDB,TEDC,TEDB;TDA,TCF,TCC,TCC,TCB,TCD"

function preload() {
    railroad = loadImage(`${BASE_URL}/railroad-straight.png`);

    for (let t of imageUrls) {
        const image = loadImage(`${BASE_URL}/${t}`);
        trainCars.push(image);
    }
}

function setup() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    translate(850, -100);

    for (const track of trains) {
        for (let i = 0; i < 5; i++) {
            drawRailroad(i);
        }

        let ix = 0;
        for (const wagon of track) {
            drawTrainWagon(wagon, ix);
            ix++;
        }

        translate(125, 100);
    }
}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    translate(850, -100);

    // <<< Change this code accordingly for ADVANCED requirements

    for (let i = 0; i < 5; i++) {
        drawRailroad(i);
    }

    for (let ix = 0; ix < train.length; ix++) {
        drawTrainWagon(train[ix], ix);
    }
}
//suche das passende Bild zur Abkürzung
function getWagonIndex(abkurzung: string) {
    let rueckgabeindex = 0;
    for (rueckgabeindex; rueckgabeindex < abbreviations.length; rueckgabeindex++) {
        if (abbreviations[rueckgabeindex] === abkurzung) {
            return rueckgabeindex;

        }

    }
    return -1;

}

function parseTrain(abkuerzungen: string) {
    let tempabkurzung: string = "";
    let ausgabebilder: p5.Image[] = [];
    let bilddateiname: string = "";
    for (let i = 0; i < abkuerzungen.length; i++) {
        if (abkuerzungen[i] === ",") {
            bilddateiname = imageUrls[getWagonIndex(tempabkurzung)];
            const image = loadImage(`${BASE_URL}/${bilddateiname}`);
            ausgabebilder.push(image);
            tempabkurzung = "";
        } else {
            tempabkurzung = tempabkurzung + abkuerzungen[i];
        }
    }
    //bild für die letzte abkürzung im string noch dazu fügen
    bilddateiname = imageUrls[getWagonIndex(tempabkurzung)];
    const image = loadImage(`${BASE_URL}/${bilddateiname}`);
    ausgabebilder.push(image);
    tempabkurzung = "";

    return ausgabebilder
}

/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

/** Draw a train wagon */
function drawTrainWagon(wagon: p5.Image, ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);
}
