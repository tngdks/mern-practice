let pageVariable = document.querySelector("#page");
let btnVariable = document.querySelector("#theme-btn");

let isDarkMode = false;

btnVariable.addEventListener("click", () => {

    if(isDarkMode === false){
        pageVariable.style.backgroundColor = "black";
        btnVariable.innerText = "Enable light Mode"
        isDarkMode = true;
    } else {
        pageVariable.style.backgroundColor = "white";
        btnVariable.innerText = "Enable dark Mode";
        isDarkMode = false;
    }
});