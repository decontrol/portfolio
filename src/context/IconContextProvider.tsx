import { IconContext } from 'react-icons';

type IconContextProviderProps = {
	children: React.ReactNode;
	size: string;
	colors?: [string, string];
	darkMode?: boolean;
};

const IconContextProvider = ({
	children,
	size,
	colors = ['yellow', 'gray'],
	darkMode,
}: IconContextProviderProps) => {
	const colorVal = darkMode ? colors[0] : colors[1];

	// console.log('colors[0] is', colors[0], 'colors[1] is', colors[1]);

	return (
		<>
			<IconContext.Provider value={{ color: colorVal, size: size, className: 'global-class-name' }}>
				{children}
			</IconContext.Provider>
		</>
	);
};

export default IconContextProvider;
