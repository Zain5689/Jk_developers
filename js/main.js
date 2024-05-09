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

/*************************Customer***********************/
// let customers = document.querySelectorAll(".customer");

// let headings = document.querySelectorAll(".customer h3");

// customers.forEach((customer, index) => {
//   customer.addEventListener("click", function () {
//     customers.foreach((customer, i) => {
//       customer.classlist.remove("activ");
//       headings[i].classlist.remove("activs");
//     });

//     customer.classList.add("activ");
//     headings[index].classList.add("activs");
//   });
// });

/***********************  Skills  *********************/
// let skills = document.querySelectorAll(".stack ul li");
// let parts = document.querySelectorAll(".image .img");

// skills.forEach((skill) => {
//   skill.addEventListener("click", () => {
//     let valueAttr = skill.getAttribute("data-filter");
//     // console.log(skill.getAttribute("data-filter"));
//     parts.forEach((part) => {
//       part.style.display = "none";
//       if (
//         part.getAttribute("data-filter").toLowerCase() ===
//         valueAttr.toLowerCase()
//       ) {
//         part.style.display = "flex";
//       }
//     });
//     parts.forEach((part) => {
//       part.classList.remove("activity");
//     });

//     parts.forEach((part) => {
//       part.classList.add("activity");
//     });

//     skills.forEach((skill) => {
//       skill.classList.remove("act");
//     });
//     skill.classList.add("act");
//   });
// });

const menuCategories = document.querySelectorAll(".stack ul li");
const menuProducts = document.querySelectorAll(".image .img");

menuCategories.forEach((category) => {
  category.addEventListener("click", () => {
    const valueAttr = category.getAttribute("data-filter");

    menuProducts.forEach((product) => {
      product.style.display = "none";
      if (
        product.getAttribute("data-filter").toLowerCase() ===
        valueAttr.toLowerCase()
      ) {
        product.style.display = "flex";
      }
    });

    menuProducts.forEach((product) => {
      product.classList.remove("activity");
    });
    menuCategories.forEach((product) => {
      product.classList.add("activity");
    });

    menuCategories.forEach((category) => {
      category.classList.remove("act");
    });
    category.classList.add("act");
  });
});
