var list = document.querySelectorAll(".list li");
var box = document.querySelectorAll(".group");

list.forEach((List) => {
  List.addEventListener("click", (e) => {
    list.forEach((li) =>{
        li.classList.remove("active");
    });
    e.target.classList.add("active");
    box.forEach((group) => {
      group.style.display = "none";
    });

    console.log(e.target.dataset.filter);

    let boxes = document.querySelectorAll(e.target.dataset.filter);
    boxes.forEach((li) => {
      li.style.display = "inherit";
    });
  });
});
