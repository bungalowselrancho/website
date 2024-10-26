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

export default function Carousel(props: CarouselProps) {
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
							<div className={styles.carouselSlide}>
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
