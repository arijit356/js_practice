const startWithA = (data) => {
  const result = data.flatMap(element => element.split(" "))
  return result.filter((element) => element[0].toLowerCase() === "a");
  
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

const testStartWithA = function (data, expectedValue, purpose) {
  const actualValue = startWithA(data);
  console.log(
    composeMessage(data, expectedValue, actualValue, purpose),
  );
}


function testAll() {
  testStartWithA(['just a phrase', 'also another phrase', 'arbitrary phrase', 'An interesting phrase'], ["a", "also", "another", "arbitrary", "An"], "into lower case");
  testStartWithA(['aust a ahrase', 'also another phrase', 'arbitrary phrase', 'An interesting phrase'], ["aust","a", "ahrase","also", "another", "arbitrary", "An"], "into lower case");

}

testAll();
