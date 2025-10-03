// Do not rename a, d or n, use them as input for your program.
// While testing we will change its values.

const a = 3;
const d = 2;
const n = 7;

// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// Printing more than one output or printing anything other than simple interest might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE



const sumOfNthNumber = (n * ((2 * a) + ((n - 1) * d))) /2;

console.log(sumOfNthNumber);