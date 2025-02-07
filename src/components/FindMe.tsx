import Heading from './Heading';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';
import IconContextProvider from '@/context/IconContextProvider';
import { FaXTwitter } from 'react-icons/fa6';

type FindMeProps = {
	darkMode: boolean;
};

const FindMe = ({ darkMode }: FindMeProps) => {
	return (
		<div className='mt-10 md:mt-0'>
			<Heading>Find me on: </Heading>
			<div className='w-full flex flex-col'>
				<IconContextProvider size='40' darkMode={darkMode} colors={['#75b18f', '#75b18f']}>
					<a
						href='https://github.com/decontrol'
						target='_blank'
						rel='noopener'
						className='w-full mb-6 flex items-center origin-center hover:opacity-70 hover:-translate-x-1 hover:-trasnlate-y-1'>
						<FaGithub />
						<span className='ml-2'>@decontrol</span>
					</a>
					<a
						href='https://linkedin.com/in/hyungjukwon'
						target='_blank'
						rel='noopener'
						className='w-full mb-6 flex items-center origin-center hover:opacity-70 hover:-translate-x-1 hover:-trasnlate-y-1'>
						<FaLinkedin />
						<span className='ml-2'>@hyungjukwon</span>
					</a>
					<a
						href='https://x.com/skankblocmtl'
						target='_blank'
						rel='noopener'
						className='w-full mb-6 flex items-center origin-center hover:opacity-70 hover:-translate-x-1 hover:-trasnlate-y-1'>
						<FaXTwitter />
						<span className='ml-2'>@SkankBlocMTL</span>
					</a>
					<a
						href='email:hyungju.kwon@gmail.com'
						target='_blank'
						rel='noopener'
						className='w-full mb-6 flex items-center origin-center hover:opacity-70 hover:-translate-x-1 hover:-trasnlate-y-1'>
						<MdOutlineAttachEmail />
						<span className='ml-4'>@hyungju.kwon</span>
					</a>
				</IconContextProvider>
			</div>
		</div>
	);
};

export default FindMe;
