/* rewrite these as ternary forms or remove the else.

if (speed > 100) {
  message = "Too fast";
  penalty = 200;
} else {
  message = "OK";
  penalty = 0;
}

*/

const speed = 150;
const message = speed > 100 ? "Too fast" : "Ok";
const penalty = speed > 100 ? 200 : 0;

console.log(message);
console.log(penalty);
