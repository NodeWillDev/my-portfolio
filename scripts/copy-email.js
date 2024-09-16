import { sendNotification } from "./operators/send-notification.js";

const email = document.getElementById("copy-email");
email.addEventListener("click", () => {
  navigator.clipboard.writeText("williamdasilva.dev@gmail.com");
  sendNotification(
    "Obrigado por copiar meu email, pode me encaminhar que responde o mais rápido possível",
    "success"
  );
});
