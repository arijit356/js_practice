const STONE = "stone";
const PAPER = "paper";
const SCISSOR = "scissor";

const moves = [STONE, PAPER, SCISSOR];
const movesForWin = [PAPER,SCISSOR,STONE];

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

function forWin(move, randomNumber) {
  return movesForWin[randomNumber] === move;
}

function forDraw(move, randomNumber) {
  return moves[randomNumber] === move;
}

function confirmation() {
  let retry = confirm("do you want to play again");
  if (retry) {
    return main()
  }
}

function calculateResult(move) {
  let randomNumber = randomNumberGenerator();
  if (forWin(move, randomNumber)) {
    console.log(randomNumber);
    console.log("you win the game");
    return confirmation();
  }
  if (forDraw(move, randomNumber)) {
    console.log(randomNumber);
    console.log("match draw");
    return confirmation();
  }
  console.log(randomNumber);
  console.log("you loss the game")
  return confirmation();
}

function main() {
  const move = prompt("Enter stone or paper or scissor");
  calculateResult(move);
}

main();
