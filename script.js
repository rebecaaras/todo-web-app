const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function appendNewTask(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = '';
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