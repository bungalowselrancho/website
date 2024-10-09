'use client';

//* Framer-Motion
import { motion } from 'framer-motion';

//* Styles
import styles from './styles.module.css';

export function Transition(props: any) {
	return (
		<motion.div
			className={styles.transition}
			initial={{ filter: 'blur(7px)' }}
			animate={{ filter: 'blur(0px)' }}
			transition={{ ease: 'easeInOut', duration: 0.6 }}
		>
			{props.children}
		</motion.div>
	);
}

export function Animation(props: any) {
	return (
		<motion.div
			className={styles.animation}
			initial={{ y: 15, filter: 'blur(7px)' }}
			animate={{ y: 0, filter: 'blur(0px)' }}
			transition={{ ease: 'easeInOut', duration: 0.2 }}
		>
			{props.children}
		</motion.div>
	);
}
