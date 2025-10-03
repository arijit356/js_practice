const testCase = "Z  Z LL";

const testCaseToUse = testCase;
const lengthOfTestcase = testCaseToUse.length - 1;

let distance = 101;
let minDistance = 101;

let lion = false;
let zebra = false;

for (let zebraCheck = 0; zebraCheck <= lengthOfTestcase; zebraCheck++) {
    if (testCaseToUse[zebraCheck] === "Z") {
        zebra = true;
        for (let lionCheck = 0; lionCheck <= lengthOfTestcase; lionCheck++) {
            if (testCaseToUse[lionCheck] === "L") {
                lion = true;
                distance = (zebraCheck > lionCheck) ? zebraCheck - lionCheck - 1 : lionCheck - zebraCheck - 1;
                minDistance = (distance < minDistance) ? distance : minDistance;
            }
        }
    }
}

minDistance = (!lion || !zebra)? console.log("-1") : console.log(minDistance);

