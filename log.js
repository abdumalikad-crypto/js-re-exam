        let ID = window.location.search; 
        let productBox = document.getElementById('product-detail-box');
          {
            fetch('https://dummyjson.com/products/1')
                .then(res => res.json())
                .then(data => {
                    productBox.innerHTML = `
                        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-D4zZlLfrtV4FNwlLdwZkwaBEMysukRSWghnRm_XMQbIkjxvGpHyA75qNbhIjFzesml-n12zeMTLu9MYjX7TDFWzaf9M5msph3pw_IY5u&s=10" class="product-img"
                        <h1 class="p-detail-title">${data.title}</h1>
                        <h3 class="current-price">$${data.price}</h3>
                        <p class="product-desc">${data.description}</p>
                    `;
                });
        }
        if (ID === "?id=2") {
            fetch('https://dummyjson.com/products/2')
                .then(res => res.json())
                .then(data => {
                    productBox.innerHTML = `
                        <img src= "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=250" class="product-img"
                        <h1 class="p-detail-title">${data.title}</h1>
                        <h3 class="current-price">$${data.price}</h3>
                        <p class="product-desc">${data.description}</p>
                    `;
                });
        }
        
        if (ID === "?id=3") {
            fetch('https://dummyjson.com/products/3')
                .then(res => res.json())
                .then(data => {
                    productBox.innerHTML = `
                          <img src= "https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=250" class="product-img"
                        <h1 class="p-detail-title">${data.title}</h1>
                        <h3 class="current-price">$${data.price}</h3>
                        <p class="product-desc">${data.description}</p>
                    `;
                });
        }
        if (ID === "?id=4") {
            fetch('https://dummyjson.com/products/4')
                .then(res => res.json())
                .then(data => {
                    productBox.innerHTML = `
                          <img src= "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=250" class="product-img"
                        <h1 class="p-detail-title">${data.title}</h1>
                        <h3 class="current-price">$${data.price}</h3>
                        <p class="product-desc">${data.description}</p>
                    `;
                });
        }