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
