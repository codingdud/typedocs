/* (target, propertyKey, parameterIndex)
 */
function Inject(target: any, methodName: string, paramIndex: number) {
  console.log(`Injecting parameter at index ${paramIndex} in ${methodName}`);
}
class Service {
  save(@Inject data: string) {
    console.log(data);
  }
}

let abc=new Service()
abc.save("123")