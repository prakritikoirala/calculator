// Write a function that returns the second largest number in an array.

// Rotate an array by 1 place (e.g. [1,2,3] → [3,1,2]).

// Find frequency of each element in an array.

// Find pair of elements whose sum = target value.

// Sort an array without using .sort() (use loops).

// Remove all falsy values (false, 0, "", null, undefined).

// Write a function that returns the second largest number in an array.
// let arr =[10,12,32,43,43,24];
// for(let i=0;i<arr.length;i++){
//     let secondlargest;
//     if(max<arr[i]);
//     max=arr[i];
//     if(secondlargest<max);
//     max= secondlargest;
//     console.log("it is second larg

let arr =[10,12,32,43,24];
let max = -Infinity;
let secondmax = -Infinity;
for(let i=0;i<arr.length;i++){

    let num = arr[i];
    if(num>max){
        secondmax=max;
        max=num;
    }
    else if(num>secondmax && num!=max){
        secondmax=num;
    }

}
console.log("second largest:",secondmax);
/// find duplicate number
function removeDuplicate(arr){
let uniqueArr=[];
for(let i=0;i<arr.length;i++){
    if(!uniqueArr.includes(arr[i])){

    
    uniqueArr.push(arr[i]);
    }
}

return  uniqueArr;
}
let number = [14,53,53,52,53];
let result = removeDuplicate(number);
console.log(result);
