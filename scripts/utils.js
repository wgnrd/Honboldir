/**
 * Generates a random number between the two limits
 * @param {number} min lower limit included in random number
 * @param {number} max upper limit included in radnom number
 * @returns random number between `min` (included) and `max` (included)
 */
let getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Replaces the character of a given tile
 * @param {number} x X position of tile
 * @param {number} y Y position of tile
 * @param {string} character new character which should be shown on this tile
 * @returns character which was before on this tile
 */
let changeMapTile = (x, y, character) => {
  let tile = document.getElementsByClassName(`mapTile x${x} y${y}`)[0];
  const oldchar = tile.innerHTML;
  tile.innerHTML = character;
  return oldchar;
};

/**
 * Returns the character of a given tile
 * @param {number} x X position of tile
 * @param {number} y Y position of tile
 * @returns character which is on the given coordinates
 */
let elementAtTile = (x, y) => {
  return document.getElementsByClassName(`mapTile x${x} y${y}`)[0].innerHTML;
};

export { getRandomNumber, changeMapTile };
