import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import { useDarkMode } from '@/hooks/useDarkMode';
import FindMe from '@/components/FindMe';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const Layout = () => {
	const { darkMode, toggleDark } = useDarkMode();

	const [windowSize, setWindowSize] = useState(0);
	const [navMinimize, setNavMinimize] = useState(true);

	window.onresize = () => {
		setWindowSize(window.innerWidth);
	};

	useEffect(() => {
		setWindowSize(window.innerWidth);
		if (windowSize > 1200) {
			setNavMinimize(false);
		} else {
			setNavMinimize(true);
		}
	}, [windowSize]);
	return (
		<div className='w-screen flex flex-col bg-[url(assets/bg/bg.webp)] bg-white/50 dark:bg-black/80 bg-repeat bg-blend-lighten dark:bg-blend-darken transition-all duration-500 ease-in-out'>
			<section className='container flex flex-col rounded-lg opacity-95 grow min-h-lvh mx-auto font-body text-secondary text-md bg-background transition-all duration-500 ease-in-out shadow-lg'>
				<Nav navMinimize={navMinimize} darkMode={darkMode} />
				<TopBar handleClick={toggleDark} darkMode={darkMode} />
				<div className='mt-5 mb-10 grid md:grid-cols-4'>
					<div className='md:col-span-3 px-5 lg:px-10'>
						<Outlet />
					</div>
					<div className='px-5 md:col-span-1 lg:px-10'>
						<FindMe darkMode={darkMode} />
					</div>
				</div>
				<Footer />
			</section>
		</div>
	);
};
export default Layout;
