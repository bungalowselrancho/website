//* Layout Components
import {
	Animation,
	Hero,
	Units,
	Beneficts,
	Testimonials,
	CallToAction,
	FreqAskedQuestions,
} from '@/components/layout';

//* Styles
import styles from './styles/page.module.css';

export default function Home() {
	return (
		<>
			<div className={styles.page}>
				<Animation>
					<Hero />
					<Units />
					<Beneficts />
					<Testimonials />
					<CallToAction />
					<FreqAskedQuestions />
				</Animation>
			</div>
		</>
	);
}
