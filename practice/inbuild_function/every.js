const isPositiveNumber = (number) => {
  return number < 0;
}
const every = (array, predicate) => {
  for (const element of array) {
    if (predicate(element)) {
      return false;
    }
  }
  return true;
}

const areDeepEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

const areEqual = (firstValue, secondValue) => {
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    return areDeepEqual(firstValue, secondValue);
  }
  return firstValue === secondValue;
}

const displayResult = (input, actual, expected, purpose) => {
  let message = "❌";
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

const composeMessage = (text, expectedValue, actualValue, purpose) => {
  const input = `array = [${text}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (areEqual(expectedValue, actualValue)) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

const testOperation = (data, expectedValue, purpose, operation, functionToUse, initialValue) => {
  const actualValue = functionToUse(data, operation, initialValue);
  console.log(
    composeMessage(data, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testOperation([1, 2, 3, 4], true, "all number are positive", isPositiveNumber, every);
  testOperation([-1,-3], false, "all negetive number", isPositiveNumber, every);


}

testAll();
