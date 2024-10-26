//* Next Core
import Link from 'next/link';

//* Types
import { CardProps } from '@/types';

//* Components
import { RevealFade } from '../animate';
import { Title, Text, Button } from '@/components/ui';
import { Card } from '@/components';

//* Styles
import styles from './styles.module.css';

//* Images
import Clara from '@/../public/images/clara.webp';
import Guille from '@/../public/images/guille.webp';
import MauroI from '@/../public/images/mauro-i.webp';

//* Units Cards Data
const cards: CardProps[] = [
	{
		tag: 'Rancho I',
		image: Clara,
		environments: 'Dos ambientes',
		people: 5,
		title: 'Clara',
		route: '/',
	},
	{
		tag: 'Rancho I',
		image: Guille,
		environments: 'Dos ambientes',
		people: 5,
		title: 'Guille',
		route: '/',
	},
	{
		tag: 'Rancho II',
		image: MauroI,
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro I',
		route: '/',
	},
];

export default function Units() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						Unidades
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Alojamiento con el toque{' '}
						{<Text font={'LatoItalic'}>familiar</Text>} que mereces.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.cardsContainer}`}
				>
					{cards.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
				<div
					className={`${styles.flexCenter} ${styles.buttonContainer}`}
				>
					<Button variant={'secondary'} size={'big'}>
						<Link href={'/'}>Ver unidades</Link>
					</Button>
				</div>
			</RevealFade>
		</>
	);
}
