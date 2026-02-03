// bare minmal generic function example
let ab=function(data:any):any{
    return data;
}
// generic types
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: <I>(arg: I) => I = identity;
// We can also write the generic type as a call signature of an object literal type:
let myIdenty2: {<T>(args:T):T}=identity;
console.log(myIdenty2<string>("Hello Generic"));
console.log(myIdentity<number>(12345));
// generic interfcae
interface GenericIdentityFn {
    <T>(arg:T):T;
}
let myIdentity3: GenericIdentityFn = identity;
console.log(myIdentity3("Generic Interface"));
// generic interface with type parameter
interface GenericWithType<T>{
    (arg:T):T;
}
// Understanding when to put the type parameter directly on the call 
// signature and when to put it on the interface itself will be helpful 
// in describing what aspects of a type are generic.

let myIdentity4: GenericWithType<number> = identity;
console.log(myIdentity4(32));
// generic class
class GenericSum<T>{
    sum:T;
    add:(x:T,y:T)=>T;
    constructor(sum:T,add:(x:T,y:T)=>T){
        this.sum=sum;
        this.add=add;
    }
}
let myGenericSum=new GenericSum<number>(0,(x,y)=>x+y);
console.log(myGenericSum.add(10,20));
let myGenericSum1=new GenericSum<string>("", (x,y)=>x+y);
console.log(myGenericSum1.add("Hello ","Generics"));

interface Lengthwise {
    length: number;
}
// passing constraints to generics
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity<Object extends Lengthwise>({length:10, value:3}));
// Using Type Parameters in Generic Constraints

function getpropety<T,k extends keyof T>(obj:T,key:k):T[k]{
    return obj[key];
}
let obj={1:1,2:2}
console.log(typeof obj)
getpropety<typeof obj,1>(obj,1)

// Using Class Types in Generics
function Createinstance<GenericSum>(c:{new ():GenericSum}):GenericSum{
    return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
console.log(createInstance<Lion>(Lion).keeper.nametag)


/* declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>; */

// Variance Annotations

interface Producer<T>{
    make():T
}
interface Consumer<T>{
    consumer:(arg:T)=>void;
}

// Contravariant annotation
interface Consumer<in T> {
  consume: (arg: T) => void;
}
// Covariant annotation
interface Producer<out T> {
  make(): T;
}
// Invariant annotation
interface ProducerConsumer<in out T> {
  consume: (arg: T) => void;
  make(): T;
}

// =======================================
// Key of type Operator
// =======================================

type Point={x:number,y:number};
type key=keyof Point;
// If the type has a string or number index signature, keyof will return those types instead:
type  Arrayish={[index:string]:string};
type arraykey=keyof Arrayish;