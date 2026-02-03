// type asertion
let res: any = "42";
const len: number = (res as string).length;
interface Book {
  name: string;
}
let bookstr = `{"name":"ash and fire"}`;
let bookobj = JSON.parse(bookstr) as Book;
console.log(bookobj.name);
// const DomElement=document.getElementById("user") as HTMLElement;

// unknown and any
let val: any;
val = 1;
val = [1, 2, 3];
val = "any";
val.toUpperCase();
let newVal: unknown;
newVal = 1;
newVal = [1, 2, 34];
newVal = "str";
if (typeof newVal === "string") newVal.toUpperCase();

// try catch final
// nver
type Role = "user" | "admin" | "superadmin";
function redirection(role: Role):void{
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
function neverReturn():never{
    while(true){}
}
