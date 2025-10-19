
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
const BOOM_BOARD = [
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

const SAFE_SELECTIONS = [];

function displayBoard(board) {
  for (let index = 0; index < board.length; index++) {
    console.log(board[index].join(""));
  }
}
function getRandomNumber(endRange) {
  return Math.floor(1 + Math.random() * endRange);
}

function placeBoms(totalBoms = 20) {
  const bomsPositions = [];
  for (let index = 0; index < totalBoms; index++) {
    const rowBomIndex = getRandomNumber(10);
    const colBomIndex = getRandomNumber(10);
    if (BOOM_BOARD[rowBomIndex][colBomIndex] !== BM) {
      BOOM_BOARD[rowBomIndex][colBomIndex] = BM;
      bomsPositions.push([rowBomIndex, colBomIndex]);
    }
  }
  console.log(bomsPositions);
  return bomsPositions;
}

function isSamePosition(userChoices, Positions) {
  for (let index = 0; index < Positions.length; index++) {
    let pos = Positions[index];
    if (pos[0] === userChoices[0] && pos[1] === userChoices[1]) {
      return true;
    }
  }
  return false;
}

function isLossGame(userChoices, bomsPositions) {
  if (isSamePosition(userChoices, bomsPositions)) {
    return true;
  }
  SAFE_SELECTIONS.push(userChoices);
  BOARD[userChoices[0]][userChoices[1]] = CT;
  return false;
}

function countNearbyBoms(indices) {
  let count = 0;
  for (let index = 0; index < indices.length; index++) {
    let pos = indices[index];
    if (pos[0] === 0 || pos[1] === 0 || pos[0] === undefined || pos[1] === undefined) {
      continue;
    }

    if (BOOM_BOARD[pos[0]][pos[1]] === BM) {
      count++;
    }
  }
  return count;
}

function showHint(indexs) {
  const nearbyIndices = [
    [indexs[0], indexs[1] + 1], [indexs[0], indexs[1] - 1],
    [indexs[0] + 1, indexs[1]], [indexs[0] - 1, indexs[1]],
    [indexs[0] + 1, indexs[1] + 1], [indexs[0] - 1, indexs[1] - 1],
    [indexs[0] + 1, indexs[1] - 1], [indexs[0] - 1, indexs[1] + 1]
  ]
  console.log(nearbyIndices);
  const bomsCount = countNearbyBoms(nearbyIndices);
  BOARD[indexs[0]][indexs[1]] = bomsCount;
  return;
}

function play(bomsPositions) {
  const userChoice = prompt("enter row and col positions using space like(10 10) : ");
  const userChoiceArray = userChoice.split(" ");
  userChoiceArray[0] = parseInt(userChoiceArray[0]);
  userChoiceArray[1] = parseInt(userChoiceArray[1]);
  console.log(userChoiceArray);

  if (isNaN(userChoiceArray[0]) || isNaN(userChoiceArray[1]) ||
    userChoiceArray[0] < 1 || userChoiceArray[1] < 1 ||
    userChoiceArray[0] > 10 || userChoiceArray[1] > 10 ||
    isSamePosition(userChoiceArray, SAFE_SELECTIONS)) {
    console.log("invalid input");
    return play(bomsPositions);
  }

  if (isLossGame(userChoiceArray, bomsPositions)) {
    // console.clear();
    displayBoard(BOOM_BOARD);
    console.log("you loss the game");
    return;
  }

  showHint(userChoiceArray);
  displayBoard(BOARD);
  play(bomsPositions);
}

function main() {
  // console.clear();
  displayBoard(BOARD);
  const bomsPositions = placeBoms();
  play(bomsPositions);
}
main()
