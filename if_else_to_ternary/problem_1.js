/* rewrite these as ternary forms or remove the else.

if (temperature > 30) {
  weather = "hot";
} else {
  weather = "cool";
}
*/

const temperature = 60;
const weather = (temperature > 30) ? "hot" : "cool";

console.log(weather);
