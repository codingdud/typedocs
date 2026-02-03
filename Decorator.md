## Decorator is just fuction that helps to extent functionality of class or source code and annotate it with meta data

### things that can be Decorated
 - class defination
 - properties
 - methods
 - getter and setter(accossor)
 - parameters

 ```ts
 @Frozen
 class Example{

 }
 function Frozen(constructor:Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype)
 }
 ```