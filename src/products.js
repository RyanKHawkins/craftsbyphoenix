const displayArea = document.querySelector("#display-area");

const products = [
    {
        name: "Rubber Band Fishtail Bracelet",
        image: "src/assets/images/20240824184912.jpg",
        category: "bracelets",
        description: "Rubberband bracelet with fishtail weave\nLet's add more text to see if this will expand like I'd like it to."
    }
]

function displayProducts() {
    // let display = document.createElement("div");

    // let h3 = document.createElement("h3");
    // h3.innerText = products[0].name;
    // console.log("h3: ", h3)
    // display.append(h3)

    // let image = document.createElement("img");
    // image.src = products[0].image
    // display.append(image)

    // let p = document.createElement("p");
    // p.innerText = products[0].description
    // display.append(p)

    displayArea.innerHTML = 
    `<div class="product-displays">
        <h3> ${products[0].name}</h3>
        <img src="${products[0].image}" class="product-images"/>
        <p id="product-descriptions">${products[0].description}</p>
    </div>`
    
}