function isRepetedInner(string, indexI, indexJ) {
  const lengthOfString = string.length;

  if (indexJ === lengthOfString) {
    return true;
  }

  if (string[indexI] === string[indexJ] && indexI !== indexJ) {
    return false;
  }
  
  return isRepetedInner(string, indexI, indexJ + 1);
}

function findNonRepetedOuter(string, indexI) {     // swiss

  if (isRepetedInner(string, indexI, 0)) {
    return indexI;
  }
  return findNonRepetedOuter(string, indexI + 1);
}

function nonRepetedCharacter(string) {

  const indexOfCharacter = findNonRepetedOuter(string, 0);
  if (indexOfCharacter === string.length) {
    return "";
  }
  return string[indexOfCharacter];
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
  testNonRepeatedCharacter("abab", "");
  testNonRepeatedCharacter("abbac", "c");
}

testAll();
