function totalCompoundInterest(p, r, t) {
    let principal = p;
    let compoundInterest = 0;

    for (let year = 1; year <= t; year++) {
        let simpleInterest = (principal * r) / 100;
        compoundInterest = compoundInterest + simpleInterest;
        principal = principal + simpleInterest;
    }

    return compoundInterest;
}

function getResultSymbol(expectedValue, actualValue) {
    return (expectedValue - actualValue) <= 1 ? "✅" : "❌";
}

function composeMessage(symbol, actualValue, expectedValue) {
    return `${symbol} expected value should be ${expectedValue} and actual value is: ${actualValue}`;
}

function evaluateCompoundInterest(p, r, t, expectedValue) {
    const actualValue = totalCompoundInterest(p, r, t);
    const symbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(symbol, actualValue, expectedValue);
    console.log(message);
}

function printAll() {
    evaluateCompoundInterest(5000, 2, 5, 520);
    evaluateCompoundInterest(10000, 3, 2, 609);
    evaluateCompoundInterest(6000, 7, 1, 420);
    evaluateCompoundInterest(5500, 2, 4, 453);
    evaluateCompoundInterest(4500, 4, 8, 1658);
}

printAll();
