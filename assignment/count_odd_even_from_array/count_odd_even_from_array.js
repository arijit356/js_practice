function countOddEvenNumberAsArray(array, index, countOddNumber, countEvenNumber) {
  if (index === array.length) {
    return [countOddNumber, countEvenNumber];
  }
  countOddNumber = countOddNumber + (array[index] % 2 !== 0 ? 1 : 0);
  countEvenNumber = countEvenNumber + (array[index] % 2 === 0 ? 1 : 0);
  return countOddEvenNumberAsArray(array, index + 1, countOddNumber, countEvenNumber);
}

function countOddEvenNumber(array) {
  return countOddEvenNumberAsArray(array, 0, 0, 0);
}

function compareValues(expectedValue, actualValue, index) {
  if (index === expectedValue.length) {
    return true;
  }
  if (expectedValue[index] !== actualValue[index]) {
    return false;
  }
  return compareValues(expectedValue, actualValue, index + 1);
}

function getSymbol(expectedValue, actualValue) {
  return compareValues(expectedValue, actualValue, 0) ? "✅" : "❌";
}

function displayResult(symbol, input, actual, expected, purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(NumberArray, expectedValue, actualValue, purpose) {
  const symbol = getSymbol(expectedValue, actualValue);
  const input = "NumberArray = [" + NumberArray + "]";
  const actual = "result = [" + actualValue + "]";
  const expected = "expected value = [" + expectedValue + "]";
  if (compareValues(expectedValue, actualValue, 0)) {
    return symbol + purpose;
  }
  return displayResult(symbol, input, actual, expected, purpose);
}

function testCountOddEvenNumber(NumberArray, expectedValue, purpose) {
  const actualValue = countOddEvenNumber(NumberArray);
  console.log(composeMessage(NumberArray, expectedValue, actualValue, purpose));
}

function testAll() {
  testCountOddEvenNumber([1, 2, 3], [2, 1], "count odd even number form [1,2,3]");
  testCountOddEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [6, 5], "count odd even number form [1, 2, 3,4,5,6,7,8,9,10,11]");
}

testAll();
