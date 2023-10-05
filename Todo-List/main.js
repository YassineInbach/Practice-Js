var input = document.querySelector(".enter-list");
var addBtn = document.querySelector(".add-list");
var tasks = document.querySelector(".tasks");

var Newitems;

input.addEventListener("keyup" , () =>{
    if(input.value != 0){
        addBtn.classList.add("active");
        console.log("true");
    }
    else{
        addBtn.classList.remove("active");
        console.log("false");
    }
})

addBtn.addEventListener("click" , () =>{
    if(input.value != 0){
        Newitems = document.createElement('div');
        Newitems.classList.add("items");
        Newitems.innerHTML = ` <p id = "contenu"> ${input.value} </p>
        <div class="items-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div> `
        tasks.appendChild(Newitems);
        input.value = "";
        console.log("add")
    }
    else{
        alert('Enter vos liste');
        console.log("alert");
    }
})

tasks.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("fa-xmark")){
        e.target.parentElement.parentElement.remove();
        console.log("remove");
    }
})

tasks.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("fa-check")){
        e.target.parentElement.parentElement.classList.add("check");
        console.log("check");
    }
})
