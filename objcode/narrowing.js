// Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
function paddLeft(padding, input) {
    return typeof padding === 'string' ? padding + input : " ".repeat(padding) + input;
}
console.log(paddLeft(12, "hello"));
console.log(paddLeft("   ", "hello"));
console.log(typeof null);
//false value: 0, "  ", NaN, null, undefined, 0n
function printAll(strs) {
    if (!Boolean(strs))
        return;
    if (Array.isArray(strs)) {
        strs.forEach(x => console.log(x));
    }
    else if (typeof strs === 'string')
        console.log(strs);
}
printAll(null);
printAll("   ");
printAll(["namta", "hey"]);
//equality narrowing
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
    else {
        console.log(y);
    }
}
example("hello", "hello");
example(100, "hello");
example(100, true);
console.log(undefined != null);
function mutliplevalue(container, factorial) {
    if (container.value != null) {
        console.log(container.value);
    }
}
// type Humain=Fish&Bird
function move(animal) {
    if ("swim" in animal) {
        console.log(animal);
    }
    else {
        console.log(animal);
    }
}
// instance of narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Assignments inffrence
let x = Math.random() > 0.5 ? 10 : "not a number";
x = 12;
console.log(x);
x = "hello";
console.log(x);
// x=true;
// console.log(x) 
function examplecontrolflow() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() > 0.5) {
        x = 10;
        console.log(x);
    }
    else {
        x = "hello";
        console.log(x);
    }
    return x;
}
// predictable type narrowing
function isFish(pet) {
    return pet.swim !== undefined;
}
console.log(isFish({ swim: () => { }, water: () => { } }));
console.log(isFish({ fly: () => { } }));
