
function isDecimalToBinary(decimal) {
  let mul = 1;
  let binary = 0;

  let index = 1;
  while (index <= decimal) {

    let reminder = decimal % 2;
    binary = binary + (reminder * mul);
    mul = mul * 10;
    decimal = (decimal - reminder) / 2;
  }
  const binaryString = "" + binary;
  // console.log(binaryString);
  return binaryString;
}

function isSubstring(string, subString, lengthOfSubString, index) {
  let subStringMatch = true;
  for (let innerIndex = 0; innerIndex < lengthOfSubString; innerIndex++) {

    if (string[index + innerIndex] !== subString[innerIndex]) {
      subStringMatch = false;
    }
  }
  return subStringMatch;
}

function ocuranseInBinary(decimal, subString) {
  const string = isDecimalToBinary(decimal);
  const lengthOfString = string.length;//1000001  00
  const lengthOfSubString = subString.length;

  let count = 0;
  for (let index = 0; index <= lengthOfString - lengthOfSubString; index++) {
    let isMatch = isSubstring(string, subString, lengthOfSubString, index);

    if(isMatch){
      count ++;
    }
  }
  return count;
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

function composeMessage(decimal, substring, expectedValue, actualValue) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const decimalSection = "decimal number = " + decimal;
  const inputSection = "substring = " + substring + " " + decimalSection;
  const actualSection = "result = " + actualValue;
  const expectedSection = " expected value = " + expectedValue;
  displayResult(symbol, inputSection, actualSection, expectedSection);
}

function testBinarySubstring(decimal, substring, expectedValue) {
  const actualValue = ocuranseInBinary(decimal, substring);
  composeMessage(decimal, substring, expectedValue, actualValue);
}
function testAll() {
  testBinarySubstring(65, "00", 4);
  testBinarySubstring(62, '11', 4);
  testBinarySubstring(65, "10", 1);
  testBinarySubstring(21, "101", 2);
  testBinarySubstring(8, '10', 1);
  testBinarySubstring(19, '1', 3);

}

testAll();
