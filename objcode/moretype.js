// type asertion
let res = "42";
const len = res.length;
let bookstr = `{"name":"ash and fire"}`;
let bookobj = JSON.parse(bookstr);
console.log(bookobj.name);
// const DomElement=document.getElementById("user") as HTMLElement;
// unknown and any
let val;
val = 1;
val = [1, 2, 3];
val = "any";
val.toUpperCase();
let newVal;
newVal = 1;
newVal = [1, 2, 34];
newVal = "str";
if (typeof newVal === "string")
    newVal.toUpperCase();
function redirection(role) {
    if (role === "user") {
        console.log("user");
        return;
    }
    if (role === "admin") {
        console.log("admin");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
