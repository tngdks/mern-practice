{/* <h1 id="counter-display">0</h1>

<button id="decrease-btn"> - Decrement </button>
<button id="reset-btn"> Reset </button>
<button id="increase-btn"> + Increment </button> */}

let count = 0;
let displayBtn = document.querySelector("#counter-display");
let decreaseBtn = document.querySelector("#decrease-btn");
let resetBtn = document.querySelector("#reset-btn");
let increaseBtn = document.querySelector("#increase-btn");

function displayColor(count) {
    if ( count > 0 ){
        return "Green";
    } else if ( count < 0) {
        return "Red";
    } else if( count === 0) {
        return "Black";
    }
}

increaseBtn.addEventListener("click", () => {
    count++;
    displayBtn.innerText = count;
    displayBtn.style.color = displayColor(count);
});

decreaseBtn.addEventListener("click", () => {
    count--;
    displayBtn.innerText = count;
    displayBtn.style.color = displayColor(count);
});

resetBtn.addEventListener("click", () => {
    count = 0;
    displayBtn.innerText = count;
    displayBtn.style.color = displayColor(count);
});