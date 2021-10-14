const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const box = document.getElementById("input");

window.onload = () => {
    checkDisable();
}

function checkDisable() {
    if(box.value == 0) {
        dec.disabled = true;
    }
    else{
        dec.disabled = false;
    }
}

dec.onclick = () => {
    box.value--;
    checkDisable();
}

inc.onclick = () => {
    box.value++;
    checkDisable();
}

