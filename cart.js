const productBtn = document.querySelectorAll(".bay");
const cartsProduct = document.querySelector(".cart-content__list");
const cart = document.querySelector(".cart");
const cartQuantity = document.querySelector(".cart__quantity");
const fullPrice = document.querySelector(".fullprice");

let price = 0;
const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};


const increaseFunction = () => {
  aboutId[id]++
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, "");
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

const plusFullprice = (currentPrice) => {
  return (price += currentPrice);
};
const minusFullprice = (currentPrice) => {
  return (price -= currentPrice);
};

const printFullprice = () => {
  fullPrice.textContent = `${normalPrice(price)}`;
};

const printQuantity = () => {
  let length = cartsProduct.querySelector(".cart-content__item").children
    .length;
    console.log(length);
  cartQuantity.textContent = length-1;
  count > 0 ? cart.classList.add("active") : cart.classList.remove("active");
};
console.log(length);
const generateCartProduct = (img, title, price, id) => {
  return `
        <ul class="cart-content__list">
            <li class="cart-content__items" >
            <article class="cart-content__product cart-product" data-id = "${id}">
                <img src="${img}" alt="Красный джемпер" class="cart-product__img">
                <div class="cart-product__text">
                    <h3 class="cart-product__title">${title}</h3>
                    <span class="cart-product__price">${price} Р</span>
                    <button class="cart-product__delete" aria-label="Удалить товар"></button>
                </div>
            </article>
        </li>
      </ul>
    `;
};

productBtn.forEach((el) => {
  el.closest(".boys-div").setAttribute("data-id", randomId());
  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let parent = self.closest(".boys-div");
    let id = parent.dataset.id;
    let img = parent.querySelector(".boys-img").getAttribute("src");
    let title = parent.querySelector(".boysdescrip").textContent;
    let priceString = parent.querySelector(".price").textContent;
    let priceNumber = parseInt(
      priceWithoutSpaces(parent.querySelector(".price").textContent)
    );
    plusFullprice(priceNumber);

    printFullprice();
    cartsProduct
      .querySelector(".cart-content__item")
      .insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(img, title, priceNumber, id)
      );
    printQuantity();
  });
});
