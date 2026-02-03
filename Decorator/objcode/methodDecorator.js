var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogExecution(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        // add decorater part which will log meta data for function call
        console.log(`Calling ${propertyKey} with`, args);
        return original.apply(this, args);
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogExecution
], Calculator.prototype, "add", null);
let temp = new Calculator().add(2, 3);
console.log(temp);
// Calling add with [2, 3]
// 5
