/**
 *
 * @param {number} min lower limit included in random number
 * @param {number} max upper limit included in radnom number
 * @returns random number between `min` (included) and `max` (included)
 */
let getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomNumber };
