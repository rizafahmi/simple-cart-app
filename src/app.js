const {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} = require('./helpers.js');

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const subtotalText = document.querySelector('#subtotal');
const codeText = document.querySelector('#code');
const confirmCodeButton = document.querySelector('#confirmCode');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotalText.textContent = `Rp. ${recalculateSubtotal(
    priceInput.value,
    qtyInput.value,
    discount
  )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotalText.textContent = `Rp. ${recalculateSubtotal(
    priceInput.value,
    qtyInput.value,
    discount
  )}`;
});

confirmCodeButton.addEventListener('click', () => {
  if (codeText.value === 'KODE27') {
    discount = 27;
    subtotalText.textContent = `Rp. ${recalculateSubtotal(
      priceInput.value,
      qtyInput.value,
      discount
    )}`;
  } else {
    discount = 0;
    subtotalText.textContent = `Rp. ${recalculateSubtotal(
      priceInput.value,
      qtyInput.value,
      discount
    )}`;
  }
});
