import { motion } from 'motion/react';
import Heading from '@/components/Heading';
import { techMap } from '@/lib/tech-maps';
import ScrollLinked from '@/components/ScrollLinked';

const TechStack = () => {
	return (
		<div>
			<Heading>Tech Stack</Heading>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
				<ScrollLinked>
					{Object.entries(techMap).map(([$key, obj], index: number) => (
						<motion.div
							key={$key}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.125,
								ease: 'backInOut',
								delay: 0.125 * index,
							}}
							whileHover={{ scale: 1.2, transition: { duration: 0.25, ease: 'easeInOut' } }}>
							<div className='mb-5 h-[80px]'>
								<a
									href={obj.url}
									target='_blank'
									className='flex flex-col items-center'
									rel='noopener noreferrer'>
									<span className='flex h-[60px]'>
										<img
											width={obj.width}
											className={`${obj.className} mt-auto`}
											src={`/techs/logo-${obj.src}.png`}
											alt={obj.name}
											title={obj.name}
										/>
									</span>
									<span className='mt-[15px] text-center text-primary font-bold text-sm'>
										{obj.name}
									</span>
								</a>
							</div>
						</motion.div>
					))}
				</ScrollLinked>
			</div>
		</div>
	);
};

export default TechStack;
