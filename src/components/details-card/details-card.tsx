//* Types
import { DetailsCardProps } from '@/types';

//* Components
import Image from 'next/image';
import Title from '../ui/title';
import Text from '../ui/text';

//* Styles
import styles from './styles.module.css';

export default function DetailsCard(props: DetailsCardProps) {
	return (
		<>
			<div className={styles.cardBody}>
				<div className={styles.cardImage}>{props.children}</div>
				<div className={styles.cardContent}>
					<div className={styles.cardContentTitle}>
						<Title
							variant={'h4'}
							font={'Lato'}
							color={'primary975'}
						>
							{props.title}
						</Title>
					</div>
					<div className={styles.cardContentDetails}>
						<Text
							variant={'pCenter'}
							font={'Lato'}
							color={'primary975'}
						>
							{props.details}
						</Text>
					</div>
				</div>
			</div>
		</>
	);
}
