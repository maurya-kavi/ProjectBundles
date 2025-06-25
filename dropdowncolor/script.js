// // prompt("hey")
// const colorSelector=document.getElementById('color-select')
// const mycolor=document.createElement("option")
// mycolor.value=promt();
// colorSelector.append(mycolor);
// alert('hello')

window.onload=function(){
    let savedchanges=localStorage.getItem("selectedcolor");
    if(savedchanges){
        document.body.style.backgroundColor=savedchanges;
        document.getElementById("color-select").value=savedchanges;
    }
}

function changebackground() {
    let selectedcolor = document.getElementById("color-select").value;
    document.body.style.backgroundColor = selectedcolor;
    localStorage.setItem("selectedColor", selectedcolor); // Save selection
}
// changes are not saved in local storage.......... 
// look at later on.........

/*
document.getElementById("color-select").onchange=function(){
    document.body.style.backgroundColor =this.value;
} */

// or

// function changebackground() {
//     let selectedcolor = document.getElementById("color-select").value;
//     document.body.style.backgroundColor = selectedcolor;
// }



function addcolor() {
    let colorinput = document.getElementById("newcolor").value.trim(); // trim() to remove the extra space
    let addcolor = document.createElement("option");
    if (colorinput) {
        let colordropdown = document.getElementById("color-select")
        addcolor.value = colorinput;
        addcolor.textContent = colorinput;
        colordropdown.append(addcolor);
        colordropdown.value = colorinput;
        changebackground();
        document.getElementById("newcolor").value = "";
    }
    else {
        alert("please enter a valid color name")
    }
}

