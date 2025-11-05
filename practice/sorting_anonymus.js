// function lessThen(x, y) {
//   return x.length < y.length;
// }

const isString = function (value) {
  return typeof value === "string";
}

function sort(data, lessThen) {
  const sorted = data.slice();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (lessThen(sorted[i], sorted[j])) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted;
}

const isLessThen = function (firstValue, secondValue) {
  firstValue = isString(firstValue) ? firstValue.length : firstValue;
  secondValue = isString(secondValue) ? secondValue.length : secondValue;

  return firstValue < secondValue;
};

function main() {
  const number = [5, 2, 4, 1, 3];
  const string = ["aaa", "aa", "aaaa", "avhgfr", "ab", "a"];
  const stringNumber = ["aaa", "aa", "aaaa", 11, 45, "avhgfr", "ab", 1];
  const sortedData1 = sort(number, isLessThen).join(" ");
  const sortedData2 = sort(string, isLessThen).join(" ");
  const sortedData3 = sort(stringNumber, isLessThen).join(" ");

  console.log(sortedData1);
  console.log(sortedData2);
  console.log(sortedData3);

}

main();
