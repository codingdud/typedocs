const userName: string = "John Doe";
const userAge: number = 30;
const isAdult: boolean = ((_) => userAge >= 18)();
const costom: any = { id: 1, role: "admin" };
console.log(`Name: ${userName}, Age: ${userAge}, Is Adult: ${isAdult}`);
console.log(`Custom Object: ${JSON.stringify(costom)}`);
// Modifying the custom object
costom.status = "success";
//costom.foo();
const n: number = costom;
console.log(`number value is`, n);

// function with type annotations for parameters and return type
function add(a: number, b: number): number {
  return a + b;
}
function upper(str: string): string {
  return str.toUpperCase();
}
// async function
async function getnumber(): Promise<number> {
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
let obj: { name: string; age: number } = {
  name: "Animesh",
  age: 23,
};
let obj1: { name: string; age?: number } = {
  name: "Animesh",
};
//object type in function
function printCordinat(pt: { x?: number; y?: number } = { x: 0, y: 0 }) {
  console.log(pt.x, pt.y);
}
printCordinat();
printCordinat({ x: 20, y: 20 });
// union type :representing values that may be any one of those types
// number | string using or operator

function printID(id: number | string = 104) {
  // Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
  if (typeof id === "string") console.log(`ID is ${id.toUpperCase()}`);
  else console.log(`ID is ${id}`);
  /* 
    console.log(`ID is ${id.toUpperCase()}`)
    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'
   */
}
function welcome(visitor: string[] | string) {
  if (Array.isArray(visitor)) console.log(`welcome ${visitor.join(", ")}`);
  else console.log(visitor);
}
welcome(["aditya", "ram", "aniket"]);
welcome("animesh");

function comman(x: number[] | string) {
  return x.slice(0, 3);
}
// A type alias is exactly that - a name for any type. The syntax for a type alias is: type <typename> = <type defination>
type Point = { x: number; y: number; func?: (pt: Point) => void };
type Subslice = number[] | string[] | string;
type ID = number | string;

function display(pt: Point = { x: 0, y: 0 }) {
  console.log(`x: ${pt.x}, y: ${pt.y}`);
  pt.func?.(pt);
}
function printIdNarrow(id: ID = 104) {
  // Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
  if (typeof id === "string") console.log(`ID is ${id.toUpperCase()}`);
  else console.log(`ID is ${id}`);
}
display({
  x: 101,
  y: 202,
  func: (pt: Point) => {
    console.log(pt.x, pt.y);
  },
});
printIdNarrow(200);

// intersection type: An interface declaration is another way to name an object type:

interface Pointinterface {
  x: number;
  y: number;
  fun?(): void;
}

function displayInterface(pt: Pointinterface = { x: 0, y: 0 }) {
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

// interface extension
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = {
  name: "Winnie the Pooh",
  honey: true,
};
console.log(bear);

// type assertion :type assertion to specify a more specific type for a value.
// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas1 = <HTMLCanvasElement>document.getElementById("main_canvas");

const a = "hello" as unknown as number;
console.log(a);

// literal types
let word = "hello" as const;
// word="world";
const world1 = "world"; // literal type
type Direction = "up" | "down" | "left" | "right";
let position: Direction = "up";

function greater(a: number, b: number): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
console.log(greater(100, 20));

//literal inference
declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);
// handleRequest(req.url,req.method as  "GET");

// null and undefined
// when a value is null or undefined,
// WE will need to test for those values before using methods or properties on that value
function printLength(str: string | null) {
  console.log(`Length of string is ${str!.length}`);
}
printLength("Hello, world!");
// printLength(null);
//Non-null Assertion Operator (Postfix !)
const bignumber: bigint = BigInt(100);
const another: bigint = 100n;
const apple=Symbol("apple");
console.log(apple)