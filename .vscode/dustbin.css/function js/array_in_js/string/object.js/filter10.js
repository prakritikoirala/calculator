let arr= [12,43,56,4,3];
const array = (num)=>{
    for(let i=0;i<num.length;i++){
        let num1 = num[i];
        if(num1<10){
            console.log("output number ",num1);
        }
        else{
            console.log("output:",num1);
        }
    }


        return num;
    

    };
    

console.log(array(arr));