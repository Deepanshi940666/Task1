let boxes = document.querySelectorAll(".box");
const colors = ["red", "blue", "green"];   // array of colors
let count=0;
let showCount=document.getElementById("counting");
let reset=document.querySelectorAll(".resetor");
// let dataIndex=document.boxes.dataset;
// console.log(dataIndex);

boxes.forEach(box => {
    box.addEventListener("click", () => {
        count++;
        console.log(count);
        showCount.innerText = "Total clicks: "+count;
        let i = Number(box.dataset.index);   // current color index
        
        i = (i + 1) % colors.length;        // i+1 is increament and the  % colors.length will make loop means if the color will end then the loop will start again
        
        box.style.backgroundColor = colors[i]; // update box color
        
        box.dataset.index = i;              // save new color index
    });
});
reset.forEach(resets => {
    resets.addEventListener("click", () => {
        count=0;
        console.log(count);
        //make the count 0
        showCount.innerText = "Total Count: "+count;

        // Reset each box to original color
        boxes.forEach((box, i) => {
            box.style.backgroundColor = colors[i];  // back to red/blue/green
            box.dataset.i = i;                  // reset index
        }); 
    });
});
