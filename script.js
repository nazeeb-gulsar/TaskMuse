const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
function addTask() {
    console.log("hmmmmmmm");
    if (inputBox.value ==='') {
        alert("Write something please");
    }
    else{
   let li = document.createElement("li");
   li.innerHTML = inputBox.value;
   li.className = "unchecked"; 
   listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML = "\u00d7";
   li.appendChild(span);
   saveTask(); 
   inputBox.value = '';
    }
   
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}
)
function saveTask(){
localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask()


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}
)
function saveTask(){
localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask()
