
function ocuranseInBinary(decimal, string, substring) {
  return 1;
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

function composeMessage(decimal, string, substring, expectedValue, actualValue) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const decimalSection = "decimal number = " + decimal;
  const inputSection = "string = " + string + ", substring = " + substring;
  const actualSection = "result = " + actualValue;
  const expectedSection = " expected value = " + expectedValue;
  displayResult(symbol, decimalSection, inputSection, actualSection, expectedSection);
}

function testBinarySubstring(decimal, string, substring, expectedValue) {
  const actualValue = ocuranseInBinary(decimal, string, substring);
  composeMessage(decimal, string, substring, expectedValue, actualValue);
}
function testAll() {
  testBinarySubstring(65, "1000001", "10", 1);
  testBinarySubstring(65, "1000001", "00", 4);
  testBinarySubstring(21, "10101", "101", 2);
  testBinarySubstring(31, '11111', '11', 4);
  testBinarySubstring(8, '1000', '10', 1);
  testBinarySubstring(19, '10011', '1', 3);
}

testAll();
