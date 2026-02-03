// ()=>void fun():void;
function greet(fn: () => void) {
  let username = "logictech";
  fn();
}
function fn() {
  // console.log(this)

  console.log("welcome every one!");
}
greet(fn);

//write a call signature in an object type:

type DescFunction = {
  des: string;
  (arg: number): boolean;
};

function getDesc(fn: DescFunction) {
  console.log(fn.des);
  return fn(123);
}
function myFun(arg: number): boolean {
  console.log("arg value is:", arg);
  return true;
}
myFun.des = "this is a description";
// check for call signature
getDesc(myFun);

// constructor signature
type someConstruct = {
  new (s: string): object;
};
//Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:
type CallOrConstruct = {
  new (s: string): object;
  (n: number): number;
};
interface DateConstructor {
  new (value?: number | string): Date;
  (): string;
}

function ctor1(s: string): object {
  return { name: s };
}
function ctor2(n: number): number {
  return n * n;
}
function useCallOrConstruct(c: CallOrConstruct) {
  console.log(c(1));
  console.log(new c("world"));
}
//useCallOrConstruct(ctor1 as CallOrConstruct);
useCallOrConstruct(ctor2 as CallOrConstruct);

// generic function types
function addgeneric<T>(a: T, b: T, add: (a: T, b: T) => T): T {
  return add(a, b);
}
function add<T extends number | string>(a: T, b: T): T {
  return ((a as number) + (b as number)) as T;
}
console.log(add<string>("1", "1"));

console.log(addgeneric<number>(10, 20, (a, b) => a + b));
console.log(addgeneric<string>("hello ", "world", (a, b) => a + b));

function map<I, O>(arr: I[], fn: (item: I) => O): O[] {
  return arr.map(fn);
}

// The type was inferred - chosen automatically - by TypeScript.
// We can use multiple type parameters as well.

let sparce = map(["1", "2"], (n) => parseInt(n));
console.log(sparce);

// constrain : constraint to limit the kinds of types that a type parameter can accept.
function longest<T extends { length: number }>(a: T, b: T) {
  return a.length < b.length;
}
// Specifying Type Arguments
function combine<T>(a: T[], b: T[]): T[] {
  return a.concat(b);
}
console.log(combine<number | string>([1, 2], ["hello"]));
// ============================================
//Function overloading
function makeDate(timestam: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(morTime: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(d, morTime, y);
  } else {
    return new Date(morTime);
  }
}
let d1 = makeDate(1321431);
let d2 = makeDate(2, 3, 4);
console.log(d1, d2);
//let d3=makeDate(1,3);

// overlap
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
/* 
let user = {
  id: 123,
  admin: false,
  fn: function () {
    this.admin = true;
  },
};
interface DB {
  fileruser(filter: (this: User) => boolean): User[];
} */
/* 
unknown
The unknown type represents any value. 
This is similar to the any type, 
but is safer because it’s not legal 
to do anything with an unknown value: */

/* never
Some functions never return a value:
never also appears when TypeScript determines there’s nothing left in a union. */
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

// contextual function type with a void return type (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored.