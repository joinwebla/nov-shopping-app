import { useContext } from "react";
import CounterContext from "../context/counterContext";
import CompE from "./CompE";

export const CompD = () => {
	const value = useContext(CounterContext);

	return (
		<>
			<h1>D Component - {value}</h1>
			<CompE />
		</>
	)
}
