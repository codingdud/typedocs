// A field declaration creates a public writeable property on a class:
class Point {
  public x?: number;
  public y?: number;
  readonly name: string | undefined = undefined;
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor();
  constructor(xy: string | number = 0, y: number = 0) {
    if (typeof xy === "string" && this.name === undefined)
      this.name = "Animesh kumar";
    else {
      if (typeof xy === "number") this.x = xy;
      else this.x = 0;
      this.y = y;
    }
    if (this.name === undefined) this.name = "Animesh kumar";
  }
}
/* 
    The strictPropertyInitialization setting controls whether class fields need to be initialized in the constructor.
    readonly
    Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
 */

let obj1 = new Point();
console.log(obj1);

// 'super' must be called before accessing 'this' in the constructor of a derived class.

/* 
    TypeScript has some special inference rules for accessors:
    If get exists but no set, the property is automatically readonly
    If the type of the setter parameter is not specified, it is inferred 
    from the return type of the getter
 */
class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}
// implements
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping(): number {
    return 10;
  }
}
// It doesn’t change the type of the class or its methods at all
interface Checkable {
  check(name: string): boolean;
  value?: string;
}

class NameChecker implements Checkable {
  //value?: string | undefined="value";
  check(s: string) {
    return s.toLowerCase() === "ok";
  }
}
const obj2 = new NameChecker();
// console.log(obj2.value)
// Similarly, implementing an interface with an optional property doesn’t create that property:

/*
    extends Clauses
    Classes may extend from a base class. A derived class has all the properties and methods of its base class, and can also define additional members.
 */
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");
/*
 It’s important that a derived class follow its base class contract. 
 Remember that it’s very common (and always legal!) 
 to refer to a derived class instance through a base class reference: 
 */
const d2: Base = d;
//This can be a problem when you only want to re-declare
// a more accurate type for an inherited field. To handle these cases,
// you can write declare to indicate to TypeScript that
// there should be no runtime effect for this field declaration.

interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
/* 
    Exposure of protected members
    Derived classes need to follow their base class contracts, 
    but may choose to expose a subtype of base class with more capabilities. 
    This includes making protected members public:
 */
class Base1 {
  protected m = 10;
}
class Derived1 extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d1 = new Derived();
//console.log(d1.m); // OK

// TypeScript does allow cross-instance private and protect access:

class A {
  private x = 10;

  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
class B extends A {
  f1(other: B) {
    //other.x
  }
}
let adff = new A();
console.log(adff["x"]);

class Base3 {
  protected x: number = 2;
}
class Derived2 extends Base3 {
  protected x: number = 34;
}
class Derived3 extends Base3 {
  f1(other: Derived2) {
    //other.x=23;
  }
  f2(other: Derived3) {
    other.x = 23;
  }
}

// static block
class Foo {
  static #count = 0;
  static {
    Foo.#count = 1001;
  }
  static get count() {
    return Foo.#count;
  }
  static set count(val: number) {
    Foo.#count = val;
  }
  inc() {
    Foo.#count++;
  }
}
console.log(Foo.count);
Foo.count = 23;
console.log(Foo.count);
let asdf = new Foo();
// asdf.count=123; //instance can not access static method and property;
asdf.inc();
// this at Runtime in Classes

class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
//  by default, the value of this inside a function depends on how the function was called.
// this Types
class Box1 {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class Box {
  content: string = "";
  sameAs(other: Box) {
    return other.content === this.content;
  }
}
class DerivedBox extends Box {
  otherContent: string = "?";
}
const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
base.sameAs(derived);

/* 
  abstract
  Classes and Members
  Classes, methods, and fields in TypeScript may be abstract.

  An abstract method or abstract field is one that hasn’t had an implementation provided. 
  These members must exist inside an abstract class, which cannot be directly instantiated.

  The role of abstract classes is to serve as a base class for subclasses which do implement 
  all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.
 */

/* 

Relationships Between Classes
In most cases, classes in TypeScript are compared structurally, the same as other types.

For example, these two classes can be used in place of each other because they’re identical:
 */
