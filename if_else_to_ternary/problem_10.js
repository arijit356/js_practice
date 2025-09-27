/* rewrite these as ternary forms or remove the else.

if (age >= 65) {
  category = "senior";
  ticketPrice = 5;
} else {
  category = "adult";
  ticketPrice = 10;
}
*/

const age = 65;

const category = age >= 65 ? "senior" : "adult";
const ticketPrice = age >= 65 ? 5 : 10;

console.log(category);
console.log(ticketPrice);
