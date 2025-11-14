// Print numbers from 1 to 10 using a for loop.
// Check a student’s age and marks for exam eligibility
// let marks = parseInt('enter the  marks');
// let age = prompt('enter the age ');
// if(age<=18 && marks<80){
//     console.log("eligible MBBS exam");}
//     else if(age<=18 &&marks<60){
//         console.log("it is also eligible for MBBS exam");

//     }
//     else if(age>18 && marks>40){
//         console.log("it is not eligible for exam");
//     }
//     else {
//         console.log("you are to younger");
//     }
 // multiple logical operator 
// let salary = parseInt(prompt("enter your salary"));
// let expirence= parseInt(prompt("enter your expirence"));
// if(salary>=500000 && expirence>=5){
//     console.log("your salary is ......");}
//     else if(salary>=50000 || expirence>=3){
//       console.log("moderate employee");  
//     }
// else{
//     console.log("junior employess");
// }

// check the ternary operator
// let number = 40;
// number>0?"it is positive":"it is negative"; i ;o
//

// leap year check
// let year = 89//praseInt(prompt("enter the yaer"));
// if(year%4==0){
//     console.log("it is a leap year");}
//     else if(year%400==0){
//     console.log("it is a leap yeaar");
//     }
//     else if(year%100){
//         console.log("it is a not a leap year");

//     }
//     else{
//         console.log("it is a not leap year");
//     }


// 6️⃣ Grade Calculator

// marks 0–100 दिइएको छ।
// ≥ 90 → "A"
// 75–89 → "B"
// 50–74 → "C"
// < 50 → "Fail"
// switch or if-else दुवै प्रयोग गर्न सकिन्छ
// let marks = 54//parseInt("enter the marks");
// if(marks>=90){
//     console.log("congatulation! you got a A++");

// }
// else if(marks>=75||marks >=89){
//     console.log("congatulation! you got B");

// }
// else if(marks>=50 || marks>=74){
//     console.log("congatulation! you got a C");
// }
// else {
//     console.log("you are fail");
// }
// Take three numbers and print which one is the middle value (not largest or smallest
// let num1=

// let num2=6
// let num3=
// if(num1<num2 || num2<num3){
//     console.log("It is a largest number");
// }
// else if(num1>num2 ||num2>num1){
//     console.log("It is a smallest number");
// }
// else{
//     console.log("It is a medium number");
// }
// 
// Check if a number is divisible by both 3 and 5, by only one, or by none.
let num1 ="prakriti";

if(num1%5==0 && num1%3==0){
    console.log("number is divisivble by both number");
}
else if(num1%5 ==0 && num1!=3){
    console.log("it is divisible by 5 and not divisible by 3");
}
else if(num1%3==0 && num1!=5){
    console.log("it is divisble by 3 and not divisible by 5");
}
else if(num1!=5 &&num1!=3){
    console.log("it is not divisble by both number");
}
else{
    console.log("haha");
}
