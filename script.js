const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear") {
            display.innerText = "";
        }else if(item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length -1);
        }else if(display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        }else if(display.innerText == "" && item.id == "equal") {
            display.innerText = "Null";
            setTimeout(() => (display.innerText =""), 2000);
       }else if(item.id == "sqrt"){
            display.innerText = Math.sqrt(display.innerText);
       /* }else if(item.id == ""){
            display.innerText = Math.pow(display.innerText,item.id);   
        }*/}
        /*else if(item.id == "π"){
            display.innerText = Math.PI(display.innerText);   
        }*/else{
            display.innerText += item.id;
        }
    };
});
//switch
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculadora = document.querySelector(".calculadora");
//const toggleIcon = document.querySelector("toggler-icon");
let isDark = true;
themeToggleBtn.onclick = ()=>{
    calculadora.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark =! isDark;
}