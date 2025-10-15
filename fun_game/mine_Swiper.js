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
]
// ["1","2","3","4","5","6","7","8","9","10"]


function displayBoard() {
  for (let index = 0; index < BOARD.length; index++) {
    console.log(BOARD[index].join(""));
  }
}

const ROUTE = [
  [1, 1], [2, 1], [2, 2], [3, 2], [4, 2],
  [4, 3], [5, 3], [6, 3], [6, 4], [6, 5],
  [6, 6], [7, 6], [8, 6], [8, 7], [8, 8],
  [9, 8], [9, 9], [10, 9], [10, 10]];

// for (let index = 0; index < route.length; index++) {
//   let pos = route[index];
//   BOARD[pos[0]][pos[1]] = CT;
// }


function isEqual(array1, array2) {
  // console.log(array1)
  for (let index = 0; index < array1.length; index++) {
    let pos = array1[index];
    if (array2[0] === pos[0] && array2[1] === pos[1]) {
      return true;
    }
  }
  return false;
}

function isEnd() {

}

function isFindPath(userInput) {
  if (isEqual(ROUTE, userInput)) {
    // console.log("arijit");
    BOARD[userInput[0]][userInput[1]] = CT;
    return true;
  }
  BOARD[userInput[0]][userInput[1]] = BM;
  return false;
}

function isNextBox(userChoiceArray,userInput){
  let previousInput = userChoiceArray[userChoiceArray.length - 1];
  console.log(previousInput);
if(Math.abs(userInput[0] - previousInput[0]) === 1 && Math.abs(userInput[1] - previousInput[1]) === 1){
  return true;
}
return false;
}
function play(userChoiceArray) {
  const row = parseInt(prompt("Enter row : "));
  const coloum = parseInt(prompt("enter Coloum"));
  const userInput = [row, coloum];

  if (userInput.length < 2 || isEqual(userChoiceArray, userInput) || !isNextBox(userChoiceArray, userInput)) {
    console.log("Invalid Input");
    return play(userChoiceArray);
  }

  userChoiceArray.push(userInput);
  console.log(userChoiceArray);

  if (isFindPath(userInput)) {
    displayBoard();
    return play(userChoiceArray);
  }
  displayBoard();
  return;
}

displayBoard();
play([]);
