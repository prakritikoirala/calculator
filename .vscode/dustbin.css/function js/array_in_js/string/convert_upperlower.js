// let a = "prakriti koirala";
// let b = a.toUpperCase();
// console.log(b);
// let c = b.toLowerCase();
// console.log(c);


// extract the three character  from a string 
// let a = "prakriti";
// let b = a.slice(0,3);
// console.log(b);

// Remove all spaces from a string
// let str = "I am prakriti koirala";
// let space = " ";
// for(let i=0;i>=str.length;i++){
//     let a = str.includes(space);
// // }
// console.log(a);

let str = "I  am prakriti koirala";
let remove = " ";
for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        remove+=str[i];
    }
        
    }


console.log(remove);