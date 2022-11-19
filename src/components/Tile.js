import React, { useState, useEffect } from "react";

const calculateXLocation = (location, xOffset, setXLocation) => {
	const xLocation = location.j * 43 - location.l * 43 + xOffset;
	setXLocation(xLocation);
};

const calculateYLocation = (location, yOffset, setYLocation) => {
	const yLocation = location.k * 74 + yOffset;
	setYLocation(yLocation);
};

const Tile = ({ type, location, number, xOffset, yOffset }) => {
	const [xLocation, setXLocation] = useState(0);
	const [yLocation, setYLocation] = useState(0);

	useEffect(() => {
		calculateXLocation(location, xOffset, setXLocation);
		calculateYLocation(location, yOffset, setYLocation);
	}, [location, setXLocation, setYLocation]);

	return (
		<div
			style={{
				display: "inline-block",
				position: "relative",
			}}
		>
			<img
				style={{
					...styles.hexagon,
					...{
						left: xLocation,
						bottom: yLocation,
					},
				}}
				alt={type}
				src={"/assets/" + type + ".png"}
			/>
		</div>
	);
};

export default Tile;

const styles = {
	hexagon: {
		height: "100px",
		width: "87px", // Hexagon has sqrt(3)/2 the amount of width as height
		color: "#FF5733",
		position: "absolute",
	},
};
