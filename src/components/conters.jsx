import React, { Component } from "react";
import Counter from "./conter";
class Conters extends Component {
	
	

	render() {
		// const {onDecrement,onIncrement,onDelete,onReset,counters} = this.props
		// console.log(this.props);
		return (
			<div className="container m-2 p-2">
				<button className="btn btn-primary">reset all</button>
				{this.props.counters.map((item) => (
					<Counter
						key={item.id}
						onDelete={this.props.onDelete}
						onReset={this.props.onReset}
						onIncrement = {this.props.onIncrement}
						onDecrement = {this.props.onDecrement}
						item={item}
					/>
				))}
			</div>
		);
	}
}

export default Conters;
