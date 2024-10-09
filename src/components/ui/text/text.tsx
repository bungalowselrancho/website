//* Types
import { TextProps } from '@/types';

//* Styles
import styles from './styles.module.css';

export default function Text(props: TextProps) {
	const { variant, font, color, partOf } = props;

	return (
		<>
			{font == 'LatoItalic' && (
				<i className={styles[font]}>{props.children}</i>
			)}

			{variant && font && color && !partOf && (
				<p
					className={`${styles[variant]} ${styles[font]} ${styles[color]}`}
				>
					{props.children}
				</p>
			)}

			{variant && font && color && partOf && (
				<p
					className={`${styles[variant]} ${styles[font]} ${
						styles[color]
					} ${styles[`p${partOf}`]}`}
				>
					{props.children}
				</p>
			)}
		</>
	);
}
