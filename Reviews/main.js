const reviews = [ 
    {
    name : "Susan Smith",
    work : "WEB DEVELOPER",
    info : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
    img : "https://tse1.mm.bing.net/th?id=OIP.RlBgpeTTeV7q7CzLi_P9CgHaF7&pid=Api&P=0&h=180",
},
    {
    name : "anna johnson",
    work : "WEB DESIGNER",
    info : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie.",
    img : "https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&P=0&h=180",
},
{
    name : "peter jones",
    work : "INTERN",
    info : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
    img : "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api&P=0&h=180",
}
];

var check = reviews[0].hasOwnProperty("info");
console.log(check);

const Name = document.getElementById("name");
const Work = document.getElementById("work");
const Info = document.getElementById("info");
const Img = document.getElementById("img");

const BtnLeft = document.querySelector(".btn-left");
const BtnRight = document.querySelector(".btn-right");
const BtnRandom = document.querySelector(".random-btn");

var currentItem = 0;

window.addEventListener("DOMContentLoaded" , () =>{
  showPerson();
    console.log("page loaded");
});

function showPerson() {
    const item = reviews[currentItem];
    Img.src = item.img;
    Name.textContent = item.name;
    Work.textContent = item.work;
    Info.textContent = item.info;
  };

  BtnRight.addEventListener("click" , () =>{
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
    console.log("next-card");
  });

  BtnLeft.addEventListener("click" , () =>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
        console.log("left" + " " + currentItem);
         }
         showPerson();
         console.log("last card");
  });

  BtnRandom.addEventListener('click' , () =>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
    console.log("Btn-random");
  });
console.log(reviews.length);