const inputNumber = 5;
let initialValue = 1; 
let factorialOfInputNumber = 1; 

while(initialValue <= inputNumber){
    factorialOfInputNumber = factorialOfInputNumber * initialValue; 
    initialValue = initialValue + 1;
}


console.log(inputNumber , "no factorial is 1", factorialOfInputNumber );
