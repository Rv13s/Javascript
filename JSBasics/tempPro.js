let str = "Reverse a word"

console.log("******Inbuild methods******");
let rev = str.split('').reverse().join('');
console.log("Inbuild reverse: ", rev)

console.log("******Use for loop******");
let str1= "kunfu Panda"
let rev1 = "";
for(let i =str1.length-1; i>=0;i--){
    rev1 += str1[i]
}
console.log(rev1)

console.log("******Use shifting method******");


function reverseStr(str2){
    //let arr = str2.split("");
    //manualy split the string to array
    let arr = []
    for ( let i = 0; i<str2.length;i++){
        arr[i] += str2[i]
    }

    //pointer
    let left = 0
    let right = arr.length-1;

    //swifting
    while(left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;

    }

    
   
    // return arr.join(''); 
    //Manually join the array
    let result = ""
    for(let i = 0; i <arr.length; i++){
        result += arr[i];
    }
    return result ;


}

let val =  reverseStr("Legend of tarzan");
console.log(val)