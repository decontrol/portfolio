import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import TopBar from '@/components/TopBar';
import { useDarkMode } from '@/hooks/useDarkMode';
import FindMe from '@/components/FindMe';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const ErrorPage = () => {
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
				<div className='mt-2 mb-10 grid md:grid-cols-4'>
					<div className='md:col-span-3 px-5 lg:px-10'>
						<motion.h1
							className='text-9xl font-black text-accent text-center mt-5'
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
							}}>
							404
						</motion.h1>
						<p className='text-2xl text-accent text-center mt-5'>
							Sorry, we couldn't find this page
						</p>

						<p className='text-md text-center mt-5'>
							Please hit &larr; button or the logo to get back to the HomePage
						</p>
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
export default ErrorPage;
