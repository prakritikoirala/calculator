// Write a function multiplier(num)
// This function returns another function जसले num * x multiply 

function mulitiply(){
    let a =6;
    let b=7;
    let mult = a*b;
    function another(){
        console.log(mult);
    }
        return another;
        
}
let one = mulitiply();
console.log(one);
one();