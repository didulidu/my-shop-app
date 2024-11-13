import React, {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes/lightTheme';
import { darkTheme } from '../styles/themes/darkTheme';

type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
	theme: ThemeType;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleTheme: () => {}
});

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const storedTheme = localStorage.getItem('theme') as ThemeType | null;
	const [theme, setTheme] = useState<ThemeType>(storedTheme || 'light');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const themeObject = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
