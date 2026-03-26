@Entity("users")
class User {
  name: string;
  constructor(){
    this.name="Animesh"
  }
}

const u = new User();
console.log((u as any).__tableName); // "users"

function Entity(tableName: string) {
  return function (constructor: Function) {
    constructor.prototype.__tableName = tableName;
  };
}

// class valitation
// making it not inheritable
// 