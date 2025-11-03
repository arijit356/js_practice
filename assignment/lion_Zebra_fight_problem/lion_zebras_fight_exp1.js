const testCase1 = "ZL";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCase4 = "Z L";
const testCase5 = "L L";
const testCase6 = "Z   LLZ"
const testCase7 = "Z   Z   Z"
const testCase8 = " Z  L"

const testCaseToUse = testCase6;
const lengthOfTestcase = testCaseToUse.length - 1;

let distance = 101;
let minDistance = 101;

let lion = false;
let zebra = false;

for(let zebraCheck = 0; zebraCheck <= lengthOfTestcase; zebraCheck++){
    if(testCaseToUse[zebraCheck] === "Z"){
        zebra = true;
        for(let lionCheck = 0; lionCheck <= lengthOfTestcase; lionCheck++){
            if(testCaseToUse[lionCheck] === "L"){
                lion = true;
                if(zebraCheck > lionCheck){
                    distance = zebraCheck - lionCheck - 1;
                } else { 
                    distance = lionCheck - zebraCheck - 1;
                }
                 if(distance < minDistance){
                    minDistance = distance;
                 }
            }
        }
    }
}

if(!lion || !zebra){
    console.log("-1")
}else{
    console.log(minDistance);
}
