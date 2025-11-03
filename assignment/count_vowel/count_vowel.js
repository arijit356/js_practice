function isVowel(letter, index) {
  const vowelString = "aeiouAEIOU";
  const lengthOfVowel = vowelString.length;
  if (index < lengthOfVowel) {
    if (vowelString[index] === letter) {
      return true;
    }
    return isVowel(letter, index + 1);
  }
  return false;
}

function getVowels(string, index, count) {  
  const lengthOfString = string.length;
  if (index < lengthOfString) {
    if (isVowel(string[index], 0)) {
      count++;
      return getVowels(string, index + 1,count);
    }
    return getVowels(string, index + 1,count);
  }
  return count;
}

function countVowels(string) {

  return getVowels(string, 0, 0);
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

function testCountVowels(string, expectedValue) {
  const actualValue = countVowels(string);
  console.log(composeMessage(string, expectedValue, actualValue));
}

function testAll() {
  testCountVowels("hello", 2);
  testCountVowels("beautiful", 5);
  testCountVowels("JavaScript", 3);
  testCountVowels("apple", 2);
  testCountVowels("strength", 1);
  testCountVowels("abyss", 1);
}

testAll();
