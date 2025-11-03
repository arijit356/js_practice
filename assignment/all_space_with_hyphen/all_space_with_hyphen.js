function isCharacter(letter) {
  if (letter === " ") {
    return false;
  }
  return true;
}

function changeSpaceWithHyphen(string, index, newString) {  
  const lengthOfString = string.length;

  if (index < lengthOfString) {
    if (isCharacter(string[index])) {
      newString = newString + string[index];
    }
    if (!isCharacter(string[index])) {
      newString = newString + "-";
    }
    return changeSpaceWithHyphen(string, index + 1, newString);
  }
  return newString;
}

function spaceWithHyphen(string) {
  return changeSpaceWithHyphen(string, 0, "");
}
function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, inputSection, actualSection, expectedSection) {
  let message = symbol;
  message += " | " + inputSection;
  message += " | " + actualSection;
  message += " | " + expectedSection;
  return message;
}

function composeMessage(string, expectedValue, actualValue) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "string = " + string;
  const actualSection = "result = " + actualValue;
  const expectedSection = " expected value = " + expectedValue;
  return displayResult(symbol, inputSection, actualSection, expectedSection);
}

function testSpaceWithHyphen(string, expectedValue) {
  const actualValue = spaceWithHyphen(string);
  console.log(composeMessage(string, expectedValue, actualValue));
}

function testAll() {
  testSpaceWithHyphen("i love js", "i-love-js");
  testSpaceWithHyphen("arijit mandal", "arijit-mandal");
  testSpaceWithHyphen("i am bad boy", "i-am-bad-boy");
  testSpaceWithHyphen("apple banana", "apple-banana");
  testSpaceWithHyphen("strength boy", "strength-boy");
}

testAll();
