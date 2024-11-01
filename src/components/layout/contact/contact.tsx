//* Types
import { ImagesCarouselItemType, DetailsCardProps } from '@/types';

//* Components
import { RevealFade } from '@/components/layout';
import { Title, Text, WhatsappIcon, MailIcon } from '@/components/ui';
import { DetailsCard, ImagesCarousel, Maps } from '@/components';

//* Styles
import styles from './styles.module.css';

//* Details Card Data

const detailsCardData: DetailsCardProps[] = [
	{
		title: 'Whatsapp',
		details: 'Al número +54 3447-644360',
		children: <WhatsappIcon width={48} height={48} fill={'#0D5450'} />,
	},
	{
		title: 'E-mail',
		details: 'bungalowselrancho@gmail.com',
		children: <MailIcon width={48} height={48} fill={'#0D5450'} />,
	},
];

//* Images Carousel Data

import MuseoRegional from '@/../public/images/museo-regional.webp';
import MolinoForclaz from '@/../public/images/molino-forclaz.webp';
import Termas from '@/../public/images/termas.webp';
import Balneario from '@/../public/images/balneario.webp';
import TiroFederal from '@/../public/images/tiro-federal.webp';

const imagesCarouselData: ImagesCarouselItemType[] = [
	{
		title: 'Museo Histórico Regional',
		src: MuseoRegional,
	},
	{
		title: 'Molino Forclaz',
		src: MolinoForclaz,
	},
	{
		title: 'Balneario San José',
		src: Balneario,
	},
	{
		title: 'Termas San José',
		src: Termas,
	},
	{
		title: 'Tiro Federal',
		src: TiroFederal,
	},
];

export default function Contact() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h1'} font={'Arvo'} color={'primary975'}>
						Contáctenos
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Podes realizar tus consultas a través de los siguientes
						medios de comunicación.
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
			</RevealFade>
			<RevealFade>
				<div className={styles.locationAtractionsContainer}>
					<div
						className={`${styles.flexCenter} ${styles.atractionsSubtitleContainer}`}
					>
						<Title
							variant={'h2'}
							font={'Arvo'}
							color={'primary975'}
						>
							Atractivos cercanos
						</Title>
					</div>
					<div className={styles.textContainer}>
						<Text
							variant={'pCenter'}
							font={'Lato'}
							color={'primary975'}
						>
							Nuestro complejo se encuentra en el{' '}
							<b>Paseo del Casco Histórico de San José</b>,
							ofreciendo diferentes atractivos turísticos a solo
							minutos del mismo.
						</Text>
					</div>
					<div className={styles.atractionsCarouselContainer}>
						<ImagesCarousel items={imagesCarouselData} />
					</div>
				</div>
			</RevealFade>
			<div className={styles.locationContainer}>
				<div className={styles.locationContentContainer}>
					<div>
						<div className={styles.headlineContainer}>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'primary975'}
							>
								Nuestro complejo
							</Text>
						</div>
						<div
							className={`${styles.flexCenter} ${styles.locationSubtitleContainer}`}
						>
							<Title
								variant={'h2'}
								font={'Arvo'}
								color={'primary975'}
								partOf={'AboutSubtitle'}
							>
								Ubicación
							</Title>
						</div>
					</div>
					<div className={styles.locationTextContainer}>
						<Text
							variant={'pLeft'}
							font={'Lato'}
							color={'primary975'}
						>
							<b>San José, Entre Ríos</b>
						</Text>
						<Text
							variant={'pLeft'}
							font={'Lato'}
							color={'primary975'}
						>
							Sargento García 1733
						</Text>
						<Text
							variant={'pLeft'}
							font={'Lato'}
							color={'primary975'}
						>
							<a
								href="https://maps.app.goo.gl/BAfmiFbnsCKFps636"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>Ver mapa</b>
							</a>
						</Text>
					</div>
				</div>

				<div className={styles.locationMapContainer}>
					<Maps />
				</div>
			</div>
		</>
	);
}
