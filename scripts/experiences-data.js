/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} icon_class #DevIcon
 * @property {number} percent
 * @property {string} color_bar
 */

/** @type {Experience[]} */
const data = [
  {
    title: "HTML",
    percent: 80,
    icon_class: "devicon-html5-plain colored",
    color_bar: "#0de0a1",
  },
  {
    title: "Python",
    percent: 60,
    icon_class: "devicon-python-plain colored",
    color_bar: "#1277eb",
  },
  {
    title: "PHP",
    percent: 92,
    icon_class: "devicon-php-plain colored",
    color_bar: "#0de0a1",
  },
  {
    title: "Java",
    percent: 32,
    icon_class: "devicon-java-plain colored",
    color_bar: "#e4620b",
  },
  {
    title: "Java Script",
    percent: 96,
    icon_class: "devicon-javascript-plain colored",
    color_bar: "#0de0a1",
  },
];

data.forEach((experience) => {
  const element = document
    .querySelector(".experiences_box .experiences_contents .experience")
    .cloneNode(true);
  console.log(element.childNodes[3]);
  element.childNodes[3].style.setProperty(
    "--percent",
    `${experience.percent}%`
  );
  element.childNodes[3].style.setProperty(
    "--color_bar",
    `${experience.color_bar}`
  );
  console.log(element.childNodes[3].style);
  element.childNodes[1].childNodes[1].innerHTML = experience.title;
  element.childNodes[5].innerHTML = `${experience.percent}%`;
  element.childNodes[1].childNodes[3].className = experience.icon_class;
  document
    .querySelector(".experiences_box .experiences_contents")
    .appendChild(element);
});
