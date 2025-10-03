function calculateSquareRoot(n) {
  let nthFibonacci = 0;
  let firstTerm = 0;
  let secondTerm = 1;

  if (n === 1) {
    nthFibonacci = 0;
  } else if (n === 2) {
    nthFibonacci = 1;
  } else {

    for (let termIndex = 3; termIndex <= n; termIndex++) {

      nthFibonacci = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nthFibonacci;
    }
  }
  return nthFibonacci;
}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(resultSymbol, n, expectedValue, actualValue) {
  return `${resultSymbol} fibonacci of ${n} no is ${expectedValue} and actual value is ${actualValue}`;
}

function testNextPrimeNumber(n, expectedValue) {
  const actualValue = calculateSquareRoot(n);
  const resultSymbol = getResultSymbol(expectedValue, actualValue);
  const message = composeMessage(resultSymbol, n, expectedValue, actualValue);
  console.log(message);
}

function printAll() {
  testNextPrimeNumber(1, 0);
  testNextPrimeNumber(2, 1);
  testNextPrimeNumber(3, 1);
  testNextPrimeNumber(4, 2);
  testNextPrimeNumber(5, 3);
  testNextPrimeNumber(6, 5);
  testNextPrimeNumber(7, 8);
  testNextPrimeNumber(8, 13);
  testNextPrimeNumber(9, 21);
  testNextPrimeNumber(10, 34);
}

printAll();
