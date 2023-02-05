import { useEffect, useRef, useState } from "react";

const IncrementComp = () => {
	const [flag, setFlag] = useState(false);


	const clicksRef = useRef(0)
	const handleClick = () => {
		clicksRef.current = clicksRef.current + 1;
		console.log(clicksRef.current);
	}

	return (
		<>
			<h1>Increment Comp</h1>
			<button onClick={handleClick}>Increment</button>
			{flag ? <p>Yes</p> : <p>No</p>}
			<button onClick={() => setFlag(!flag)}>Change Flag </button>
		</>
	)
}

export default IncrementComp;

// 1. The variables got reset - but why?
// 2. How to prevent it?