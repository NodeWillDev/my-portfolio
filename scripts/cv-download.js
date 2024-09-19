import { sendNotification } from "./operators/send-notification.js";

/** @type {HTMLDivElement} */
const button = document.querySelector(
  ".header_box .header_info .header_title .header_cv"
);

const cv = document.createElement("a");
cv.download = "";
cv.href = "./assets/CV William da Silva [NodeWillDev].pdf";
cv.style.display = "none";
button.addEventListener("click", () => {
  document.body.appendChild(cv);
  cv.click();
  document.body.removeChild(cv);
  sendNotification("Obrigado por fazer o download do meu CV", "success");
});
