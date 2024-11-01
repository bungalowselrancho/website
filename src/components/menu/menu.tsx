'use client';

//* React Core
import { useState } from 'react';

//* Components
import { MenuIcon, XIcon } from '@/components/ui';

import styles from './styles.module.css';
import Link from 'next/link';
import { MenuAnimation } from '@/components/layout';

export default function Menu() {
	const [isOpened, setIsOpened] = useState(false);

	const handleClick = () => setIsOpened(!isOpened);

	return (
		<>
			{isOpened ? (
				<MenuAnimation isOpen={isOpened}>
					<div className={styles.menu}>
						<XIcon
							onClick={handleClick}
							className={styles.menuXIcon}
							width={24}
							height={24}
							fill="#EBFFEB"
						/>
						<div className={styles.menuLinks}>
							<Link
								onClick={handleClick}
								className={styles.menuLink}
								href="/"
							>
								Inicio
							</Link>
							<Link
								onClick={handleClick}
								className={styles.menuLink}
								href="/about"
							>
								Sobre nosotros
							</Link>
							<Link
								onClick={handleClick}
								className={styles.menuLink}
								href="/units"
							>
								Unidades
							</Link>
							<Link
								onClick={handleClick}
								className={styles.menuLink}
								href="/contact"
							>
								Contacto
							</Link>
						</div>
					</div>
				</MenuAnimation>
			) : (
				<MenuIcon
					onClick={handleClick}
					width={24}
					height={24}
					fill="#001400"
				></MenuIcon>
			)}
		</>
	);
}
