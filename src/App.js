import React, { Component } from "react";
import Counters from "./components/conters";
import Navbar from "./components/navbar";
import "./App.css";
class App extends Component {
	state = {
		counters: [
			{ id: 2, value: 5 },
			{ id: 3, value: 0 },
			{ id: 4, value: 2 },
			{ id: 1, value: 6 },
			{ id: 5, value: 0 },
			{ id: 6, value: 1 },
		],
	};
	handlerDelete = counterId => {
		// console.log("i was clicked", counterId);
		const counters = this.state.counters.filter(
			(c) => c.id !== counterId
		);
		this.setState({ counters });
	};
	handelReset = (item) => {
		const index = this.state.counters.indexOf(item);
		let counters = [...this.state.counters];
		counters[index].value = 0;
		// console.log(counters);
		this.setState({ counters });
	};
	handelDecrement = (item) => {
		let clone = [...this.state.counters];
		const index = clone.indexOf(item);
		clone[index].value--;
		// console.log("this", clone);

		this.setState({ counters: clone });
	};
	handelIncrement = (item) => {
		let clone = [...this.state.counters];
		const index = clone.indexOf(item);
		clone[index].value++;
		// console.log("this", clone);

		this.setState({ counters: clone });
	};
	render() {

		return (
			<React.Fragment>
				<Navbar />
				<div main="container">
					<Counters
						counters = {this.state.counters}
						onIncrement={this.handelIncrement}
						onDecrement={this.handelDecrement}
						onReset={this.handelReset}
						onDelete={this.handlerDelete}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
