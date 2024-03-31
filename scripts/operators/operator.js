/**
 * @param {float} min
 * @param {float} max
 * @return {float}
 */
export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};
