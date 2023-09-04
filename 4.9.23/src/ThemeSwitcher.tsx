import { useContext } from "react";
import { themeContext } from "./App";

export default function ThemeSwitcher() {
	const context = useContext(themeContext);
	const switchColor = () =>
		context?.setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	return (
		<div>
			<button onClick={switchColor}>switch</button>
		</div>
	);
}
