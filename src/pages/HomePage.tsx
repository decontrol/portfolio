import { motion } from 'motion/react';
import Heading from '@/components/Heading';
import useDate from '@/hooks/useDate';

const HomePage = () => {
	const { greeting } = useDate();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'backInOut' }}
			exit={{ opacity: 0 }}>
			<Heading>About myself</Heading>
			<div className=''>
				<motion.img
					initial={{ rotate: '-180deg', scale: 0 }}
					animate={{ rotate: '0deg', scale: 1 }}
					transition={{
						duration: 0.75,
						ease: 'backInOut',
						delay: 0.5,
					}}
					src='/me.png'
					alt='my mug'
					className='w-60 h-60 float-left object-cover rounded-full border-8 border-green-400 dark:border-green-700 mr-5 mb-3'
				/>
				<p className='mt-3 inline'>
					<strong className='font-deco font-semibold text-xl text-accent'>
						{greeting} I’m Hyungju Kwon
					</strong>
				</p>

				<p className='mt-3'>
					A passionate and seasoned <strong className='text-accent'>Front-End Developer</strong>{' '}
					with nearly <strong className='text-accent'>two decades of experience</strong> in crafting
					intuitive, responsive, and visually stunning web experiences. Based in{' '}
					<strong className='text-accent'>Montreal, Quebec, Canada</strong>, I have dedicated my
					career to mastering the art of front-end development while staying at the forefront of
					emerging technologies and industry trends.
				</p>

				<p className='mt-3'>
					My expertise spans a wide range of modern web technologies, including{' '}
					<strong className='text-accent'>
						JavaScript, TypeScript, CSS, HTML, React, Next.js, Node.js, and the MERN stack
					</strong>
					. Over the years, I’ve honed my ability to transform complex ideas into seamless,
					user-friendly interfaces that not only meet but exceed user expectations.{' '}
				</p>

				<p className='mt-3'>
					What drives me is a relentless pursuit of innovation and a commitment to delivering
					high-quality, scalable solutions. Whether it’s building dynamic single-page applications,
					optimizing performance, or collaborating with cross-functional teams, I thrive on solving
					challenges and creating impactful digital experiences.{' '}
				</p>

				<p className='mt-3'>
					When I’m not coding, you’ll find me exploring the latest tools and frameworks, digging in
					the crates to discover records few people want, or traveling the world to experience new
					cultures and perspectives. Let’s connect and create something extraordinary together!{' '}
				</p>
			</div>
		</motion.div>
	);
};

export default HomePage;
