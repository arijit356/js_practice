// const DATA = [74, 7, 100, 106, 0, 12, 31, 28, 92, 67, 94, 35, 45, 14, 100, 122, 82, 34, 56, 52, 12, 32, 91, 32, 8, 7, 15, 62, 34, 88, 7, 100, 23, 80, 27, 22, 14, 67, 61, 20, 52, 41, 8, 100, 62, 88, 34, 10, 41, 100, 8, 34, 7, 100, 9, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100];
const DATA = [0, 0, 0, 1, 1, 1, 2];

function sort(data) {
  const dataToSort = data.slice();
  for (let i = 0; i < dataToSort.length; i++) {
    for (let j = i + 1; j < dataToSort.length; j++) {
      if (dataToSort[i] > dataToSort[j]) {
        let temp = dataToSort[i];
        dataToSort[i] = dataToSort[j];
        dataToSort[j] = temp;
      }
    }
  }
  return dataToSort;
}

function modeOf(sortedData) {
  let count = 0;
  let mostFrequentNum = 0;
  let mostFrequentElement = [];

  for (let index = 0; index < sortedData.length; index++) {
    if (sortedData[index] !== sortedData[index + 1]) {
      if (mostFrequentNum < count) {
        mostFrequentNum = count;
        mostFrequentElement = [sortedData[index]];
      } else if (mostFrequentNum === count) {
        mostFrequentElement.push(sortedData[index]);
      }
      count = 0;
      continue;
    }
    count++;
  }
  console.log(mostFrequentElement);
}

function main() {
  const sortedItems = sort(DATA);
  const mostFrequencyValues = modeOf(sortedItems);
  // console.log(sortedItems)
  console.log(mostFrequencyValues);
}

main();
