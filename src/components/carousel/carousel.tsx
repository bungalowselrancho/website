'use client';

//* Next Core
import Image from 'next/image';

//* Types
import {
	IconsCarouselProps,
	ImagesCarouselProps,
	UnitImagesCarouselProps,
} from '@/types';

//* Components
import { Text } from '@/components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';

//* Swiper Modules
import { Autoplay, Pagination } from 'swiper/modules';

//* Styles
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

export function IconsCarousel(props: IconsCarouselProps) {
	const { items } = props;

	return (
		<>
			<Swiper
				className={styles.swiper}
				modules={[Autoplay]}
				autoplay={true}
				loop={true}
				slidesPerView={3}
				spaceBetween={24}
			>
				{items.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<div className={styles.iconsCarouselSlide}>
								{item.children}
								<Text
									variant={'pCenter'}
									font={'Lato'}
									color={'primary975'}
								>
									{item.title}
								</Text>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
export function ImagesCarousel(props: ImagesCarouselProps) {
	const { items } = props;

	return (
		<>
			<Swiper
				className={styles.swiper}
				modules={[Autoplay]}
				autoplay={true}
				loop={true}
				slidesPerView={1}
				spaceBetween={24}
			>
				{items.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<div className={styles.imagesCarouselSlide}>
								<div className={styles.imageContainer}>
									<Image
										quality={100}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										src={item.src}
										alt={`${item.title} | San José`}
									/>
								</div>
								<Text
									variant={'pCenter'}
									font={'Arvo'}
									color={'primary200'}
								>
									{item.title}
								</Text>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
export function UnitImagesCarousel(props: UnitImagesCarouselProps) {
	const { items } = props;

	return (
		<>
			<Swiper
				className={styles.unitSwiper}
				modules={[Autoplay, Pagination]}
				pagination={true}
				autoplay={true}
				loop={true}
				slidesPerView={1}
				spaceBetween={0}
			>
				{items.images.map((image, i) => {
					return (
						<SwiperSlide key={i}>
							<div className={styles.unitImagesCarouselSlide}>
								<div className={styles.unitImageContainer}>
									<Image
										quality={100}
										fill={true}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										src={image}
										alt={`${items.title} | San José`}
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
