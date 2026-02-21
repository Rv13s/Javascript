//basics
var marks = Array(6)
var marks = new Array(20,30,33,40,50,90)

//used one
var marks= [20,30,33,40,50,90]
console.log(marks)
const subMarks = marks.slice(2,5)


console.log("index 0f 2 :", marks[2]) //33
marks[3] = 45;
console.log(marks) // [ 20, 30, 33, 45, 50, 90 ]
//Length of array
console.log("Length of array: ", marks.length)  //6
// add element in the last
marks.push(100)
console.log(marks)
//remove the last element
marks.pop()
console.log("After pop", marks)
// Add element in firstt
marks.unshift(120)
console.log("After unshift", marks)
// remove element in firstt
marks.shift()
console.log("After shift", marks)

// create sub array slice
console.log("Sub array: ", subMarks)

//indexof
console.log(marks.indexOf(121))

//check 120 in the array
console.log(marks.includes(90))
console.log(marks.includes(120))

//sum all the numbers in the array
let sum = 0
for (let i = 0; i<marks.length;i++){
    sum = sum + marks[i]
}
console.log(sum)

//reduce filter map

//reduce() is an array method in JavaScript that reduces an array to a single value by applying a function to each element.

let totalMarks =  marks.reduce((sum,mark)=> sum + mark, 0);
console.log(totalMarks)

//filter() is used to create a new array that contains only the elements that match a condition.
let scroes = [11,12,13,14,15,16]
let newScores =[]

for(let i = 0; i<scroes.length;i++){
    if(scroes[i]%2 ==0){
        newScores.push(scroes[i])
    }
}
console.log(newScores)

let evenScore = scroes.filter(score=>score%2==0);
console.log(evenScore)

//map() is used to transform each element in an array and return a new array of the same length. It does not change the original array.

let mapMultiple = evenScore.map(score=>score*3);
console.log(mapMultiple)
let totalVal = mapMultiple.reduce((sum,val)=> sum + val,0)
console.log(totalVal)

let scroes1 = [11,12,13,14,15,16]
//create a new array with even numbers of scores and multiply each value with 3 and then sum all the values

let threeArrayMethods = scroes1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(threeArrayMethods)
