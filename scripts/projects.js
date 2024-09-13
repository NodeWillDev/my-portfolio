/** @type {HTMLDivElement} */
const image = document.querySelector(".bg_card_img");

/** @type {HTMLDivElement[]} */
const cards = document.querySelectorAll(".projects_box .projects_cards .card");

cards.forEach((element, index) => {
  element.id = index;
  element.addEventListener("mouseenter", () => {
    image.style.backgroundImage = `url(../assets/${element.children[0].children[0].children[0].innerHTML}.png)`;
    cards.forEach((card) => {
      if (element.id != card.id) {
        card.style.opacity = "0";
      }
    });
  });

  element.addEventListener("mouseleave", () => {
    image.style.backgroundImage = ``;
    cards.forEach((card) => {
      if (element.id !== card.id) {
        card.style.opacity = "1";
      }
    });
  });
});
