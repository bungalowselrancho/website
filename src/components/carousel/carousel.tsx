'use client';

//* Types
import { CarouselProps } from '@/types';

//* Components
import { Text } from '@/components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';

//* Swiper Modules
import { Autoplay } from 'swiper/modules';

//* Styles
import styles from './styles.module.css';
import 'swiper/css';

export function IconsCarousel(props: CarouselProps) {
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
export function ImagesCarousel(props: CarouselProps) {
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
									{item.children}
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
