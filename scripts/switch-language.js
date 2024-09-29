import Language from "./operators/language.js";

/** @type {HTMLDivElement[]} */
const box_language = document.querySelectorAll(".switch_language");

box_language.forEach((element) => {
  element.addEventListener("click", () => {
    /** @type {HTMLImageElement[]} */
    let language = document.querySelectorAll(".switch_language img");

    language.forEach((element) => {
      element.classList.toggle("active");
    });
    Language.changeLanguage(Language.getLanguageType() == "en" ? "pt" : "en");
  });
});
