// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 0;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let input = a;
 
let primeFactor = 2;
while (input > 1) {

    if (input % primeFactor === 0) {
        primeFactor = primeFactor;
        input = input / primeFactor;
        console.log(primeFactor);
    } else {
        primeFactor++;
    }
}
