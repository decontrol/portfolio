import Spinner from '@/components/Spinner';
import useJobsApi from '@/hooks/useJobsApi';
import Job from '@/models/Job';
import Heading from '@/components/Heading';
import JobItem from '@/components/JobItem';
import ScrollLinked from '../components/ScrollLinked';
import { motion } from 'motion/react';

const ExperiencePage = () => {
	const { data: jobs, isPending, isError, error } = useJobsApi();

	if (isError) return <h1>{error.message}</h1>;
	if (isPending) return <Spinner />;
	return (
		<>
			<Heading>Job Experience</Heading>
			<div className='clear-left'>
				<ScrollLinked>
					{jobs?.map((job: Job, index: number) => (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 0.5,
								ease: 'backInOut',
								delay: 0.5 * index,
							}}
							key={job._id}>
							<JobItem job={job} />
						</motion.div>
					))}
				</ScrollLinked>
			</div>
		</>
	);
};

export default ExperiencePage;
