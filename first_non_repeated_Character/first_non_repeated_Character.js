function isRepetedInner(string, indexI, indexJ) {
  const lengthOfString = string.length;

  if (indexJ < lengthOfString) {
    if (indexI === indexJ) {
      return isRepetedInner(string, indexI, indexJ + 1);
    }
    if (string[indexI] !== string[indexJ]) {
      return isRepetedInner(string, indexI, indexJ + 1);
    }
    return true;
  }
  return false;
}

function findNonRepetedOuter(string, indexI, indexJ) {
  const lengthOfString = string.length;

  if (indexI < lengthOfString) {
    if (isRepetedInner(string, indexI, indexJ)) {
      indexJ = 0;
      return findNonRepetedOuter(string, indexI + 1, indexJ);
    }
  }
  return indexI;
}
function nonRepetedCharacter(string) {
  const lengthOfString = string.length;

  const indexOfCharacter = findNonRepetedOuter(string, 0, 0);
  if (indexOfCharacter === lengthOfString) {
    return "";
  } else {
    return string[indexOfCharacter];
  }
}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, inputSection, actualSection, expectedSection) {
  let message = symbol;
  message += " | " + inputSection;
  message += " | " + actualSection;
  message += " | " + expectedSection;
  console.log(message);
}

function composeMessage(string, expectedValue, actualValue) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "string = " + string;
  const actualSection = "result = " + actualValue;
  const expectedSection = " expected value = " + expectedValue;
  displayResult(symbol, inputSection, actualSection, expectedSection);
}

function testNonRepeatedCharacter(string, expectedValue) {
  const actualValue = nonRepetedCharacter(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testNonRepeatedCharacter("swiss", "w");
  testNonRepeatedCharacter("aabbcc", "");
  testNonRepeatedCharacter("abcabcde", "d");
  testNonRepeatedCharacter("a", "a");
  testNonRepeatedCharacter("aac", "c");
  testNonRepeatedCharacter("aaa", "");
  testNonRepeatedCharacter("abbac", "c");
}

testAll();
