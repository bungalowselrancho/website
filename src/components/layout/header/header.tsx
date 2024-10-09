//* Components
import { LogoMinified, MenuIcon } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<LogoMinified width={48} height={31}></LogoMinified>
				<MenuIcon width={24} height={24}></MenuIcon>
			</header>
		</>
	);
}
