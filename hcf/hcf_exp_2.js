// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 56;
const b = 1;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
  
let greaterNumber = 0;
let lowerNumber = 0;
let gcd = 1;


if (a > b) {
    greaterNumber = a;
    lowerNumber = b;
} else {
    greaterNumber = b;
    lowerNumber = a;
}

let gcdIteration = 2;
while (gcdIteration < lowerNumber) {
    if (greaterNumber % gcdIteration === 0 && lowerNumber % gcdIteration === 0) {
        gcd = gcd * gcdIteration;
        greaterNumber = greaterNumber / gcdIteration;
        lowerNumber = lowerNumber / gcdIteration;
        gcdIteration = 1;
    }
    gcdIteration++
}

console.log(gcd);
