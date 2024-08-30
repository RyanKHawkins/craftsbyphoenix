const displayArea = document.querySelector("#display-area");

const products = [
    {
        name: "Beaded Blue Heart & Flower Bracelet",
        image: "src/assets/images/beadedblueandflower.jpg",
        category: "bracelets",
        description: "A handmade bracelet themed around very cool and earthy tones."
    },
    {
        name: "Fishtail Woven Rubber Band Bracelet",
        image: "src/assets/images/fishtailwoven.jpg",
        category: "bracelets",
        description: "A beautifully woven fishtail rubber band bracelet themed around a tri color combo that was completely random."
    }, 
    {
        name: "Kandi Flowerz",
        image: "src/assets/images/kandiflowerz.jpg",
        category: "bracelets",
        description: "Cute little kandi flowers that you can display or use to make your very own kandi flower bracelet!"
    },
    {
        name: "Orange vs Red",
        image: "src/assets/images/orangevsred.jpg",
        category: "bracelets",
        description: "A carefully handmade bracelet where two colors fight to be the coolest! :]"
    },
    {
        name: "Pastel 'RAWR' Bracelet",
        image: "src/assets/images/rawr.jpg",
        category: "bracelets",
        description: "A bracelet based around the lovely pastel colors of cotton candy and the silly phrase 'Rawr'."
    },
    {
        name: "Pink & Purple Themed Bracelet",
        image: "src/assets/images/pinkandpurple.jpg",
        category: "bracelets", 
        description: "This beauty of a bracelet was handmade to fit bigger wrists than most and also to be durable and stretchy."
    },
    {
        name: "Taylor Swift Album 'Lover' Themed Bracelet",
        image: "src/assets/images/taylorswiftalbumlover.jpg",
        category: "bracelets",
        description: "A very carefully and beautifully handmade kandi bracelet created for 'lovers' of Taylor Swift's hit album 'Lover'.",
        disclaimer: "The bracelet was themed around the album cover. All credits for album cover and color scheme go to the creators of it."
    },
]

function displayProduct(index) {
    displayArea.innerHTML = 
    `<div class="product-displays" id="product-display">
        <h3> ${products[index].name}</h3>
        <img src="${products[index].image}" class="product-images"/>
        <p id="product-description">${products[index].description}</p>
    </div>`
    if (products[index].disclaimer?.length) {
        document.querySelector(".product-displays").innerHTML += 
            `<p id="product-disclaimer">${products[index].disclaimer}</p>`
    }
}


let index = Math.floor(Math.random() * products.length);
export function rotateProduct(direction) {
    if (direction == "next-button") {
        index += 1;
        index = index % (products.length - 1);
        console.log("index: ", index);
    } 
    else if (direction = "prev-button") {
        index -= 1;
        index = index < 0 ? products.length - 1 : index;

        console.log("index: ", index);
    }
    displayProduct(index);
}


displayProduct(index)

console.log(products)
