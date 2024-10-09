//* Types
import { TagProps } from '@/types';

//* Styles
import styles from './styles.module.css';

export default function Tag(props: TagProps) {
	const { children } = props;

	return (
		<>
			<span className={styles.tag}>
				<p className={styles.tagText}>{children}</p>
			</span>
		</>
	);
}
