const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const dailyContainer = document.getElementById("d-container");


// var list = document.getElementById("d-container");
// button = document.getElementById("reveal");
// function reveal()
// {
//     document.getElementById("d-task").style.display = "block";
// }


function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

document.getElementById('d-container').addEventListener("click", function(e) {
        e.target.classList.toggle("checked");
        saveData();
}, false);


// dailyContainer.addEventListener("click", function(e){
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//     }
//     else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//     }
//     saveData();
// }, false);

function saveData(){
    localStorage.setItem("data1", listContainer.innerHTML);
    localStorage.setItem("data2", document.getElementById('d-container').innerHTML);
}
document.set
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data1");
    document.getElementById('d-container').innerHTML = localStorage.getItem("data2");
}
showTask();