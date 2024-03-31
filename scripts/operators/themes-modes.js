import dark from "../themes/dark-theme.json" assert { type: "json" };
import light from "../themes/light-theme.json" assert { type: "json" };

/**
 * @typedef {'light'|'dark'} Mode
 */

export default class ThemeModes {
  /** @type {Mode} */
  static mode = "light";

  /** @return {Mode} */
  static getThemeMode() {
    return this.mode;
  }

  /** @param {Mode} mode */
  static setThemeMode(mode) {
    this.mode = mode;
    let theme = mode == "dark" ? dark : light;
    Object.keys(theme).map((key) => {
      document.documentElement.style.setProperty(key, theme[key]);
    });

    /** @type {HTMLImageElement[]} */
    const images = document.querySelectorAll(".header_image img");
    images.forEach((element) => element.classList.toggle("active"));
  }
}
