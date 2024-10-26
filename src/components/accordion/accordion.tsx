'use client';

//* React Core
import { useState } from 'react';

//* Types
import { AccordionProps } from '@/types';

//* Components
import { Text, ChevronIcon } from '@/components/ui';

//* Styles
import styles from './styles.module.css';

function Accordion(props: AccordionProps) {
	const [isShown, setIsShown] = useState(false);

	const handleClick = () => setIsShown(!isShown);
	return (
		<div>
			<div onClick={handleClick} className={styles.question}>
				<b>
					<Text
						variant={'pLeft'}
						font={'Lato'}
						color={'primary975'}
						partOf={'AccordionQuestion'}
					>
						{props.question}
					</Text>
				</b>
				<ChevronIcon
					width={24}
					height={24}
					fill={'#001400'}
					className={isShown ? styles.rotate : styles.idle}
				/>
			</div>
			<div
				className={`${styles.answer} ${
					isShown ? styles.shown : styles.hidden
				}`}
			>
				{props.answer}
			</div>
		</div>
	);
}

export default Accordion;
