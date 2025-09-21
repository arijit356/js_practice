let string = "000009";
let reminder = 0;
let number = 0;
let multiplicationOfTen = 1;

let iteration = 1;
while (iteration <= string) {

    reminder = string % 10;
    number = number + (reminder * multiplicationOfTen);
    multiplicationOfTen = multiplicationOfTen * 10;
    string = (string - reminder) / 10;
}

console.log(number);
console.log(typeof(number));
