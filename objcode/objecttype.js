function biodata(data) {
    console.log(data.name);
    console.log(data.age);
    console.log(data.isAdult(data.age));
}
biodata({
    name: "John Doe",
    age: 25,
    isAdult: (age) => (age >= 18),
});
function drawPoint(point) {
    let x = point.x ?? 0;
    let y = point.y ?? 0;
}
function PointDefault({ shape, x = 0, y = 0 }) {
    console.log(shape, x, y);
}
drawPoint({ shape: "circle" });
PointDefault({ shape: "square" });
let myCar = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(myCar.brand);
// myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property
myCar.year = 2021; // Allowed
console.log(myCar.year);
let arr = ["Apple", "Banana", "Cherry"];
console.log(arr[1]);
console.log(arr.length);
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mySquare = createSquare({ colour: "blue", width: 30 });
console.log(mySquare);
let mySquare2 = createSquare({ colour: "green" });
let myDog = {
    name: "Buddy",
    bark: "Woof Woof"
};
console.log(myDog.name);
console.log(myDog.bark);
;
let myCircle = {
    color: "red",
    radius: 10
};
console.log(myCircle.color);
console.log(myCircle.radius);
let myColorfulCircle = {
    color: "blue",
    radius: 15
};
console.log(myColorfulCircle.color);
console.log(myColorfulCircle.radius);
const box1 = { value: 123 };
const box2 = { value: "Hello" };
console.log(box1.value);
console.log(box2.value);
/* type Box<Type> = {
  contents: Type;
} */ ;
const b1 = { value: 123 };
const b2 = { value: "Animesh" };
console.log(b1, b2);
function setVal(box, val) {
    box.value = val;
}
setVal(b1, 456);
setVal(b2, "TypeScript");
console.log(b1);
console.log(b2);
// oneManyMore<T>  = T|null ->  oneMany<T>|null -> T|T[]|null 
const oneManyMoreValue = "Hello";
console.log(oneManyMoreValue);
const oneManyMoreValue2 = 42;
let arrReadonly = ["Apple", "Banana", "Cherry"];
console.log(arrReadonly[0]);
// error cant
let x = [];
let y = [];
x = y;
let nubstr = [1, "hello"];
console.log(nubstr);
function tupaltrest(...pair) {
    const p1 = pair[0];
    //const p2=pair[2];
}
const c = [1, "world", true, false, true, false, true];
console.log(c);
function tupaltrestall(...pair) {
    const p1 = pair[0];
    //const p2=pair[2];
}
