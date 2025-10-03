function getSmallerNumber(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

function checkHcf(num1, num2) {
    let smallerNumber = getSmallerNumber(num1, num2);
    let hcf = 1;

    let divisor = 2;
    while (divisor <= smallerNumber) {
        hcf = (num1 % divisor === 0 && num2 % divisor === 0) ? divisor : hcf;
        divisor++;
    }
    return hcf;
}

function getLcm(num1,num2) {
    const gcd = checkHcf(num1, num2);
    let lcmOfGivenNumber = (num1 * num2) / gcd;

    return lcmOfGivenNumber;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, num1, num2, expectedValue, actualValue) {
    return `${symbol} HCF of ${num1} & ${num2}: expected ${expectedValue}, actual ${actualValue}`;
}

function testHcfNumber(num1, num2, expectedValue) {
    const actualValue = getLcm(num1, num2);
    const symbol = getResultSymbol(expectedValue, actualValue);
    console.log(composeMessage(symbol, num1, num2, expectedValue, actualValue));
}

function printAll() {
    testHcfNumber(3, 10, 30);
    testHcfNumber(1, 10, 10);
    testHcfNumber(4, 56, 56);
}

printAll();
