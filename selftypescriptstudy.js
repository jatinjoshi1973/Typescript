"use strict";
let a = 80;
let b = 60;
function maths() {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}
maths();
function add(c, d) {
    return c + d;
}
console.log(add(30, 40));
let aa = "Hello";
console.log(aa.toUpperCase());
let bb = "Selfstudy";
if (typeof bb === "string") {
    console.log(bb.toUpperCase());
}
function greet() {
    console.log("Return value");
}
greet();
function throwerror() {
    throw new Error("Error not display");
}
throwerror();
