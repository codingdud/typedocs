// Utlity types
// This type is meant to model operations like await in async functions, 
// or the .then() method on Promises - 
// specifically, the way that they recursively unwrap Promises.
type B=Awaited<Promise<Promise<Promise<string>>>>
// Constructs a type with all properties of Type set to optional. T
// his utility will return a type that represents all subsets of a given type.
type Todo={
    title:string,
    description:string,
    completed?: boolean,
}
function updateTodo(todo:Todo,update:Partial<Todo>){
    return{...todo,...update};
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
console.log(todo2)
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

interface Props{
    a?:number;
    b?:number;
}
let obj1:Props={a:1};
let obj2:Required<Props>={a:1,b:3};
let temp:Readonly<Todo>={
    title:"Home work",
    description:"solve maths questions"
}
// temp.description="solve English esay writing"

// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
type CatName="mili"|"bobi"|"brown";
interface CatInfo{
    bred:string;
    age:number;
}
let catBio:Record<CatName,CatInfo>={
    mili:{bred:"persion",age:23},
    bobi:{bred:"african",age:12},
    brown:{bred:"indian",age:43},
}
//Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

let temp2:Pick<Todo,"title"|"completed">={
    title:"create shorts",
    completed:true
}
// Constructs a type by picking all properties from Type and then removing Keys 
// (string literal or union of string literals). The opposite of Pick.
let temp3:Omit<Todo,"description">={
    title:"create shorts",
    completed:true
}
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
type T2 = Exclude<string | number | (() => void), Function>;

// Constructs a type by extracting from Type all union members that are assignable to Union.
type t3=Extract<"a"|"b","a"|"c">;

//Constructs a type by excluding null and undefined from Type.
type t4=NonNullable<number|string|null|undefined>;

// Constructs a tuple type from the types used in the parameters of a function type Type.
type t5=Parameters<(arg:string)=>string>
let someobj:t5=["hello"]

//Constructs a type consisting of the return type of function Type.
type t6=ReturnType<()=>any>;
