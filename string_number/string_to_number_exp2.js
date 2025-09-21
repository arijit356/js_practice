let string = "3245";
let index = 0;
let numberString = 0;
let number = 0;
let stringToNumber = 0;

while (index <= string.length - 1) {

    numberString = string[index];

    switch (numberString) {
        case "0":
            number = 0;
            break;
        case "1":
            number = 1;
            break;
        case "2":
            number = 2;
            break;
        case "3":
            number = 3;
            break;
        case "4":
            number = 4;
            break;
        case "5":
            number = 5;
            break;
        case "6":
            number = 6;
            break;
        case "7":
            number = 7;
            break;
        case "8":
            number = 8;
            break;
        case "9":
            number = 9;
            break;

        default:
            console.log("no number");
            break;
    }

    stringToNumber = stringToNumber * 10;
    stringToNumber = stringToNumber + number;
    index++;
}

console.log(stringToNumber);
console.log(typeof (stringToNumber));
