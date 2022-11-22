import React, { useState, useEffect } from "react";

const likelyhood = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  8: 5,
  9: 4,
  10: 3,
  11: 2,
  12: 1,
};

const Tile = ({ biome, location, tileNumber, size }) => {
  const [xLocation, setXLocation] = useState("0");
  const [yLocation, setYLocation] = useState("0");
  const [height, setHeight] = useState("0");
  const [width, setWidth] = useState("0");

  useEffect(() => {
    // Trigonometry :P
    setXLocation(
      (location.j * ((size * Math.sqrt(3)) / 2)) / 2 -
        (location.l * ((size * Math.sqrt(3)) / 2)) / 2
    );
    setYLocation((location.k * size * 3) / 4);
    setHeight(size);
    setWidth((size * Math.sqrt(3)) / 2);
  }, [location, size]);

  return (
    <div>
      <img
        style={{
          ...styles.hexagon,
          ...{
            left: xLocation,
            bottom: yLocation,
            height,
            width,
          },
        }}
        alt={biome}
        src={"/assets/" + biome + ".png"}
      />
      {tileNumber === undefined || tileNumber === null ? null : (
        <div
          style={{
            ...styles.circle,
            ...{
              display: "inline-block",
              left: xLocation + width / 2 - height / 6,
              bottom: yLocation + height / 2 - height / 6,
              height: height / 3,
              width: height / 3,
            },
          }}
        >
          <p
            style={
              tileNumber === "8" || tileNumber === "6"
                ? styles.textRed
                : styles.textBlack
            }
          >
            {tileNumber}
          </p>
          <div style={{ marginTop: -15 }}>
            <p
              style={
                tileNumber === "8" || tileNumber === "6"
                  ? styles.textRed
                  : styles.textBlack
              }
            >
              {".".repeat(likelyhood[tileNumber])}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tile;

const styles = {
  hexagon: {
    color: "#FF5733",
    position: "absolute",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    boxShadow: "1px 2px 9px #201E1E",
    backgroundColor: "#D6B16E",
    position: "absolute",
  },
  textBlack: {
    margin: "auto",
    color: "#201E1E",
  },
  textRed: {
    margin: "auto",
    color: "#C12930",
  },
};
