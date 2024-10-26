//* Types
import { CardProps } from '@/types';

//* Components
import { Tag, Title, Text, Button } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

import {
	HomeIcon,
	MaxPersonIcon,
	XCircleIcon,
	DollarCircleIcon,
} from '../ui/svgs';

//* Styles
import styles from './styles.module.css';

export default function Card(props: CardProps) {
	return (
		<>
			<Link href={props.route}>
				<div className={styles.cardBody}>
					<div className={styles.cardImage}>
						<div className={styles.cardImageTag}>
							<Tag>{props.tag}</Tag>
						</div>
						<Image
							quality={100}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							src={props.image}
							alt={`${props.title} | Bungalows El Rancho`}
						></Image>
					</div>
					<div className={styles.cardContent}>
						<div className={styles.cardContentDetails}>
							<HomeIcon
								width={20}
								height={20}
								fill={'#ebffeb'}
							></HomeIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary50'}
								partOf={'CardDetailsIcon'}
							>
								{props.environments}
							</Text>
							<MaxPersonIcon
								width={20}
								height={20}
								fill={'#ebffeb'}
							></MaxPersonIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary50'}
								partOf={'CardDetailsIcon'}
							>
								{props.people} personas max.
							</Text>
						</div>
						<div className={styles.cardContentTitle}>
							<Title
								variant={'h5'}
								font={'Arvo'}
								color={'primary200'}
								partOf={'CardContentTitle'}
							>
								{props.title}
							</Title>
						</div>
						<div className={styles.cardContentDetails}>
							<XCircleIcon
								width={20}
								height={20}
								fill={'#ebffeb'}
							></XCircleIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary50'}
								partOf={'CardDetailsIcon'}
							>
								Cancelación flexible
							</Text>
						</div>
						<div className={styles.cardContentDetails}>
							<DollarCircleIcon
								width={20}
								height={20}
								fill={'#ebffeb'}
							></DollarCircleIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary50'}
								partOf={'CardDetailsIcon'}
							>
								Adelanto para reservar 30%
							</Text>
						</div>
						<div className={styles.cardContentDetails}>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary200'}
								partOf={'CardDetailsPrice'}
							>
								Consultar $ por noche
							</Text>
						</div>
						<div className={styles.cardContentRedirect}>
							<Button variant="tertiary" size="medium">
								Ver unidad
							</Button>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
