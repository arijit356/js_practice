const WHITE = "⬜️";
const CROSS = "❌";
const CIRCLE = "🟢";

const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE]
]

const SLECTED_POSITION = [];

function spaceBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

function selectEmoji() {
  const userSelectEmoji = parseInt(prompt("select 1 for cross and 2 for circle : "));
  if (userSelectEmoji !== 1 && userSelectEmoji !== 2) {
    console.log("invalide input \n please chose correct emoji 1 & 2");
    return selectEmoji();
  }
  return userSelectEmoji === 1 ? CROSS : CIRCLE;
}
function selectPosition(text) {
  const position = parseInt(prompt(`Select ${text} Position 1 to 9 :`));
  console.log(position);
  if (position < 1 || position > 9 || position === "NaN") {
    console.log("invalid position");
    return selectPosition(text);
  }
  return position;
}

function changeBoard(position, emoji) {
  let outerIndex = Math.floor((position - 1) / 3);
  let innerIndex = (position - 1) % 3;

  return BOARD[outerIndex][innerIndex] = emoji;
}

function firstPlayer(emoji) {
  let Position = selectPosition("player 1");
  console.clear();
  if (SLECTED_POSITION.includes(Position)) {
    console.log("you cannot chose same position as another player");
    return firstPlayer(emoji);
  }
  SLECTED_POSITION.push(Position);
  changeBoard(Position, emoji);
  spaceBoard();

}

function secondPlayer(emoji) {
  let Position = selectPosition("player 2");
  if (SLECTED_POSITION.includes(Position)) {
    console.log("you cannot chose same position as another player");
    return secondPlayer(emoji);
  }
  SLECTED_POSITION.push(Position);
  changeBoard(Position, emoji);
  spaceBoard();

}

function playGame(firstPlayerEmoji, secondPlayerEmoji) {
  firstPlayer(firstPlayerEmoji);
  if (SLECTED_POSITION.length === 9) {
    console.log("game over");
    return;
  }
  secondPlayer(secondPlayerEmoji);
  return playGame(firstPlayerEmoji, secondPlayerEmoji);
}

function play() {
  spaceBoard();
  const firstPlayerEmoji = selectEmoji();
  const secondPlayerEmoji = firstPlayerEmoji === CROSS ? CIRCLE : CROSS;
  playGame(firstPlayerEmoji, secondPlayerEmoji);
}

function main() {
  play();
}

main();
