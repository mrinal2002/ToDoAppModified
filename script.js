let outDiv = document.getElementById("inContainer");
let taskIn = document.getElementById("inp1");

taskIn.addEventListener("keydown", myFunction);

function myFunction(e) {
    if (e.key == "Enter") {
        if (taskIn.value == "") {
            alert("Please enter your task !!");
        }
        else {
            addToList();
            taskIn.value = "";
        }
    }
    let new_data = taskIn.value;
    if (localStorage.getItem("data") == null) {
        localStorage.setItem("data", "[]");
    }
    else {
        let old_data = JSON.parse(localStorage.getItem("data"));
        old_data.push(new_data);

        localStorage.setItem("data", JSON.stringify(old_data));
    }
}

function addToList() {
    let taskDiv = document.createElement("div");
    let taskSpan = document.createElement("span");

    taskSpan.innerHTML = taskIn.value;

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    check.addEventListener("click", mySecFunction);
    function mySecFunction() {
        if (check.checked == true) {
            taskSpan.style.textDecoration = "line-through";
        }
        else {
            taskSpan.style.textDecoration = "none";
        }
    }

    let btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.value = "x";

    btn.addEventListener("click", removeDiv);

    function removeDiv() {
        taskDiv.remove();
    }
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(check);
    taskDiv.appendChild(btn);
    outDiv.append(taskDiv);


}