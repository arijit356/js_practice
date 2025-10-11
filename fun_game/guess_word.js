function space() {
  return console.log("\n");
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
function orange(text) {
  return "\x1B[93m" + text + "\x1B[0m";
}

function randomNumberGenerator(endRange) {
  return Math.floor(Math.random() * endRange);
}

function confirmation() {
  const retry = confirm("Do you want to play again : ");
  if (retry) {
    main();
  }
}

function guessWord() {
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
  return wordList[randomNumberGenerator(wordList.length)].split('');
}

function play(randomWord, totalChances = (randomWord.length * 2) - 2) {
  if (totalChances === 0) {
    space()
    console.log("you loss the game \n");
    console.log(randomWord + "\n");
    return confirmation();
  }

  space();
  console.log(`you have only ${totalChances} chances`);
  const userWord = prompt(`enter ${randomWord.length} length word : `);

  let possibleWordInGuessedWord = [];
  for (let index = 0; index < randomWord.length; index++) {
    if (randomWord.includes(userWord[index])) {
      possibleWordInGuessedWord.push("1");
    } else {
      possibleWordInGuessedWord.push("0");
    }

    if (randomWord[index] === userWord[index]) {
      possibleWordInGuessedWord[index] = "2";
    }
  }

  console.log(possibleWordInGuessedWord);
  if (userWord === randomWord.join("")) {
    space();
    console.log("yes, you guessed actual word, you won the game");
    space();
    return confirmation();
  }
  console.log(`no you wrong`);

  return play(randomWord, totalChances - 1);
}

function main() {
  const word = guessWord();
  play(word);
}

main();
