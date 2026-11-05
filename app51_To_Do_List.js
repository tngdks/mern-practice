{/* <input type="text" id="task-input" placeholder="Enter a new task">
<button id="add-btn">Add Task</button>
<ul id="task-list">
    <!-- Naye tasks yahan aayenge -->
</ul> */}


let taskVariable = document.querySelector("#task-input");
let addBtnVariable = document.querySelector("#add-btn");
let taskListVariable = document.querySelector("#task-list");

//add button dabane pr kya krna hai bataya
addBtnVariable.addEventListener("click", () => {
    let taskText = taskVariable.value;

    //guard clause lagaya 
    if ( taskText === "") {
        return;
    }

    //nayi list banaya
    let newLi = document.createElement("li");
    newLi.innerText = taskText + " ";

    //delete button banaya
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    //delete button click krne pr kya krna hai bataya
    delBtn.addEventListener("click", () => {
        newLi.remove();
    });

    //delete button ko list se attach kr diya
    newLi.appendChild(delBtn);

    //task aur delete dono ko list se attack kr diya
    taskListVariable.appendChild(newLi);

    //input saaaf kr diya
    taskVariable.value = "";

});