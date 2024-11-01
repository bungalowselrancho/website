//* Next Core
import Link from 'next/link';

//* Types
import { CardProps, DynamicUnitProps } from '@/types';

//* Components
import {
	Beneficts,
	CallToAction,
	FreqAskedQuestions,
	RevealFade,
} from '@/components/layout';
import { Title, Text, Button, HomeIcon, MaxPersonIcon } from '@/components/ui';
import { Card, DynamicUnitCard } from '@/components';

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
		route: '/units/clara',
	},
	{
		tag: 'Rancho I',
		image: Guille,
		environments: 'Dos ambientes',
		people: 5,
		title: 'Guille',
		route: '/units/guille',
	},
	{
		tag: 'Rancho II',
		image: MauroI,
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro I',
		route: '/units/mauro-i',
	},
];

const unitsPathCards: CardProps[] = [
	{
		tag: 'Rancho I',
		image: Clara,
		environments: 'Dos ambientes',
		people: 5,
		title: 'Clara',
		route: '/units/clara',
	},
	{
		tag: 'Rancho I',
		image: Guille,
		environments: 'Dos ambientes',
		people: 5,
		title: 'Guille',
		route: '/units/guille',
	},
	{
		tag: 'Rancho II',
		image: MauroI,
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro I',
		route: '/units/mauro-i',
	},
	{
		tag: 'Rancho II',
		image: MauroII,
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro II',
		route: '/units/mauro-ii',
	},
	{
		tag: 'Rancho II',
		image: DonYiyo,
		environments: 'Monoambiente (amplio)',
		people: 4,
		title: 'Don Yiyo',
		route: '/units/don-yiyo',
	},
	{
		tag: 'Rancho I',
		image: Monoambiente,
		environments: 'Monoambiente',
		people: 3,
		title: 'Monoambiente',
		route: '/units/monoambiente',
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
					<Link href={'/units'}>
						<Button variant={'secondary'} size={'big'}>
							Ver unidades
						</Button>
					</Link>
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

export function DynamicUnitPath(props: DynamicUnitProps) {
	return (
		<>
			<div
				className={`${styles.flexCenter} ${styles.flexColumn} ${styles.unitContainer}`}
			>
				<div className={styles.unitCarousel}>
					<DynamicUnitCard
						title={props.title}
						tag={props.tag}
						images={props.images}
					/>
				</div>
				<div className={styles.unitContent}>
					<div className={styles.unitDetails}>
						<div className={styles.unitDetail}>
							<HomeIcon
								width={20}
								height={20}
								fill={'#001400'}
							></HomeIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
								partOf={'UnitDetails'}
							>
								{props.environments}
							</Text>
						</div>
						<div className={styles.unitDetail}>
							<MaxPersonIcon
								width={20}
								height={20}
								fill={'#001400'}
							></MaxPersonIcon>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
								partOf={'UnitDetails'}
							>
								{props.people} personas max.
							</Text>
						</div>
					</div>
					<div className={styles.unitTitle}>
						<Title
							variant={'h3'}
							font={'Arvo'}
							color={'primary975'}
						>
							{props.title}
						</Title>
					</div>
					<div className={styles.unitDescription}>
						{props.description.map((text, i) => {
							return (
								<Text
									key={i}
									variant={'pLeft'}
									font={'Lato'}
									color={'primary975'}
								>
									• {text}
								</Text>
							);
						})}
					</div>
					<div
						className={`${styles.flexCenter} ${styles.flexColumn} ${styles.unitCallToAction}`}
					>
						<Text
							variant={'pCenter'}
							font={'Lato'}
							color={'primary975'}
							partOf={'UnitCallToAction'}
						>
							Al seleccionar <b>“Reservar ahora”</b> se le
							redireccionará a la página de reserva perteneciente
							a la plataforma <b>Alquiler Argentina</b>.
						</Text>
						<a
							className={styles.unitCtaButton}
							href="https://www.alquilerargentina.com/alojamientos/qc35-Bungalow-Bungalows-El-Rancho-San-Jos%C3%A9.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant={'primary'} size={'big'} fullWidth>
								Reservar ahora
							</Button>
						</a>
						<a
							className={styles.unitCtaButton}
							href="https://wa.me/543447644360"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant={'secondary'}
								size={'big'}
								fullWidth
							>
								Solicitar reserva al propietario
							</Button>
						</a>
					</div>
					<div
						className={`${styles.flexCenter} ${styles.flexColumn} ${styles.unitQuestions}`}
					>
						<div
							className={`${styles.flexColumn} ${styles.unitQuestion}`}
						>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Condiciones de la reserva</b>
							</Text>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								• <b>Pago anticipado</b> del <b>30%</b> en
								concepto de seña. El saldo restante se abona al
								ingresar.
								<br />• <b>Estadía mínima</b> de <b>2 noches</b>
								. <br />• <b>Antelación mínima</b>
								para reservar de <b>1 día</b>.
							</Text>
						</div>
						<span className={styles.unitDivider} />
						<div
							className={`${styles.flexColumn} ${styles.unitQuestion}`}
						>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Normas de alojamiento</b>
							</Text>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								• Apto para bebés (0 a 2 años), niños (2 a 12
								años) y personas con movilidad reducida.
								<br />• <b>Aceptamos</b>: familias, parejas y
								grupos de jóvenes.
								<br />• <b>No aceptamos</b>: mascotas, fumar en
								el interior del alojamiento, realizar fiestas,
								recibir visitas y colocar música alta.
							</Text>
						</div>
						<span className={styles.unitDivider} />
						<div
							className={`${styles.flexColumn} ${styles.unitQuestion}`}
						>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Política de cancelación</b>
							</Text>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								Brindamos cancelación <b>flexible</b> con{' '}
								<b>seña reutilizable</b>. Ante la cancelación
								del huésped, el importe abonado en concepto de
								seña se asignará como crédito en pesos para
								utilizar en una futura reserva. La misma deberá
								realizarse dentro de los siguientes{' '}
								<b>12 meses</b> y estará sujeta a
								disponibilidad.
							</Text>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
