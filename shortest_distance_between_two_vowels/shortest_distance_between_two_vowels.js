
function DistanceTwoVowels(strength){
  return 3;
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

function testDistanceBtwTwoVowels(string, expectedValue) {
  const actualValue = DistanceTwoVowels(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testDistanceBtwTwoVowels("hello" , 3);
  testDistanceBtwTwoVowels("apple" , 4);
  testDistanceBtwTwoVowels("strength" , -1);
  testDistanceBtwTwoVowels("beautiful" , 1);
  testDistanceBtwTwoVowels("abyss" , -1);
}

testAll();
