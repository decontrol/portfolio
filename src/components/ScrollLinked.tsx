'use client';

import { motion, useScroll } from 'motion/react';

type ScrollLinkedProps = {
	children: React.ReactNode;
};
export default function ScrollLinked({ children }: ScrollLinkedProps) {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.div
				id='scroll-indicator'
				style={{
					scaleX: scrollYProgress,
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					height: 10,
					originX: 0,
					backgroundColor: 'var(--accent)',
				}}
			/>
			{children}
		</>
	);
}
