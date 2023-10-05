const colors = ["green" , "red" , "grey" , "biege" , "azure" , "blueviolet"  ,"yellow" , "purple"];
var btnColor = document.getElementById("btn");
var container = document.getElementById("container");
var navbar = document.querySelector("nav");
var textcontent = document.querySelector("h1"); 

btnColor.addEventListener("click" , (e) =>{
    let RandomColors = NumberRandom();
    if ( e.target.btnColor != 0) {
        container.style.background = colors[RandomColors];
        console.log("Changement the colors");
        navbar.classList.add("nav");
        textcontent.innerHTML = "BackGround : " + "" + colors[RandomColors];
    }
    else{
        navbar.classList.remove("nav");
    }
})

function NumberRandom(){
    return Math.floor(Math.random() * colors.length);
}

