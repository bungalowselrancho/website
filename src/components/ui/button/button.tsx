//* Types
import { ButtonProps } from '@/types';

//* Styles
import styles from './styles.module.css';

export default function Button(props: ButtonProps) {
	const { variant, size, fullWidth } = props;
	return (
		<>
			{variant && size && !fullWidth && (
				<button className={`${styles[variant]} ${styles[size]}`}>
					{props.children}
				</button>
			)}
			{variant && size && fullWidth && (
				<button
					className={`${styles[variant]} ${styles[size]} ${styles.fullWidth}`}
				>
					{props.children}
				</button>
			)}
		</>
	);
}
