function getNumberLength(number) {
    const emptyString = "";
    const numberAsString = number + emptyString;
    return numberAsString.length;
}

function checkHcf(number) {
    let sumOfPowers = 0;
    let remainingNumber = number;
    const numLength = getNumberLength(remainingNumber);

    while (remainingNumber > 0) {
        let digit = remainingNumber % 10;
        remainingNumber = (remainingNumber - digit) / 10;
        sumOfPowers = sumOfPowers + (digit ** numLength);
    }

    let isArmstrong = (sumOfPowers === number);
    return isArmstrong;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, number, expectedValue, actualValue) {
    return `${symbol} Armstrong check for ${number}: expected ${expectedValue}, actual ${actualValue}`;
}

function testHcfNumber(number, expectedValue) {
    const actualValue = checkHcf(number);
    const symbol = getResultSymbol(expectedValue, actualValue);
    console.log(composeMessage(symbol, number, expectedValue, actualValue));
}

function printAll() {
    testHcfNumber(153, true);
    testHcfNumber(407, true);
    testHcfNumber(1634, true);
}

printAll();
