import React, { Component } from "react";
import Counter from "./conter";
class Conters extends Component {
	state = {
		counters: [
			{ id: 2, value: 5 },
			{ id: 3, value: 0 },
			{ id: 4, value: 2 },
			{ id: 1, value: 6 },
			// { id: 5, value: 0 },
			// { id: 6, value: 1 },
		],
	};
	handlerDelete = (counterId) => {
		// console.log("i was clicked", counterId);
		const counters = this.state.counters.filter(
			(c) => c.id !== counterId
		);
		this.setState({ counters });
	};
	handelReset = item => {
		const index = this.state.counters.indexOf(item);
		let counters = [...this.state.counters];
		counters[index].value = 0;
		// console.log(counters);
		this.setState({ counters });
	};
	handelDecrement = item => {
		let clone = [...this.state.counters]
		const index = clone.indexOf(item)
		clone[index].value--
		console.log("this",clone);

		this.setState({ counters: clone });
	};
	handelIncrement = item => {
		let clone = [...this.state.counters]
		const index = clone.indexOf(item)
		clone[index].value++
		console.log("this",clone);

		this.setState({ counters: clone });
	};
	

	render() {
		console.log(this.state.counters);
		return (
			<div className="container m-2 p-2">
				<button className="btn btn-primary">reset all</button>
				{this.state.counters.map((item) => (
					<Counter
						key={item.id}
						onDelete={this.handlerDelete}
						onReset={this.handelReset}
						onIncrement = {this.handelIncrement}
						onDecrement = {this.handelDecrement}
						item={item}
					/>
				))}
			</div>
		);
	}
}

export default Conters;
