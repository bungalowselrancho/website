//* Components
import { LogoMinified, Text } from '@/components/ui';

//* Styles
import styles from './styles.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerLogo}>
					<LogoMinified width={48} height={31}></LogoMinified>
				</div>
				<div className={styles.footerLinks}>
					<Link className={styles.footerLink} href="/">
						Inicio
					</Link>
					<Link className={styles.footerLink} href="/about">
						Sobre nosotros
					</Link>
					<Link className={styles.footerLink} href="/units">
						Unidades
					</Link>
					<Link className={styles.footerLink} href="/contact">
						Contacto
					</Link>
					<a
						className={styles.footerLink}
						href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
					>
						Alquiler Argentina
					</a>
				</div>
				<div className={styles.footerSocial}></div>
				<div className={styles.footerCopyright}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
						partOf={'Footer'}
					>
						© 2024 El Rancho. All rights reserved.
					</Text>
				</div>
			</footer>
		</>
	);
}
