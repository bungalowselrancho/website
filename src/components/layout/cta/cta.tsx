//* Components
import { RevealFade } from '../animate';
import { Title, Text, Button } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export default function CallToAction() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						¡No esperes más!
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Reservá tu estadía{' '}
						{<Text font="LatoItalic">hoy mismo</Text>} y viví una
						experiencia única en Bungalows El Rancho.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.buttonContainer}`}
				>
					<a
						className={styles.footerLink}
						href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="primary" size={'big'}>
							Reserva tu estadía
						</Button>
					</a>
					<a
						href="https://wa.me/543447644360"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="secondary" size={'big'}>
							Contáctenos
						</Button>
					</a>
				</div>
			</RevealFade>
		</>
	);
}
