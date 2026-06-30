let boxes = document.querySelector(".products-flex");
let card = null;

fetch('https://dummyjson.com/products?limit=4')
    .then(res => res.json())
    .then(data => {
        let allCards = document.querySelectorAll(".product-card");
        
        if (allCards[0]) {
            allCards[0].addEventListener('click', () => {
                card = 1;
                window.location.href = "product.html?id=" + card;
            });
        }
        
        if (allCards[1]) {
            allCards[1].addEventListener('click', () => {
                card = 2;
                window.location.href = "product.html?id=" + card;
            });
        }

        if (allCards[2]) {
            allCards[2].addEventListener('click', () => {
                card = 3;
                window.location.href = "product.html?id=" + card;
            });
        }
        if (allCards[3]) {
            allCards[3].addEventListener('click', () => {
                card = 4;
                window.location.href = "product.html?id=" + card;
            });
        }
        })