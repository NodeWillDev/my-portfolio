import { sleep } from "./custom-sleep.js";

/** @type {HTMLIFrameElement} */
const icon = document.querySelector(".notify .notify_content .icon i");

/** @type {HTMLParagraphElement} */
const text = document.querySelector(".notify .notify_content .description p");

/**
 *
 * @param {string} data
 * @param {'success'|'warnning'|'danger'} type
 * @return {null}
 */

export const sendNotification = async (data, type = "success") => {
  // document.querySelector(".notify").classList.add(type);
  text.innerHTML = data;
  switch (type) {
    case "warnning":
      icon.className = "fa-solid fa-circle-exclamation";
      break;
    case "danger":
      icon.className = "fa-solid fa-skull-crossbones";
      break;
    case "success":
      icon.className = "fa-regular fa-circle-check";
      break;
  }
  /** @type {HTMLDivElement} */
  const clone = document.querySelector(".notify").cloneNode(true);
  document.querySelector("body").appendChild(clone);
  clone.className = `notify ${type} active`;
  clone.addEventListener("animationend", async () => {
    clone.style.top = "-50%";
    await sleep(5500);
    clone.remove();
  });
};
