import { motion } from 'motion/react';
import { CiLight, CiDark } from 'react-icons/ci';
import logo from '@/assets/logo.webp';
import IconContextProvider from '@/context/IconContextProvider';
import { Link } from 'react-router-dom';

interface NavBarProps {
	handleClick: () => void;
	darkMode?: boolean; // Add this prop for the dark/light mode toggle functionality.
}

const TopBar = ({ handleClick, darkMode }: NavBarProps) => {
	const bgColorVal = darkMode
		? 'bg-gradient-to-r from-green-400 to-green-600 border-green-400'
		: 'bg-gradient-to-r from-green-100 to-green-300 border-green-300';
	return (
		<nav className='nav flex justify-between bg-gradient-to-r from-green-400 to-green-200 dark:bg-gradient-to-r dark:from-green-800 dark:to-green-500  px-5 py-3 items-center'>
			<Link to='/'>
				<img
					width={175}
					aria-label='Link to Home'
					src={logo}
					alt=''
					className='w-[120px] md:w-[175px]'
				/>
			</Link>
			<motion.button
				whileHover={{ opacity: 0.7 }}
				whileTap={{ scale: 0.95, translateX: '2px', translateY: '2px' }}
				transition={{
					duration: 0.125,
					ease: 'easeInOut',
					type: 'spring',
				}}
				className={`${bgColorVal} focus:outline-none border-solid hover:border-dotted hover:opacity-70 border-4 hover:border-accent px-2 py-0 md:px-3 md:py-1 rounded-full`}
				onClick={handleClick}>
				<span className='flex items-align'>
					<IconContextProvider size='30' darkMode={darkMode}>
						{darkMode ? <CiLight /> : <CiDark />}
					</IconContextProvider>
					<span className='text-sm font-semibold text-accent ml-1 mt-[5px]'>
						{darkMode ? 'Light Mode' : 'Dark Mode'}
					</span>
				</span>
			</motion.button>
		</nav>
	);
};

export default TopBar;
