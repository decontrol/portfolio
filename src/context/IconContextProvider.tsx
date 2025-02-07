import { IconContext } from 'react-icons';

type IconContextProviderProps = {
	children: React.ReactNode;
	size: string;
	darkMode?: boolean;
};

const IconContextProvider = ({ children, size, darkMode }: IconContextProviderProps) => {
	const colorVal = darkMode ? 'yellow' : 'gray';

	return (
		<div>
			<IconContext.Provider value={{ color: colorVal, size: size, className: 'global-class-name' }}>
				{children}
			</IconContext.Provider>
		</div>
	);
};

export default IconContextProvider;
