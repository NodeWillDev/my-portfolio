/** @type {HTMLIFrameElement[]} */
const icons = document.querySelectorAll(
  ".contact_box .contact_content .contact i "
);
/** @type {HTMLDivElement[]} */
// const closeds = document.querySelectorAll(".close");

// closeds.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.parentElement.parentElement.classList.toggle("active");
//   });
// });

icons.forEach((element) => {
  // element.addEventListener("click", () => {
  element.parentElement.classList.toggle("active");
  // });
});
