var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// A Decorator is a special kind of declaration 
// that can be attached to a class declaration, method, accessor, property, or parameter. 
// Decorators use the form @expression, 
// where expression must evaluate to a function 
// that will be called at runtime with information about the decorated declaration.
function sealed(target) {
    target = 23;
}
// A Decorator Factory is simply a function 
// that returns the expression 
// that will be called by the decorator at runtime.
function color(val) {
    return function (_target) {
        _target = 10;
    };
}
// Multiple decorators can be applied to a declaration, for example on a single line:
// @f @g x
/*
@f
@g
x
 */
// @f(@g(x)) one output will be input of another function
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class Example {
    method() { }
}
__decorate([
    first(),
    second()
], Example.prototype, "method", null);
/*
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
*/
