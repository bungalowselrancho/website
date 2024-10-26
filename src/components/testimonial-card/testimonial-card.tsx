//* Types
import { TestimonialCardProps } from '@/types';

//* Components
import { Text, Avatar } from '@/components/ui';
import { OutlinedRatingIcon, RatingIcon } from '@/components/ui/svgs';

//* Styles
import styles from './styles.module.css';

export default function Card(props: TestimonialCardProps) {
	return (
		<>
			<div className={styles.cardBody}>
				<div className={styles.cardTopContent}>
					<div className={styles.cardRating}>
						{props.rate.map((rate, i) => {
							if (rate === 1) {
								return (
									<RatingIcon
										key={i}
										height={20}
										width={20}
										fill={'#A7FF8D'}
									/>
								);
							} else {
								return (
									<OutlinedRatingIcon
										key={i}
										height={20}
										width={20}
										fill={'#A7FF8D'}
									/>
								);
							}
						})}
					</div>
					<div className={styles.cardComment}>
						<Text
							variant={'pLeft'}
							font={'Lato'}
							color={'primary50'}
							partOf={'CardComment'}
						>
							"{props.comment}"
						</Text>
					</div>
				</div>
				<div className={styles.cardBottomContent}>
					<div className={styles.cardAvatar}>
						<Avatar src={props.avatar} />
					</div>
					<div>
						<div className={styles.cardAuthor}>
							<Text
								variant={'pLeft'}
								font={'Arvo'}
								color={'primary200'}
							>
								{props.author}
							</Text>
						</div>
						<div className={styles.cardDate}>
							<Text
								variant={'pLeft'}
								font={'Lato'}
								color={'secondary200'}
							>
								{props.date}
							</Text>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
