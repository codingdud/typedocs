 @Frozen
 class Example{
    
 }
 function Frozen(constructor:Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype)
 }