/* (target, propertyKey, parameterIndex)
 */
function Inject(target, methodName, paramIndex) {
    console.log(`Injecting parameter at index ${paramIndex} in ${methodName}`);
}
class Service {
    save(data) {
        console.log(data);
    }
}
let abc = new Service();
abc.save("123");
