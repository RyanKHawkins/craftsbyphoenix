const displayArea = document.querySelector("#display-area");

const products = [
    {
        name: "Beaded Blue Heart & Flower Bracelet",
        image: "src/assets/images/20240824191227.jpg",
        category: "bracelets",
        description: ""
    },
    {
        name: "Rubber Band Fishtail Bracelet",
        image: "src/assets/images/20240824184912.jpg",
        category: "bracelets",
        description: "Rubberband bracelet with fishtail weave"
    }, 
]

export function displayProducts() {
    displayArea.innerHTML = 
    `<div class="product-displays">
        <h3> ${products[0].name}</h3>
        <img src="${products[0].image}" class="product-images"/>
        <p id="product-descriptions">${products[0].description}</p>
    </div>`
}

displayProducts()

console.log(products)