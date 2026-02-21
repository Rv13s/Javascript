const flag = true

if (!flag) {
    console.log("Condition satisfied")
} else {
    console.log("flag: ", flag)
    console.log("Not satisfied")
}

let i = 0
//while(true) //It run a infinite loop, basicly while loop runs till when the condition is fails
while (i > 10) {
    i++
    console.log("while loop i : ", i)
}

//Do loop atlest run one time eventhough condition is not satisified
do {
    i++
} while (i > 10);
console.log("Do while loop: ", i)

//For loop is use, when only you know how many times it can loop

//from 1 to 10 give me a comman multiple values of 2 and 5

let n = 0;
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k);
        if(n==3)
       break;
    }
}

let required = true
while(required){
    console.log(required)
    required=false;

}