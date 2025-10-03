function sumOfAP(a, d, n) {

  if(n === 0){
    return 0;
  }
  return a + sumOfAP(a+d, d, n-1);
}


function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function displayResult(symbol, inputSection, actualSection, expectedSection,purpose) {
  let message = symbol;
  message += " " + purpose;
  message += "\n\n | " + inputSection;
  message += "\n | " + actualSection;
  message += "\n | " + expectedSection;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(a, d, n, expectedValue, actualValue,purpose) {
  const symbol = getResultSymbol(expectedValue, actualValue);
  const inputSection = "a, d, n = [" + a +"] ["+ d +"] ["+ n + "]";
  const actualSection = "result = [" + actualValue + "]";
  const expectedSection = "expected value = [" + expectedValue + "]";
  if(expectedValue === actualValue){
    return symbol + purpose;
  }
  return displayResult(symbol, inputSection, actualSection, expectedSection,purpose);
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
