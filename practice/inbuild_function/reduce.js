const productAllNumbers = (number1, number2) => {
  return number1 * number2;
}
const concatStrings = (str1, str2) => {
  return str1.concat(str2);
}

const isOdd = (number) => {
  return number % 2 !== 0;
}
const countOddNumbers = (count, number) => {
  return isOdd(number) ? count + 1 : count;
}

const reduce = (array, reducer, initialValue) => {
  let result = initialValue;
  for (let index = 0; index < array.length; index++) {
    result = reducer(result, array[index]);
  }
  return result;
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

const testAll = () => {
  testOperation([1, 2, 3, 4], 24, "product of numbers", productAllNumbers, reduce, 1);
  testOperation(["ab", "so", "lu", "te"], "absolute", "combine strings", concatStrings, reduce, "");
  testOperation([1, 2, 3, 4, 5], 3, "count odd numbers", countOddNumbers, reduce, 0);


}

testAll();
