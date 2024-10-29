//* Types
import { DetailsCardProps } from '@/types';

//* Next Core
import Image from 'next/image';

//* Components
import { RevealFade, Testimonials } from '@/components/layout';
import {
	Title,
	Text,
	HousesIcon,
	MapPinIcon,
	FamiliarPlaceIcon,
} from '@/components/ui';
import { DetailsCard } from '@/components';

//* Images
import aboutImage from '@/../public/images/about-image.webp';

//* Styles
import styles from './styles.module.css';

const detailsCardData: DetailsCardProps[] = [
	{
		title: 'Ubicación estratégica',
		details:
			'Nuestro complejo se encuentra a solo minutos de termas, playas y atracciones locales.',
		children: <MapPinIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'Variedad de alojamiento',
		details:
			'Contamos con seis unidades cómodas y bien equipadas para adaptarse a tus necesidades.',
		children: <HousesIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'Ambiente acogedor',
		details:
			'Brindamos una cálida y dedicada atención, para que tu estadía sea inolvidable.',
		children: <FamiliarPlaceIcon width={48} height={48} fill={'#0D5450'} />,
	},
];

export default function About() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title
						variant={'h1'}
						font={'Arvo'}
						color={'primary975'}
						partOf={'AboutTitle'}
					>
						Sobre nosotros
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Ubicados en el corazón de la ciudad de San José,
						nuestros acogedores bungalows son el refugio ideal para
						disfrutar de la naturaleza y la tranquilidad. 
					</Text>
				</div>
			</RevealFade>
			<RevealFade>
				<div className={styles.historyContainer}>
					<div className={styles.historyContentContainer}>
						<div className={styles.headlineContainer}>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								Nuestra historia
							</Text>
						</div>
						<div
							className={`${styles.flexCenter} ${styles.subtitleContainer}`}
						>
							<Title
								variant={'h2'}
								font={'Arvo'}
								color={'primary975'}
								partOf={'AboutSubtitle'}
							>
								“Un hogar lejos de casa”
							</Title>
						</div>
					</div>
					<div className={styles.textContainer}>
						<Text
							variant={'pLeft'}
							font={'Lato'}
							color={'primary975'}
						>
							Con más de <b>20 años</b> de experiencia en el
							sector turístico, en bungalows “El Rancho” nos
							enorgullece ofrecer un servicio familiar y
							personalizado.
							<br />
							<br />
							Nuestras unidades están diseñadas para brindar una
							estadía <b>cómoda y memorable</b>, con detalles
							pensados en tu <b>bienestar</b>.
							<br />
							<br />
							Cada rincón de nuestro establecimiento refleja
							nuestra <b>pasión</b> por lo que hacemos, asegurando
							que cada visitante se sienta <b>como en casa</b>{' '}
							durante su estadía.
						</Text>
					</div>
				</div>
				<div className={styles.flexCenter}>
					<div className={styles.imageWrapper}>
						<Image
							style={{
								borderRadius: '20px',
								borderColor: 'transparent',
							}}
							priority
							quality={100}
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							src={aboutImage}
							alt="Bungalows El Rancho | About Image"
						/>
					</div>
				</div>
			</RevealFade>
			<RevealFade>
				<div className={styles.headlineContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Te preguntarás...
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.subtitleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						¿Por qué elegirnos?
					</Title>
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
			</RevealFade>
			<Testimonials />
		</>
	);
}
