function ReadOnly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.set = function () {
    throw new Error("This property is read-only");
  };
}

class Userr {
  private _role = "admin";

  @ReadOnly
  get role() {
    return this._role;
  }
}

let obj=new Userr();
const u = new Userr();
u.role = "user"; // ❌ Error
