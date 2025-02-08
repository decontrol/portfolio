import { motion } from 'motion/react';
import Heading from '@/components/Heading';
import { techMap } from '@/lib/tech-maps';
import ScrollLinked from '@/components/ScrollLinked';

const TechStackPage = () => {
	return (
		<div>
			<Heading>Tech Stack</Heading>
			<div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
				<ScrollLinked>
					{Object.entries(techMap).map(
						([$key, { url, src, name, width, className }], index: number) => (
							<motion.div
								key={$key}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.125,
									ease: 'backInOut',
									delay: 0.125 * index,
								}}>
								<div className='mb-5 h-[80px]'>
									<motion.a
										href={url}
										target='_blank'
										className='flex flex-col items-center'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.2, transition: { duration: 0.25, ease: 'easeInOut' } }}>
										<span className='flex h-[60px]'>
											<img
												width={width}
												className={`${className} mt-auto`}
												src={`/techs/logo-${src}.webp`}
												alt=''
												title={name}
											/>
										</span>
										<span className='mt-[15px] text-center text-primary font-bold text-sm'>
											{name}
										</span>
									</motion.a>
								</div>
							</motion.div>
						)
					)}
				</ScrollLinked>
			</div>
		</div>
	);
};

export default TechStackPage;
