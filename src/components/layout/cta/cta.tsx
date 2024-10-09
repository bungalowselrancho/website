//* Components
import { Title, Text, Button } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export default function CallToAction() {
	return (
		<>
			<div className={`${styles.flexCenter} ${styles.titleContainer}`}>
				<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
					¡No esperes más!
				</Title>
			</div>
			<div className={styles.textContainer}>
				<Text variant={'pCenter'} font={'Lato'} color={'primary975'}>
					Reservá tu estadía{' '}
					{<Text font="LatoItalic">hoy mismo</Text>} y viví una
					experiencia única en Bungalows El Rancho.
				</Text>
			</div>
			<div className={`${styles.flexCenter} ${styles.buttonContainer}`}>
				<Button variant="primary" size={'big'}>
					Reservar ahora
				</Button>
				<Button variant="secondary" size={'big'}>
					Contáctenos
				</Button>
			</div>
		</>
	);
}
