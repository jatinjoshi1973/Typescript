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

    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }
}

const p = new Person();

p.age = 25;

console.log(p.age);

class Vehicle {

    constructor(public brand: string) {}

    start(): void {
        console.log(`${this.brand} Started`);
    }
}

class Car extends Vehicle {

    drive(): void {
        console.log(`${this.brand} is Driving`);
    }
}

const car = new Car("BMW");

car.start();
car.drive();

class BankAccount {

    constructor(
        public accountHolder: string,
        private balance: number
    ) {}

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    checkBalance(): void {
        console.log(`Current Balance: ₹${this.balance}`);
    }
}

const account = new BankAccount("Jatin", 5000);

account.checkBalance();
account.deposit(2000);
account.withdraw(1000);
account.checkBalance();









