type HeadingProps = {
	children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
	return (
		<>
			<h1 className='text-2xl font-deco font-bold text-accent float-left mb-10'>
				{children} <hr className='mt-2 text-border w-full' />
			</h1>
			<div className='w-1 h-1 clear-left'></div>
		</>
	);
};

export default Heading;
