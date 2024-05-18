const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function appendNewTask(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    inputBox.value = '';
    saveData();
}

function addTask(){
    if (inputBox.value === ''){
        alert('You must type something!');
    } else {
        appendNewTask();
    }
}

inputBox.addEventListener('keydown', function (e){
    if (e.key === 'Enter'){
        addTask();
    }
})

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

    saveData();
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();