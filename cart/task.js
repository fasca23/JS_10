const prodAddButtn = document.querySelectorAll(".product__add")
const itemQuantity = document.querySelectorAll(".product__quantity-control")
const productCarts = document.querySelector(".cart__products")

// Работа с изменением количества
itemQuantity.forEach(item => {

    item.addEventListener("click", () => {
        
        let productSum = item.parentElement.getElementsByClassName("product__quantity-value")[0]

            if (item.classList.contains("product__quantity-control_dec")) {
                productSum.innerText = Number(productSum.innerText) - 1;
            }
            if (item.classList.contains("product__quantity-control_inc")) {
                productSum.innerText = Number(productSum.innerText) + 1;
            }
            // Нельзя сделать отрицательное колличество продуктов
            if (productSum.innerText < 1) {
                productSum.innerText = 1;
            }
    })
})

// Добавление в корзину
prodAddButtn.forEach(item => {

    item.addEventListener("click", () => {

        // Получаем данные о товаре
        let productId = item.closest(".product").dataset.id
        let productImg = item.closest(".product").querySelector(".product__image").getAttribute('src')
        let productSum = item.parentElement.getElementsByClassName("product__quantity-value")[0].innerText

        // Получаем данные о товаре в корзине
        let targetCart = Array.from(document.querySelectorAll(".cart__product")).find(cart => cart.dataset.id === productId)
        
        // Если товар в корзине есть
        if (targetCart) {
            // Достаем его колличество и добавляем к нему набранное 
            let productSumInCart = targetCart.querySelector(".cart__product-count")
                productSumInCart.innerText = Number(productSumInCart.innerText) + Number(productSum);
        
        // Создаем если нет товар в корзине
        } else {
            let newDiv = document.createElement("div")
                newDiv.classList.add("cart__product")
                newDiv.innerHTML = `<div class="cart__product" data-id=${productId}>
                                    <img class="cart__product-image" src=${productImg}>
                                    <div class="cart__product-count">${productSum}</div>
                                    </div>`
            // Добавляем товар в начало списка    
            document.querySelector(".cart__products").prepend(newDiv)
        }
    })
})