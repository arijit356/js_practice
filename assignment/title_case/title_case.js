function isCharacter(letter) {
  if (letter === " ") {
    return false;
  }
  return true;
}

function composeCaseWord(string, index, newString) {
  const lengthOfString = string.length;
  if (index < lengthOfString) {
    if (!isCharacter(string[index])) {
      newString = newString + string[index];
      return newString;                 
    }
    newString = newString + string[index];
    return composeCaseWord(string, index + 1, newString);
  }
  return newString;
}

function findNewWord(string, newIndex) {
  const lengthOfString = string.length;
  if (newIndex < lengthOfString) {
    if (!isCharacter(string[newIndex])) {
      return newIndex;
    }
    return findNewWord(string, newIndex + 1);
  }
  return newIndex;
}

function getTitleCase(string, index, newString) {  
  const lengthOfString = string.length;
  if (index < lengthOfString) {
    if (isCharacter(string[index])) {
      newString = newString + string[index].toUpperCase();
    }
    // let newIndex = index;
    newString = composeCaseWord(string, index + 1, newString); 
    index = findNewWord(string, index + 1);                 
    return getTitleCase(string, index + 1, newString);         
  }
  return newString;
}

function titleCase(string) {

  return getTitleCase(string, 0, "");
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

function testTitleCase(string, expectedValue) {
  const actualValue = titleCase(string);
  console.log(composeMessage(string, expectedValue, actualValue));
}

function testAll() {
  testTitleCase("hello world", "Hello World");
  testTitleCase("arijit mandal", "Arijit Mandal");
  testTitleCase("i am bad Boy", "I Am Bad Boy");
  testTitleCase("apple", "Apple");
  testTitleCase("strength boy", "Strength Boy");
}

testAll();
