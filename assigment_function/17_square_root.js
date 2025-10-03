function calculateSquareRoot(a) {
  const n = 2;
  const nthRoot = 1 / n;

  const nthSquareRoot = a ** nthRoot;

  return nthSquareRoot;
}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(resultSymbol, a, expectedValue, actualValue) {
  return `${resultSymbol} square root of ${a} no should be ${expectedValue} and actual value is ${actualValue}`;
}

function testPrimeNumber(a, expectedValue) {
  const actualValue = calculateSquareRoot(a);
  const resultSymbol = getResultSymbol(expectedValue, actualValue);
  const message = composeMessage(resultSymbol, a, expectedValue, actualValue);
  console.log(message);
}

function printAll() {
  testPrimeNumber(1, 1);
  testPrimeNumber(49, 7);
  testPrimeNumber(16, 4);
  testPrimeNumber(81, 9);
}

printAll();

