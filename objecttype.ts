function biodata(data:{name:string, age:number, isAdult:(age:number)=>boolean}):void{
  console.log(data.name);
  console.log(data.age);
  console.log(data.isAdult(data.age));
}
biodata({
  name: "John Doe",
  age: 25,
  isAdult: (age:number) => (age >= 18),
})

interface Point{
    shape: string;
    x?: number;
    y?: number;
}

function drawPoint(point: Point): void {
    let x=point.x??0;
    let y=point.y??0;
}
function PointDefault({shape,x=0,y=0}:Point):void{
    console.log(shape,x,y);
}
drawPoint({shape:"circle"});
PointDefault({shape:"square"});

//readonly property
interface Car{
    readonly brand: string;
    readonly model: string;
    year: number;
}
let myCar: Car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(myCar.brand);
// myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property
myCar.year = 2021; // Allowed
console.log(myCar.year);

interface StringArr{
    [index:number]:string|number;
    length:number;
    name:string;
}
let arr=["Apple","Banana","Cherry"];
console.log(arr[1]);
console.log(arr.length);

//exces  type checking 

interface SquareConfig {
  color?: string;
  width?: number;
  [property: string]: unknown;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "blue", width: 30 });
console.log(mySquare);
let mySquare2 = createSquare({ colour: "green"});

//extending type interface
interface Animal{
    name:string;
}
interface dog extends Animal{
    bark:string;
}
let myDog:dog={
    name:"Buddy",
    bark:"Woof Woof"
};
console.log(myDog.name);
console.log(myDog.bark);

//multiple extending
interface Colorful{
    color:string;
}
interface Circle{
    radius:number;
}
interface ColorfullCircle extends Colorful, Circle{};
let myCircle:ColorfullCircle={
    color:"red",
    radius:10
};
console.log(myCircle.color);
console.log(myCircle.radius);

// or we can use intersection type
type ColorfulCircle=Colorful & Circle;
let myColorfulCircle:ColorfulCircle={
    color:"blue",
    radius:15
};
console.log(myColorfulCircle.color);
console.log(myColorfulCircle.radius);

// diffrence between extend and intersection
interface Vehicle{
    make:string;
}
interface Vehicle{
    //make:number; //type error
    model:string;
}
 interface Person{
    name:string;
 }
 interface Person1{
    name:number;
 }
type Individual=Person & Person1; // no error
// resulting type of Individual has name of type never
/* let individual:Individual={
    name:"Alice"
}; */

// Generic interface
// base minimal example of generic interface
interface Box1{
    value:any;
}
interface BBox{
    value:unknown;
}
const box1:Box1={value:123};
const box2:BBox={value:"Hello"};
console.log(box1.value);
console.log(box2.value);
// better way using generic interface
interface Box<T>{
    value:T
}
/* type Box<Type> = {
  contents: Type;
} */;
const b1:Box<number>={value:123};
const b2:Box<string>={value:"Animesh"};
console.log(b1,b2);

function setVal<T>(box:Box<T>,val:T){
    box.value=val;
}

setVal<number>(b1,456);
setVal<string>(b2,"TypeScript");
console.log(b1);
console.log(b2);

// type with generic interface
type orNull<T> =T|null;
type oneMany<T> =T|T[];
type oneManyMore<T> =orNull<oneMany<T>>
// oneManyMore<T>  = T|null ->  oneMany<T>|null -> T|T[]|null 
const oneManyMoreValue:oneManyMore<string>="Hello";
console.log(oneManyMoreValue);
const oneManyMoreValue2:oneManyMore<number>=42;

interface Array<T>{
    length:number;
    pop():T|undefined;
    push(...items:T[]):number;
}
let arrReadonly:ReadonlyArray<string> = ["Apple", "Banana", "Cherry"];
console.log(arrReadonly[0]);
// error cant
let x: readonly string[] = [];
let y: string[] = [];
x = y;
//y = x;

// tuple type
type stringnumberpair=[number,string?];
let nubstr:stringnumberpair=[1,"hello"]
console.log(nubstr);

function tupaltrest(...pair:stringnumberpair){
    const p1=pair[0]
    //const p2=pair[2];
}

type stringnumberboll=[number,string,...boolean[]];
const c: stringnumberboll = [1,"world",true, false, true, false, true];
console.log(c)

function tupaltrestall(...pair:stringnumberboll){
    const p1=pair[0]
    //const p2=pair[2];
}
let point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
 
//distanceFromOrigin(point);