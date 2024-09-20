/**
 * @param {number} ms
 * @returns {Promise}
 */
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
