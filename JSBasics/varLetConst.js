//block of code

//var -(global level or function level) - es5
//let ->es6 , global level / block level{} scope will be ended in {}, can re-initialise not redeclare
// const -> es6+ , global level / block level{} scope will be ended in {}, cannot re-initialise not redeclare
var greet = "Morning"

if(1==1){
    var greet = "Night"
} //if block is consider as global level not block level

function add (a,b){
    var greet = "Afternoon"
 return a+b
}// functions are consider as block level




let sum = add(5,9)
console.log(sum)

//anonyms funtion assinged to variable (do not have name) : anonyms funtion => Funtion expressions
let sumOfFuntion =  function(c,d){
    return c+d;
}
console.log(sumOfFuntion(6,7))

//arrow funtion

let sumOfIntegersUsingArrowFuntion = (e,f)=> e+f
console.log(sumOfIntegersUsingArrowFuntion(10,85))

console.log(greet)