const DICE_EMOJI = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
function getNumRolls() {
  return 100;
}
function getProbabilityDistribution() {
  const probabilities = [0.1, 0.2, 0.2, 0.1, 0.2, 0.2];
  let sum = 0;
  for (let index = 0; index < probabilities.length; index++) {
    sum += probabilities[index];
  }

  if (Math.abs(sum - 1) > 0.01) {
    console.log(
      `Warning, probabilities do not sum of 1, using equal distribution`,
    );
    probabilities.length = 0;
  }

  if (probabilities.length !== 6) {
    probabilities.length = 0;
    for (let index = 0; index < 6; index++) {
      probabilities.push(1 / 6);
    }
  }
  return probabilities;
}

function rollDice(probabilities) {
  const random = Math.random();
  let cumulativeProb = 0;
  for (let index = 0; index < probabilities.length; index++) {
    cumulativeProb += probabilities[index];
    if (random < cumulativeProb) {
      return index + 1;
    }
  }
  return 6;
}

function performRolls(numRolls, probabilities) {
  const rolls = [];
  for (let index = 0; index < numRolls; index++) {
    rolls.push(rollDice(probabilities));
  }
  console.log(rolls);
  return rolls;
}

function displayRolls(rolls, numRolls) {
  const columns = Math.ceil(numRolls / 10);
  const numRows = Math.ceil(numRolls / columns);

  console.log(`\n🎲 ${rolls.length} Dice Rolls 🎲\n`);

  for (let row = 0; row < numRows; row++) {
    let lines = "";
    for (let col = 0; col < columns; col++) {
      const index = col * columns + row;
      if (index < numRolls) {
        lines += DICE_EMOJI[rolls[index] - 1] + " ";
      }
    }
    console.log(lines);
  }
  console.log("\n");
}

function calculateFrequency(rolls) {
  const frequency = [0, 0, 0, 0, 0, 0];
  for (let index = 0; index < rolls.length; index++) {
    frequency[rolls[index] - 1]++;
  }
  return frequency;
}

function displayStatistics(frequency, numRolls, rolls, probDistribution) {
  console.log(`face | count | percentage | expected | difference |`);
  console.log(`-----|-------|------------|----------|------------|`);

  for (let index = 0; index < 6; index++) {
    const face = index + 1;
    const count = frequency[index];
    const percentage = ((count / numRolls) * 100).toFixed(2);
    const expected = (probDistribution[index] * 100).toFixed(2);
    let difference = (percentage - expected).toFixed(2);
    difference = difference >= 0 ? `+${difference}` : difference;

    console.log(
      `  ${face}  | ${count.toString().padEnd(5)} |  ${
        percentage.toString().padEnd(5)
      }%    | ${expected}%   |    ${difference.toString().padEnd(5)}%  |`,
    );
  }
}

function main() {
  console.log(DICE_EMOJI);
  const numRolls = getNumRolls();
  const probDistribution = getProbabilityDistribution();
  const rolls = performRolls(numRolls, probDistribution);
  displayRolls(rolls, numRolls);
  const frequency = calculateFrequency(rolls);
  displayStatistics(frequency, numRolls, rolls, probDistribution);
}
main();
