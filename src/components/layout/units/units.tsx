//* Next Core
import Link from 'next/link';

//* Types
import { CardProps } from '@/types';

//* Components
import {
	Beneficts,
	CallToAction,
	FreqAskedQuestions,
	RevealFade,
} from '@/components/layout';
import { Title, Text, Button } from '@/components/ui';
import { Card } from '@/components';

//* Styles
import styles from './styles.module.css';

//* Images
import Clara from '@/../public/images/clara.webp';
import Guille from '@/../public/images/guille.webp';
import MauroI from '@/../public/images/mauro-i.webp';
import MauroII from '@/../public/images/mauro-ii.webp';
import DonYiyo from '@/../public/images/don-yiyo.webp';
import Monoambiente from '@/../public/images/monoambiente.webp';

//* Units Cards Data
const unitsCards: CardProps[] = [
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

const unitsPathCards: CardProps[] = [
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
	{
		tag: 'Rancho II',
		image: MauroII,
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro II',
		route: '/',
	},
	{
		tag: 'Rancho II',
		image: DonYiyo,
		environments: 'Monoambiente (amplio)',
		people: 4,
		title: 'Don Yiyo',
		route: '/',
	},
	{
		tag: 'Rancho I',
		image: Monoambiente,
		environments: 'Monoambiente',
		people: 3,
		title: 'Monoambiente',
		route: '/',
	},
];

export function Units() {
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
					{unitsCards.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
				<div
					className={`${styles.flexCenter} ${styles.buttonContainer}`}
				>
					<Button variant={'secondary'} size={'big'}>
						<Link href={'/units'}>Ver unidades</Link>
					</Button>
				</div>
			</RevealFade>
		</>
	);
}

export function UnitsPath() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h1'} font={'Arvo'} color={'primary975'}>
						Unidades
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Nuestro complejo cuenta con seis unidades de
						alojamiento, divididas en dos predios.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.cardsContainer}`}
				>
					{unitsPathCards.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
			</RevealFade>
			<div className={styles.benefictsContainer}>
				<Beneficts />
			</div>
			<CallToAction />
			<FreqAskedQuestions />
		</>
	);
}
