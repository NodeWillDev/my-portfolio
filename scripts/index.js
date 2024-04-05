import pt from "./data/translate-pt.json" assert { type: "json" };
import en from "./data/translate-en.json" assert { type: "json" };
import "./navigation.js";
import "./particles.js";
import "./switch-theme.js";

/**
 * This is for tests
 * This is for tests
 * This is for tests
 * This is for tests
 * This is for tests
 */

/** @type {HTMLButtonElement} */
const btn = document.querySelector(".ajshdjk");

let ln = "pt";

const espera = () => {
  new Promise((resolve, reject) => {
    /** @type {HTMLElement[]} */
    const translate = document.querySelectorAll("._translate");

    let langue = (ln = ln == "pt" ? "en" : "pt") == "en" ? en : pt;

    translate.forEach((element, index) => {
      element.innerHTML = "";

      /** @type {string} */
      const texto = langue[index];

      for (let key in texto) {
        setTimeout(() => {
          element.innerHTML += texto[key];
        }, key * 50);
      }
      resolve("jashdjk");
    });
  });
};
btn.addEventListener("click", async () => espera());
