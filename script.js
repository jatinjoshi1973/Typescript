"use strict";
// let b ="10"
//  a = "hello"
//  console.log(a);
// let a: number = 10
// console.log(a);
// let fun = (a : string) => {
//     console.log(a);
// }
// fun ("10")
// let a : number = +true
// console.log(a);
// a = 10;
// console.log(typeof a);
// let b: any = "hello"
// if (typeof b == 'string') {
//     console.log(typeof b);
// }
// let b: unknown = "hello"
// if (typeof b == 'string') {
//     console.log(b.toUpperCase());
// }
// let salary : string | number | null = '50000'
// if (typeof salary == 'string') {
//     console.log(+salary);
// }
// let a : number = 10
// let b : number = 20
// console.log(a+b);
// console.log(b-a);
// console.log(b/a);
// console.log(a*b);
class Person {
    _age = 0;
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}
const p = new Person();
p.age = 25;
console.log(p.age);
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} Started`);
    }
}
class Car extends Vehicle {
    drive() {
        console.log(`${this.brand} is Driving`);
    }
}
const car = new Car("BMW");
car.start();
car.drive();
class BankAccount {
    accountHolder;
    balance;
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    checkBalance() {
        console.log(`Current Balance: ₹${this.balance}`);
    }
}
const account = new BankAccount("Jatin", 5000);
account.checkBalance();
account.deposit(2000);
account.withdraw(1000);
account.checkBalance();
