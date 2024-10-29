//* Next Core
import { Metadata } from 'next';

//* Metadata
export const metadata: Metadata = {
	title: 'Sobre nosotros | Bungalows El Rancho',
	description: 'Sobre nosotros | Sitio web oficial de Bungalows "El Rancho"',
};

//* Layout Components
import { Animation, About } from '@/components/layout';

//* Styles
import styles from './page.module.css';

export default function AboutPage() {
	return (
		<>
			<div className={styles.page}>
				<Animation>
					<About />
				</Animation>
			</div>
		</>
	);
}
