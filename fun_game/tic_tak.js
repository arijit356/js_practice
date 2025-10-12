const WHITE = "⬜️";

const BOARD = [
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE],
  [WHITE, WHITE, WHITE]
]
function spaceBoard(){
  for (let index = 0; index < BOARD.length; index++) {
 console.log(BOARD[index].join(""));  
  }
}  

function main(){
  spaceBoard();
}

main();
