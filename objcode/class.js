// A field declaration creates a public writeable property on a class:
class Point {
    x;
    y;
    name = undefined;
    constructor(xy = 0, y = 0) {
        if (typeof xy === "string" && this.name === undefined)
            this.name = "Animesh kumar";
        else {
            if (typeof xy === "number")
                this.x = xy;
            else
                this.x = 0;
            this.y = y;
        }
        if (this.name === undefined)
            this.name = "Animesh kumar";
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
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
class Sonar {
    ping() {
        return 10;
    }
}
class NameChecker {
    //value?: string | undefined="value";
    check(s) {
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
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
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
const d2 = d;
class AnimalHouse {
    resident;
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
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
    m = 10;
}
class Derived1 extends Base {
    // No modifier, so default is 'public'
    m = 15;
}
const d1 = new Derived();
//console.log(d1.m); // OK
// TypeScript does allow cross-instance private and protect access:
class A {
    x = 10;
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
class B extends A {
    f1(other) {
        //other.x
    }
}
let adff = new A();
console.log(adff["x"]);
class Base3 {
    x = 2;
}
class Derived2 extends Base3 {
    x = 34;
}
class Derived3 extends Base3 {
    f1(other) {
        //other.x=23;
    }
    f2(other) {
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
    static set count(val) {
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
