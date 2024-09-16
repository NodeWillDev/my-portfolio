import ThemeModes from "./operators/themes-modes.js";

/**
 * 0 -> Dark Mode
 * 1 -> Light Mode
 */

/** @type {HTMLDivElement[]} */
const box = document.querySelectorAll(".box_switch");

box.forEach((element) => {
  element.addEventListener("click", () => {
    /** @type {HTMLLIElement[]} */
    const modes = document.querySelectorAll(".box_switch li");

    modes.forEach((element) => element.classList.toggle("active"));
    ThemeModes.setThemeMode(
      modes[0].classList.contains("active") ? "dark" : "light"
    );
  });
});
