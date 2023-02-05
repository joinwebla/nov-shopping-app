import { useContext } from "react"
import CounterContext from "../context/counterContext"
import { CompD } from "./CompD"

export const CompC = () => {
	const value = useContext(CounterContext);

	return (
		<>
			<h1>C Component - {value}</h1>
			<CompD />
		</>
	)
}