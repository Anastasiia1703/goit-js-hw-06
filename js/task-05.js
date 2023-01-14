const nameInputEl = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInputEl.addEventListener("input", onInputCange);

function onInputCange(event) {
  nameOutput.textContent = event.currentTarget.value;
}
