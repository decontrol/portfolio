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

const JobItem = ({ job }: JobItemProps) => {
	const getLogoProperties = () => {
		const logoMappings: { [key: string]: [number, string] } = {
			okta: [130, 'aspect-[151/50] object-fit dark:invert'],
			mavtek: [160, 'aspect-[231/30] object-fit dark:invert'],
			mojo: [150, 'aspect-[176/50] object-fit dark:brightness-200'],
			science: [80, 'aspect-[72/60] object-fit dark:brightness-200'],
			gildan: [130, 'aspect-[150/30] object-fit dark:brightness-200'],
			edelman: [140, 'aspect-[137/60] object-fit dark:brightness-200'],
			sap: [100, 'aspect-[101/50] object-fit'],
			nurun: [130, 'aspect-[119/50] object-fit dark:brightness-200'],
			dynamo: [150, 'aspect-[157/40] object-fit'],
		};

		for (const [key, properties] of Object.entries(logoMappings)) {
			if (job.logo.includes(key)) {
				return properties;
			}
		}
	};

	return (
		<Card className='border-border mb-5'>
			<CardHeader className='pb-3'>
				<CardTitle className='mb-3 font-bold text-secondary text-xl'>{job.duration}</CardTitle>
				<CardDescription>
					<a href={job.url} className='mt-5' target='_blank' rel='noopener noreferrer'>
						<img
							width={(getLogoProperties()?.[0] ?? 50) as number}
							className={(getLogoProperties()?.[1] ?? 'object-fit') as string}
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
