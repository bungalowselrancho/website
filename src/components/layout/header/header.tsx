//* Next Core
import Link from 'next/link';

//* Components
import { Button, LogoMinified, MenuIcon } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<Link href="/">
					<LogoMinified width={48} height={31}></LogoMinified>
				</Link>
				<div className={styles.mobileHeader}>
					<MenuIcon width={24} height={24}></MenuIcon>
				</div>
				<div className={styles.desktopHeader}>
					<div className={styles.ctaContainer}>
						<div className={styles.headerLinks}>
							<Link className={styles.headerLink} href="/">
								Inicio
							</Link>
							<Link className={styles.headerLink} href="/about">
								Sobre nosotros
							</Link>
							<Link className={styles.headerLink} href="/units">
								Unidades
							</Link>
							<Link className={styles.headerLink} href="/contact">
								Contacto
							</Link>
						</div>
						<a
							className={styles.footerLink}
							href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant={'secondary'} size={'mediumH'}>
								Alquiler Argentina
							</Button>
						</a>
						<a
							href="https://wa.me/543447644360"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant={'primary'} size={'mediumH'}>
								Reservar ahora
							</Button>
						</a>
					</div>
				</div>
			</header>
		</>
	);
}
