// class decorator
function Log(constructor:Function){
  console.log(constructor.name);
}

const requiredProps = new Map<string, string[]>();

function CollectRequired(requiredProps: Map<string, string[]>) {
  return function Required(target: any, key: string) {
    console.log("coolection",target, key);
    const name = target.constructor.name;
    const props = requiredProps.get(name) || [];
    props.push(key);
    requiredProps.set(name, props);
  }
}

// function decorator which add * at begining and end
function AddStar(target:any,key:string,desc:PropertyDescriptor){
  const fn=desc.value;
  desc.value=function (...arg:any[]){
    return `*${fn.apply(this,arg)}*`
  }
}
// property decorator 
function Upper(target:any,key:string){
  console.log("property key upper:", key);
}
// parameter decorator
function UpperPrams(target:any,key:string,index:number){
  console.log(key,index)
  console.log(target)
}
@Log
class A{
  static instanceCount=0;
  @Upper
  @CollectRequired(requiredProps)
  name:string="aba";
  constructor(){
    this.name="Animesh"
    A.instanceCount++;
  }
  @AddStar
  getname(@UpperPrams last:string){
    return this.name+" "+last;
  }
}

const a=new A();
const b=new A();

console.log(a.getname("Kumar"))
console.log(b.getname("Kumar"))
console.log("instance count:",requiredProps)