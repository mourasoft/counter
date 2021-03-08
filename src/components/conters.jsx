import React, { Component } from "react";
import Counter from "./conter";
class Conters extends Component {
	
	

	render() {
		const {onDecrement,onIncrement,onDelete,onReset,counters,onResetAll} = this.props
		// console.log(this.props);
		return (
			<div className="container m-2 p-2">
				<button onClick={onResetAll} className="btn btn-primary">reset all</button>
				{counters.map((item) => (
					<Counter
						key={item.id}
						onDelete={onDelete}
						onReset={onReset}
						onIncrement = {onIncrement}
						onDecrement = {onDecrement}
						item={item}
					/>
				))}
			</div>
		);
	}
}

export default Conters;
