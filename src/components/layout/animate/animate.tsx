'use client';

//* React Core
import { useRef, useEffect } from 'react';

//* Framer-Motion
import { motion, useAnimation, useInView } from 'framer-motion';

//* Components
import { LogoComplete } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export function Loader() {
	return (
		<motion.div
			className={styles.loader}
			initial={{ opacity: 1 }}
			animate={{ opacity: 0, display: 'none' }}
			transition={{ ease: 'backInOut', duration: 3 }}
		>
			<LogoComplete fill="#A7FF8D" width={200} height={175} />
		</motion.div>
	);
}

export function Transition(props: any) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<motion.div
			className={styles.transition}
			initial={{ y: 15 }}
			animate={{ y: 0 }}
			transition={{ ease: 'backInOut', duration: 0.6 }}
		>
			{props.children}
		</motion.div>
	);
}

export function Animation(props: any) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<motion.div
			layout
			className={styles.animation}
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeInOut', delay: 1.4, duration: 0.6 }}
		>
			{props.children}
		</motion.div>
	);
}

const offset = 60;

export function RevealFade({
	duration = 0.8,
	delay = 0.12,
	left = null,
	right = null,
	top = null,
	bottom = null,
	variants = {
		hidden: {
			opacity: 0,
		},
		ready: {
			x: left ? -offset : right ? offset : null,
			y: top ? -offset : bottom ? offset : null,
		},
		visible: { opacity: 1, x: 0, y: 0 },
	},
	...props
}) {
	const ref = useRef();
	const controls = useAnimation();
	const inView = useInView(ref, { once: true, margin: '-90px' });
	async function show() {
		await controls.start('ready', { duration: 0 });
		await controls.start('visible');
	}
	useEffect(() => {
		if (inView) {
			show();
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			transition={{ duration, delay, ease: 'easeOut' }}
			style={{
				position: 'relative',
				overflow: 'hidden',
				...props.styles,
			}}
			{...props}
		/>
	);
}
