/** @type {HTMLDivElement} */
const index = document.querySelector("._index");

/** @type {HTMLDivElement[]} */
const pointers = document.querySelectorAll(".pointer");

window.addEventListener("scroll", (event) => {
  let diff = document.body.scrollHeight - window.innerHeight;
  let height = (window.scrollY / diff) * 100;

  index.style.height = `${height}%`;
});
