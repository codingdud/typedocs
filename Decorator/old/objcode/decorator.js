var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// class decorator
function Log(constructor) {
    console.log(constructor.name);
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
    console.log(key);
}
// parameter decorator
function UpperPrams(target, key, index) {
    console.log(key, index);
    console.log(target);
    return key[index].toUpperCase();
}
let A = class A {
    constructor() {
        this.name = "aba";
        this.name = "Animesh";
    }
    getname(last) {
        return this.name + " " + last;
    }
};
__decorate([
    Upper
], A.prototype, "name", void 0);
__decorate([
    AddStar,
    __param(0, UpperPrams)
], A.prototype, "getname", null);
A = __decorate([
    Log
], A);
const a = new A();
console.log(a.getname("Kumar"));
