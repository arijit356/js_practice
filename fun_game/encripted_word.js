function space() {
  console.log("\n");
}

function randomNumberGenerator(endRange) {
  return Math.floor(Math.random() * endRange);
}
function guessedWord() {
  const wordList = ["apple", "banana", "pineapple", "orange", "tomato",
    "time", "year", "home", "life", "work", "love", "good", "long",];
  return wordList[randomNumberGenerator(wordList.length)].split("");
}

function encriptedWord(word) {
  let coppyOfWord = word.join("");
  let arrayWord = coppyOfWord.split("");
  for (let index = arrayWord.length - 1; index > -1; index--) {
    let temp = arrayWord[index];
    let randomIndex = randomNumberGenerator(arrayWord.length);
    arrayWord[index] = arrayWord[randomIndex];
    arrayWord[randomIndex] = temp;
  }
  return arrayWord;
}

function play(randomWord, totalChances = 5) {
  if (totalChances === 0) {
    console.log("You loss to decript meggage");
    console.log("better luck next Time");
    console.log(randomWord.join(""));
    return;
  }

  space();
  console.log(`you have only ${totalChances} chances left`);
  const userGuessedWord = prompt("Write decript word : ");

  if (randomWord.join("") === userGuessedWord) {
    console.log("yes,you cracke encripted word");
    return;
  }else{
    console.log("No, This is not real word");
  }
  return play(randomWord, totalChances - 1);
}

function gameName() {
  return "Encripted Message";
}
function underline(text) {
  console.log(text);
  console.log("-".repeat(text.length));
}
function gameRule() {
  console.log("You have to Guess a encripted Message that show you");
}

function gameDescription() {
  const text = gameName();
  underline(text);
  space();
  underline("Game Rule");
  space();
  gameRule();
}

function main() {
  gameDescription();
  const word = guessedWord();
  console.log("Encripted word is : ");
  const encripted = encriptedWord(word).join("");
  console.log(encripted);
  play(word);
}

main();
