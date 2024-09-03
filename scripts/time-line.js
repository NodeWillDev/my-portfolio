/** @type {HTMLDivElement} */
const index = document.querySelector("._index");

/** @type {HTMLDivElement[]} */
const pointers = document.querySelectorAll(".pointer");

setInterval(() => {
  let diff = document.body.scrollHeight - window.innerHeight;
  let height = (window.scrollY / diff) * 100;

  index.style.height = `${height}%`;
  pointers.forEach((element) => {
    if (
      window.getComputedStyle(index).height.split("px")[0] >= element.offsetTop
    )
      element.classList.add("active");
    else element.classList.remove("active");
  });
}, 500);
