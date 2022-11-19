import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const calculateArrayOfTileBiomes = (numOfEachTile) => {
	let arrayOfTileBiomes = [];
	for (let item in numOfEachTile) {
		for (let i = 0; i < numOfEachTile[item]; i++) {
			arrayOfTileBiomes.push(item);
		}
	}
	return arrayOfTileBiomes;
};

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const arrayOfTileBiomes = calculateArrayOfTileBiomes({
	field: 4,
	mine: 3,
	mountain: 3,
	plains: 4,
	forest: 4,
});

const randomizeBoard = () => {
	let tiles = [];

	shuffleArray(arrayOfTileBiomes);

	var radius = 3;
	let biomeIterator = 0;
	for (var i = 0; i < radius; i++) {
		for (var j = -i; j <= i; j++)
			for (var k = -i; k <= i; k++)
				for (var l = -i; l <= i; l++)
					if (j === 0 && k === 0 && l === 0) {
						tiles.push(
							<Tile
								key={i + ", " + j + ", " + k + ", " + l}
								location={{ j, k, l }}
								xOffset={-20}
								yOffset={-300}
								type="desert"
							></Tile>
						);
					} else if (
						Math.abs(j) + Math.abs(k) + Math.abs(l) === i * 2 &&
						j + k + l === 0
					) {
						const randomBiome =
							arrayOfTileBiomes[Math.random() * arrayOfTileBiomes.length];
						tiles.push(
							<Tile
								key={j + ", " + k + ", " + l}
								location={{ j, k, l }}
								xOffset={-20}
								yOffset={-300}
								type={arrayOfTileBiomes[biomeIterator]}
							></Tile>
						);
						biomeIterator++;
					}
	}
	return tiles;
};

const Board = () => {
	const [tiles, setTiles] = useState([]);

	return (
		<div>
			<button
				onClick={() => {
					console.log("Scrambling");
					setTiles(randomizeBoard());
				}}
			>
				Scramble
			</button>
			{tiles ? tiles : null}
		</div>
	);
};

export default Board;
