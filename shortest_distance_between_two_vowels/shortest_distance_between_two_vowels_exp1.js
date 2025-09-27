function isVowel(string) {
  const vowelString = "aeiouAEIOU";
  for (let index = 0; index < vowelString.length; index++) {
    if (vowelString[index] === string) {
      return true;
    }
  }
  return false;
}

function getDistance(currentIndex, nextIndex) {
  return nextIndex - currentIndex;
}

function minDistanceBtwTwoVowels(string) {
  let currentIndex = -1;
  let nextIndex = -1;
  let minDistance = Infinity;

  for (let index = 0; index < string.length; index++) {

    if (isVowel(string[index])) {
      currentIndex = nextIndex;
      nextIndex = index;
      if (currentIndex !== -1) {
        let distance = getDistance(currentIndex, nextIndex);
        minDistance = distance < minDistance ? distance : minDistance;
      }
    }
  }
  return minDistance === Infinity ? -1 : minDistance;
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

function testDistanceBtwTwoVowels(string, expectedValue) {
  const actualValue = minDistanceBtwTwoVowels(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testDistanceBtwTwoVowels("hello", 3);
  testDistanceBtwTwoVowels("beautiful", 1);
  testDistanceBtwTwoVowels("hEllO", 3);
  testDistanceBtwTwoVowels("apple", 4);
  testDistanceBtwTwoVowels("strength", -1);
  testDistanceBtwTwoVowels("abyss", -1);
  testDistanceBtwTwoVowels("bbbb", -1);
  testDistanceBtwTwoVowels("aeiou", 1);
  testDistanceBtwTwoVowels("", -1);
  testDistanceBtwTwoVowels("a", -1);
  testDistanceBtwTwoVowels("E", -1);
  testDistanceBtwTwoVowels("ae", 1);
  testDistanceBtwTwoVowels("BA", -1);
  testDistanceBtwTwoVowels("a1234u", 5);
  testDistanceBtwTwoVowels("AbcdefghiO", 1);
  testDistanceBtwTwoVowels("aeiou", 1);
  testDistanceBtwTwoVowels("AEIOU", 1);
  testDistanceBtwTwoVowels("rhythm", -1);
  testDistanceBtwTwoVowels("bcdfg", -1);
  testDistanceBtwTwoVowels("ApPlE", 4);
  testDistanceBtwTwoVowels("aXXXXXXu", 7);
  testDistanceBtwTwoVowels("abecidofug", 2);
  testDistanceBtwTwoVowels("aaaaa", 1);
}

testAll();
