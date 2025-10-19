
function space() {
  console.log("\n");
}
function confirmation() {
  const retry = confirm("🔁 Do you want to play again?")
  if (retry) {
    main();
  }
  console.log("👋 Thanks for playing! See you next time!");
  return;
}
function getRandomNumber(endRange) {
  return Math.floor(Math.random() * endRange);
}
function getRandomWord() {
  const wordList = ["apple", "banana", "pineapple", "orange", "tomato",
    "time", "year", "home", "life", "work", "love", "good", "long",
    "make", "know", "take", "come", "give", "look", "want", "need",
    "feel", "help", "talk", "move", "stay", "play", "read", "write",
    "think", "bring", "begin", "build", "learn", "teach", "watch",
    "sleep", "speak", "share", "laugh", "start", "drive", "walk",
    "child", "world", "place", "money", "house", "story", "thing",
    "water", "music", "happy", "great", "small", "early", "right",
    "today", "every", "never", "always", "before", "after", "people",
    "friend", "family", "school", "health", "beauty", "travel", "dream",
    "future", "energy", "nature", "change", "moment", "reason"];
  return wordList[getRandomNumber(wordList.length)].split("");
}

function shuffleWord(word) {
  for (let index = word.length - 1; index > -1; index--) {
    let temp = word[index];
    let randomIndex = getRandomNumber(word.length);
    word[index] = word[randomIndex];
    word[randomIndex] = temp;
  }
  return word;
}
function copyWord(word) {
  const coppyOfWord = word.join("");
  return coppyOfWord.split("");
}

function extendWord(word, min_length = 10) {
  if (word.length < min_length) {
    for (let index = 0; index < min_length - word.length; index++) {
      word.push(word[getRandomNumber(word.length)]);
    }
    return shuffleWord(word);
  }
  return word;
}

function upperCaseLetter(word) {
  for (let index = 0; index < word.length; index++) {
    if (Math.random(1) > 0.4) {
      word[index] = word[index].toUpperCase();
    }
  }
  return extendWord(word, 15);
}
function encryptWord(word, chosenLevel) {
  const baseCopy = copyWord(word);
  const level1Word = shuffleWord(baseCopy);
  if (chosenLevel === "1") {
    return level1Word;
  }
  const level2Copy = extendWord(baseCopy);
  if (chosenLevel === "2") {
    return level2Copy;
  }
  const level3Copy = upperCaseLetter(level2Copy);
  if (chosenLevel === "3") {
    return level3Copy;
  }
}

function selectDifficulty(word) {
  const level = prompt("🎚️ Choose difficulty level (1 or 2 or 3):");
  if (level === "1" || level === "2" || level === "3") {
    return encryptWord(word, level);
  }
  console.log("⚠️ Invalid choice. Please enter 1 or 2.");
  return selectDifficulty(word);
}

function play(randomWord, totalChances = 5) {
  if (totalChances === 0) {
    console.log("❌ You ran out of chances!");
    console.log("🔍 The correct word was:", randomWord.join(""));
    console.log("Better luck next time!");
    return confirmation();
  }

  space();
  console.log(`🧩 You have ${totalChances} ${totalChances === 1 ? "chance" : "chances"} left.`);
  const guess = prompt("💭 Enter your guess for the decrypted word:");

  if (randomWord.join("") === guess) {
    console.log("🎉 Congratulations! You decrypted the word successfully!");
    return confirmation();
  } else {
    console.log("❌ Not quite right! Try again...");
  }
  return play(randomWord, totalChances - 1);
}

function showGameTitle() {
  return "🔐 Encrypted Message Game";;
}
function underline(text) {
  console.log(text);
  console.log("-".repeat(text.length));
}
function gameRule() {
  underline("🕹️ How to Play:");
  console.log("A word is encrypted (scrambled).");
  console.log("Your task is to guess the original word within limited attempts.");
  console.log("Difficulty Level 1: Basic shuffle.");
  console.log("Difficulty Level 2: Extended and shuffled word.");
  console.log("-".repeat(60));
}

function describeGame() {
  const text = showGameTitle();
  underline(text);
  space();
  gameRule();
}

function main() {
  console.clear();
  describeGame();
  const word = getRandomWord();
  const encripted = selectDifficulty(word).join("");
  console.log("🕵️‍♂️ Encrypted word is:");
  console.log(encripted);

  play(word);
}

main();
