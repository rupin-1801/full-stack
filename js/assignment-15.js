const input = document.getElementById("input");
const list = document.getElementById("list");
const button = document.getElementById("button");
const delet = document.getElementsByClassName("fa-trash");
const check = document.getElementsByClassName("fa-check");

window.onload = () => {
    list = JSON.parse(localStorage.getItem("list"));
    // console.log(list);
    // for(let i = 0; i < list.length; i++){
    //     addItem(list[i]);
    // }
}

function addItem(value){
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML += `<div class="item-value">${value}</div><i class="fas icon fa-check" onclick="CheckItem(event)"></i><i class="fas icon fa-trash" onclick="deleteItem(event)"></i>`
    list.prepend(item);
}

button.onclick = (event) => {
    event.preventDefault();
    if(input.value !== ""){
        addItem(input.value);
        document.getElementById("error").innerHTML = "";
        a = JSON.parse(localStorage.getItem('list')) || [];
        a.push(input.value);
        localStorage.setItem("list", JSON.stringify(a));
    }
    else{
        document.getElementById("error").innerHTML = "Enter a task first!";
    }
}

function deleteItem(event){
    parent = event.target.parentNode;
    parent.style.width="0px";
    i = 0;
    while(i < parent.childNodes.length){
        parent.childNodes[i].style.display="none";
        i++;
    }
    setTimeout(() => {
        parent.parentNode.removeChild(parent);
    }, 200);
}

function CheckItem(event){
    parent = event.target.parentNode;
    parent.style.opacity="0.5";
    event.target.previousSibling.style.textDecoration="line-through"
}
