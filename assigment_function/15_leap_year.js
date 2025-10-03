function isLeapYear(year) {
  const divisibleBy4 = year % 4 === 0;
  const notDivisibleBy100 = year % 100 !== 0;
  const divisibleBy400 = year % 400 === 0;

  return (divisibleBy4 && notDivisibleBy100) || divisibleBy400;
}

function getResultSymbol(expectedValue, actualValue) {
  return expectedValue === actualValue ? "✅" : "❌";
}

function composeMessage(symbol, year, expectedValue, actualValue) {
  return `${symbol} ${year} → expected leap year: ${expectedValue}, actual: ${actualValue}`;
}

function isArmstrong(year, expectedValue) {
  const actualValue = isLeapYear(year);
  const symbol = getResultSymbol(expectedValue, actualValue);
  console.log(composeMessage(symbol, year, expectedValue, actualValue));
}
 
function printAll() {
  isArmstrong(2000, true);
  isArmstrong(2004, true);
  isArmstrong(2012, true);
  isArmstrong(1900, false);
  isArmstrong(100, false);
}

printAll();
