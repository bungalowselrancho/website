//* Types
import { DynamicUnitCardProps } from '@/types';

//* Components
import { Tag } from '@/components/ui';

//* Styles
import styles from './styles.module.css';
import { UnitImagesCarousel } from '../carousel/carousel';

export default function DynamicUnitCard(props: DynamicUnitCardProps) {
	return (
		<>
			<div className={styles.cardBody}>
				<div className={styles.cardImage}>
					<div className={styles.cardImageTag}>
						<Tag>{props.tag}</Tag>
					</div>
					<UnitImagesCarousel
						items={{ title: props.title, images: props.images }}
					/>
				</div>
			</div>
		</>
	);
}
