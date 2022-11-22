import React, { useState } from "react";
import Tile from "./Tile";

// Generates a randomly sorted array of tile elements, each with the size provided in `size`
const generateBoard = (size) => {
  let tiles = [];

  // Lists the number of each biome/tileNumber within a default board
  const numOfEachTileBiome = {
    field: 4,
    mine: 3,
    mountain: 3,
    plains: 4,
    forest: 4,
    desert: 1,
  };

  const numOfEachTileNumber = {
    2: 1,
    3: 2,
    4: 2,
    5: 2,
    6: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 1,
  };

  // A randomly sorted array of biomes/tileNumbers, i.e. ["mine", "forest", ...]
  var arrayOfTileBiomes = [];

  var arrayOfTileNumbers = [];

  // Map the provided objects(arrayOfTileBiomes, arrayOfTileNumbers) into arrays of strings
  for (let item in numOfEachTileBiome) {
    for (let i = 0; i < numOfEachTileBiome[item]; i++) {
      arrayOfTileBiomes.push(item);
    }
  }

  for (let item in numOfEachTileNumber) {
    for (let i = 0; i < numOfEachTileNumber[item]; i++) {
      arrayOfTileNumbers.push(item);
    }
  }

  // Lastly, shuffle the arrays to randomize them
  for (let i = arrayOfTileBiomes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayOfTileBiomes[i], arrayOfTileBiomes[j]] = [
      arrayOfTileBiomes[j],
      arrayOfTileBiomes[i],
    ];
  }

  for (let i = arrayOfTileNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayOfTileNumbers[i], arrayOfTileNumbers[j]] = [
      arrayOfTileNumbers[j],
      arrayOfTileNumbers[i],
    ];
  }

  /**
   * This will generate a 3d coordinate system of tile elements, each given their repective i, j, and k coordinates.
   * The biomes for each tile will be popped off of the arrayOfTileBiomes array.
   * The tileNumbers for each tile will be popped off of the arrayOfTileNumbers array.
   **/
  var radius = 3;
  let numsIterator = 0;
  let biomesIterator = 0;
  for (var i = 0; i < radius; i++) {
    for (var j = -i; j <= i; j++)
      for (var k = -i; k <= i; k++)
        for (var l = -i; l <= i; l++)
          if (
            Math.abs(j) + Math.abs(k) + Math.abs(l) === i * 2 &&
            j + k + l === 0
          ) {
            tiles.push(
              <Tile
                size={size}
                tileNumber={
                  arrayOfTileBiomes[biomesIterator] === "desert"
                    ? null
                    : arrayOfTileNumbers[numsIterator++]
                }
                key={j + ", " + k + ", " + l}
                location={{ j, k, l }}
                biome={arrayOfTileBiomes[biomesIterator]}
              ></Tile>
            );
            biomesIterator++;
          }
  }

  // tiles now stores an array of tile elements, each with its own {i, j, k} coordinate system
  return tiles;
};

const Board = ({ size }) => {
  const [tiles] = useState(generateBoard(size));

  const xPosition = window.innerWidth * 0.5 - size / 2;

  return (
    <div
      style={{
        position: "absolute",
        left: xPosition,
        top: "70%",
        transform: "translate(-50%, -50%)",
        boxShadow: "1px 2px 9px #201E1E",
      }}
    >
      {tiles ? tiles : null}
    </div>
  );
};

export default Board;
