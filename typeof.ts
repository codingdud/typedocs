interface T{}
type Predicate<T>=(x:T)=>boolean;
type k=ReturnType<Predicate<T>>

function fn(){
    return {x:10,y:10};
}
type g=ReturnType<typeof fn>;


// Indexed Access Types
type Person={name:string,age:number,alive?:boolean};
type I1=Person["age"];

type I2=Person[keyof Person];

type Person1=["age"|"name"];
type U1=Person1[keyof Person1];
type aliveornot="alive"|"name";
type I3=Person[aliveornot];

const MyArray:Person[] = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type PersonDemo=typeof MyArray[number];
type Age=typeof MyArray[number]["age"];
const key1="age";
type key2="age";
type Age2=PersonDemo[key2];

// Conditional Types
// SomeType extends OtherType ? TrueType : FalseType;
// Conditional types take a form that looks a little like conditional expressions 
// (condition ? trueExpression : falseExpression) in JavaScript:
interface Animal{
    live():void;
}
interface Dog extends Animal{
    woof():void;
}
type Example=Dog extends Animal? number:string;
type Example2=RegExp extends Animal? number:string;
let trm: RegExp = /\[1231\]/;

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createlable(id:number):IdLabel;
function createlable(name:string):NameLabel;
function createlable(nameorid:string|number):IdLabel|NameLabel{
    throw "implement"
}
type NameorId<T extends number|string>= T extends number? IdLabel:NameLabel;
function createlable2<T extends number|string>(idorname:T):NameorId<T>{
    throw "missing"
}
// let a =createlable2(1)
// let c=createlable2(Math.random()>0.5?1:"hello");

// Conditional Type Constraints
type Messageof<T extends {message:unknown}>= T["message"];
interface Email{
    message:string;
}
type EmailMessage=Messageof<Email>;

type Messageof2<T>=T extends {message:unknown}? T["message"]:never;

type EmailMessage2=Messageof2<Email>;
let obj:EmailMessage2="hello";
//let namename:never="hello";

type Flatten<T>=T extends any[]?T[number]:T;
let abdb:Flatten<number>=1;

type Flatten2<T>=T extends Array<infer Item>? Item:T;
let avc:Flatten<number[]>=1;

// Distributive Conditional Types
// If we plug a union type into ToArray, then the conditional type will be applied to each member of that union.

type ToArray<T>=[T] extends [any]? T[]:never;
type StrOrNumArr=ToArray<string|number>;
// Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.
