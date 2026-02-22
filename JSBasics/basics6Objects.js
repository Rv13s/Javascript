let person = {
    "FirstName" : "Gopal",
    "SecondName" :"kumar",
    "Gender" : "Male",
        "age": 23,
    "FullName" : function(){
       return this.FirstName+this.SecondName
      //  console.log(this.FirstName+" " +this.SecondName)
    }
}

console.log(person.FullName());
console.log(person.SecondName)
console.log(person['SecondName'])
console.log(person)
person.SecondName = 'Kumar patel'
console.log(person['SecondName'])
//person.
console.log(person.age)
console.log(person.SecondName)
//delete person.age
console.log( person.age)
console.log(person)

delete person.Gender
console.log("Gender" in person)

for(let keys in person){
    console.log(person[keys])
}