function isrepet(string, newString, lengthOfNewString, index) {

  for (let innerIndex = 0; innerIndex < lengthOfNewString; innerIndex++) {
    if (string[index] === newString[innerIndex]) {
      return true;
    } 
  }
  return false;
}

function removeRepetation(string) { 
  const lengthOfString = string.length;
  let newString = string[0];

  for (let index = 1; index < lengthOfString; index++) {
    const lengthOfNewString = newString.length;
    let isrepetOrNot = isrepet(string, newString, lengthOfNewString, index);
    if (!isrepetOrNot) {
      newString = newString + string[index];
    }
  }
  return newString;
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

function testRepetation(string, expectedValue) {
  const actualValue = removeRepetation(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testRepetation("bcaacbd", "bcad");
  testRepetation("fizz", "fiz");
  testRepetation("buzz", "buz");
  testRepetation("fizzbuzz", "fizbu");
  testRepetation("abbac", "abc");
  testRepetation("accba", "acb");
  testRepetation("142rt45", "142rt5");
  testRepetation("wert", "wert");
}

testAll();
