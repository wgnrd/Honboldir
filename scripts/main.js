import { getRandomNumber, changeMapTile } from './utils.js';
import Room from './room.js';

const map_width = 81;
const map_height = 41;

let generateEmptyMap = () => {
  let mapDiv = document.getElementById('map');
  let currentLine;
  for (let y = 0; y < map_height; y++) {
    currentLine = '<p>';
    for (let x = 0; x < map_width; x++) {
      currentLine += `<div class="mapTile x${x} y${y}">.</div>`;
    }
    currentLine += '</p>';
    mapDiv.innerHTML += currentLine;
  }
};

let generatePlayer = () => {
  let player = document.getElementsByClassName('mapTile x40 y20')[0];
  player.innerHTML = '@';
};

let generateDoors = (room) => {
  // TODO: number of doors need to be random
  let numberOfDoors = 1;
  // TODO: side need to be random
  let side = 0;

  // top or bottom side
  if (side % 2 === 0) {
    let positionDoor = getRandomNumber(1, room.width - 2);
    // top side
    if (side === 0) {
      // TODO: add utils function to easier replace the innerHTML of a known tile
      document.getElementsByClassName(
        `mapTile x${room.positionX + positionDoor} y${room.positionY}`
      )[0].innerHTML = 'Π';
    }
  }
};

let generateRooms = () => {
  /* rooms need X amount of doors where 0 < X < 4.
  there can only be 0 or 1 door on one side of a room.
  doors cannot be in the edge of a room.

  the width & height of a room Z is: 3 < Z < 11.
  A room cannot be placed where another room already is.
  */

  let r1 = new Room(getRandomNumber(7, 14), getRandomNumber(7, 14));
  r1.positionX = getRandomNumber(0, map_width - r1.width);
  r1.positionY = getRandomNumber(0, map_height - r1.height);

  for (let i = r1.positionX; i < r1.positionX + r1.width; i++) {
    // upper wall
    changeMapTile(i, r1.positionY, '#');

    // lower wall
    changeMapTile(i, r1.positionY + r1.height - 1, '#');
  }

  for (let i = r1.positionY; i < r1.positionY + r1.height; i++) {
    // left wall
    changeMapTile(r1.positionX, i, '#');

    // right wall
    changeMapTile(r1.positionX + r1.width - 1, i, '#');
  }
  generateDoors(r1);
};

generateEmptyMap();
generatePlayer();
generateRooms();
