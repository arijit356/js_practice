// Find the Most Frequent Character
// Input: "success" → Output: "s"

function findMostfrequentLetter(string){
  
}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, input, actual, expected,purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(string, expectedValue, actualValue,purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const input = "string = [" + string + "]";
  const actual = "result = [" + actualValue + "]";
  const expected = "expected value = [" + expectedValue + "]";
  if(expectedValue === actualValue){
    return symbol + purpose;
  }
  return displayResult(symbol, input, actual, expected,purpose);
}

function testMostFrequentLetter(string, expectedValue, purpose) {
  const actualValue = findMostfrequentLetter(string);
  console.log(composeMessage(string, expectedValue, actualValue, purpose));
}

function testAll() {
  testMostFrequentLetter("success", s, "Most fequent word in this word is s");
  // testMostFrequentLetter(10,20, 30, 9000,"start from 10 and distance between two number is 20");
  // testMostFrequentLetter(40,-3, 8, 236,"start from 40 and distance between two number is -3");
  // testMostFrequentLetter(2.5,1.5, 2, 6.5,"start from 2.5 and distance between two number is 1.5");
}

testAll();
