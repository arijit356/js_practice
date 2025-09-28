
function isDecimalToBinary(decimal, string){
  return true;
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

function composeMessage(decimal, string, expectedValue, actualValue) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "decimal = " + decimal + ", string = " + string;
  const actualSection = "result = " + actualValue;
  const expectedSection = " expected value = " + expectedValue;
  displayResult(symbol, inputSection, actualSection, expectedSection);
}

function testDecimalToBinary(decimal, string, expectedValue) {
  const actualValue = isDecimalToBinary(decimal, string);
  composeMessage(decimal, string, expectedValue, actualValue);
}
function testAll() {
  testDecimalToBinary(65, "1000001", true);
  testDecimalToBinary(65, "1000001", true);
  testDecimalToBinary(21,"10101", true);
  testDecimalToBinary(31, '11111', true);
  testDecimalToBinary( 8,'1000', true);
  testDecimalToBinary(19, '10011', true);
}

testAll();
