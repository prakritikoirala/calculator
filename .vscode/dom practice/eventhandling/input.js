let  btn1=document.querySelector("#btn");
let para=document.querySelector("p");
btn1 .addEventListener("click",()=>{
      let newline = document.createElement("p");
//     para.textContent="hello";
newline.textContent="hello pokhara ma aaudai xu";
btn1.appendChild(newline);
btn1.style.backgroundColor="yellow";

})