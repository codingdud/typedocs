const userName = "John Doe";
const userAge = 30;
const isAdult = ((_) => userAge >= 18)();
const costom = { id: 1, role: "admin" };
console.log(`Name: ${userName}, Age: ${userAge}, Is Adult: ${isAdult}`);
console.log(`Custom Object: ${JSON.stringify(costom)}`);
// Modifying the custom object
costom.status = "success";
//costom.foo();
const n = costom;
console.log(`number value is`, n);
// function with type annotations for parameters and return type
function add(a, b) {
    return a + b;
}
function upper(str) {
    return str.toUpperCase();
}
// async function
async function getnumber() {
    return 23;
}
// Anonymous function
// Contextual typing for function - parameter s inferred to have type string
let arr = ["apple", "banana", "orange"];
arr.forEach(function (s) {
    console.log(s.toUpperCase());
});
arr.forEach((s) => {
    console.log(s.toUpperCase());
});
// object type
let obj = {
    name: "Animesh",
    age: 23,
};
let obj1 = {
    name: "Animesh",
};
//object type in function
function printCordinat(pt = { x: 0, y: 0 }) {
    console.log(pt.x, pt.y);
}
printCordinat();
printCordinat({ x: 20, y: 20 });
// union type :representing values that may be any one of those types
// number | string using or operator
function printID(id = 104) {
    // Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
    if (typeof id === "string")
        console.log(`ID is ${id.toUpperCase()}`);
    else
        console.log(`ID is ${id}`);
    /*
      console.log(`ID is ${id.toUpperCase()}`)
      Property 'toUpperCase' does not exist on type 'string | number'.
      Property 'toUpperCase' does not exist on type 'number'
     */
}
function welcome(visitor) {
    if (Array.isArray(visitor))
        console.log(`welcome ${visitor.join(", ")}`);
    else
        console.log(visitor);
}
welcome(["aditya", "ram", "aniket"]);
welcome("animesh");
function comman(x) {
    return x.slice(0, 3);
}
function display(pt = { x: 0, y: 0 }) {
    console.log(`x: ${pt.x}, y: ${pt.y}`);
    pt.func?.(pt);
}
function printIdNarrow(id = 104) {
    // Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
    if (typeof id === "string")
        console.log(`ID is ${id.toUpperCase()}`);
    else
        console.log(`ID is ${id}`);
}
display({
    x: 101,
    y: 202,
    func: (pt) => {
        console.log(pt.x, pt.y);
    },
});
printIdNarrow(200);
function displayInterface(pt = { x: 0, y: 0 }) {
    console.log(`interface x: ${pt.x}, y: ${pt.y}`);
    pt.fun?.();
}
displayInterface({
    x: 101,
    y: 202,
    fun() {
        console.log(this.x, this.y);
    },
});
const bear = {
    name: "Winnie the Pooh",
    honey: true,
};
console.log(bear);
// type assertion :type assertion to specify a more specific type for a value.
// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas1 = <HTMLCanvasElement>document.getElementById("main_canvas");
const a = "hello";
console.log(a);
// literal types
let word = "hello";
// word="world";
const world1 = "world"; // literal type
let position = "up";
function greater(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(greater(100, 20));
const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// handleRequest(req.url,req.method as  "GET");
// null and undefined
// when a value is null or undefined,
// WE will need to test for those values before using methods or properties on that value
function printLength(str) {
    console.log(`Length of string is ${str.length}`);
}
printLength("Hello, world!");
// printLength(null);
//Non-null Assertion Operator (Postfix !)
const bignumber = BigInt(100);
const another = 100n;
const apple = Symbol("apple");
console.log(apple);
