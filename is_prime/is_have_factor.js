
let input = 9;
let divisor = 2;
let hasFactor = false;

let remainder = 0;
let isDivisible = false;

while (divisor < input) {
    remainder = input % divisor;
    isDivisible = remainder === 0;
    if (isDivisible) {
        hasFactor = isDivisible;
    }
    divisor = divisor + 1;
}

let suffix = hasFactor ? "have factor" : "don't have factor";
console.log(input, suffix);
