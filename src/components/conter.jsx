import React, { Component } from "react";

class Counter extends Component {
	
	formatClassesAttribute() {
		let classes = "badge m2 badge-";
		classes += this.props.item.value === 0 ? "warning" : "primary";
		// console.log(classes);
		return classes;
	}
	formatCount() {
		const count = this.props.item.value;
		// console.log(count);
		return count === 0 ? "Zero" : count;
	}
	handleNegative(){
		const count = this.props.item.value
		const value = count === 0 ? true : false
		console.log(value);
		return value
	}
	
	render() {
		const { item, onDelete, onReset , onIncrement, onDecrement} = this.props;
		// console.log(this.props.onDelete);
		return (
			<React.Fragment>
				<div className="container">
					<h4>{this.props.item.id}</h4>
					<span className={this.formatClassesAttribute()}>
						{this.formatCount()}
					</span>
					<button
						onClick={() => onIncrement(item)}
						className="btn btn-secondary m-3"
					>
						+
					</button>
					<button
						onClick={() => onDecrement(item)}
						className="btn btn-secondary m-3"
						disabled={this.handleNegative()}
					>
						-
					</button>
					<button
						onClick={() => onDelete(item.id)}
						className="btn btn-danger m-2"
					>
						Delete
					</button>
					<button
						className="btn btn-primary m-2"
						onClick={() => onReset(item)}
					>
						Reset
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default Counter;
