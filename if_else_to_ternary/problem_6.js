/* rewrite these as ternary forms or remove the else.

if (userType === "admin") {
  baseAccess = "all";
  canDelete = true;
} else {
  baseAccess = "limited";
  canDelete = false;
}

*/

const userType = "admin";

const baseAccess = (userType === "admin") ? "all" : "limited";
const canDelete = userType === "admin";

console.log(baseAccess);
console.log(canDelete);
