//block of code

//var - es5
//let , const -> es6+

function add (a,b){
 return a+b
}

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