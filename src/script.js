const categorySelector = document.querySelector("#category-selector");
const categoryHeader = document.querySelector("#category-header");

categorySelector.addEventListener("change", () => {
    categoryHeader.innerText = categoryDict[categorySelector.value]
    console.log(categorySelector.value)
})
const categoryDict = {
    "bracelets": "Bracelets",
    "tails": "Tails",
    "miscellaneous": "Miscellaenous"
}