const toggle = document.querySelector(".form-check-input");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  body.classList.toggle("active");
});
