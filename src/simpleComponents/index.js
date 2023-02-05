import PropTypes from 'prop-types';

function A(props) {
	return (
		<>
			<h1>A Component - {props.userInfo.name}</h1>
			<h1>Words in name - {props.userInfo.name.split(" ").length}</h1>
		</>
	)
}

function B() {
	return (
		<h1>B Component</h1>
	)
}

function C() {
	return (
		<h1>C Component</h1>
	)
}

function D() {
	return (
		<h1>D Component</h1>
	)
}

A.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
	}),
}


export {
	A, B, C, D
}