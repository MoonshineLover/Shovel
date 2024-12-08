const productList = document.getElementById("product-list");
const products = [
    {image: "../images/catalogue/Vegetables_Cucumbers.jpg", title:"Товар 1", description: "Описание товара 1", price: 53, avialiblenes: true},
    {image: "../images/catalogue/Vegetables_Cucumbers.jpg", title:"Товар 2", description: "Описание товара 2", price: 30, avialiblenes: false},
    {image: "../images/catalogue/Vegetables_Cucumbers.jpg", title:"Товар 3", description: "Описание товара 3", price: 44, avialiblenes: true }
  ];

function createProductCard(product) {
    let avialible = product.avialiblenes == true ? "Есть в наличии" : "Нет в наличии";
    return `
      <div class="goods-card">
            <div class="img-container goods-img-container">
                <img class = "category-img goods-img" src="${product.image}" alt="Фото товара">
            </div>
            <div class = "goods-text-container">
                <p class = "goods-name">${product.title}</p>
                <div class = "goods-description-n-indicator">
                    <p class = "goods-description">${product.description}
                    </p>
                    <div class = "goods-indicator">
                        <p class = "goods-indicator-text"> Цена: ${product.price}Р</p>
                        <p class = "goods-indicator-text ${product.avialiblenes == true ? "availible-good" : ""}">${avialible}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  products.forEach(product => {
    productList.innerHTML += createProductCard(product);
  });
