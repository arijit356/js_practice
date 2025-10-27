const GRID1 = [
  "L   ",
  "  Z ",
  "   Z"
];
const LION = "L";
const ZEBRA = "Z";

function manhattanDistance(lionPosition, zebraPosition) {
  const y1 = lionPosition[0];
  const x1 = lionPosition[1];
  const y2 = zebraPosition[0];
  const x2 = zebraPosition[1];
  return Math.abs(y2 - y1) + Math.abs(x2 - x1);
}

function shortestDistanceLZ(grid) {
  const lionPositions = [];
  const zebraPositions = [];
  const Distance = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === LION) {
        lionPositions.push([row, col]);
      }
      if (grid[row][col] === ZEBRA) {
        zebraPositions.push([row, col]);
      }
    }
  }

  if (lionPositions.length === 0 || zebraPositions.length === 0) {
    return "null";
  }
  
  for (let indexL = 0; indexL < lionPositions.length; indexL++) {
    for (let indexZ = 0; indexZ < zebraPositions.length; indexZ++) {
      Distance.push(manhattanDistance(lionPositions[indexL], zebraPositions[indexZ]));
    }
  }
  return Math.min(...Distance);
}

function findShortestDist2D(grid, metric) {
  if (metric === 'manhattan') {
    return shortestDistanceLZ(grid);
  }
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

function composeMessage(grid, expectedValue, actualValue, purpose) {
  const input = `grid = [${grid}]`;
  const actual = `result = [${actualValue}]`;
  const expected = `expected value = [${expectedValue}]`;

  if (expectedValue === actualValue) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

function testLionZebraDistane(grid, metric, expectedValue, purpose) {
  const actualValue = findShortestDist2D(grid, metric);
  console.log(
    composeMessage(grid, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testLionZebraDistane(GRID1, 'manhattan', 3, "Distance between lion and zebra 0");

}

testAll();
