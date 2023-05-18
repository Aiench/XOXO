let cart = {
  jfgt24: 2,
};

document.onclick = (event) => {
  console.log(event.target.classList);
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
  }
};

const plusFunction = (id) => {
  cart[id]++;
  renderCart();
};

const minusFunction = (id) => {
    cart[id]--;
  if (cart[id] - 1 == 0) {
    deletFunction(id);
    return true;
  }
  renderCart();
};
const deletFunction = (id) => {
  delete cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};
renderCart();
