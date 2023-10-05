var menuBar = document.querySelector(".menu-bar");
var toggele = document.getElementById("toggele");
var icon = document.querySelector(".fa-bars");
var darkMode = document.getElementById("dark-mode");
var iconDark = document.querySelector(".fa-moon");
var open = false;

toggele.addEventListener("click" , () =>{
    if (!open){
        icon.classList.toggle("fa-xmark");
        menuBar.classList.add("active");
        document.body.style.overflowY = "hidden";
        open = true;
        console.log("open");
    }
    else{
        icon.classList.toggle("fa-xmark");
        menuBar.classList.remove("active");
        document.body.style.overflowX = "auto";
        open = false;
        console.log("remove");
    }
});

darkMode.addEventListener("click" , () =>{
    document.body.classList.add("dark");
    if(iconDark.classList.contains("fa-moon")){
        iconDark.classList.replace("fa-moon" , "fa-sun");
        console.log("dark");
    }
    else{
        iconDark.classList.replace("fa-sun" , "fa-moon" );
        document.body.classList.remove("dark");
        console.log("light");
    }
});