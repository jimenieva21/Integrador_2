console.log("JavaScript cargado y ejecutándose")

const productsContainer = document.querySelector(".products-container")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart))
};

const createProductTemplate = (product) => {
    const {id, name, bid, writer, cardImg} = product
   return `
   <div class="product">
      <img src=${cardImg} alt=${name} />
      <div class="product-info">
        <h3>${name}</h3>
        <div class="product-writer">
        <p>${writer}</p>
        </div>

    
       <div class="product-end">
          <span>$${bid}</span>
          <button class="btn-add"
          data-id='${id}'
          data-name='${name}'
          data-bid='${bid}'
          data-img='${cardImg}'>Comprar</button>
       </div>
     </div>
   </div>`
}

const renderProducts = (productsList) => {
    productsContainer.innerHTML = "";
    productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
}

const init = () => {
   renderProducts(productsData);
};

document.addEventListener("DOMContentLoaded", init);

init();