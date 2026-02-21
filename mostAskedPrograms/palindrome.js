let str = "madam"

let rev = str.split('').reverse().join('')

if(str.toLowerCase() === rev.toLowerCase()){
    console.log(`Giver string "${str}" is palindrome`)
}else console.log('Not a palindrome')