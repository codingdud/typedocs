// class decorator
function Log(constructor:Function){
  console.log(constructor.name);
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
  console.log(key)
}
// parameter decorator
function UpperPrams(target:any,key:string,index:number){
  console.log(key,index)
  console.log(target)
}
@Log
class A{
  @Upper
  name:string="aba";
  constructor(){
    this.name="Animesh"
  }
  @AddStar
  getname(@UpperPrams last:string){
    return this.name+" "+last;
  }
}

const a=new A();
console.log(a.getname("Kumar"))