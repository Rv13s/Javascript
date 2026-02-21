let str = 'Gopal';
let rev = str.split('').reverse().join('')
console.log(rev)

console.log("***********For loop***********")

let str1 = 'Automation testing'
let rev1 = '';

for(let i = str1.length-1 ; i>=0; i--){
    rev1 += str1[i]
}

console.log(rev1)

console.log("***********Using funtion***********")

function reverseStrings(stringInput){
    let rev = '';
    for(let i = stringInput.length-1 ; i >= 0 ; i --){
        rev += stringInput[i];
    }
    return rev ;
}

console.log(reverseStrings('gopal andrea'))

console.log("***********Without Extra Variable (Using Swapping - More Advanced)***********")

function reverseStringAdv(str){
let arr = [];

 // Step 1: Manually convert string to array
for(let i = 0; i<str.length;i++){
    arr[i] = str[i];
}

// Step 2: Two pointers
let left = 0;
let right = arr.length-1;

// Step 3: Swap characters
while(left>right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right]=temp

    left++;
    right++;

}


// Step 4: Convert array back to string

let result = "";
for(let i = 0;i<arr.length; i++){
    result +=arr[i];
}

return result ;

}

console.log(reverseStringAdv("playwright"));