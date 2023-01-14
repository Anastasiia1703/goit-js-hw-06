const decrementListenerBtn = document.querySelector(
  '[data-action="decrement"]'
);
const valueEl = document.getElementById("value");
const incrementListenerBtn = document.querySelector(
  '[data-action="increment"]'
);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementListenerBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});

decrementListenerBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
