
const BOOM = "💥";

const NUMBER_BOARD = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
  "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
  "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
  "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
  "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];
const COPY_NUMBER_BOARD = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
  "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
  "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
  "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
  "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];

function renderBoard() {
  let boardItems = "";
  for (let index = 0; index < COPY_NUMBER_BOARD.length; index++) {
    if (COPY_NUMBER_BOARD[index].length < 2) {
      COPY_NUMBER_BOARD[index] = (COPY_NUMBER_BOARD[index]).padStart(2, " ");
    }
    boardItems += COPY_NUMBER_BOARD[index] + " ";
    if (index % 10 === 9) {
      boardItems += "\n"
    }
  }
  return boardItems;
}

function randomNumberGenerator(endRange) {
  return Math.floor((Math.random() * endRange) + 1);
}

function play() {
  let boomIndex = [];
  for (let index = 0; index < 15; index++) {
    let randomNumber = randomNumberGenerator(NUMBER_BOARD.length);
    if(NUMBER_BOARD[randomNumber] !== BOOM){
      NUMBER_BOARD[randomNumber] = BOOM;
      boomIndex.push(randomNumber);
    }
  }
  return boomIndex;
}

function main() {
  console.log(renderBoard());
  console.log(NUMBER_BOARD[3]);
  play();
}

main();
