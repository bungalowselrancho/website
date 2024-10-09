//* Layout Components
import {
	Animation,
	Hero,
	Units,
	CallToAction,
	FreqAskedQuestions,
} from '@/components/layout';

//* Styles
import styles from './styles/page.module.css';

const loadingState = async () => {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve('Simulated Loading State'), 3000);
		});
	} catch (error) {
		console.error(error);
	}
};

export default async function Home() {
	await loadingState();

	return (
		<>
			<div className={styles.page}>
				<Animation>
					<Hero />
					<Units />
					<CallToAction />
					<FreqAskedQuestions />
				</Animation>
			</div>
		</>
	);
}
