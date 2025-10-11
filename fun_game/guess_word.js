function space() {
  return console.log("\n");
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
function orange(text) {
  return "\x1B[93m" + text + "\x1B[0m";
}
function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}
function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
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
      possibleWordInGuessedWord.push(orange(userWord[index]));
    } else {
      possibleWordInGuessedWord.push(red(userWord[index]));
    }

    if (randomWord[index] === userWord[index]) {
      possibleWordInGuessedWord[index] = green(userWord[index]);
    }
  }

  console.log(possibleWordInGuessedWord.join(" "));
  space();
  if (userWord === randomWord.join("")) {
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
