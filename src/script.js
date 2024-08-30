import "./products.js"
import { rotateProduct } from "./products.js";

const categorySelector = document.querySelector("#category-selector");
const categoryHeader = document.querySelector("#category-header");

// const prevButton = document.querySelector("#prev-button");
// const nextButton = document.querySelector("#next-button");

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

Array.from(document.querySelectorAll(".buttons")).forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id),
        rotateProduct(e.target.id)
    })
})