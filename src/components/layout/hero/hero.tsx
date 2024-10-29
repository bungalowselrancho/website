//* Next Core
import Image from 'next/image';

//* Components
import { Title, Text, Button } from '@/components/ui';

//* Images
import heroImage from '@/../public/images/hero-image.webp';

//* Styles
import styles from './styles.module.css';

export default function Hero() {
	return (
		<>
			<div className={`${styles.flexCentered} ${styles.titleContainer}`}>
				<Title variant={'h1'} font={'Arvo'} color={'primary975'}>
					Bungalows "El Rancho"
				</Title>
			</div>
			<div className={styles.textContainer}>
				<Text variant={'pCenter'} font={'Lato'} color={'primary975'}>
					Un {<Text font="LatoItalic">hogar</Text>} lejos de casa.
				</Text>
				<Text variant={'pCenter'} font={'Lato'} color={'primary975'}>
					Donde la naturaleza y el confort se encuentran.
				</Text>
				<Text variant={'pCenter'} font={'Lato'} color={'primary975'}>
					{<Text font={'LatoItalic'}>20 años</Text>} de trayectoria en
					turismo.
				</Text>
			</div>
			<div className={`${styles.flexCentered} ${styles.buttonContainer}`}>
				<a
					className={styles.footerLink}
					href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant={'primary'} size={'big'}>
						Reserva tu estadía
					</Button>
				</a>
				<a
					href="https://wa.me/543447644360"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant={'secondary'} size={'big'}>
						Contáctenos
					</Button>
				</a>
			</div>
			<div className={styles.imageContainer}>
				<Image
					priority
					quality={100}
					fill={true}
					src={heroImage}
					alt="Bungalows El Rancho | Hero Image"
				/>
			</div>
		</>
	);
}
