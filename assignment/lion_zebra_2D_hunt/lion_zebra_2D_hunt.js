const LION = "L";
const ZEBRA = "Z";

function sqr(x) {
  return x * x;
}

function calculateDistance(lionPosition, zebraPosition, metric) {
  const y1 = lionPosition[0];
  const x1 = lionPosition[1];
  const y2 = zebraPosition[0];
  const x2 = zebraPosition[1];
  if (metric === 'manhattan') {
    return Math.abs(y2 - y1) + Math.abs(x2 - x1);
  }
  if (metric === 'euclidean') {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
  }
}

function shortestDistance(lionPositions, zebraPositions, metric) {
  let distance = Infinity;
  let minDistance = Infinity;

  for (let indexL = 0; indexL < lionPositions.length; indexL++) {
    for (let indexZ = 0; indexZ < zebraPositions.length; indexZ++) {
      distance = calculateDistance(lionPositions[indexL], zebraPositions[indexZ], metric);
      minDistance = Math.min(distance, minDistance);
    }
  }
  return minDistance;
}

function findShortestDist2D(grid, metric) {
  const lionPositions = [];
  const zebraPositions = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      switch (grid[row][col]) {
        case LION: lionPositions.push([row, col]);
          break;
        case ZEBRA: zebraPositions.push([row, col]);
          break;
      }
    }
  }

  if (lionPositions.length === 0 || zebraPositions.length === 0) {
    return null;
  }

  return shortestDistance(lionPositions, zebraPositions, metric)
}

function areEqual(expectedValue, actualValue) {
  const tolerance = expectedValue - actualValue;
  return tolerance > -0.001 && tolerance < 0.001;
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

  if (areEqual(expectedValue, actualValue)) {
    return `✅ ${purpose}`;
  }
  return displayResult(input, actual, expected, purpose);
}

function testFindShortestDist2D(grid, metric, expectedValue, purpose) {
  const actualValue = findShortestDist2D(grid, metric);
  console.log(
    composeMessage(grid, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testFindShortestDist2D(["L   ", "  Z ", "   Z"], 'manhattan', 3, "Distance between lion and zebra 3");
  testFindShortestDist2D(["L", "Z"], 'manhattan', 1, "single lion & zebra manhattan");
  testFindShortestDist2D(["L", "Z"], 'euclidean', 1, "single lion & zebra euclidean");
  testFindShortestDist2D(["L   ", "  Z ", "   Z"], 'manhattan', 3, "basic test for manhattan");
  testFindShortestDist2D(["L   ", "  Z ", "   Z"], 'euclidean', 2.236, "basic test for euclidean");
  testFindShortestDist2D(["L   ", " Z  ", "  Z ", " L  "], 'manhattan', 2, "multiple lions and zebras manhattan");
  testFindShortestDist2D(["L   ", " Z  ", "  Z ", " L  "], 'euclidean', 1.414, "multiple lions and zebras euclidean");
  testFindShortestDist2D(["L   ", "L   ", "L   "], 'manhattan', null, "no zebras in grid manhattan");
  testFindShortestDist2D(["L   ", "L   ", "L   "], 'euclidean', null, "no zebras in grid euclidean");
  testFindShortestDist2D(["Z   ", " Z  ", "  Z "], 'manhattan', null, "no lions in grid manhattan");
  testFindShortestDist2D(["Z   ", " Z  ", "  Z "], 'euclidean', null, "no lions in grid euclidean");
  testFindShortestDist2D(["L Z ", "    ", " Z L"], 'manhattan', 2, "lions and zebras at corners manhattan");
  testFindShortestDist2D(["L Z ", "    ", " Z L"], 'euclidean', 2.0, "lions and zebras at corners euclidean");
  testFindShortestDist2D(["L    Z   L", "   Z   Z  ", "L   Z    L", "    Z    L"], 'manhattan', 3, "large grid with multiple animals manhattan");
  testFindShortestDist2D(["L    Z   L", "   Z   Z  ", "L   Z    L", "    Z    L"], 'euclidean', 2.236, "large grid with multiple animals euclidean");

}

testAll();
