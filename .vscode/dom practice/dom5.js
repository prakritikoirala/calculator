let cells=document.querySelectorAll("td");
// cells.addEventListener("mousemove",()=>{
    cells.forEach(cell=>{
cell.addEventListener("mouseenter",()=>{
    cell.style.backgroundColor="red";
    });
    // cells.style.backgroundColor="red";
    cell.addEventListener("mouseleave",()=>{
        cell.style.backgroundColor="green";
    });
    
});

// let cells = document.querySelectorAll("td");

// cells.forEach(cell => {
//     cell.addEventListener("mouseenter", () => {
//         cell.style.backgroundColor = "red"; // hover color
//     });

//     cell.addEventListener("mouseleave", () => {
//         cell.style.backgroundColor = "green"; // default color
//     });
// });
