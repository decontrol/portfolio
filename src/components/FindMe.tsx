import Heading from './Heading';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';
import IconContextProvider from '@/context/IconContextProvider';
import { FaXTwitter } from 'react-icons/fa6';
import { FC } from 'react';

type FindMeProps = {
	darkMode: boolean;
};

type socialMapProps = {
	href: string;
	target: string;
	rel: string;
	className: string;
	component: FC;
	handle: string;
};

const FindMe = ({ darkMode }: FindMeProps) => {
	const socialClasses =
		'w-full mb-6 flex items-center origin-center hover:opacity-70 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-50 ease-in';

	const socialMap: {
		[key: string]: socialMapProps;
	} = {
		gitHub: {
			href: 'https://github.com/decontrol',
			target: '_blank',
			rel: 'noopener noreferrer',
			className: socialClasses,
			component: FaGithub,
			handle: '@decontrol',
		},
		linkedIn: {
			href: 'https://linkedin.com/in/hyungjukwon',
			target: '_blank',
			rel: 'noopener noreferrer',
			className: socialClasses,
			component: FaLinkedin,
			handle: '@hyungjukwon',
		},
		twitter: {
			href: 'https://x.com/SkankBlocMTL',
			target: '_blank',
			rel: 'noopener noreferrer',
			className: socialClasses,
			component: FaXTwitter,
			handle: '@SkankBlocMTL',
		},
		email: {
			href: 'email:hyungju.kwon@gmail.com',
			target: '_blank',
			rel: 'noopener noreferrer',
			className: socialClasses,
			component: MdOutlineAttachEmail,
			handle: '@hyungju.kwon',
		},
	};

	return (
		<div className='mt-10 md:mt-0'>
			<Heading>Find me on: </Heading>
			<div className='w-full flex flex-col'>
				<IconContextProvider size='40' darkMode={darkMode} colors={['#75b18f', '#75b18f']}>
					{Object.entries(socialMap).map(
						([key, { href, target, rel, className, component: Component, handle }]) => (
							<a key={key} href={href} target={target} rel={rel} className={className}>
								<Component />
								<span className='ml-2'>{handle}</span>
							</a>
						)
					)}
				</IconContextProvider>
			</div>
		</div>
	);
};

export default FindMe;
