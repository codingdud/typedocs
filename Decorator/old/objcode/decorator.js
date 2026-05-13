var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var A_1;
// class decorator
function Log(constructor) {
    console.log(constructor.name);
}
const requiredProps = new Map();
function CollectRequired(requiredProps) {
    return function Required(target, key) {
        console.log("coolection", target, key);
        const name = target.constructor.name;
        const props = requiredProps.get(name) || [];
        props.push(key);
        requiredProps.set(name, props);
    };
}
// function decorator which add * at begining and end
function AddStar(target, key, desc) {
    const fn = desc.value;
    desc.value = function (...arg) {
        return `*${fn.apply(this, arg)}*`;
    };
}
// property decorator 
function Upper(target, key) {
    console.log("property key upper:", key);
}
// parameter decorator
function UpperPrams(target, key, index) {
    console.log(key, index);
    console.log(target);
}
let A = class A {
    static { A_1 = this; }
    static { this.instanceCount = 0; }
    constructor() {
        this.name = "aba";
        this.name = "Animesh";
        A_1.instanceCount++;
    }
    getname(last) {
        return this.name + " " + last;
    }
};
__decorate([
    Upper,
    CollectRequired(requiredProps)
], A.prototype, "name", void 0);
__decorate([
    AddStar,
    __param(0, UpperPrams)
], A.prototype, "getname", null);
A = A_1 = __decorate([
    Log
], A);
const a = new A();
const b = new A();
console.log(a.getname("Kumar"));
console.log(b.getname("Kumar"));
console.log("instance count:", requiredProps);
