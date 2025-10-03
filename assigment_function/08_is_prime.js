function hasFactor(number) {
    let divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) {
            return true;
        }
        divisor++;
    }
    return false;
}

function isPrimeNumber(number) {
    if (number === 1) return false;
    return !hasFactor(number);
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}
 
function composeMessage(resultSymbol, number, expectedValue, actualValue) {
    return `${resultSymbol} Prime check for ${number}: expected ${expectedValue}, actual ${actualValue}`;
}

function testNextPrimeNumber(number, expectedValue) {
    const actualValue = isPrimeNumber(number);
    const resultSymbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(resultSymbol, number, expectedValue, actualValue);
    console.log(message);
}

function printAll() {
    testNextPrimeNumber(2, true);
    testNextPrimeNumber(5, true);
    testNextPrimeNumber(11, true);
    testNextPrimeNumber(17, true);
}

printAll();
