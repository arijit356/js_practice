
function reverseString(string, lastIndex, newString) {
  if (lastIndex > -1) {
    return reverseString(string, lastIndex - 1, newString + string[lastIndex])
  }
  return newString;
}
function isPalindrome(string) {
  const lengthOfPalindrome = string.length - 1;
  let newString = "";
  if (reverseString(string, lengthOfPalindrome, newString) === string) {
    return true
  }
  return false;
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

function testIsPalindrome(string, expectedValue) {
  const actualValue = isPalindrome(string);
  console.log(composeMessage(string, expectedValue, actualValue));
}

function testAll() {
  testIsPalindrome("madam", true);
  testIsPalindrome("beautiful", false);
  testIsPalindrome("abba", true);
  testIsPalindrome("", true);
  testIsPalindrome("a", true);
  testIsPalindrome("aa", true);
  testIsPalindrome("ab", false);
  testIsPalindrome("Madam", false);
  testIsPalindrome("madam", true);
  testIsPalindrome("nurses run", false);
  testIsPalindrome("12321", true);
  testIsPalindrome("A man, a plan, a canal, Panama", false);
}

testAll();
