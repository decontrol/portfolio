type HeadingProps = {
	children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
	return (
		<>
			<h1 className='text-xl font-deco text-accent mb-10 pb-2 border-b border-border '>
				{children}
			</h1>
		</>
	);
};

export default Heading;
