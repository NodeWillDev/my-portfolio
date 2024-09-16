/**
 *
 * @param {number} ms
 * @returns {Promise}
 */
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
  document.querySelector(".notify").classList.add(type);
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
  clone.classList.toggle("active");
  clone.addEventListener("animationend", async () => {
    clone.classList.toggle("active");
    await sleep(5500);
    clone.remove();
  });
};
