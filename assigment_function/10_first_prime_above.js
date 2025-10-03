function isPrime(number) {
  if (number === 1) return false;

  let divisor = 2;

  while (divisor < number) {

    if (number % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}

function getNextPrime(number) {

  let next = number + 1;
  while (!isPrime(number)) {

    next++;
  }
  return next;
}
function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}
 
function composeMessage(resultSymbol, number, expectedValue, actualValue) {
  return `${resultSymbol} Prime check for ${number}: expected ${expectedValue}, actual ${actualValue}`;
}

function testNextPrimeNumber(number, expectedValue) {
  const actualValue = getNextPrime(number);
  const resultSymbol = getResultSymbol(expectedValue, actualValue);
  const message = composeMessage(resultSymbol, number, expectedValue, actualValue);
  console.log(message);
}

function printAll() {
  testNextPrimeNumber(2, 3);
  testNextPrimeNumber(5, 7);
  testNextPrimeNumber(11, 13);
  testNextPrimeNumber(17, 19);
}

printAll();


