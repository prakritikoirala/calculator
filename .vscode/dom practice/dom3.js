// let paragraph =document.querySelector("h1");
// alert("paragraph");
let paragraph=document.getElementById("first");
let btn=document.getElementById("second");
btn.addEventListener("click",()=>{
paragraph.textContent="hello";
})