function calculateNthSeriesFibonacci(n) {
    let currentTerm = 0;
    let previousTerm = 0;
    let lastTerm = 1;
    let fibonacciSeriesString = "";

    for (let termIndex = 1; termIndex <= n; termIndex++) {
        if (termIndex === 1) {
            currentTerm = 0;
        } else if (termIndex === 2) {
            currentTerm = 1;
        } else {
            currentTerm = previousTerm + lastTerm;
            previousTerm = lastTerm;
            lastTerm = currentTerm;
        }
        fibonacciSeriesString = fibonacciSeriesString + " " + currentTerm;
    }
    return fibonacciSeriesString;
}
 
function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(resultSymbol, n, expectedValue, actualValue) {
    return `${resultSymbol} fibonacci of ${n} series is ${expectedValue} and actual value is ${actualValue}`;
}

function testNextPrimeNumber(n, expectedValue) {
    const actualValue = calculateNthSeriesFibonacci(n);
    const resultSymbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(resultSymbol, n, expectedValue, actualValue);
    console.log(message);
}

function printAll() {
    testNextPrimeNumber(9, " 0 1 1 2 3 5 8 13 21");
    testNextPrimeNumber(2, " 0 1");
    testNextPrimeNumber(3, " 0 1 1");
    testNextPrimeNumber(4, " 0 1 1 2");
    testNextPrimeNumber(5, " 0 1 1 2 3");
    testNextPrimeNumber(6, " 0 1 1 2 3 5");
}

printAll();
