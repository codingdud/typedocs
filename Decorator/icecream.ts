 @Frozen
 class Example{
   @Emoji()
   flavor: string = "";
    constructor() {
     this.flavor = "vanilla";
   }
 }
 let obj=new Example();
 console.log(obj)
function Confirmable(){
   return function(target:Object,key:string|symbol,descriptor:PropertyDescriptor){

   }
}

function Emoji(emoji?: string) {
  return function (target: Object, key: string | symbol): void {
    // Decorator implementation
    console.log(`Decorating ${String(key)} with ${emoji || 'default emoji'}`);
    
    // Store metadata or modify the property
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    // Your decorator logic here
  };
}
 function Frozen(constructor:Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype)
 }