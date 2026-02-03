/* 
    When you don’t want to repeat yourself, sometimes a type needs to be based on another type.

    Mapped types build on the syntax for index signatures, 
    which are used to declare the types of properties which have not been declared ahead of time:
 */
type OnlyBooleanAndHoure={
    [key:string]:boolean|Number;
}
const confroms:OnlyBooleanAndHoure={
    isAlive:true,
    isOk:false,
}
//A mapped type is a generic type which uses a union of PropertyKeys (
// frequently created via a keyof) to iterate through keys to create a type:
type OptionFlags<T>={
    [P in keyof T]:boolean;
}

type Feature={
    darkMode:()=>void,
    newUserProfile:()=>void;
}
type FeatureOptions=OptionFlags<Feature>;

// Mapping Modifiers
// There are two additional modifiers which can be applied during mapping: 
// readonly and ? which affect mutability and optionality respectively
// You can remove or add these modifiers by prefixing with - or +. 
// If you don’t add a prefix, then + is assumed.
type CreateMutable<T>={
    -readonly [P in keyof T]:T[P];
}
type LockAccount={
    readonly id:number;
    readonly name:string;
}
type UnlockAccount=CreateMutable<LockAccount>;
// Removes 'optional' attributes from a type's properties
type Concrete<T> ={
    [P in keyof T]-?:T[P];
}
type MaybeUser={
    id:number;
    age?:number;
    name?:number;
};
type User=Concrete<MaybeUser>;

/* 
Key Remapping via 
as
In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type: 
*/
type K=string;
type RemapType<T>={
    [P in keyof T as K]:T[P];
}
type Getters<T> ={
    [P in keyof T as `get${Capitalize<P&string>}`]:T[P]; // filtering out sring key : You can filter out keys by producing never via a conditional type:
}
interface Person3 {
    name: string;
    age: number;
    location: string;
}
type GetPerson=Getters<Person3>;


