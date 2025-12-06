let userText = document.getElementById("userText");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("LowerCase");
let copy=document.querySelectorAll(".copybtn");
let reset=document.getElementById("reset");

userText.addEventListener("input", function() {
    // userText.innerText=" ";
    let text = userText.value;   // user typed text
    upperCase.innerText = text.toUpperCase();  // convert to uppercase
    lowerCase.innerText = text.toLowerCase();  // convert to lowercase
});
reset.addEventListener("click", function() {
    // userText.innerText=" ";
    userText.value="";   // user typed text become null
    upperCase.innerText = "";  // no uppercase 
    lowerCase.innerText = "";  // no lowercase
});

copy.forEach((btn, index) => {
  btn.addEventListener("click",function(){
    let textBox;
    if(index===0)textBox=userText;
    if(index===1)textBox=upperCase;
    if(index===2)textBox=lowerCase;

    let text = textBox.innerText || textBox.value;

        // copy text
        navigator.clipboard.writeText(text);//Navigator represents your browser,The clipboard is the place where copied text is stored,This is a method/function provided by the clipboard.
        // change button text
        btn.innerText = "Copied!";

        // after 3 seconds, change back to "copy"
        setTimeout(() => {
        btn.innerText = "Copy";
        }, 3000);

        // alert("Copied! ");

 });
});
