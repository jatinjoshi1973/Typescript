//! Getter and Setters
class student {
    name: string = "";
    // #fees: number = 100 // !Used js and Ts
    private fees: number=100 //!only use in TS
    constructor(name:string){
        this.name = name
    }
    contact: number = 9421499990
    getfees(){
        return this.fees
    }
    setfees(fee:number){
        this.fees =fee
    }
}
 let s1 = new student("Jatin")
 console.log(s1.contact);
 console.log(s1.getfees());
 s1.setfees(200)
 console.log(s1.getfees());

//! Inheratance class example

 class Animal{
    legs: number = 4
    constructor(){} // Parent constructor      
    
 }
 // Child class constructor
 class Dog extends Animal{
    name: string = "";
    constructor(name:string){
        super() // Super Keyword Access the Parent constructor
        this.name = name
    }
 }
 let pet1 = new Dog("Tom");
 console.log(pet1.name);
 console.log(pet1.legs);

 //! When child class does not have the method then application access the parent
 //! constructor method by default.
 class Animal1 {
      sound(){
        console.log("No sound");
        }
        constructor(){}
 }
 class Dog1 extends Animal1 {
    name: string = "";
    // sound(): void {
    //     console.log("Bark");
    //     }
        constructor(name:string){
            super()
            this.name = name
        }

 }
 let pet2 = new Dog1("Tom");
 console.log(pet2.name);
 pet2.sound()

 //!Method overriding
 class Animal2 {
      sound(): string{
        return "No Sound"
        }
        constructor(){}
 }
 class Dog2 extends Animal2 {
    name: string = "";
    // sound(): string {
    //     return "Bark"
    //     }
        constructor(name:string){
            super()
            this.name = name
        }

 }
 let pet3 = new Dog2("Jerry");
 console.log(pet3.name);
 console.log(pet3.sound());
 
//!Abstraction
abstract class Animal4 {
    abstract sound() : string
    constructor(){}
} 
 class Dog3 extends Animal4 {
          name: string = ""
          sound(): string {
              return"Bark"
          }
    constructor(name:string){
        super()
        this.name = name
    }      
 }
 let pet4 = new Dog3("Bulldog")
 console.log(pet4.name);
 console.log(pet4.sound());

 abstract class Savingbank {
    abstract verify() : string
    constructor(){}
} 
 class Saving extends Savingbank {
          name: string = ""
          verify(): string {
              return"Token"
          }
    constructor(name:string){
        super()
        this.name = name
    }      
 }
 let newsaving = new Saving("Saving Account")
 console.log(newsaving.name);
 console.log(newsaving.verify());
 
 
 
 
 
 
 
 
 