import { random } from "./operators/operator.js";

const body = document.querySelector("body");

for (let i = 0; i < 25; i++) {
  const particle = document.createElement("span");
  particle.className = "bg-particle";

  particle.style.height = `${Math.floor(random(20, 157))}px`;
  particle.style.width = `${random(1, 12)}px`;
  particle.style.left = `${random(1, 99)}%`;
  particle.style.bottom = `0%`;

  particle.style.animationDelay = `${random(0.1, 2.9)}s`;
  particle.style.animationDuration = `${random(0.6, 1.86)}s`;
  body.append(particle);
}
