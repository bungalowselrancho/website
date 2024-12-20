//* Types
import { IconsCarouselItemType, DetailsCardProps } from '@/types';

//* Components
import { RevealFade } from '@/components/layout';
import {
	Title,
	Text,
	HomeHeartIcon,
	StarIcon,
	HousesIcon,
	LeafIcon,
	CarIcon,
	ClosetIcon,
	GrillIcon,
	OvenIcon,
	BedIcon,
	ACIcon,
	FanIcon,
	HeatingIcon,
	WifiIcon,
	CctvIcon,
	ChalkboardIcon,
	ExtinguiserIcon,
	FridgeIcon,
	ParkIcon,
} from '@/components/ui';
import { IconsCarousel, DetailsCard } from '@/components';

//* Styles
import styles from './styles.module.css';

//* Units Cards Data
const facilitiesItems: IconsCarouselItemType[] = [
	{
		title: 'Parque',
		children: <ParkIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Cochera',
		children: <CarIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Lavadero',
		children: <ClosetIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Asador',
		children: <GrillIcon width={30} height={30} fill={'#0D5450'} />,
	},
];

const equipementsItems: IconsCarouselItemType[] = [
	{
		title: 'Horno',
		children: <OvenIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Heladera',
		children: <FridgeIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Calefacción',
		children: <HeatingIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Ventilador',
		children: <FanIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'A/AC',
		children: <ACIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Ropa - Cama',
		children: <BedIcon width={30} height={30} fill={'#0D5450'} />,
	},
];

const securityItems: IconsCarouselItemType[] = [
	{
		title: 'Internet',
		children: <WifiIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Televisión',
		children: <ChalkboardIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Cámaras',
		children: <CctvIcon width={30} height={30} fill={'#0D5450'} />,
	},
	{
		title: 'Matafuegos',
		children: <ExtinguiserIcon width={30} height={30} fill={'#0D5450'} />,
	},
];

//* Details Cards Data

const detailsCardData: DetailsCardProps[] = [
	{
		title: 'Experiencia familiar',
		details:
			'Con más de 20 años en el sector, nos enfocamos en brindar un ambiente familiar y acogedor, donde cada detalle está pensado para el confort de los huéspedes.',
		children: <HomeHeartIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'Compromiso y calidad',
		details:
			'La dedicación de nuestro equipo se refleja en la calidad del servicio, asegurando que los visitantes tengan una experiencia inolvidable.',
		children: <StarIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'Variedad de alojamiento',
		details:
			'Ofrecemos seis opciones de alojamiento que van desde monoambientes hasta bungalows de dos ambientes, adaptados a diferentes necesidades y grupos.',
		children: <HousesIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'Entorno natural',
		details:
			'La cercanía a zonas de arroyos y parques nacionales permite disfrutar de actividades al aire libre, como pesca, senderismo y exploración de la naturaleza.',
		children: <LeafIcon width={48} height={48} fill={'#0D5450'} />,
	},
];

export default function Beneficts() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						Beneficios
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Estos son los beneficios que hacen de {<b>El Rancho</b>}{' '}
						una opción atractiva para tu visita.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.flexColumn} ${styles.detailsCardsContainer}`}
				>
					{detailsCardData.map((item, i) => {
						return (
							<DetailsCard
								key={i}
								title={item.title}
								details={item.details}
							>
								{item.children}
							</DetailsCard>
						);
					})}
				</div>
				<div className={`${styles.flexCenter} ${styles.flexColumn}`}>
					<div
						className={`${styles.flexCenter} ${styles.subtitleContainer}`}
					>
						<Title
							variant={'h5'}
							font={'Arvo'}
							color={'primary975'}
						>
							{<u>Ofrecemos para tu estadía</u>}
						</Title>
					</div>
					<div className={styles.carouselContainer}>
						<div
							className={`${styles.flexCenter} ${styles.flexColumn} ${styles.carouselItemContainer}`}
						>
							<Text
								variant={'pCenter'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Instalaciones</b>
							</Text>
							<IconsCarousel items={facilitiesItems} />
						</div>
						<div
							className={`${styles.flexCenter} ${styles.flexColumn} ${styles.carouselItemContainer}`}
						>
							<Text
								variant={'pCenter'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Equipamientos</b>
							</Text>
							<IconsCarousel items={equipementsItems} />
						</div>
						<div
							className={`${styles.flexCenter} ${styles.flexColumn} ${styles.carouselItemContainer}`}
						>
							<Text
								variant={'pCenter'}
								font={'Lato'}
								color={'primary975'}
							>
								<b>Servicios y Seguridad</b>
							</Text>
							<IconsCarousel items={securityItems} />
						</div>
					</div>
				</div>
			</RevealFade>
		</>
	);
}
