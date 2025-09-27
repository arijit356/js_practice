/* rewrite these as ternary forms or remove the else.

if (isPremiumUser) {
  discount = basePrice * 0.2;
  finalPrice = basePrice - discount;
} else {
  discount = basePrice * 0.05;
  finalPrice = basePrice - discount;
}

*/

const isPremiumUser = true;
const basePrice = 4;

const discount = isPremiumUser ? basePrice * 0.2 : basePrice * 0.05;
const finalPrice = basePrice - discount;

console.log(discount);
console.log(finalPrice);
