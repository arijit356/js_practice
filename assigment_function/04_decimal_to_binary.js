function convertDecimalToBinary(a){
    let input = a;
    let binary = 0;
    let stringBinary = "";
    
    while (input > 0) {
    
        binary = input % 2;
        input = (input - binary) / 2;
        stringBinary = stringBinary + binary;
    }
    console.log(stringBinary);
}
function getResultSymbol(expectedValue, actualValue) {
    return expectedValue === actualValue ? "✅" : "❌";
}
 
function composeMessage(resultSymbol, n, expectedValue, actualValue) {
    return `${resultSymbol} fibonacci of ${n} series is ${expectedValue} and actual value is ${actualValue}`;
}

function testPrimeNumber(n, expectedValue) {
    const actualValue = calculateNthSeriesFibonacci(n);
    const resultSymbol = getResultSymbol(expectedValue, actualValue);
    const message = composeMessage(resultSymbol, n, expectedValue, actualValue);
    console.log(message);
}

function testDecimalToBinary(inputNumber, expectedValue){
    let test = convertDecimalToBinary(inputNumber);

}

function printAll(){
    testDecimalToBinary(2, "01");
    testDecimalToBinary(3, "11");
    testDecimalToBinary(4, "001");
    testDecimalToBinary(5, 10);
    testDecimalToBinary(6, 10);
    testDecimalToBinary(7, 10);
    testDecimalToBinary(8, 10);
    testDecimalToBinary(9, 10);
    testDecimalToBinary(10, 10);

}

printAll();

