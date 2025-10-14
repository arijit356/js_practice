
const SYMBOL_SAFE = "✅";
const SYMBOL_BOOM = "💥";

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
const BOOMS_BOARD = [
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
const SAFE_SELECTIONS = [];

function renderBoard(board) {
  let boardItems = "";
  for (let index = 0; index < board.length; index++) {
    boardItems += board[index] + "\t";
    if (index % 10 === 9) {
      boardItems += "\n"
    }
  }
  return boardItems;
}

function getRandomNumber(endRange) {
  return Math.floor((Math.random() * endRange) + 1);
}

function placeBooms(totalBooms = 10) {
  let boomPositions = [];
  for (let index = 0; index <= totalBooms; index++) {
    let randomNumber = getRandomNumber(NUMBER_BOARD.length);
    if (BOOMS_BOARD[randomNumber] !== SYMBOL_BOOM) {
      BOOMS_BOARD[randomNumber - 1] = SYMBOL_BOOM;
      boomPositions.push(randomNumber);
    }
  }
  return boomPositions;
}

function isLossGame(userChoice, boomPositions) {
  // console.log(boomPositions);
  if (boomPositions.includes(userChoice)) {
    return true;
  }
  SAFE_SELECTIONS.push(userChoice);
  NUMBER_BOARD[userChoice - 1] = SYMBOL_SAFE;
  return false;
}

function countNearbyBooms(indices) {
  let count = 0;
  for (let index = 0; index < indices.length; index++) {

    if (BOOMS_BOARD[indices[index] - 1] === SYMBOL_BOOM) {
      count++;
    }
  }
  return count;
}

function showHint(userChoice) {
  const nearbyIndices = [
    userChoice + 1, userChoice - 1,
    userChoice + 10, userChoice + 9, userChoice + 11,
    userChoice - 10, userChoice - 9, userChoice - 11,
  ]
  const boomCount = countNearbyBooms(nearbyIndices);
    NUMBER_BOARD[userChoice - 1] = "\x1B[43m" + boomCount + "\x1B[0m";
  return;
}

function play(boomPositions, score) {
  const userChoice = parseInt(prompt("💡 Choose a number between 1 and 100:"));
  if (userChoice < 1 || userChoice > 100 || isNaN(userChoice) || SAFE_SELECTIONS.includes(userChoice)) {
    console.log("⚠️ Invalid or repeated choice! Try again with a number between 1 and 100.");
    return play(boomPositions, score);
  }

  if (isLossGame(userChoice, boomPositions)) {
    console.clear();
    // console.log(boomPositions);
    console.log(renderBoard(BOOMS_BOARD));
    console.log(`💥 Oops! You hit a BOOM at position ${userChoice}!`);
    console.log(`🎯 Your final score: ${score}`);
    console.log("😢 Game Over! Better luck next time.");
    return;
  }

  score++;
  showHint(userChoice);
  console.clear();
  // console.log(boomPositions);
  console.log(renderBoard(NUMBER_BOARD));
  console.log(`${SYMBOL_SAFE} Nice move! Your current score: ${score}`);

  if (score === NUMBER_BOARD.length - boomPositions.length) {
    console.log("🏆 Congratulations! You cleared the entire board safely!");
    return;
  }
  return play(boomPositions, score);
}

function main() {
  console.clear();
  console.log("🎮 Welcome to the Minefield Game!");
  console.log("🧠 Choose wisely! Some numbers hide 💥 booms. Others are ✅ safe.");
  console.log("-".repeat(80));
  console.log(renderBoard(NUMBER_BOARD));
  let boomPositions = placeBooms();
  // console.log(boomPositions);
  console.log(`💣 There are ${boomPositions.length} hidden booms on the board...`);

  play(boomPositions, 0);
}

main();
