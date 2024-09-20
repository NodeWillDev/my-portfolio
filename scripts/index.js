import Language from "./operators/language.js";

import "./navigation.js";
// import "./particles.js";
import "./experiences-data.js";
import "./switch-theme.js";
// import "./time-line.js";
import "./contact.js";
import "./projects.js";
import "./cv-download.js";
import "./copy-email.js";
import "./mobile-menu.js";

document
  .querySelector("body")
  .addEventListener("click", () =>
    Language.changeLanguage(Language.getLanguageType() == "en" ? "pt" : "en")
  );
