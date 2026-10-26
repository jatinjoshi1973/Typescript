"use strict";
class student {
    name = "";
    // #fees: number = 100 // !Used js and Ts
    fees = 100; //!only use in TS
    constructor(name) {
        this.name = name;
    }
    contact = 9421499990;
    getfees() {
        return this.fees;
    }
    setfees(fee) {
        this.fees = fee;
    }
}
let s1 = new student("Jatin");
console.log(s1.contact);
console.log(s1.getfees());
s1.setfees(200);
console.log(s1.getfees());
class Animal {
    legs = 4;
    constructor() { }
}
class Dog extends Animal {
    name = "";
    constructor(name) {
        super();
        this.name = name;
    }
}
let pet1 = new Dog("Tom");
console.log(pet1.name);
console.log(pet1.legs);
class Animal1 {
    sound() {
        console.log("No sound");
    }
    constructor() { }
}
class Dog1 extends Animal1 {
    name = "";
    // sound(): void {
    //     console.log("Bark");
    //     }
    constructor(name) {
        super();
        this.name = name;
    }
}
let pet2 = new Dog1("Tom");
console.log(pet2.name);
pet2.sound();
//!Method overriding
class Animal2 {
    sound() {
        return "No Sound";
    }
    constructor() { }
}
class Dog2 extends Animal2 {
    name = "";
    // sound(): string {
    //     return "Bark"
    //     }
    constructor(name) {
        super();
        this.name = name;
    }
}
let pet3 = new Dog2("Jerry");
console.log(pet3.name);
console.log(pet3.sound());
//!Abstraction
class Animal4 {
    constructor() { }
}
class Dog3 extends Animal4 {
    name = "";
    sound() {
        return "Bark";
    }
    constructor(name) {
        super();
        this.name = name;
    }
}
let pet4 = new Dog3("Bulldog");
console.log(pet4.name);
console.log(pet4.sound());
class Savingbank {
    constructor() { }
}
class Saving extends Savingbank {
    name = "";
    verify() {
        return "Token";
    }
    constructor(name) {
        super();
        this.name = name;
    }
}
let newsaving = new Saving("Saving Account");
console.log(newsaving.name);
console.log(newsaving.verify());
