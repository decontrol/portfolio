import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

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
			`relative z-10 bg-background px-5 lg:px-10 transition-all duration-500 ease-in-out h-[48px]
      ${navMinimize ? 'mini-nav' : 'full-nav'} ${isOpen ? 'bg-opacity-75 w-full' : ''}`
		);
	}, [isOpen, navMinimize]);

	const navClasses = 'font-semibold font-deco text-accent text-md';

	return (
		<nav className={classes}>
			<Hamburger
				color={hamburgerColor}
				toggled={isOpen}
				toggle={setOpen}
				size={32}
				duration={0.25}
				distance='sm'
				label='Show Menu'
			/>
			{isOpen && (
				<ul className='flex justify-evenly mb-2 mt-[-37px] mx-6'>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='/'>
							<span className='hover:font-black hover:underline'>Home</span>
						</Link>
					</li>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='experience'>
							<span className='hover:font-black hover:underline'>Experience</span>
						</Link>
					</li>
					<li className={navClasses}>
						<Link onClick={() => setOpen(false)} to='techs'>
							<span className='hover:font-black hover:underline'>Tech Stack</span>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};
export default Nav;
