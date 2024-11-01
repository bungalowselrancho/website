//* Next Core
import { Metadata } from 'next';

//* Metadata
export const metadata: Metadata = {
	title: 'Inicio | Bungalows El Rancho',
	description: 'Inicio | Sitio web oficial de Bungalows El Rancho',
};

//* Layout Components
import {
	Animation,
	Hero,
	Units,
	Beneficts,
	Testimonials,
	CallToAction,
	FreqAskedQuestions,
} from '@/components/layout';

//* Styles
import styles from './styles/page.module.css';

export default function Home() {
	return (
		<>
			<div className={styles.page}>
				<Animation>
					<Hero />
					<Units />
					<Beneficts />
					<Testimonials />
					<CallToAction />
					<FreqAskedQuestions />
				</Animation>
			</div>
		</>
	);
}
