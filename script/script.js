const buttonFormEl = document.querySelector(".button--form");
const formEl = document.querySelector(".form--modal");

buttonFormEl.addEventListener("click", () => {
  formEl.classList.toggle("form--open");
});
