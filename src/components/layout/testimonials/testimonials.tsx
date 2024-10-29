//* Types
import { TestimonialCardProps } from '@/types';

//* Components
import { RevealFade } from '@/components/layout';
import { Title, Text } from '@/components/ui';
import { TestimonialCard } from '@/components';

//* Styles
import styles from './styles.module.css';

//* Images
import Natalia from '@/../public/images/testimonial-1.png';
import Matias from '@/../public/images/testimonial-2.png';
import Veronica from '@/../public/images/testimonial-3.png';

const testimonials: TestimonialCardProps[] = [
	{
		rate: [1, 1, 1, 1, 1],
		comment: 'Excelente todo, muy amables. ¡Volveremos!',
		avatar: Natalia,
		author: 'Natalia Bordón',
		date: 'Febrero de 2024',
	},
	{
		rate: [1, 1, 1, 1, 0],
		comment:
			'Muy lindo lugar cómodo, sencillo, tranquilo para descansar unos días. El bungalow muy bien equipado con todo lo que necesitas para el día a día, Estela y Raúl excelentes anfitriones muy atentos y amables desde el primer día.',
		avatar: Matias,
		author: 'Matias Bonora',
		date: 'Febrero de 2024',
	},
	{
		rate: [1, 1, 1, 1, 1],
		comment:
			'El departamento nos resultó muy cómodo, con todo lo necesario para una estadía confortable, tal como aparece en la publicación. Los anfitriones, Estela y Raúl, fueron muy atentos y amables. Otro dato es que cerca del departamento hay un supermercado y una casa de comidas muy recomendable.',
		avatar: Veronica,
		author: 'Verónica Zabaleta',
		date: 'Enero de 2024',
	},
];

export default function Testimonials() {
	return (
		<>
			<RevealFade>
				<div
					className={`${styles.flexCenter} ${styles.titleContainer}`}
				>
					<Title variant={'h2'} font={'Arvo'} color={'primary975'}>
						Testimonios
					</Title>
				</div>
				<div className={styles.textContainer}>
					<Text
						variant={'pCenter'}
						font={'Lato'}
						color={'primary975'}
					>
						Nos encanta destacar las experiencias y comentarios de
						nuestros huéspedes.
					</Text>
				</div>
				<div
					className={`${styles.flexCenter} ${styles.flexColumn} ${styles.testimonialsContainer}`}
				>
					{testimonials.map((testimonial, i) => (
						<TestimonialCard key={i} {...testimonial} />
					))}
				</div>
			</RevealFade>
		</>
	);
}
