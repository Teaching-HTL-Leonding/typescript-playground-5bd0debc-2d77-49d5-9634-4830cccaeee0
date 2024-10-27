let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  let colorname: string
  let cardname: string
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  switch (colorIx) {
    case 0: colorname = "clubs"; break;
    case 1: colorname = "diamonds"; break;
    case 2: colorname = "hearts"; break;
    default: colorname = "spades"; break;
  }

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));
  switch(cardIx) {
    case 1 : cardname = "A"; break;
    case 11 : cardname = "J"; break;
    case 12 : cardname = "Q"; break;
    case 13 : cardname = "K"; break;
    default : cardname = `${cardIx}`; break;


  }
    cardImage = loadImage (`${BASE_URL}/${colorname}/${cardname}.png`);
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}