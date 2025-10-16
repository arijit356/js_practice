const WT = "⬜️";
const CT = "✅";
const BM = "💥";
const BOARD = [
  ["   1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10"],
  ["1  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["2  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["3  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["4  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["5  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["6  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["7  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["8  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["9  ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
  ["10 ", WT, WT, WT, WT, WT, WT, WT, WT, WT, WT],
];
// ["1","2","3","4","5","6","7","8","9","10"]

function displayBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

const ROUTE = [
  [1, 1],
  [2, 1],
  [2, 2],
  [3, 2],
  [4, 2],
  [4, 3],
  [5, 3],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [7, 6],
  [8, 6],
  [8, 7],
  [8, 8],
  [9, 8],
  [9, 9],
  [10, 9],
  [10, 10],
];

function isInRoute(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    let pos = array1[index];
    if (array2[0] === pos[0] && array2[1] === pos[1]) {
      return true;
    }
  }
  return false;
}

function isCorrectMove(userInput) {
  if (isInRoute(ROUTE, userInput)) {
    BOARD[userInput[0]][userInput[1]] = CT;
    return true;
  }
  BOARD[userInput[0]][userInput[1]] = BM;
  return false;
}

function isAdjacentMove(playerMoves, userInput) {
  if (playerMoves.length < 1) {
    return true;
  }

  let lastMove = playerMoves[playerMoves.length - 1];
  const increaseRow = Math.abs(userInput[0] - lastMove[0]) === 1 &&
    Math.abs(userInput[1] - lastMove[1]) === 0;
  const increaseCol = Math.abs(userInput[1] - lastMove[1]) === 1 &&
    Math.abs(userInput[0] - lastMove[0]) === 0;

    return  increaseRow || increaseCol;
 
}

function isWin(userChoiceArray) {
  if (userChoiceArray.length === ROUTE.length) {
     console.log("🎉 You win the match!");
    return true;
  }
  return false;
}

function play(playerMoves) {
  const row = parseInt(prompt("Enter row (1-10) or Q to quit:"));
  const column = parseInt(prompt("Enter column  (1-10) or Q to quit:"));
  const userInput = [row, column];

  if (
    userInput.length < 2 || isInRoute(playerMoves, userInput) || row < 1 ||
    row > 10 || column < 1 || column > 10 ||
    !isAdjacentMove(playerMoves, userInput) || isNaN(row) || isNaN(column)
  ) {
    console.log("❌ Invalid Input. Try again.");
    return play(playerMoves);
  }

  playerMoves.push(userInput);

  if (isCorrectMove(userInput)) {
    console.clear();
    displayBoard();
    if (isWin(playerMoves)) {
      return;
    }
    return play(playerMoves);
  }
  console.clear();
  displayBoard();
  console.log("💥 Wrong move! Game Over.");
}

function main() {
  console.clear();
  console.log("📍 Welcome to the Pathfinding Game!");
  console.log(
    "➡️ Move through the correct path by entering coordinates (row & column).",
  );
  console.log(
    "🧭 You can only move to adjacent tiles (up, down, left, or right).",
  );
  console.log("💣 One wrong move, and it's game over!");
  console.log("❌ Do not repeat the same position.");
  console.log("🛑 Type 'Q' to quit anytime.\n");
  displayBoard();
  play([]);
}

main();
