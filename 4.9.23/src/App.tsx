import { useState, createContext, Dispatch, SetStateAction } from "react";
import "./App.css";
import Grandpa from "./Grandpa";
import ThemeSwitcher from "./ThemeSwitcher";
import Headline from "./Headline";
interface ContextType {
	text: string;
	setText: Dispatch<SetStateAction<string>>;
}

type Theme = "light" | "dark"

interface  ThemeType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const textContext = createContext<ContextType | null>(null);
export const themeContext = createContext<ThemeType |null>(null);

function App() {
	const [text, setText] = useState<string>("Hello world");
	const [theme, setTheme] = useState<Theme>("light");

	return (
		<>
			<textContext.Provider value={{ text, setText }}>
				<Grandpa />
			</textContext.Provider>
			<themeContext.Provider value={{ theme, setTheme }}>
				<ThemeSwitcher />
        <Headline/>
			</themeContext.Provider>
		</>
	);
}

export default App;
