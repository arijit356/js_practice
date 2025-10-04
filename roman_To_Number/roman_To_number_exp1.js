function romanToNumberMap(letter) {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
  }
}

function romanToNumberconvert(romanLetter, index, number) { // II, III, IV
  const lengthOfRomanLetter = romanLetter.length;

  if (lengthOfRomanLetter === 1) {
    return romanToNumberMap(romanLetter[index]);
  }

  if (index < lengthOfRomanLetter) {
    if (romanLetter[index] === romanLetter[index + 1]) {
      number = number + romanToNumberMap(romanLetter[index + 1]);
      return romanToNumberconvert(romanLetter, index + 1, number);
    }

    if (romanLetter[index] !== romanLetter[index + 1]) {
      if (romanToNumberMap(romanLetter[index]) < romanToNumberMap(romanLetter[index + 1])) {
        number = (number - romanToNumberMap(romanLetter[index + 1])) * -1;
      }

      if (romanToNumberMap(romanLetter[index]) > romanToNumberMap(romanLetter[index + 1])) {
        number = number + romanToNumberMap(romanLetter[index + 1]);
        return romanToNumberconvert(romanLetter, index + 1, number);
      }
    }

  }
  return number;
}

function romanToNumber(romanLetter) {
  const lengthOfRomanLetter = romanLetter.length;
  let number = romanToNumberMap(romanLetter[0]);

  return romanToNumberconvert(romanLetter, 0, number);

}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, inputSection, actualSection, expectedSection, purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + inputSection;
  message += "\n | " + actualSection;
  message += "\n | " + expectedSection;
  message += "\n" + "---------------- \n";
  return message;
}

function composeMessage(romanLetter, expectedValue, actualValue, purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "romanLetter = [" + romanLetter + "]";
  const actualSection = "result = [" + actualValue + "]";
  const expectedSection = "expected value = [" + expectedValue + "]";
  if (expectedValue === actualValue) {
    return symbol + purpose;
  }
  return displayResult(symbol, inputSection, actualSection, expectedSection, purpose);
}

function testRomanToNumber(romanLetter, expectedValue, purpose) {
  const actualValue = romanToNumber(romanLetter);
  console.log(composeMessage(romanLetter, expectedValue, actualValue, purpose));
}

function testAll() {
  testRomanToNumber("I", 1, "roman I value is 1");
  testRomanToNumber("II", 2, "roman II value is 2");
  testRomanToNumber("III", 3, "roman III value is 3");
  testRomanToNumber("IV", 4, "roman IV value is 4");
  testRomanToNumber("V", 5, "roman V value is 5");
  testRomanToNumber("VI", 6, "roman VI value is 6");
  testRomanToNumber("VII", 7, "roman VII value is 7");
  testRomanToNumber("VIII", 8, "roman VIII value is 8");
  testRomanToNumber("IX", 9, "roman IX value is 9");
  testRomanToNumber("X", 10, "roman X value is 10");
  testRomanToNumber("XI", 11, "roman XI value is 11");
  testRomanToNumber("XII", 12, "roman XII value is 12");
  testRomanToNumber("XIII", 13, "roman XIII value is 13");
  testRomanToNumber("XIV", 14, "roman XIV value is 14");
  // testRomanToNumber("XV", 15, "roman XV value is 15");
  // testRomanToNumber("XVI", 16, "roman XVI value is 16");
  // testRomanToNumber("XVII", 17, "roman XVII value is 17");
  // testRomanToNumber("XVIII", 18, "roman XVIII value is 18");
  // testRomanToNumber("XIX", 19, "roman XIX value is 19");
  // testRomanToNumber("XX", 20, "roman XX value is 20");

}

testAll();
