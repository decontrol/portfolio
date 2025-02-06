import { motion } from 'motion/react';
import Heading from '@/components/Heading';
import { techMap } from '@/lib/tech-maps';

const TechStack = () => {
	return (
		<div>
			<Heading>Tech Stack</Heading>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
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
						<div className='flex flex-col justify-start items-center mb-5 h-[80px]'>
							<div className='flex h-[60px]'>
								<img
									width={obj.width}
									className={`${obj.className} mt-auto`}
									src={`/techs/logo-${obj.src}.png`}
									alt={obj.name}
									title={obj.name}
								/>
							</div>
							<a
								href={obj.url}
								target='_blank'
								className='mt-[15px] text-center text-primary font-bold text-sm'>
								{obj.name}
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default TechStack;
