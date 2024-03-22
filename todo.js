let btn = document.querySelector("button");
let inp = document.querySelector("#inp1");
let ul = document.querySelector("#listcontainer");
btn.addEventListener("click",()=>{
    if (inp.value === "") {
        alert("please write something");
    }else {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    item.appendChild(span);
    }
    inp.value = "";
    saveData();
}
);
ul.addEventListener("click",function(e){
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML)
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();


