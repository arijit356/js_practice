
const flat = function (array, depth, result = [], index = 0) {  
  if (index === array.length) {
    return result;
  }
  if (Array.isArray(array[index]) && depth > 0) {
    result = flat(array[index], depth - 1, result, 0);    
    return flat(array, depth, result, index + 1);
  }
  result.push(array[index]);
  return flat(array, depth, result, index + 1);
}

function areDeepEqual(array1, array2) {
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

function areEqual(firstValue, secondValue) {
  if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
    return areDeepEqual(firstValue, secondValue);
  }
  return firstValue === secondValue;
}

function displayResult(input, actual, expected, purpose) {
  let message = "❌";
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(text, expectedValue, actualValue, purpose) {
  const input = `array = [${text}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (areEqual(expectedValue, actualValue)) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

const testOperation = function (data, expectedValue, purpose, operation, functionToUse, initialValue) {
  const actualValue = functionToUse(data, operation, initialValue);
  console.log(
    composeMessage(data, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testOperation([0, 1, 2, 3, 4], [0, 1, 2, 3, 4], "flat for default", 1, flat);
  testOperation([0, 1, 2, [3, 4]], [0, 1, 2, 3, 4], "flat for default", 1, flat);
  testOperation([0, 1, 2, [3, 4], [5]], [0, 1, 2, 3, 4, 5], "flat for default", 1, flat);
  testOperation([0, 1, [2, [3, [4, 5]]]], [0, 1, 2, 3, [4, 5]], "flat for default", 2, flat);

}

testAll();
