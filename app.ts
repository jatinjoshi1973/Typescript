// console.log("hello typescript");
// let a : number = 10
// a = "hello"
// console.log(a);

// let arr: number [] = []
// let f1 = (a,b,c,d) => {
//     arr.push(a,b,c,d)
//     console.log(arr);
    
// }
// f1(10, 20, 30, 40)

// let a : any = "ANY"
// let b : unknown = true
// console.log(a.toUpperCase());
// if (typeof b == "string") {
//     console.log(b.toUpperCase());
    
// }else if (typeof b == 'number'){
//     console.log(b*b);
    
// }else if (typeof b == 'boolean') {
//     if (b == true){
//         console.log('User is valid');
        
//     }
// }
//Any, Unknown, Union, Void, Never - these are the special datatypes in Type scripts

// let a : number | string | boolean = true

//! union
// let a : number | string = "Hello"

//!void
// let f1 = () : void => {
//     console.log("logic / (will not return anything)");
    
// }
// f1()

// !Never
// let f2 = (): never => {
//     while(true){}
     //No end of the block
// }

// !literal type
// let dice : 1|2|3|4|5|6;
// dice =6

// let role : "user" | "admin"
// role = "admin"

// !array
let arr : (number | string) [] = []
arr.push (10)
arr.push ("10")
console.log(arr);

// !tuple
let tup1 : [(number | string), number, number] = [10,20,30]
for (let i=0; i<tup1.length; i++ ) {
console.log(tup1[i]);
}

enum emp {
    role1 = "user",
    role2 = "admin",
}
let user1: emp = emp.role1
let user2: emp = emp.role2
let user3: emp = emp.role1
let user4: emp = emp.role2
let user5: emp = emp.role1
let user6: emp = emp.role2
console.log(user2);

let role: "user" | "admin"
//console.log(typeof role);
role = "user"
console.log(role);

//let a = 10
//a = "Hello" // ! will not work because of type inference
let a : unknown ="Hello"

// ! Narrowing
if (typeof a == "string"){
    console.log(a.toUpperCase());
    
}

// !type alias
// type a = number

// type a = number | string

// type quotetype = {id : a | boolean; quote: string; author: string}

// type arr = number[]

// type tup = [number, string, arr]
// let dob : tup = [22, "JAN", []]

// let quote 1 : quotetype = {
// id : 1,
// quote : "All is well",
// Author : "Ranchoddas Chanchad" 
//}

//! read only
// let readonly a: number = 10

// !as const
// What is difference between Const and as Const
// let obj ={
// name : "Prasd"} as const
// obj.name = "Vaibhav";
// obj.age = 24
// console.log(obj.name);

// ! Optional fields (?)
// let obj : { name: string, City : string, Salary ? : number} = {
//     name : "Prasd",
//     City : "Pune"
// }

// let tup : [ string, number?] = ["Hello"]

// let f1 = (name: string, city? : string) => {}
//f1("Prasad")
// Optional recomended in objects

// ! Default parameters
// let f1 = (name: string, bonus: number = 0) => {
//     console.log((name, bonus));
    
// }
// f1("Viabhav")
// Default parameters recomnded in Functions

// ! Function type
type Func = (a: number, b?: number)  => number;
let add: Func = (a: number, b: number = 0): number => {
    return a + b;
};
console.log(add (10,20));


let add1: Func = (a: number, b: number = 0): number => {
    return a - b;
};
console.log(add1 (10,20));


let add2: Func = (a: number, b: number = 0): number => {
    return a * b;
};
console.log(add2 (10,20));


let add3: Func = (a: number, b: number = 0): number => {
    return a / b;
};
console.log(add3 (60,12));
