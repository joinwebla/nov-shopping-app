import { useState } from "react"
import CounterContext from "../context/counterContext"
import { CompB } from "./CompB"

export const CompA = () => {
	const [counter, setCounter] = useState(0)

	return (
		<>
			<h1>A Component - {counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>Change Counter</button>

			<CounterContext.Provider value={counter}>
				<CompB />
			</CounterContext.Provider>
			<CompB />
		</>
	)
}