let day = 'Wednesday '
//String also same like array methods
//length
console.log(day.length)

//arrayIndex 
console.log(day[3])

//subString 
let subDay =  day.slice(0,3)
console.log(subDay)

//slit before and after s
let splitDays = day.split('s')
console.log(splitDays) //[ 'Wedne', 'day ' ]
console.log(splitDays[1]) //day | one empty space
console.log(splitDays[1].length) //4
console.log(splitDays[1].trim().length) //3 , trim remove the extra space front and back

//string to number
let date = '23'
let nextDate = '27'
console.log(typeof(date)) //string
let date1 = parseInt(date)
console.log(typeof(date1)) //number

//sub to date
let newDate = nextDate - date
console.log(newDate)
console.log(typeof(newDate)) // JS automaticaly converts the type
let diffDate = parseInt(nextDate)-parseInt(date) // manually change the types string to number
console.log(diffDate)
console.log(typeof(diffDate)) //number
console.log(typeof(diffDate.toString())) //string

//concade a string
let newQuote = day + "is a gopal day"
console.log(newQuote)
console.log( newQuote.indexOf('day')) //6
console.log( newQuote.indexOf('day',7)) //21