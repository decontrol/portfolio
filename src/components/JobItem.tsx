import Job from '@/models/Job';
import {
	Card,
	CardContent,
	CardDescription,
	// CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type JobItemProps = {
	job: Job;
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * JobItem component.
 *
 * @param {JobItemProps} props - The component props.
 * @param {Job} props.job - The job object.
 *
 * @returns {ReactElement} The component.
 *
 * @example
 * <JobItem job={job} />
 */
/******  db949227-c84b-456f-b8f6-f1787d55df7b  *******/
const JobItem = ({ job }: JobItemProps) => {
	const widthClassVal = () => {
		if (job.logo.indexOf('okta') !== -1) return [130, 'aspect-[151/50] object-fit dark:invert'];
		if (job.logo.indexOf('mavtek') !== -1) return [160, 'aspect-[231/30] object-fit dark:invert'];
		if (job.logo.indexOf('mojo') !== -1)
			return [150, 'aspect-[176/50] object-fit dark:brightness-200'];
		if (job.logo.indexOf('science') !== -1)
			return [80, 'aspect-[72/60] object-fit dark:brightness-200'];
		if (job.logo.indexOf('gildan') !== -1)
			return [130, 'aspect-[150/30] object-fit dark:brightness-200'];
		if (job.logo.indexOf('edelman') !== -1)
			return [140, 'aspect-[137/60]object-fit dark:brightness-200'];
		if (job.logo.indexOf('sap') !== -1) return [100, 'asapect-[101/50] object-fit'];
		if (job.logo.indexOf('nurun') !== -1)
			return [130, 'aspect-[119/50] object-fit dark:brightness-200'];
		if (job.logo.indexOf('dynamo') !== -1) return [150, 'aspect-[157/40] object-fit'];
	};

	return (
		<Card className='border-border mb-5'>
			<CardHeader className='pb-3'>
				<CardTitle className='mb-3 font-bold text-secondary text-xl'>{job.duration}</CardTitle>
				<CardDescription>
					<a href={job.url} className='mt-5' target='_blank'>
						<img
							width={(widthClassVal()?.[0] ?? 50) as number}
							className={(widthClassVal()?.[1] ?? 'object-fit') as string}
							src={job.logo}
							alt={job.company}
						/>
					</a>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<h2 className='font-bold mt-2 mb-3 font-deco text-secondary text-sm'>{job.title}</h2>
				<ul className='list-disc list-inside text-sm'>
					{job.description.map((desc) => (
						<li className='text-secondary' key={desc}>
							{desc}
						</li>
					))}
				</ul>
			</CardContent>
			{/* <CardFooter className='flex justify-between'>
				</CardFooter> */}
		</Card>
	);
};

export default JobItem;
