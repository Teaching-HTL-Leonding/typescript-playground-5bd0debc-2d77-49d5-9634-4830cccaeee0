/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/

// Raw input data in format: animalName,startPosition,hint
const crossword = `krebs,0,Schalentier  
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger  
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;

const animals : string[] = []
const startpos : number[] = []
const hints : string[] = []

const kaestchenhoehe = 35;
const kaestchenbreite = 35;
const 

// The word that players need to completely reveal to win
const solution = 'klapperschlange';

// === Write the necessary code starting here ===
function setup() {
    createCanvas(1000, 1000);
}
function draw() {
    background('white');

}
// split crossword into lines 
// split each lines int parts 
// add parts to animals, startpos and hints 
 function parseCrossword () {
    const lines = crossword.split('\n');
    for (const line of lines){
        const parts = line.split(',')
        animals.push(parts[0]);
        startpos.push(parseInt(parts[1]));
        hints.push(parts[2]);
    }
 } 

 function drawCrossword() {
 for(let i = 0; i < animals.length; i++){
    const start = width
 }
 }