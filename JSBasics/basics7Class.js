module.exports =  class Person{
    fname = 'Gopal'
    age = 26

    //property
    get location()
    {
        return "chennai"
    }

    constructor(FirstName, SecondName){

        //console.log(FirstName,SecondName) // scope only in constructor
        this.FirstName = FirstName; // this represents current class ,
        this.SecondName = SecondName; // access acorss class
    }

    //method
    fullName(){
        return this.FirstName +" "+ this.SecondName
    }

}



// let person = new Person("Leon","kenedy");
// let person2 = new Person("Shan","Michalls");
// console.log(person.fname)
// console.log(person.location)
// console.log(person.FirstName)
// console.log(person.SecondName)
// console.log(person.fullName())
// console.log(person2.fullName())
// console.log(person.age)
// console.log(person2.age)