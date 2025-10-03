function isPrime(number) {
    if (number === 1) return false;

    let divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) return false;
        divisor++;
    }
    return true;
}

function getPrimeNumbersInRange(startOfRange, endOfRange) {
    let primeNumberString = "";
    for (let num = startOfRange; num <= endOfRange; num++) {
        if (isPrime(num)) {
            primeNumberString = primeNumberString + " " + num;
        }
    }
    return primeNumberString;
}
 
function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(resultSymbol, startOfRange, endOfRange, expectedValue, actualValue) {
    return `${resultSymbol} Prime check form ${startOfRange} to ${endOfRange}: expected ${expectedValue}, actual ${actualValue}`;
}

function testPrimeNumber(startOfRange, endOfRange, expectedValue) {
    const actualValue = getPrimeNumbersInRange(startOfRange, endOfRange);
    const resultSymbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(resultSymbol, startOfRange, endOfRange, expectedValue, actualValue);
    console.log(message);
}

function printAll() {
    testPrimeNumber(2, 10, " 2 3 5 7");
    testPrimeNumber(5, 15, " 5 7 11 13");
    testPrimeNumber(11, 20, " 11 13 17 19");
    testPrimeNumber(17, 30, " 17 19 23 29");
}

printAll();
