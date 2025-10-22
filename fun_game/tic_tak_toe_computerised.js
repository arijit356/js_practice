const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "🟢";

const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE]
]

const SELECTED_POSITIONS = [];
const PLAYER_POSITIONS = [];
const WINNING_COMBINATIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function renderBoard() {
  console.log("\nCurrent Board:");
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
  console.log("\n");
}

function selectPlayerSymbol() {
  const choice = parseInt(prompt(`Choose your symbol:\n1 for Cross (${CROSS})\n2 for Circle (${CIRCLE})\n`));
  if (choice !== 1 && choice !== 2) {
    console.log("❌ Invalid choice! Please enter 1 or 2.");
    return selectPlayerSymbol();
  }
  return choice === 1 ? CROSS : CIRCLE;
}

function getPlayerMove(playerText) {
  const position = parseInt(prompt(`Select ${playerText} position (1 to 9): `));
  if (position < 1 || position > 9 || isNaN(position)) {
    console.log("⚠️ Invalid position. Please enter a number between 1 and 9.");
    return getPlayerMove(playerText);
  }
  if (SELECTED_POSITIONS.includes(position)) {
    console.log("🚫 That spot is already taken! Try again.");
    return getPlayerMove(playerText);
  }
  return position;
}

function updateBoard(position, symbol) {
  let row = Math.floor((position - 1) / 3);
  let col = (position - 1) % 3;

  return BOARD[row][col] = symbol;
}

function playerTurn(symbol) {
  const position = getPlayerMove("Yours");
  console.clear();
  PLAYER_POSITIONS.push(position);
  SELECTED_POSITIONS.push(position);
  updateBoard(position, symbol);
  renderBoard();

}

function getRandomPosition(endRange = 9) {
  return Math.floor(1 + Math.random() * endRange);
}

function getSmartMove() {
  for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
    const pos = WINNING_COMBINATIONS[index];
    if (PLAYER_POSITIONS.includes(pos[0]) && PLAYER_POSITIONS.includes(pos[1])) {
      return pos[2];
    }
    if (PLAYER_POSITIONS.includes(pos[1]) && PLAYER_POSITIONS.includes(pos[2])) {
      return pos[0];
    }
    if (PLAYER_POSITIONS.includes(pos[0]) && PLAYER_POSITIONS.includes(pos[2])) {
      return pos[1];
    }
  }
  return getRandomPosition();
}

function computerTurn(symbol) {
  let position = getSmartMove();
  while (SELECTED_POSITIONS.includes(position)) {
    position = getRandomPosition();
  }
  SELECTED_POSITIONS.push(position);
  updateBoard(position, symbol);
  console.log("💻 Computer's move:");
  renderBoard();
}

function isWin(Symbol) {
  for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
    let pos = WINNING_COMBINATIONS[index];
    let row1 = Math.floor((pos[0] - 1) / 3);
    let row2 = Math.floor((pos[1] - 1) / 3);
    let row3 = Math.floor((pos[2] - 1) / 3);
    let col1 = (pos[0] - 1) % 3;
    let col2 = (pos[1] - 1) % 3;
    let col3 = (pos[2] - 1) % 3;
    if (BOARD[row1][col1] === Symbol && BOARD[row2][col2] === Symbol && BOARD[row3][col3] === Symbol) {
      return true;
    }
  }
  return false;
}

function playGame(playerSymbol, computerSymbol) {
  playerTurn(playerSymbol);
  if (isWin(playerSymbol)) {
    console.log("🎉 You win!");
    return;
  }
  if (SELECTED_POSITIONS.length === 9) {
    console.log("🤝 It's a draw!");
    return;
  }
  computerTurn(computerSymbol);
  if (isWin(computerSymbol)) {
    console.log("💀 Computer wins!");
    return;
  }
  if (SELECTED_POSITIONS.length === 9) {
    console.log("🤝 It's a draw!");
    return;
  }
  return playGame(playerSymbol, computerSymbol);
}

function play() {
  console.clear();
  console.log("🎮 Welcome to Tic-Tac-Toe!");
  renderBoard();
  const playerSymbol = selectPlayerSymbol();
  const computerSymbol = playerSymbol === CROSS ? CIRCLE : CROSS;
  playGame(playerSymbol, computerSymbol);
}

function main() {
  play();
}

main();
