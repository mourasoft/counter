import React from "react";
const Navbar = props => {
	
		// const counter = this.props.counter.filter(this.props.counter.value)
		
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">Navbar {props.counter}</span>
				</div>
			</nav>
		);
}
export default Navbar;
 

