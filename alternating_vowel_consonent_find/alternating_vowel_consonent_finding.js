function isVowel(letter) {
  const vowelString = "aeiouAEIOU";
  return vowelString.includes(letter);
}

function findingConsonent(array, index, string, remainingLetter) {
  if (index === array.length) {
    return [string, remainingLetter];
  }
  if (!isVowel(array[index])) {
    string += array[index];
    return findingVowel(array, index + 1, string, remainingLetter);
  }

  remainingLetter += array[index];
  return findingConsonent(array, index + 1, string, remainingLetter);
}

function findingVowel(array, index, string, remainingLetter) {
  if (index === array.length) {
    return [string, remainingLetter];
  }
  if (isVowel(array[index])) {
    string += array[index];
    return findingConsonent(array, index + 1, string, remainingLetter);
  }
  remainingLetter += array[index];
  return findingVowel(array, index + 1, string, remainingLetter);
}

function splitingVowelConsonants(array, spliingArray) {
  let result = 0;
  if (isVowel(array[0])) {
    result = findingVowel(array, 0, "", "");
  } else {
    result = findingConsonent(array, 0, "", "");
  }
  spliingArray.push(result[0]);
  let remainingLetter = result[1];
  if (remainingLetter.length !== 0) {
    splitingVowelConsonants(remainingLetter.split(""), spliingArray);
  }
  return spliingArray.join(",");
}

function spliting(string) {
  const array = string.split("");
  return splitingVowelConsonants(array, []);
}

function displayResult(input, actual, expected, purpose) {
  let message = "❌";
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(array, expectedValue, actualValue, purpose) {
  const input = `array = [${array}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (expectedValue === actualValue) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

function testSplitingAlphabet(array, expectedValue, purpose) {
  const actualValue = spliting(array);
  console.log(
    composeMessage(array, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testSplitingAlphabet("apple", "ape,p,l", "ape,p,l is right");
  testSplitingAlphabet("there", "tere,h", "tere,h is right");
  testSplitingAlphabet("hello", "helo,l", "helo,l is right");
  testSplitingAlphabet("aaabbb", "ab,ab,ab", "ab,ab,ab is right");
  testSplitingAlphabet("three", "te,he,r", "te,he,r is right");
  testSplitingAlphabet("abyss", "ab,y,s,s", "ab,y,s,s is right");
  testSplitingAlphabet("thoughtworks", "togor,huh,t,w,k,s", "togor,huh,t,w,k,s is right");
}

testAll();
