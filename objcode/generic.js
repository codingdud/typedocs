// bare minmal generic function example
let ab = function (data) {
    return data;
};
// generic types
function identity(arg) {
    return arg;
}
let myIdentity = identity;
// We can also write the generic type as a call signature of an object literal type:
let myIdenty2 = identity;
console.log(myIdenty2("Hello Generic"));
console.log(myIdentity(12345));
let myIdentity3 = identity;
console.log(myIdentity3("Generic Interface"));
// Understanding when to put the type parameter directly on the call 
// signature and when to put it on the interface itself will be helpful 
// in describing what aspects of a type are generic.
let myIdentity4 = identity;
console.log(myIdentity4(32));
// generic class
class GenericSum {
    sum;
    add;
    constructor(sum, add) {
        this.sum = sum;
        this.add = add;
    }
}
let myGenericSum = new GenericSum(0, (x, y) => x + y);
console.log(myGenericSum.add(10, 20));
let myGenericSum1 = new GenericSum("", (x, y) => x + y);
console.log(myGenericSum1.add("Hello ", "Generics"));
// passing constraints to generics
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity<Object extends Lengthwise>({length:10, value:3}));
// Using Type Parameters in Generic Constraints
function getpropety(obj, key) {
    return obj[key];
}
let obj = { 1: 1, 2: 2 };
console.log(typeof obj);
getpropety(obj, 1);
// Using Class Types in Generics
function Createinstance(c) {
    return new c();
}
class BeeKeeper {
    hasMask = true;
}
class ZooKeeper {
    nametag = "Mikle";
}
class Animal {
    numLegs = 4;
}
class Bee extends Animal {
    numLegs = 6;
    keeper = new BeeKeeper();
}
class Lion extends Animal {
    keeper = new ZooKeeper();
}
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper.nametag);
