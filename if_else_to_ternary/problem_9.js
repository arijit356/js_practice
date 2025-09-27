/* rewrite these as ternary forms or remove the else.

if (role === "teacher") {
  dashboard = "gradebook";
  permissions = "view/edit/grade";
} else {
  dashboard = "courses";
  permissions = "view";
}
*/

const role = "teacher";

const dashboard = role === "teacher" ?  "gradebook" :  "courses";
const permissions = role === "teacher" ? "view/edit/grade" : "view";

console.log(dashboard);
console.log(permissions);
