/* rewrite these as ternary forms or remove the else.

if (isMember) {
  discount = 10;
} else {
  discount = 0;
}
*/

const isMember = true;

const discount = (isMember) ? 10 : 0;

console.log(discount);
