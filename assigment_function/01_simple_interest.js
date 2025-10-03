function totalSimpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, p, r, t, expectedValue, actualValue) {
    return `${symbol} simple interest of ${p} ${r} ${t} is ${expectedValue} and actual value is ${actualValue}`;
}

function testOfSimpleInterest(p, r, t, expectedValue) {
    const actualValue = totalSimpleInterest(p, r, t);
    const symbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(symbol, p, r, t, expectedValue, actualValue);
    console.log(message);
}

function printAll() {
    testOfSimpleInterest(100, 5, 2, 10);
    testOfSimpleInterest(100, 10, 2, 20);
    testOfSimpleInterest(200, 15, 2, 60);
    testOfSimpleInterest(200, 6, 9, 108);
    testOfSimpleInterest(150, 7, 5, 52.5);
}

printAll();
