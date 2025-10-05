function getReverseString(string, lastIndex, newString) {
  if (lastIndex > -1) {
    // newString = newString + string[lastIndex];
    return getReverseString(string, lastIndex - 1, newString + string[lastIndex]);
  }
  return newString;
}

function reverseString(string) {            
  const lengthOfString = string.length - 1;
  let newString = "";
  return getReverseString(string, lengthOfString, newString)
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

function testReverseString(string, expectedValue) {
  const actualValue = reverseString(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testReverseString("hello", "olleh");
  testReverseString("beautiful", "lufituaeb");
  testReverseString("hEllO", "OllEh");
  testReverseString("apple", "elppa");
  testReverseString("strength", "htgnerts");
}

testAll();
