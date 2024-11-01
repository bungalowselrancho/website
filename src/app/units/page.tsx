//* Next Core
import { Metadata } from 'next';

//* Metadata
export const metadata: Metadata = {
	title: `Unidades | Bungalows El Rancho`,
	description: 'Unidades | Sitio web oficial de Bungalows "El Rancho"',
};

//* Layout Components
import { Animation, UnitsPath } from '@/components/layout';

//* Styles
import styles from './page.module.css';

export default function UnitsPage() {
	return (
		<>
			<div className={styles.page}>
				<Animation>
					<UnitsPath />
				</Animation>
			</div>
		</>
	);
}
