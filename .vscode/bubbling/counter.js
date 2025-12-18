let count=80;
let newline= document.querySelector("#para");
let btn1= document.querySelector("#bt");
newline.textContent=count;

let btn2=document.querySelector("#bt1");
btn1.addEventListener("click",()=>{

    count++;
newline.textContent=count;

});

// let count1=0
btn2.addEventListener("click",()=>{
    count--;
    newline.textContent=count;
});