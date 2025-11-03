
function getMinimumDistance(Distance, minDistance) {
  return Math.min(Distance, minDistance);
}

function getDistance(string, firstletter, minDistance, currentDistance, index) { // L  L
  if (index === string.length || minDistance === 0) {
    return minDistance === 101 ? -1 : minDistance;
  }

  currentDistance++;

  if (firstletter === string[index]) {
    currentDistance = -1;
    return getDistance(string, firstletter, minDistance, currentDistance, index + 1);
  }

  if (firstletter !== string[index] && string[index] !== " ") {
    minDistance = getMinimumDistance(currentDistance, minDistance);
    firstletter = string[index];
    currentDistance = -1;
    return getDistance(string, firstletter, minDistance, currentDistance, index + 1);
  }

  return getDistance(string, firstletter, minDistance, currentDistance, index + 1);
}

function shortestDistanceLZ(string) {
  const trimedString = string.trim();
  let firstletter = trimedString[0];
  return getDistance(trimedString, firstletter, 101, -1, 0);
}

function displayResult(input, actual, expected, purpose) {
  let message = "❌";
  message += " " + purpose;
  message += "\n\n | " + input;
  message += "\n | " + actual;
  message += "\n | " + expected;
  message += "\n" + "--------------- \n";
  return message;
}

function composeMessage(array, expectedValue, actualValue, purpose) {
  const input = `array = [${array}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (expectedValue === actualValue) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

function testLionZebraDistane(array, expectedValue, purpose) {
  const actualValue = shortestDistanceLZ(array);
  console.log(
    composeMessage(array, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testLionZebraDistane("LZ", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("ZL", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("L Z", 1, "Distance between lion and zebra 1 ");
  testLionZebraDistane("Z L", 1, "Distance between lion and zebra 1 ");
  testLionZebraDistane("L     Z", 5, "Distance between lion and zebra 5");
  testLionZebraDistane("L   L  Z", 2, "Distance between lion and zebra 2");
  testLionZebraDistane("LZ   L  Z", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("L  ZL Z", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("        L  ZL Z", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("        L  ZL Z    ", 0, "Distance between lion and zebra 0");
  testLionZebraDistane("L     L", -1, "Distance between lion and zebra 0");
}

testAll();
