//* Components
import Image from 'next/image';
import { Title, Text, Button } from '@/components/ui';

//* Images
import heroImage from '@/public/images/hero-image.webp';

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
				<Button variant="primary" size={'big'}>
					Reserva tu estadía
				</Button>
				<Button variant="secondary" size={'big'}>
					Contáctenos
				</Button>
			</div>
			<div className={styles.imageContainer}>
				<Image
					quality={100}
					fill={true}
					src={heroImage}
					alt="Bungalows El Rancho | Hero Image"
				></Image>
			</div>
		</>
	);
}
