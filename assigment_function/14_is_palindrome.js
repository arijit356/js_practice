function checkPalindrome(a) {
    let inputNumber = a;
    let reminder = 0;
    let palindrome = 0;

    while (inputNumber > 0) {

        reminder = inputNumber % 10;
        palindrome = (palindrome * 10) + reminder;
        inputNumber = (inputNumber - reminder) / 10;
    }

    return (palindrome === a) ? true : false;
}

function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, a, expectedValue, actualValue) {
    return `${symbol} palindrome of ${a} number shuold be : ${expectedValue}, actual value: ${actualValue}`;
}
 
function isArmstrong(a, expectedValue) {
    const actualValue = checkPalindrome(a);
    const symbol = getResultSymbol(expectedValue, actualValue);
    console.log(composeMessage(symbol, a, expectedValue, actualValue));
}

function printAll() {
    isArmstrong(121, true);
    isArmstrong(3443, true);
    isArmstrong(567765, true);
    isArmstrong(1, true);
    isArmstrong(11, true);
}

printAll();
