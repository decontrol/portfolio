import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

type NavProps = {
	navMinimize: boolean;
	darkMode?: boolean;
};

const Nav = ({ navMinimize, darkMode }: NavProps) => {
	const [classes, setClasses] = useState('');
	const [isOpen, setOpen] = useState(false);

	const hamburgerColor = darkMode ? '#fff' : '#75b18f';

	useEffect(() => {
		setClasses(
			`relative z-10 bg-background px-5 md:px-10 transition-all duration-500 ease-in-out h-[48px]
      ${navMinimize ? 'mini-nav' : 'full-nav'} ${isOpen ? 'bg-opacity-75 w-full' : ''}`
		);
	}, [isOpen, navMinimize]);

	const navClasses = 'font-bold font-deco text-accent text-mg';

	return (
		<nav className={classes}>
			<Hamburger color={hamburgerColor} toggled={isOpen} toggle={setOpen} size={24} />
			{isOpen && (
				<ul className='flex justify-evenly mb-2 mt-[-37px] mx-6'>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='/'>
							<span className='text-accent text-md'>Home</span>
						</Link>
					</li>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='experience'>
							<span className='text-accent text-md'>Experience</span>
						</Link>
					</li>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='techs'>
							<span className='text-accent text-md'>Tech Stack</span>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};
export default Nav;
