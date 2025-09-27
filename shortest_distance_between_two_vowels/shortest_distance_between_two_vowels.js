function isVowel(string) {
  const vowelString = "aeiouAEIOU";
  for (let index = 0; index < vowelString.length; index++) {
    let isItVowel = false;
    if (vowelString[index] === string) {
      isItVowel = true;
    }
    if (isItVowel) return true;
  }
  return false;
}
function DistanceTwoVowels(string) {
  const lengthOfString = string.length;
  let currentIndex = 0;
  let nextIndex = 0;
  let distance = 0;
  let minDistance = 101;
  for (let i = 0; i < lengthOfString; i++) {
    if (isVowel(string[i])) {
      currentIndex = i;
      for (let j = i + 1; j < lengthOfString; j++) {
        if (isVowel(string[j])) {
          nextIndex = j;
          if (currentIndex > nextIndex) {
            distance = currentIndex - nextIndex;
          } else {
            distance = nextIndex - currentIndex;
          }
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
      }
    }
  }
  if (distance < 1) {
    return -1;
  } else {
    return minDistance;
  }
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
  const actualValue = DistanceTwoVowels(string);
  composeMessage(string, expectedValue, actualValue);
}

function testAll() {
  testDistanceBtwTwoVowels("hello", 3);
  testDistanceBtwTwoVowels("hEllO", 3);
  testDistanceBtwTwoVowels("apple", 4);
  testDistanceBtwTwoVowels("strength", -1);
  testDistanceBtwTwoVowels("beautiful", 1);
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
