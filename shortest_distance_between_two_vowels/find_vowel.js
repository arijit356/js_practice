
function isVowel(string) {
  const vowelString = "aeiouAEIOU";
  for (let i = 0; i < vowelString.length; i++) {
    let findVowel = false;
    if (vowelString[i] === string) {
      findVowel = true;
    }
    if (findVowel) return true;
  }
  return false
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
