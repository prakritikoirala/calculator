// let paragraph= document.querySelector("#first");
// paragraph.textContent="this is a paragrapg";
// paragraph.textContent="hello i a am prakriti koirala"
// let btn2 = document.querySelector("#btn");
// btn2.addEventListener("click",()=>{
//     document.body.appendChild(paragraph);
// })

// const { createElement } = require("react");

// let paragraph2= Document.querySelector("#first");
// paragraph.textContent="this is a my book";

// let btn = document.querySelector("#btn2");
// btn.addEventListener("click",()=>{
// let newpara=document.createElement("p");
// newpara.textContent="this is a new paragraph";
// document.body.appendChild(newpara);
// })

let list=document.querySelector("ul");
let btn2 = document.querySelector("#btn");
btn2.addEventListener("click",()=>{
    let newline = document.createElement("li");
// newline.textContent="circle";
// newline.textContent="shape";
// newline.textContent="rectengale";
// newline.textContent="pie";
// newline.textContent="bowl";
newline.textContent="circle";
list.appendChild(newline);
});