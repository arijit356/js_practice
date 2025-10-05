
function nonRepetedCharacter(string){
  const lengthOfString = string.length;
  return "w";
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
  // testNonRepeatedCharacter("aabbcc", "");
  // testNonRepeatedCharacter("abcabcde", "d");
  // testNonRepeatedCharacter("a", "a");
  // testNonRepeatedCharacter("strength", "htgnerts");
}

testAll();
