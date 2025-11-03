function compareCharacterWithVowel(string, lowerCase, uperCase){
  return string === lowerCase || string === uperCase;
}

function isVowel(string) {
  const isA = compareCharacterWithVowel(string, "a","A");
  const isE = compareCharacterWithVowel(string, "e","E");
  const isI = compareCharacterWithVowel(string, "i","I");
  const isO = compareCharacterWithVowel(string, "o","O");
  const isU = compareCharacterWithVowel(string, "u","U");

  return isA || isE || isI || isO || isU;
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

function testisVowel(string, expectedValue) {
  const actualValue = isVowel(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testisVowel("a", true);
  testisVowel("e", true);
  testisVowel("i", true);
  testisVowel("o", true);
  testisVowel("u", true);
  testisVowel("v", false);
  testisVowel("V", false);
  testisVowel("A", true);
  testisVowel("E", true);
  testisVowel("I", true);
  testisVowel("O", true);
  testisVowel("U", true);
  testisVowel("w", false);
  testisVowel("W", false);
  testisVowel("Q", false);
  testisVowel("p", false);

}

testAll();
