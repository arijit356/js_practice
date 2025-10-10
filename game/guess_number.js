
function hint(gussedNumber, luckyNumber) {
  if (gussedNumber < luckyNumber) {
    return ("your guess is lower than actual number");
  }
  return ("your guess is higher than actual number");
}

function confirmation() {
  const retry = confirm('do you want to replay game?');
  if (retry) {
    return main();
  }
}

function play(luckyNumber, totalChances = 5) {
  if (totalChances === 0) {
    console.log(luckyNumber);
    console.log("you dont have enough chance \nyou loss");
  
    return confirmation();
  }
  
  const guessedNumber = parseInt(prompt("Enter number : "));
  if (guessedNumber === luckyNumber) {
    console.log("you win");
    return confirmation();
  }
  
  console.log(hint(guessedNumber, luckyNumber));

  return play(luckyNumber, totalChances - 1);
}

function randomNumberGenerator(){
 return Math.floor(Math.random() * 100);
}

function main() {
  const luckyNumber = randomNumberGenerator();
  play(luckyNumber);
}

main();
