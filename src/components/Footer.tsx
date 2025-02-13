import { motion } from 'motion/react';
import useDate from '@/hooks/useDate';
import { footerTechMap } from '@/lib/tech-maps';

const Footer = () => {
	const { formattedYear } = useDate();

	return (
		<section className='mt-auto text-center border-t border-border py-5'>
			<div className='flex mb-5'>
				<div className='mx-auto'>
					<p className='mb-4 text-accent font-deco'> Powered by: </p>
					<div className='px-5 md:px-10 flex flex-wrap md:flex-nowrap gap-5 justify-center md:gap-7 items-center'>
						{Object.entries(footerTechMap).map(([$key, { url, src, name, width, className }]) => (
							<motion.a
								key={$key}
								href={url}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ scale: 1, rotate: '0' }}
								whileHover={{ scale: 1.2, rotate: '360deg' }}
								transition={{
									duration: 0.125,
									ease: 'easeInOut',
									type: 'spring',
								}}>
								<img
									width={width}
									className={className}
									src={`/techs/logo-${src}.webp`}
									alt={name}
									title={name}
								/>
							</motion.a>
						))}
					</div>
				</div>
			</div>

			<p className='text-sm font-semibold text-primary'>
				&copy; Hyungju Kwon. Made with 👀 in Montreal, Quebec, Canada. {formattedYear}
			</p>
		</section>
	);
};

export default Footer;
