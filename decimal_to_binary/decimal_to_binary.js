let input = 10;
let finalInput = input;
let reminder = 0;
let binaryString = "";
let fianlBinaryString = "";

let initialization = 1;
while (initialization <= input) {
    reminder = input % 2;
    binaryString = binaryString + reminder;
    input = input / 2;
    input =  (reminder)? input - 0.5 : input;
    
}

for(let reverse = 1; reverse<=binaryString.length; reverse++){
    fianlBinaryString = fianlBinaryString + binaryString[binaryString.length - reverse];
}

console.log("binary of", finalInput , "number", fianlBinaryString);
