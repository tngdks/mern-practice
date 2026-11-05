let statustext = document.querySelector("#status");
let startBtn = document.querySelector("#go-live-btn");
startBtn.addEventListener("click", () => {
    statustext.innerText = "Live on tngdks";
});