import { Switch } from '@/components/ui/switch';
import { CiLight, CiDark } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.webp';
import IconContextProvider from '@/context/IconContextProvider';

interface NavBarProps {
	handleClick: () => void;
	darkMode?: boolean;
}

const TopBar = ({ handleClick, darkMode }: NavBarProps) => {
	const switchClass = darkMode ? ' mt-1 mr-2' : 'mt-[3px] mr-2';
	return (
		<nav className='nav flex justify-between bg-background transition-all duration-500 ease-in-out px-5 lg:px-10 py-3 items-center '>
			<Link to='/'>
				<img
					width={175}
					aria-label='Link to Home'
					src={logo}
					alt=''
					className='w-[120px] aspect-[300/122] md:w-[175px]'
				/>
			</Link>
			<div
				className='flex border border-border rounded-full py-1 px-2 bg-background'
				title='Toggle Dark Mode'>
				<Switch className={switchClass} checked={darkMode} onCheckedChange={handleClick} />
				<IconContextProvider size='27' darkMode={darkMode}>
					{darkMode ? <CiLight /> : <CiDark />}
				</IconContextProvider>
			</div>
		</nav>
	);
};

export default TopBar;
