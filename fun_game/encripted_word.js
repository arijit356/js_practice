function space() {
  console.log("\n");
}
function confirmation() {
  const retry = confirm("Do you want to play again : ")
  if (retry) {
    main();
  }
}
function randomNumberGenerator(endRange) {
  return Math.floor(Math.random() * endRange);
}
function guessedWord() {
  const wordList = ["apple", "banana", "pineapple", "orange", "tomato",
    "time", "year", "home", "life", "work", "love", "good", "long",];
  return wordList[randomNumberGenerator(wordList.length)].split("");
}

function encriptedWordLevel1(word) {
  for (let index = word.length - 1; index > -1; index--) {
    let temp = word[index];
    let randomIndex = randomNumberGenerator(word.length);
    word[index] = word[randomIndex];
    word[randomIndex] = temp;
  }
  return word;
}
function copyWord(word) {
  const coppyOfWord = word.join("");
  return coppyOfWord.split("");
}

function encriptedWordLevel2(word) {
  const numberOfletter = 8
  if (word.length < numberOfletter) {
    for (let index = 0; index < numberOfletter - word.length; index++) {
      word.push(word[randomNumberGenerator(word.length)]);
    }
    return encriptedWordLevel1(word);
  }
  return word;
}
function encriptedWord(word, chosedLevel) {
  const copyedWord = copyWord(word);
  const level1 = encriptedWordLevel1(copyedWord);
  if (chosedLevel === "1") {
    return level1;
  }
  const copyedLevel1Word = copyWord(level1);
  const level2 = encriptedWordLevel2(copyedLevel1Word);
  if (chosedLevel === "2") {
    return level2;
  }
}


function choseLevel(word) {
  const chosedLevel = prompt("which level do you want to play : 1/2/3");
  if (chosedLevel === "1") {
    return encriptedWord(word, chosedLevel);
  }
  if (chosedLevel === "2") {
    return encriptedWord(word, chosedLevel);
  }
}
function play(randomWord, totalChances = 5) {
  if (totalChances === 0) {
    console.log("You loss to decript meggage");
    console.log("better luck next Time");
    console.log(randomWord.join(""));
    return confirmation();
  }

  space();
  console.log(`you have only ${totalChances} chances left`);
  const userGuessedWord = prompt("Write decript word : ");

  if (randomWord.join("") === userGuessedWord) {
    console.log("yes,you cracke encripted word");
    return confirmation();
  } else {
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
  const encripted = choseLevel(word).join("");
  console.log("Encripted word is : ");
  console.log(encripted);
  play(word);
}

main();
