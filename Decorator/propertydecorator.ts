const requiredProps = new Map<string, string[]>();

function Required(target: any, propertyKey: string) {
  const className = target.constructor.name;
  const props = requiredProps.get(className) || [];
  props.push(propertyKey);
  requiredProps.set(className, props);
}


function validate(obj: any) {
  const props = requiredProps.get(obj.constructor.name) || [];
  for (const prop of props) {
    if (!obj[prop]) {
      throw new Error(`${prop} is required`);
    }
  }
}


class User {
  @Required
  name!: string;

  age!: number;
}
const u = new User();
// u.name = "John";
validate(u); // ✅ No error - name is provided
