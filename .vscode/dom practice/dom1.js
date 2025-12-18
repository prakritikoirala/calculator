// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);
// console.log("hello")
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(heading);
// let elements = document.querySelectorAll;("p");
// console.dir(elements);
// let head = document.querySelectorAll("h1");
// console.log(head);

// let btn = document.querySelector("button")
// btn.addEventListener("click",()=>{
//     console.log(btn);
  
// inputElement.type="text"


let btn1 = document.querySelector("#css")
let paraelement= document.querySelector("p")

btn1 = addEventListener("click",()=>{
    paraelement.style.color="red";
    paraelement.style.backgroundColor="yellow"

})
let btn2 = document.querySelector("#addclass")
 btn2=addEventListener("click",()=>{
    paraelement.classList.add("activepara")
})
let btn3 = document.querySelector("#removeclass")
btn3 = addEventListener("click",()=>{
    paraelement.classList.remove("activepara")


})

let btn4 = document.querySelector("#toggleclass")
btn4 = addEventListener("click",()=>{
    paraelement.classList.toggle("activepara")
    btn4 .classList.toggle("activepara")


})
// let btn1 = document.querySelector("#css");
// let paraelement = document.querySelector("p");

// btn1.addEventListener("click", () => {
//     paraelement.style.color = "red";
//     paraelement.style.backgroundColor = "yellow";
// });

// let btn2 = document.querySelector("#addclass");
// btn2.addEventListener("click", () => {
//     paraelement.classList.add("activepara");
// });

// let btn3 = document.querySelector("#removeclass");
// btn3.addEventListener("click", () => {
//     paraelement.classList.remove("activepara");
// });

// let btn4 = document.querySelector("#toggleclass");
// btn4.addEventListener("click", () => {
//     paraelement.classList.toggle("activepara");
// });
