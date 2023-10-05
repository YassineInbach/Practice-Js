var btn = document.getElementById("btn");
var hexacolor = [0 , 1 ,2 , 3 , 4 , 5 , 6 ,7 ,8 ,9 ,"a" , "b" ,"c" ,"d" ,"e" , "f"];
var background = document.getElementById("container");
var textcontent = document.querySelector("h1");
var nav = document.querySelector("nav");
btn.addEventListener("click" , (e) =>{
    if (e.target.btn != 0){
        let hexa = "#";
        for (let i =1 ; i<=6 ; i++){
            let index = Math.floor(Math.random() * hexacolor.length);
            hexa = hexa + hexacolor[index];
        }  
        nav.classList.add("nav");
        container.style.background = hexa;
        textcontent.textContent = "BackGround : " + "" + hexa;
    }
  else{
    navbar.classList.remove("nav");
  }  
})