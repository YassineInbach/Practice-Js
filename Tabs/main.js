var btns = document.querySelectorAll(".btn");
var content = document.querySelectorAll(".content");
var line = document.querySelector(".line");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((btn) => {
            btn.classList.remove("active");
            console.log("remove");
        });
        e.target.classList.add("active");
        console.log("add");
        line.classList.add("line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        console.log("line");
        content.forEach((index) => {
            index.classList.remove("active");
        })
        content[index].classList.add("active");
    });
});
