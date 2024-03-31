/** @type {HTMLLIElement} */
const button = document.querySelector(".nav_button");

/** @type {int} */
let time = 0;

button.addEventListener("click", () => {
  if (Math.abs((time - performance.now()) / 1000) < 1) {
    document.querySelector(".box_nav").classList.toggle("active");
    document.querySelector(".content_nav").classList.toggle("active");
  }
});

/**
 * @param {MouseEvent} mouse
 */
const move = (mouse) => {
  /** @type {HTMLDivElements} */
  const element = document.querySelector(".content_nav");

  element.style.left = mouse.clientX + "px";
  element.style.top = mouse.clientY + "px";
};

button.addEventListener("mousedown", () => {
  time = performance.now();
  document.addEventListener("mousemove", move);
});
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});
