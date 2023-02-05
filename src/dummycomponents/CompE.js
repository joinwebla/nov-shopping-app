import React from "react";
import CounterContext from "../context/counterContext";

class CompE extends React.Component {
	static contextType = CounterContext;

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<h1>E Component - {this.context}</h1>
		)
	}
}

export default CompE;