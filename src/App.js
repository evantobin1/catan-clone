import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./Navigation/HomeScreen";
import BoardScreen from "./Navigation/BoardScreen";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ul className="App-header">
					<h1>This is the TOP</h1>
				</ul>
				<li>
					<Link to="/">HomeScreen</Link>
				</li>
				<li>
					<Link to="/board">BoardScreen</Link>
				</li>
				<Routes>
					<Route exact path="/" element={<HomeScreen />}></Route>
					<Route exact path="/board" element={<BoardScreen />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
