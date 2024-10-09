//* Types
import { TitleProps } from '@/types';

//* Styles
import styles from './styles.module.css';

export default function Title(props: TitleProps) {
	const { variant, font, color } = props;

	return (
		<>
			{variant == 'h1' && font && color && (
				<h1
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</h1>
			)}
			{variant == 'h2' && font && color && (
				<h2
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</h2>
			)}
			{variant == 'h3' && font && color && (
				<h3
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</h3>
			)}
			{variant == 'h4' && font && color && (
				<h4
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</h4>
			)}
			{variant == 'h5' && font && color && (
				<h5
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</h5>
			)}
		</>
	);
}
