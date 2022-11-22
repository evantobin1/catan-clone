import React from "react";
import Board from "../components/Board";
import Menu from "../components/Menu";

const BoardScreen = () => {
  return (
    <div style={{ display: "flex" }}>
      <Menu></Menu>
      <div style={styles.board}>
        <Board size={100}></Board>
      </div>
    </div>
  );
};

export default BoardScreen;

const styles = {
  board: { textAlign: "center" },
};
