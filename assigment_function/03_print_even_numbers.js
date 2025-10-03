function findEvenNumbersInRange(start, end) {
    let result = "";
    const separator = ",";

    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            result = result + separator + num;
        }
    }
    return result;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, actualValue, expectedValue) {
    return `${symbol} expected value should be ${expectedValue} and actual value is: ${actualValue}`;
}

function evaluateEvenNumbers(start, end, expectedValue) {
    const actualValue = findEvenNumbersInRange(start, end);
    const symbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(symbol, actualValue, expectedValue);
    console.log(message);
}

function printAll() {
    evaluateEvenNumbers(2, 9, ",2,4,6,8");
    evaluateEvenNumbers(0, 10, ",0,2,4,6,8,10");
    evaluateEvenNumbers(5, 10, ",6,8,10");
    evaluateEvenNumbers(10, 20, ",10,12,14,16,18,20");
    evaluateEvenNumbers(15, 30, ",16,18,20,22,24,26,28,30");
}

printAll();
