

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

function composeMessage(a, d, n, expectedValue, actualValue,purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const input = "a, d, n = [" + a +"] ["+ d +"] ["+ n + "]";
  const actual = "result = [" + actualValue + "]";
  const expected = "expected value = [" + expectedValue + "]";
  if(expectedValue === actualValue){
    return symbol + purpose;
  }
  return displayResult(symbol, input, actual, expected,purpose);
}

function testSumOfAp(a, d, n, expectedValue, purpose) {
  const actualValue = sumOfAP(a, d, n);
  console.log(composeMessage(a, d, n, expectedValue, actualValue, purpose));
}

function testAll() {
  testSumOfAp(1,3,3, 1, "start from 1 and distance between two number is 3");
  testSumOfAp(10,20, 30, 9000,"start from 10 and distance between two number is 20");
  testSumOfAp(40,-3, 8, 236,"start from 40 and distance between two number is -3");
  testSumOfAp(2.5,1.5, 2, 6.5,"start from 2.5 and distance between two number is 1.5");
}

testAll();
