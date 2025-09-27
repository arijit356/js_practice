/* rewrite these as ternary forms or remove the else.

if (day === "Saturday" || day === "Sunday") {
  isWeekend = true;
} else {
  isWeekend = false;
}
*/

const day = "saturday";

const isWeekend = (day === "saturday" || day === "sunday");

console.log(isWeekend)
