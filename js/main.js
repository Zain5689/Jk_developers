let head = document.querySelector(".links");
let toggle = document.querySelector(".toggle");

toggle.onclick = function () {
  if (head.style.display === "none") {
    head.style.display = "flex";
    toggle.className = "fa-solid fa-xmark";
  } else {
    head.style.display = "none";
    toggle.className = "fas fa-bars toggle";
  }
};

//******************  Service ******************/

let boxes = document.querySelectorAll(".box");
let subheadings = document.querySelectorAll(".box h3");
let spans = document.querySelectorAll(".dots span");

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("actives");
    });
    subheadings.forEach((subheading) => {
      subheading.classList.remove("active");
    });

    spans.forEach((span) => {
      span.classList.remove("dot");
    });
    boxes[index].classList.add("actives");
    subheadings[index].classList.add("active");
    span.classList.add("dot");
    // Scroll to the clicked box
    boxes[index].scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
