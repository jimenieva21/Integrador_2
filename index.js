const productsContainer = document.querySelector(".products-container")
const showMoreBtn = document.querySelector(".btn-load")
const categoriesContainer = document.querySelector(".categories")
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const menuBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const cartBubble =document.querySelector(".cart-bubble");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const successModal = document.querySelector(".add-modal");
const form = document.getElementById("#contactForm");


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
          <span>Precio: $${bid}</span>
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
    productsContainer.innerHTML += productsList.map
    (createProductTemplate).join("");
}

const isLastIndexOf = () => {
    return appState.currentProductsIndex === appState.products.length - 1
}

const showMoreProducts = () => {
   appState.currentProductsIndex += 1;
   let {products, currentProductsIndex} = appState;

   renderProducts (products[currentProductsIndex]);

   if (isLastIndexOf()) {
      showMoreBtn.classList.add("hidden");
   }
}

const setShowMoreVisibility = () => {
   if(!appState.activeFilter) {
      showMoreBtn.classList.remove("hidden")
      return
    }
    showMoreBtn.classList.add("hidden")
}

const changeBtnActiveState = (selectedCategory) => {
   const categories = [...categoriesList];
   categories.forEach((categoryBtn) => {
      if(categoryBtn.dataset.category !== selectedCategory){
         categoryBtn.classList.remove("active");
         return
      }
      categoryBtn.classList.add("active")
   })
}

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility(appState.activeFilter);
}

const applyFilter = ({target}) => {
    if(!isInactiveFilterBtn(target)) {
      return
    }
    changeFilterState(target);
    productsContainer.innerHTML = "";
    if(appState.activeFilter) {
      renderFilteredProducts();
      appState.currentProductsIndex = 0;
      return;
    }
    renderProducts(appState.products[0]);
}
   
const isInactiveFilterBtn = (element) => {
   return (
      element.classList.contains("category") && !element.classList.contains("active")
   )
}   

const renderFilteredProducts = () => {
   const filteredProducts = productsData.filter((product) => {
      return product.category === appState.activeFilter
   })
   renderProducts(filteredProducts)
}

const toggleCart = () => {
   cartMenu.classList.toggle("open-cart");
   if (barsMenu.classList.contains("open-menu")) {
      barsMenu.classList.remove("open-menu");
      return;
   }
   overlay.classList.toggle("show-overlay")
}

const toggleMenu = () => {
   barsMenu.classList.toggle("open-menu");
   if (cartMenu.classList.contains("open-cart")) {
      cartMenu.classList.remove("open-cart");
      return;
   }
   overlay.classList.toggle("show-overlay")
}

const closeOnScroll = () => {
   if (
      !barsMenu.classList.contains("open-menu") && cartMenu.classList.contains("open-cart")
   ) {
      return
   }
      barsMenu.classList.remove("open-menu");
      cartMenu.classList.remove("open-cart");
      overlay.classList.remove("show-overlay");
   }

const closeOnClick = (e) => {
   if (
      !e.target.classList.contains("navbar-link")
   ){
      return
      }
      barsMenu.classList.remove("open-menu");
      overlay.classList.remove("show-overlay");
}

const closeOnOverlayClick= () => {
   barsMenu.classList.remove("open-menu");
   cartMenu.classList.remove("open-cart");
   overlay.classList.remove("show-overlay");
}

const createCartProductTemplate = (cartProduct) => {
   const {id, name, bid, img, quantity} = cartProduct;
   return `
   <div class="cart-item">
     <img src=${img} alt="card del carrito" />
     <div class="item-info">
       <h3 class="item-title">${name}</h3>
       <span class="item-price">$${bid}</span>
     </div>
     <div class="item-handler">
       <span class="quantity-handler down" data-id=${id}>-</span>
       <span class="item-quantity">${quantity}</span>
       <span class="quantity-handler up" data-id=${id}>+</span>
     </div> 
   </div>`
}

const renderCart = () => {
   if (!cart.length) {
      productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
   return;
   }
   productsCart.innerHTML= cart.map(createCartProductTemplate).join("")
}

const getCartTotal = () => {
   return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0)
}

const showCartTotal = () => {
   total.innerHTML =`$${getCartTotal().toFixed(2)}`
}

const renderCartBubble = () => {
   cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0)
};

const disableBtn = (btn) => {
   if (!cart.length) {
      btn.classList.add("disabled")
   } else {
      btn.classList.remove("disabled");
   }
}

const updateCartState = () => {
   saveCart();
   renderCart();
   showCartTotal();
   disableBtn(buyBtn);
   disableBtn(deleteBtn);
   renderCartBubble();
}

const addProduct = (e) => {
   if (!e.target.classList.contains("btn-add")) {
      return;
   }
   const product = createProductData(e.target.dataset);
   if (isExistingCartProduct(product)) {
      addUnitToProduct(product);
      showModalSuccess("Se agregó una unidad del producto al carrito.");
   } else {
      createCartProduct(product);
      showModalSuccess("El producto se ha agregado al carrito");
   }
   updateCartState();
};

