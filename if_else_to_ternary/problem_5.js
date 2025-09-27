
/* rewrite these as ternary forms or remove the else.

if (marks >= 90) {
  grade = "A";
} else {
  grade = "B";
}

*/

const marks = 30;

const grade = (marks >= 90) ? "A" : "B";

console.log(grade);
