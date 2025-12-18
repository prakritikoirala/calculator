const number = [12,43,54,53,52,55];
const sumarray=(array)=>{
    let sum=0;
    for(let num of array){
        sum+=num;
    }
return sum;
    
};
console.log(sumarray(number));