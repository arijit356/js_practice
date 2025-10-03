function calculateAPSum(a, d, n) {
    let currentTerm = a;
    let sum = a;

    for (let i = 1; i < n; i++) {
        currentTerm += d;
        sum += currentTerm;
    }
    return sum;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, a, d, n, expectedValue, actualValue) {
    return `${symbol} sum of first ${n} terms (a=${a}, d=${d}) → expected ${expectedValue}, actual ${actualValue}`;
}

function testAPSum(a, d, n, expectedValue) {
    const actualValue = calculateAPSum(a, d, n);
    const symbol = getResultSymbol(expectedValue, actualValue);
    console.log(composeMessage(symbol, a, d, n, expectedValue, actualValue));
}
 
function printAll() {
    testAPSum(0, 5, 20, 950);
    testAPSum(10, 2, 20, 580);
    testAPSum(20, 5, 40, 4700);
    testAPSum(1, 1, 9, 45);
    testAPSum(1, 7, 100, 34750);
}

printAll();
