const a = 1;
const b = 5;

let lowerNumber = (a < b)? a : b;
let hcf = 1;

let iteration = 2;
while(iteration <= lowerNumber){
    hcf = (a % iteration === 0 && b % iteration === 0) ? iteration : hcf;
    iteration++;
}

console.log(hcf);
