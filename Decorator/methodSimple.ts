class Calculator{
  @LogOutput
  add(a: number, b: number) {
    return a + b;
  }
}

function LogOutput<T extends (this:any,...args:any[])=>any>(value:Function,context:ClassMethodDecoratorContext){
  return function(this:ThisParameterType<T>,...args:Parameters<T>){
  console.log(`Calling ${String(context.name)} with`, args);
    const result = value.apply(this, args);
    console.log("Result:", result);
    return result;
  }
}
const obj=new Calculator()
obj.add(1,2)   