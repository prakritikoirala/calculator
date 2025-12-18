// function greet(){
//     let name = "prakriti koirala"

// function preet(){
//     console.log(name);
// return preet;
//  preet();
// }
// //  greet();

// function  greet(){
//     let name ="prakriti koirala";
//     function preet(){
//         console.log(name);

//     }
//     r
// }

function Greet(){
    let name = "prakriti";
    function preet(){
        console.log(name);
    }
    return preet;
}
let variable = Greet();
console.log("print",variable);
variable();