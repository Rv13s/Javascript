const Person = require("./basics7Class");

//constructor should be same as per parent class
class Pet extends Person{

    // get location(){
    //     return "Bluecross"
    // }

   constructor(FirstName, SecondName){ 
    //1. call parent class constructor
    super(FirstName,SecondName)
   }
}

let pet = new Pet("Dog", 'Baskar')
console.log(pet.fullName())
console.log(pet.location)