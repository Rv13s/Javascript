//sort an array
//1. string array, 2. Numbers array

//1. String
let fruits = ['strawberry', 'apple', 'custard Apple', 'banana', 'jackfruit']
fruits.sort() // inbuild method to sort a array
console.log(fruits) //[ 'apple', 'banana', 'custard Apple', 'jackfruit', 'strawberry' ]

//2. Numbers
let score = [25,6,8,9,2,25,87,1]
let score1 = [25,6,8,9,2,25,87,1]
console.log(score.sort()) // output like : [1, 2, 25, 25, 6, 8, 87, 9]

score.sort(function(a,b) {
    return a - b
})

let asscSort = score.sort((a,b)=> a-b)
let descSort = score1.sort((a,b)=> b-a)

console.log("Sort an array: ",asscSort);
console.log("Desc an array ", descSort)