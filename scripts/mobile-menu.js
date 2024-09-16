/** @type {HTMLDivElement} */
const menu = document.querySelector(".mobile_menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
