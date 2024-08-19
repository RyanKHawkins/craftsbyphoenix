const categorySelector = document.querySelector("#category-selector");

categorySelector.addEventListener("change", () => {
    console.log("changed")
    console.log(categorySelector.value)
})