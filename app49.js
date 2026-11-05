let inputBoxVariable = document.querySelector("#player-name");
let welcomeMsg = document.querySelector("#welcome-msg");

inputBoxVariable.addEventListener("input", () => {
    let typedName = inputBoxVariable.value;
    welcomeMsg.innerText = `Welcome. ${typedName}`;
});