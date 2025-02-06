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
	const heightVal = () => {
		if (job.logo.indexOf('okta') !== -1) return 'h-[50px] object-fit dark:invert';
		if (job.logo.indexOf('mojo') !== -1) return 'h-[50px] object-fit dark:brightness-200';
		if (job.logo.indexOf('mavtek') !== -1) return 'h-[30px]  object-fit dark:invert';
		if (job.logo.indexOf('gildan') !== -1) return 'h-[30px]  object-fit dark:brightness-200';
		if (job.logo.indexOf('science') !== -1 || job.logo.indexOf('edelman') !== -1)
			return 'h-[60px]  object-fit dark:brightness-200';
		if (job.logo.indexOf('dynamo') !== -1) return 'h-[40px]  object-fit dark:brightness-200';
		return 'h-[50px] object-fit';
	};

	return (
		<Card className='border-border mb-5'>
			<CardHeader className='pb-3'>
				<CardTitle className='mb-3 font-bold text-secondary text-xl'>{job.duration}</CardTitle>
				<CardDescription>
					<a href={job.url} className='mt-5' target='_blank'>
						<img className={heightVal()} src={job.logo} alt={job.company} />
					</a>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<h2 className='font-bold font-deco text-secondary text-sm'>{job.title}</h2>
				<ul className='list-disc list-inside text-sm'>
					{job.description.map((desc) => (
						<li className='text-primary' key={desc}>
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
