// Q2.

// Make a counter() function that increases the number every time function run हुन्छ।

// // Expected:
// function counter(){
//     let count =0;
//     function greet(){
//         console.log(""+1);
//         count++;
//         return counter;
//     }
// }
// let big= console.log(greet);
// console.log(big);

function counter(){
    let count=0;
    function number(){
        
        count++;
        console.log(count);
    }
    return number;
}
let va = counter();
    
    va();
    va();
    va();
