import { LogoComplete } from '@/components/ui';

//* Styles
import styles from './styles/loading.module.css';

export default function Loading() {
	return (
		<div className={styles.loadingScreen}>
			<LogoComplete fill="#A7FF8D" width={200} height={175} />
		</div>
	);
}
