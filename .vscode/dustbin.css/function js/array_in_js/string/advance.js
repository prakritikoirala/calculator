// Count how many vowels are in a string.

// Reverse a string without using built-in reverse().

// Check if a string is a palindrome.

// Remove all spaces from a string.

// Count the frequency of each character in a string.

// Convert "hello world" → "Hello World" (title case).

// Find the longest word in a sentence.

// 🚀 Advanced Level Questions

// Remove all duplicate characters from a string.

// Find all unique characters from a string.

// Check if two strings are anagrams.

// Compress a string like "aaabbcc" → "a3b2c2".

// Find the first non-repeating character in a string.

// Convert a string "Prakriti_Koirala" → "prakriti koirala" (formatting)

// let ch = "prakriti koirala";
// let first = ch[0];

// if(first==="a" || first==="e"|| first==="i"|| first==="o"|| first==="u"){

//     console.log("it is vowel ",  );}

// let ch ="prakriti koirala";
// let vowels = "aeiou";
// let result = [];
// for(let i=0;i<ch.length; i++){
//     let letter = ch[i].toLowerCase();

// if(vowels.includes(letter)){
//     result.push(letter);
// }
// // }
// // console.log("vowel found ",result);
// // console.log("total vowel ",result.length);

// Reverse a string without using built-in reverse(). 
// let str ="hello ";
// let newva =[];
// for(let i=0;i<str.length-1;i++){
// str[i]+=newva;


// }
// console.log("reverse string");
// let ch = "prakriti";
// let reverse;
// for(let i=ch.length-1;i>=0;i--){
//     ch[i]+=reverse;
// }
// console.log("reverse");

let ch = "prakriti";
// let reverse = "";
// for(let i=ch.length-1;i>=0;i--){
//     reverse+=ch[i]}


// console.log(reverse);

// palindrome 
let str = "prakriti";
let reverse ="";
let palindrome = "";
for(let i=str.length-1;i>=0;i--){
  reverse+=str[i];

}
console.log("reverse",reverse);
if(palindrome===reverse){
    console.log("it is palindrome",palindrome);}
    else{
        console.log("it is not a palindrome",palindrome);
    }



