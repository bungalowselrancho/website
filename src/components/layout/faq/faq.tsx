//* Components
import { Title, Text, Button } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

export default function FreqAskedQuestions() {
	return (
		<>
			<div className={`${styles.flexCenter} ${styles.titleContainer}`}>
				<Title variant={'h4'} font={'Arvo'} color={'primary975'}>
					¿Todavía tiene preguntas?
				</Title>
				<Title variant={'h4'} font={'Arvo'} color={'primary975'}>
					¡Contáctenos!
				</Title>
			</div>
			<div className={styles.textContainer}>
				<Text variant={'pCenter'} font={'Lato'} color={'primary975'}>
					Su consulta no molesta.
				</Text>
			</div>
			<div className={`${styles.flexCenter} ${styles.buttonContainer}`}>
				<Button variant="secondary" size={'big'}>
					Contactar ahora
				</Button>
			</div>
		</>
	);
}
