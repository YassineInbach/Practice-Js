var textcontent = document.querySelector("p");
var button = document.querySelectorAll(".button");
var count = 0;
button.forEach( (btns) => {
    btns.addEventListener("click" , (e) =>{
        textcontent.textContent = count;
        if(e.target.btns != 0 ){
            if ( btns.classList.contains('Decrease')){
                textcontent.textContent = count--;
                console.log("Decrease");
                
            }
            else if(btns.classList.contains('Increase')){
                textcontent.textContent = count++;
                console.log("Increase");
                
            }
            else{
                    if(btns.classList.contains('Reset')){
                        textcontent.textContent = 0;
                        console.log("Reset");
                }
        }
    }
    if(count < 0){
        textcontent.style.color = "green";
    }
    else {
        textcontent.style.color = "grey";
    }
    })
    
});
/*
if ( btns.classList.contains('Decrease')){
            textcontent.textContent = count--;
            console.log("Decrease");
        }
        else if(btns.classList.contains('Increase')){
                textcontent.textContent = count++;
                console.log("Increase");
        }
        if(btns.classList.contains('Reset')){
                textcontent.textContent = 0;
                console.log("Reset");
        }
    });  
    */