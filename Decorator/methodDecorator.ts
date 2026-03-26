function LogExecution(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // add decorater part which will log meta data for function call
    console.log(`Calling ${propertyKey} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @LogExecution
  add(a: number, b: number) {
    return a + b;
  }
}
let temp=new Calculator().add(2, 3);
console.log(temp)
// Calling add with [2, 3]
// 5