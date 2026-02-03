// A Decorator is a special kind of declaration 
// that can be attached to a class declaration, method, accessor, property, or parameter. 
// Decorators use the form @expression, 
// where expression must evaluate to a function 
// that will be called at runtime with information about the decorated declaration.
function sealed(target:unknown) {
  target=23;
}

// A Decorator Factory is simply a function 
// that returns the expression 
// that will be called by the decorator at runtime.
function color(val:string){
     return function(_target:unknown){
        _target=10;
     }
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
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class Example{
    @first()
    @second()
    method(){}
}

/* 
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called 
*/
 