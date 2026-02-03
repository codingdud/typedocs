// Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
function paddLeft(padding:string|number,input:string):string{
    return typeof padding==='string'?padding+input:" ".repeat(padding)+input;
}
console.log(paddLeft(12,"hello"))
console.log(paddLeft("   ","hello"))
console.log(typeof null)

//false value: 0, "  ", NaN, null, undefined, 0n
function printAll(strs:string|string[]|null){
    if(!Boolean(strs)) return;
    if(Array.isArray(strs)){
        strs.forEach(x=>console.log(x));
    }else if(typeof strs==='string') console.log(strs);
}
printAll(null)
printAll("   ")
printAll(["namta","hey"])

//equality narrowing
function example(x:string|number,y:string|boolean){
    if(x===y){
        console.log(x.toUpperCase())
    }
    else{
        console.log(y)
    }
}
example("hello","hello")
example(100,"hello")
example(100,true)

interface Container {
    value: number | null | undefined;
}
console.log(undefined!=null)
function mutliplevalue(container:Container,factorial:number){
    if(container.value!=null){
        console.log(container.value)
    }
}

// in operator narrowing
// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator.
type Fish={swim:()=>void,water():void}
type Bird={fly:()=>void}
type Humain={swim?:()=>void,fly?:()=>void}
// type Humain=Fish&Bird

function move(animal:Fish|Bird|Humain){
    if("swim" in animal) {
        console.log(animal);
    }
    else{
        console.log(animal);
    }
}

// instance of narrowing
function logValue(x:string|Date){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }   
}
// Assignments inffrence
let x=Math.random()>0.5?10:"not a number";
x=12;
console.log(x)
x="hello";
console.log(x)
// x=true;
// console.log(x) 

function examplecontrolflow(){
    let x:string|number|boolean;
    x=Math.random()<0.5;
    console.log(x);
    if(Math.random()>0.5){
        x=10;
        console.log(x);
    }
    else{
        x="hello";
        console.log(x);
    }
    return x;
}
// predictable type narrowing
function isFish(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim!==undefined;
}
console.log(isFish({swim:()=>{},water:()=>{}}))
console.log(isFish({fly:()=>{}}))

//Assertion functions
// assert(someValue === 42);
/* interface Shape{
    kind:"square"| "rectangle"| "circle",
    side?:number,
    height?:number,
    radious?:number,
    width?:number,
} */
interface Circle{
    kind:"circle";
    radious:number;
}
interface Square{
    kind:"square";
    side:number;
}
type Shape=Circle|Square
function area(s:Shape):number{
    //return s.kind==="square"?s.side! *s.side!:-1;
    switch(s.kind){
        case "square":
            return s.side *s.side;
        case "circle":
            return Math.PI * (s.radious!**2);
        default:
            const _exhaustiveCheck:never=s;
            return _exhaustiveCheck;
    }
}
// never : TypeScript will use a never type to represent a state which shouldn’t exist.
