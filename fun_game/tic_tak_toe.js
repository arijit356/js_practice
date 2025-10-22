const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "🟢";

const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE]
]

const SLECTED_POSITION = [];

function renderBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

function selectEmoji() {
  const userSelectEmoji = parseInt(prompt(`Select 1 for Cross (${CROSS}) or 2 for Circle (${CIRCLE}): `));
  if (userSelectEmoji !== 1 && userSelectEmoji !== 2) {
    console.log("Invalid input.\nPlease choose 1 or 2 to select your emoji.");
    return selectEmoji();
  }
  return userSelectEmoji === 1 ? CROSS : CIRCLE;
}
function getMovePosition(text) {
  const position = parseInt(prompt(`Select ${text} Position 1 to 9 :`));
  if (position < 1 || position > 9 || position.toString() === "NaN") {
    console.log("Invalid position. Please choose between 1 and 9.");
    return getMovePosition(text);
  }
  return position;
}

function updateBoard(position, emoji) {
  let outerIndex = Math.floor((position - 1) / 3);
  let innerIndex = (position - 1) % 3;

  return BOARD[outerIndex][innerIndex] = emoji;
}

function firstPlayer(emoji) {
  let Position = getMovePosition("player 1");
  console.clear();
  if (SLECTED_POSITION.includes(Position)) {
    console.log("you cannot chose same position as another player");
    return firstPlayer(emoji);
  }
  SLECTED_POSITION.push(Position);
  updateBoard(Position, emoji);
  renderBoard();

}

function secondPlayer(emoji) {
  let Position = getMovePosition("player 2");
  if (SLECTED_POSITION.includes(Position)) {
    console.log("you cannot chose same position as another player");
    return secondPlayer(emoji);
  }
  SLECTED_POSITION.push(Position);
  updateBoard(Position, emoji);
  renderBoard();
}

function isWin(Symbol) {
  const winingPosition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  for (let index = 0; index < winingPosition.length; index++) {
    let pos = winingPosition[index];
    let row1 = Math.floor((pos[0] - 1) / 3);
    let row2 =  Math.floor((pos[1] - 1) / 3);
    let row3 = Math.floor((pos[2] - 1) / 3);
    let col1 = (pos[0] - 1) % 3;
    let col2 = (pos[1] - 1) % 3;
    let col3 = (pos[2] - 1) % 3;
    if(BOARD[row1][col1] === Symbol && BOARD[row2][col2] === Symbol && BOARD[row3][col3] === Symbol){
      return true;
    }
  }
  return false;
}
function playGame(firstPlayerEmoji, secondPlayerEmoji) {
  firstPlayer(firstPlayerEmoji);
  if(isWin(firstPlayerEmoji)){
    console.log("first player is win this match");
    return;
  }
  if (SLECTED_POSITION.length === 9) {
    console.log("game over !");
    return;
  }
  secondPlayer(secondPlayerEmoji);
  if(isWin(secondPlayerEmoji)){
    console.log("second player is win this match");
    return;
  }
  return playGame(firstPlayerEmoji, secondPlayerEmoji);
}

function play() {
  renderBoard();
  const firstPlayerEmoji = selectEmoji();
  const secondPlayerEmoji = firstPlayerEmoji === CROSS ? CIRCLE : CROSS;
  playGame(firstPlayerEmoji, secondPlayerEmoji);
}

function main() {
  play();
}

main();
