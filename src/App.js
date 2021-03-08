import React, { Component } from "react";
import Counters from "./components/conters";
import Navbar from "./components/navbar";
import "./App.css";
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div main="container">
					<Counters />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
