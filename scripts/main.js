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
  // decide on which side the door will spawn
  let side = getRandomNumber(0, 3);

  let doorPositionX = 0;
  let doorPositionY = 0;
  switch (side) {
    case 0: // top side
      doorPositionX = getRandomNumber(1, room.width - 2) + room.positionX;
      doorPositionY = room.positionY;
      break;
    case 1: // right side
      doorPositionX = room.positionX + room.width - 1;
      doorPositionY = getRandomNumber(1, room.height - 2) + room.positionY;
      break;
    case 2: // left side
      doorPositionX = room.positionX;
      doorPositionY = getRandomNumber(1, room.height - 2) + room.positionY;
      break;
    case 3: // bottom side
      doorPositionX = getRandomNumber(1, room.width - 2) + room.positionX;
      doorPositionY = room.positionY + room.height - 1;
      break;
  }
  changeMapTile(doorPositionX, doorPositionY, 'Π');
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
