let pageVariable = document.querySelector("#page");
let btnVariable = document.querySelector("theme-btn");

btnVariable.addEventListener( "click", () => {
    pageVariable.style.backgroundColor = "black";
    btnVariable.innerText = "Enable Light Mode";
    btnVariable.style.border = "2px solid red";
})