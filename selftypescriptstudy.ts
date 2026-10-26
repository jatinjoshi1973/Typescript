let a:number = 80;
let b:number = 60;

function maths() {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);  
   
}
maths();

function add(c:number, d:number):number {
    return c + d;
   
}
console.log(add(30,40));

let aa:any ="Hello"
console.log(aa.toUpperCase());

let bb:unknown = "Selfstudy";
if (typeof bb ==="string"){
    console.log(bb.toUpperCase());
}

function greet(): void{
    console.log("Return value");
    
}
greet();

function throwerror(): never{
    throw new Error("Error not display");
    
}
throwerror();



