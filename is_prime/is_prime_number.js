let input = 13;
let divisor = 2;
let hasFactor = false;

while (divisor < input && !hasFactor) {
    const remainder = input % divisor;
    const isDivisible = remainder === 0;
    if (isDivisible) {
        hasFactor = isDivisible;
    }
    divisor = divisor + 1;
}

let suffix = hasFactor ? "is composite" :"is prime";
console.log(input, suffix);
