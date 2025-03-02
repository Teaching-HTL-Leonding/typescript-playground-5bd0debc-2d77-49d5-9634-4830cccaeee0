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
    createCanvas(800, 550);

    trains = parseTrack(TRAIN)

}

function draw() {
    background("#f0f0f0");

    scale(0.5, 0.5);

    translate(850, -100);

    // <<< Change this code accordingly for ADVANCED requirements

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
// gets index of picture
function getWagonIndex(al: string): number {
    let rueckgabeindex = 0;
    for (rueckgabeindex; rueckgabeindex < abbreviations.length; rueckgabeindex++) {
        if (abbreviations[rueckgabeindex] === al) {
            return rueckgabeindex;
        }
    }
}
function parseTrain(abkuerzungen: string): p5.Image[] {
    let tempabkurzung: string = "";
    let ausgabebilder: p5.Image[] = [];
    let bilddateiname: string = "";
    for (let i = 0; i < abkuerzungen.length; i++) {
        if (abkuerzungen[i] === ",") {
            bilddateiname = imageUrls[getWagonIndex(tempabkurzung)];
            const image = loadImage(`${BASE_URL}/${bilddateiname}`);
            ausgabebilder.unshift(image);
            tempabkurzung = "";
        } else {
            tempabkurzung = tempabkurzung + abkuerzungen[i];
        }
    }
    bilddateiname = imageUrls[getWagonIndex(tempabkurzung)];
    const image = loadImage(`${BASE_URL}/${bilddateiname}`);
    ausgabebilder.unshift(image);
    tempabkurzung = "";

    return ausgabebilder
}


function parseTrack(tracks: string): p5.Image[][] {

    const result: p5.Image[][] = [];

    let track = "";
    for (let a = 0; a < tracks.length; a++) {
        if (tracks[a] === ";") {
            result.push(parseTrain(track));
            track = "";
        } else {
            track += tracks[a];
        }
    }

    result.push(parseTrain(track));
    return result;
}


/** Draw a railroad segment */
function drawRailroad(ix: number) {
    image(railroad, -RAILROAD_WIDTH * ix, RAILROAD_HEIGHT * ix, railroad.width, railroad.height);

}

/** Draw a train wagon */
function drawTrainWagon(wagon: p5.Image, ix: number) {
    image(wagon, -WAGON_WIDTH * ix, WAGON_HEIGHT * ix, wagon.width, wagon.height);
}
