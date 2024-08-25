const displayArea = document.querySelector("#display-area");

const products = [
    {
        name: "Beaded Blue Heart & Flower Bracelet",
        image: "src/assets/images/20240824191227.jpg",
        category: "bracelets",
        description: "A handmade bracelet themed around very cool and earthy tones."
    },
    {
        name: "Fishtail Woven Rubber Band Bracelet",
        image: "src/assets/images/20240824184912.jpg",
        category: "bracelets",
        description: "A beautifully woven fishtail rubber band bracelet themed around a tri color combo that was completely random."
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