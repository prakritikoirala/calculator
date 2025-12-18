// // 
// let arr = [12,143,45,56,65];
// for(let i=0;i<arr.length;i++){
//     let last = arr[arr.length-1];
// }
// let firstelement = last;
//     console.log(last);


// let arr =[12,148,43,43,45];

// for(let i=0;i<arr.length;i++){
//     let last = arr[arr.length-1];
//     arr.unshift(last);
//     arr.shift(arr);
// }
// console.log("rotate element");

let arr=[12,34,36,76,35];
for(let i=0;i<arr.length;i++){}
    let lastelement = arr[arr.length-1];
    arr.pop();
 arr.unshift(lastelement);

console.log("rotate",arr);