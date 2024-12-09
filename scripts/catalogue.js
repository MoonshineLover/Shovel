const productList = document.getElementById("product-list");
const products = [
    {image: "/../images/catalogue/cucmbers_ctlg.jpg", title:"Огурцы от Петровны", description: "Супер крутые огуречики, лечат всё на свете - хирургическое образование, две учёные степени", price: 53, avialiblenes: true},
    {image: "/../images/catalogue/tomatoes_ctlg.jpeg", title:"Сеньоры помидоры, здоровые как боинг", description: "Поступают жалобы, что соседи по огороду путают их с арбузами", price: 30, avialiblenes: false},
    {image: "/../images/catalogue/bolgar_ctlg.jpg", title:"Перцы болгарские, но без акцента", description: "Не важно, какой перец - красный или жёлтый, ведь оба окажутся в салате", price: 44, avialiblenes: true }
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
                        <p class = "goods-indicator-text goods-price"> Цена: ${product.price}Р</p>
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
