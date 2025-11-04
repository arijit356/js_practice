let numberOfTimes = 0;

function meanOf(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum / data.length;
}

function sort(data) {
  let sorted = data.slice();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      numberOfTimes++;
      if (sorted[i] > sorted[j]) {
        sorted[i] = sorted[i] + sorted[j];
        sorted[j] = sorted[i] - sorted[j];
        sorted[i] = sorted[i] - sorted[j];
      }
    }
  }
  return sorted;
}

function medianOf(data) {
  const sortedData = sort(data);
  return sortedData[Math.floor(sortedData.length / 2)];
}

function calculateSD(data) {
  const meanValue = meanOf(data);

  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    const difference = meanValue - data[index];
    sum += Math.pow(difference, 2);
  }
  return Math.sqrt(sum / data.length);
}

function displayStatistics() {
  const data = [74, 7, 100, 106, 12, 31, 28, 29];
  const median = medianOf(data);
  const standardDeviation = calculateSD(data);

  console.log("Standard Deviation is:", standardDeviation);
  console.log("Median value is:", median);
  console.log("Benchmarks is : ", numberOfTimes);
}

displayStatistics();
