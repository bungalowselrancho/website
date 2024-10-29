//* Next Core
import { Metadata } from 'next';

//* Metadata
export const metadata: Metadata = {
	title: 'Contacto | Bungalows El Rancho',
	description: 'Contacto | Sitio web oficial de Bungalows "El Rancho"',
};

//* Layout Components
import { Animation, Contact } from '@/components/layout';

//* Styles
import styles from './page.module.css';

export default function ContactPage() {
	return (
		<>
			<div className={styles.page}>
				<Animation>
					<Contact />
				</Animation>
			</div>
		</>
	);
}
