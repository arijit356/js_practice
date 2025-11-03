// Find the Most Frequent Character
// Input: "success" → Output: "s"
function compareFrequencyOfLetter(currentLetter, perviousLetter) {
  return currentLetter > perviousLetter ? currentLetter : perviousLetter;
}

function countLetter(string, outerIndex, innerIndex, count) {
  if (innerIndex === string.length) {
    return count;
  }
  if (string[outerIndex] === string[innerIndex]) {
    return countLetter(string, outerIndex, innerIndex + 1, count + 1);
  }
  return countLetter(string, outerIndex, innerIndex + 1, count);
}

function outerLoop(string, outerIndex, countCurrentLetter, mostFrequencyLetter, letter) {
  if (outerIndex === string.length) {
    return letter;
  }

  countCurrentLetter = countLetter(string, outerIndex, 0, 0);
  mostFrequencyLetter = compareFrequencyOfLetter(countCurrentLetter, mostFrequencyLetter);
  if (mostFrequencyLetter === countCurrentLetter) {
    letter = string[outerIndex];
  }
  return outerLoop(string, outerIndex + 1, countCurrentLetter, mostFrequencyLetter, letter);
}

function findMostfrequentLetter(string) {
  return outerLoop(string, 0, 0, 0, "");

}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, input, actual, expected, purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(string, expectedValue, actualValue, purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const input = "string = [" + string + "]";
  const actual = "result = [" + actualValue + "]";
  const expected = "expected value = [" + expectedValue + "]";
  if (expectedValue === actualValue) {
    return symbol + purpose;
  }
  return displayResult(symbol, input, actual, expected, purpose);
}

function testMostFrequentLetter(string, expectedValue, purpose) {
  const actualValue = findMostfrequentLetter(string);
  console.log(composeMessage(string, expectedValue, actualValue, purpose));
}

function testAll() {
  testMostFrequentLetter("success", "s", " Most fequent letter in this word is s");
  testMostFrequentLetter("arijit", "i", " Most fequent letter in this word is i");
  testMostFrequentLetter("beautiful", "u", " Most fequent letter in this word is u");
  testMostFrequentLetter("beautifully", "l", " Most fequent letter in this word is ");
}

testAll();
