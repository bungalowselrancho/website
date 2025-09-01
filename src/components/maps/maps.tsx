'use client';

//* Styles
import styles from './styles.module.css';

export default function Maps() {
	return (
		<>
			<iframe
				width="600"
				height="450"
				loading="lazy"
				className={styles.map}
				allowFullScreen
				src="https://www.google.com/maps?q=-32.21541213989258,-58.21834182739258&z=15&output=embed">
			</iframe>
		</>
	);
}