const showModalSuccess = (msg) => {
   successModal.classList.add("active-modal");
   successModal.textContent = msg;
   setTimeout(() => {
      successModal.classList.remove("active-modal")
   }, 1500)
}

const createCartProduct = (product) => {
   cart = [...cart, {...product, quantity: 1}];
};

const addUnitToProduct = (product) => {
   cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id ? {...cartProduct, 
         quantity: cartProduct.quantity + 1} : cartProduct
   })
}

const isExistingCartProduct = (product) => {
   return cart.find((item) => item.id === product.id)
}

const createProductData = (product) => {
   const {id, name, bid, img} = product
   return {id, name, bid, img}
}

const handleQuantity = (e) => {
   if (e.target.classList.contains("down")){
       handleMinusBtnEvent(e.target.dataset.id)
   } else if (e.target.classList.contains("up")) {
      handlePlusBtnEvent(e.target.dataset.id)
   }
   updateCartState();
}

const handleMinusBtnEvent = (id) => {
   const existingCartProduct = cart.find((item)=>item.id === id)
   if (existingCartProduct.quantity === 1) {
      Swal.fire({
         title:"¿Desea eliminar el producto del carrito?",
         text: "Esta acción no se puede deshacer.",
         icon: "warning",
         showCancelButton: true,
         confirmButtonText: "Sí, eliminar",
         cancelButtonText: "Cancelar"
      }).then((result) => {
         if (result.isConfirmed) {
            removeProductFromCart(existingCartProduct);
            Swal.fire("¡Eliminado!", "El producto ha sido eliminado del carrito.");
         }
      });
      return;
   }
   substractProductUnit(existingCartProduct);
}

const substractProductUnit = (existingProduct) => {
   cart = cart.map((product) => {
      return product.id === existingProduct.id ? {...product, 
         quantity: Number(product.quantity) - 1} : product 
      })
}

const removeProductFromCart = (existingProduct) => {
   cart = cart.filter((product) => product.id !== existingProduct.id)
   updateCartState();
}

const handlePlusBtnEvent = (id) => {
   const existingCartProduct = cart.find((item) => item.id === id);
   addUnitToProduct(existingCartProduct);
}

const resetCartItems = () => {
   cart = [];
   updateCartState();
}

const completeCartAction = (confirmMsg, successMsg) => {
   if(!cart.length) return;
   Swal.fire({
      title: confirmMsg,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, completar compra",
      cancelButtonText: "Cancelar"
   }).then((result) => {
      if (result.isConfirmed) {
         resetCartItems();
         Swal.fire("¡Compra completada!", successMsg);
      }
   });
}

const completeBuy = () => {
   completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!")
}

const deleteCart = () => {
   Swal.fire({
      title: "¿Desea vaciar el carrito?",
      text: "Esta acción eliminará todos los productos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar"
   }).then((result) => {
      if (result.isConfirmed) {
         resetCartItems();
         Swal.fire("¡Carrito vacío!", "No hay productos en el carrito.");
      }
   });
}

const validateForm = (name, email, message, callback) => {
   if (!name || !email || !message) {
       return callback("Por favor, complete todos los campos.");
   }

   if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
       return callback("Por favor, ingrese un correo electrónico válido.");
   }

   callback(null);
}

const handleFormSubmit = (event) => {
   event.preventDefault();

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;

   validateForm(name, email, message, (error) => {
      if (error) {
          Swal.fire({
             title: "¡Error!",
             text: error,
             icon: "error",
             confirmButtonText: "Intentar de nuevo"
          });
      } else {
        Swal.fire({
           title: "¡Formulario enviado!",
           text: "Gracias por ponerte en contacto con nosotros. Nos comunicaremos pronto.",
           confirmButtonText: "¡Genial!"
        });
        document.getElementById("contactForm").reset();
      }
  });
}
const formElement = document.getElementById("contactForm");

const init = () => {
   renderProducts(appState.products[0]);
   showMoreBtn.addEventListener("click", showMoreProducts);
   categoriesContainer.addEventListener("click", applyFilter);
   cartBtn.addEventListener("click", toggleCart);
   menuBtn.addEventListener("click", toggleMenu);
   window.addEventListener("scroll", closeOnScroll);
   barsMenu.addEventListener("click", closeOnClick);
   overlay.addEventListener("click", closeOnOverlayClick);
   document.addEventListener("DOMContentLoaded", renderCart);
   document.addEventListener("DOMContentLoaded", showCartTotal);
   productsContainer.addEventListener("click", addProduct);
   productsCart.addEventListener("click", handleQuantity);
   buyBtn.addEventListener("click", completeBuy);
   deleteBtn.addEventListener("click", deleteCart);
   formElement.addEventListener("submit", handleFormSubmit);
   disableBtn(buyBtn);
   disableBtn(deleteBtn);
   renderCartBubble();

};

init();