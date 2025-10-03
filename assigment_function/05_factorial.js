function factorial(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product = product * i;
    }
    return product;
}

function getResultSymbol(actualValue, expectedValue) {
    return actualValue === expectedValue ? "✅" : "❌";
}

function composeMessage(symbol, value, expectedValue, actualValue) {
    return `${symbol} factorial(${value}) should be ${expectedValue}, actual value is ${actualValue}`;
}

function evaluateFactorial(value, expectedValue) {
    const actualValue = factorial(value);
    const symbol = getResultSymbol(actualValue, expectedValue);
    console.log(composeMessage(symbol, value, expectedValue, actualValue));
}

function printAll() {
    evaluateFactorial(0, 1);
    evaluateFactorial(1, 1);
    evaluateFactorial(2, 2);
    evaluateFactorial(3, 6);
    evaluateFactorial(4, 24);
    evaluateFactorial(5, 120);
}

printAll();
