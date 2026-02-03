// ()=>void fun():void;
function greet(fn) {
    let username = "logictech";
    fn();
}
function fn() {
    // console.log(this)
    console.log("welcome every one!");
}
greet(fn);
function getDesc(fn) {
    console.log(fn.des);
    return fn(123);
}
function myFun(arg) {
    console.log("arg value is:", arg);
    return true;
}
myFun.des = "this is a description";
// check for call signature
getDesc(myFun);
function ctor1(s) {
    return { name: s };
}
function ctor2(n) {
    return n * n;
}
function useCallOrConstruct(c) {
    console.log(c(1));
    console.log(new c("world"));
}
//useCallOrConstruct(ctor1 as CallOrConstruct);
useCallOrConstruct(ctor2);
// generic function types
function addgeneric(a, b, add) {
    return add(a, b);
}
function add(a, b) {
    return a + b;
}
console.log(add("1", "1"));
console.log(addgeneric(10, 20, (a, b) => a + b));
console.log(addgeneric("hello ", "world", (a, b) => a + b));
function map(arr, fn) {
    return arr.map(fn);
}
// The type was inferred - chosen automatically - by TypeScript.
// We can use multiple type parameters as well.
let sparce = map(["1", "2"], (n) => parseInt(n));
console.log(sparce);
// constrain : constraint to limit the kinds of types that a type parameter can accept. 
function longest(a, b) {
    return a.length < b.length;
}
// Specifying Type Arguments
function combine(a, b) {
    return a.concat(b);
}
console.log(combine([1, 2], ["hello"]));
function makeDate(morTime, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(d, morTime, y);
    }
    else {
        return new Date(morTime);
    }
}
let d1 = makeDate(1321431);
let d2 = makeDate(2, 3, 4);
console.log(d1, d2);
//let d3=makeDate(1,3);
