let hiddenBtn = document.querySelector("#ninja-btn");

hiddenBtn.addEventListener("mouseenter", () => {
    hiddenBtn.innerText = "Surprise";
});

hiddenBtn.addEventListener("mouseleave", () => {
    hiddenBtn.innerText = "";
});