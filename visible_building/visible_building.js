function isBorder(row, col, rows, coluns) {
  return row === 0 || col === 0 || row === rows - 1 || col === coluns - 1;
}

function checkInDirections(grid, row, col) {
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let index = 0; index < directions.length; index++) {
    const [checkRow, checkCol] = [row + directions[index][0], col + directions[index][1]];
    if (grid[row][col] > grid[checkRow][checkCol]) {
      return true;
    }
  }
  return false;
}

function visibleBuilding(grid) {
  let visibleBuildings = 0;
  const rows = grid.length;
  const coluns = grid[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < coluns; col++) {
      if (isBorder(row, col, rows, coluns) && grid[row][col] !== "0") {
        visibleBuildings++;
      }
    }
  }

  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < coluns - 1; col++) {
      if (checkInDirections(grid, row, col)) {
        visibleBuildings++
      }
    }
  }
  return visibleBuildings;
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

function testVisibleBuilding(grid, expectedValue, purpose) {
  const actualValue = visibleBuilding(grid);
  console.log(
    composeMessage(grid, expectedValue, actualValue, purpose),
  );
}

function testAll() {
  testVisibleBuilding(["1"], 1, "one building array");
  testVisibleBuilding(["11"], 2, "1x2 building array");
  testVisibleBuilding(["11", "11"], 4, "2x2 building array");
  testVisibleBuilding(["111", "111"], 6, "3x3 building array");
  testVisibleBuilding(["0"], 0, "zero building array");
  testVisibleBuilding(["00"], 0, "unity building array");
  testVisibleBuilding(["000", "000"], 0, "unity 3x3 building array");
  testVisibleBuilding(["11", "11", "11"], 6, "3x2 building array");
  testVisibleBuilding(["111", "111", "111"], 8, "3x3 building array");
  testVisibleBuilding(["111", "121", "111"], 9, "3x3 building array");
  testVisibleBuilding(["1212", "1231", "3143", "1111"], 15, "4x4 building array");
  testVisibleBuilding(["1", "2", "3"], 3, "3x1 building array");
  testVisibleBuilding(["111", "191", "111"], 9, "3x3 building array");
  testVisibleBuilding(["123", "456", "789"], 9, "3x3 building array");
  testVisibleBuilding(["1212", "1231", "3143", "1111"], 15, "4x4 building array");

}

testAll();
