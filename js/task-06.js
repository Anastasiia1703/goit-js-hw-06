const inputEl = document.querySelector("#validation-input");
const lengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", characterCountCheck);

function characterCountCheck(event) {
  if (event.currentTarget.value.length === lengthEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
