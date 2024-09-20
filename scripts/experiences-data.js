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
    title: "PHP",
    percent: 92,
    icon_class: "devicon-php-plain colored",
    color_bar: "#0de0a1",
  },
  {
    title: "HTML",
    percent: 80,
    icon_class: "devicon-html5-plain colored",
    color_bar: "#0de0a1",
  },
  {
    title: "Type Script",
    percent: 70,
    icon_class: "devicon-typescript-plain colored",
    color_bar: "#0de0a1",
  },
  {
    title: "Node JS",
    percent: 70,
    icon_class: "devicon-nodejs-plain-wordmark colored",
    color_bar: "#0de0a1",
  },
  {
    title: "MySQL",
    percent: 65,
    icon_class: "devicon-mysql-original colored",
    color_bar: "#1277eb",
  },
  {
    title: "Python",
    percent: 60,
    icon_class: "devicon-python-plain colored",
    color_bar: "#1277eb",
  },
  {
    title: "React JS",
    percent: 55,
    icon_class: "devicon-react-original colored",
    color_bar: "#1277eb",
  },
  {
    title: "Docker",
    percent: 52,
    icon_class: "devicon-docker-plain colored",
    color_bar: "#1277eb",
  },
  {
    title: "Java",
    percent: 32,
    icon_class: "devicon-java-plain colored",
    color_bar: "#e4620b",
  },
  {
    title: "React Native",
    percent: 25,
    icon_class: "devicon-android-plain colored",
    color_bar: "#e4620b",
  },
];

data.forEach((experience) => {
  const element = document
    .querySelector(".experiences_box .experiences_contents .experience")
    .cloneNode(true);
  element.childNodes[3].style.setProperty(
    "--percent",
    `${experience.percent}%`
  );
  element.childNodes[3].style.setProperty(
    "--color_bar",
    `${experience.color_bar}`
  );
  element.childNodes[1].childNodes[1].innerHTML = experience.title;
  element.childNodes[5].innerHTML = `${experience.percent}%`;
  element.childNodes[1].childNodes[3].className = experience.icon_class;
  document
    .querySelector(".experiences_box .experiences_contents")
    .appendChild(element);
});
