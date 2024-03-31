import ThemeModes from "./operators/themes-modes.js";

/**
 * 0 -> Dark Mode
 * 1 -> Light Mode
 */

/** @type {HTMLDivElement} */
const box = document.querySelector(".box_switch");

box.addEventListener("click", () => {
  console.log();

  /** @type {HTMLLIElement[]} */
  const modes = document.querySelectorAll(".box_switch li");
  if (modes[0].classList.contains("active")) {
    //Light Mode
    modes[0].classList.remove("active");
    modes[1].classList.add("active");
    ThemeModes.setThemeMode("light");
  } else {
    //Dark Mode
    modes[0].classList.add("active");
    modes[1].classList.remove("active");
    ThemeModes.setThemeMode("dark");
  }
});
