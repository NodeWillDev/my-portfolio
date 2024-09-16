import { sendNotification } from "./operators/send-notification.js";

const email = document.getElementById("copy-email");
email.addEventListener("click", () => {
  navigator.clipboard.writeText("williamdasilva.dev@gmail.com");
  sendNotification(
    "Email copiado com sucesso, por favor entre em contato.",
    "danger"
  );
});
