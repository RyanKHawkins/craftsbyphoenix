const categorySelector = document.querySelector("#category-selector");
const categoryHeader = document.querySelector("#category-header");

categorySelector.addEventListener("change", () => {
    categoryHeader.innerText = categoryDisplayDict[categorySelector.value]
    console.log(categorySelector.value)
})
const categoryDisplayDict = {
    "all": "All",
    "bracelets": "Bracelets",
    "tails": "Tails",
    "miscellaneous": "Miscellaenous"
}