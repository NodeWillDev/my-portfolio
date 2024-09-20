import pt from "../data/translate-pt.json" with { type: "json" };
import en from "../data/translate-en.json" with { type: "json" };
import { sendNotification } from "./send-notification.js";

/** @typedef {'en'|'pt'} LanguageType */

export default class Language {
  /** @type {LanguageType} */
  static language = "pt";

  /** @return {LanguageType} */
  static getLanguageType() {
    return this.language;
  }

  /** @param {LanguageType} type */
  static changeLanguage(type) {
    let data = type == "en" ? en : pt;
    this.language = type

    /** @type {HTMLElement[]} */
    const translates = document.querySelectorAll("._translate");

    translates.forEach((element, index) => {
      element.innerHTML = data[index];
    });

    if(type == "en") 
        sendNotification("I apologize for my English, my level of English is basic", "warnning")

  }
}
