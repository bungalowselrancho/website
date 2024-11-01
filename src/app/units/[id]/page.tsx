//* Next Core
import { Metadata } from 'next';

//* Metadata
export const metadata: Metadata = {
	title: 'Unidad | Bungalows El Rancho',
	description: 'Unidad | Sitio web oficial de Bungalows "El Rancho"',
};

//* Types
import { DynamicUnitProps } from '@/types';

//* Components
import { ShortAnimation, DynamicUnitPath } from '@/components/layout';

//* Styles
import styles from './page.module.css';

//* Images
import {
	ClaraUnit1,
	ClaraUnit2,
	ClaraUnit3,
	ClaraUnit4,
	ClaraUnit5,
} from '@/../public/images/clara';

import {
	GuilleUnit1,
	GuilleUnit2,
	GuilleUnit3,
	GuilleUnit4,
	GuilleUnit5,
} from '@/../public/images/guille';

import {
	MauroIUnit1,
	MauroIUnit2,
	MauroIUnit3,
} from '@/../public/images/mauro-i';

import {
	MauroIIUnit1,
	MauroIIUnit2,
	MauroIIUnit3,
	MauroIIUnit4,
} from '@/../public/images/mauro-ii';

import {
	DonYiyoUnit1,
	DonYiyoUnit2,
	DonYiyoUnit3,
	DonYiyoUnit4,
} from '@/../public/images/don-yiyo';

import {
	MonoUnit1,
	MonoUnit2,
	MonoUnit3,
} from '@/../public/images/monoambiente';

//* Units Data
const unitsData: DynamicUnitProps[] = [
	{
		id: 'clara',
		tag: 'Rancho I',
		description: [
			'Dos ambientes',
			'Dormitorio principal',
			'Cocina / Comedor + Camas de 1 plaza',
			'Totalmente equipado',
		],
		images: [ClaraUnit1, ClaraUnit2, ClaraUnit3, ClaraUnit4, ClaraUnit5],
		environments: 'Dos ambientes',
		people: 5,
		title: 'Clara',
	},
	{
		id: 'guille',
		tag: 'Rancho I',
		description: [
			'Dos ambientes',
			'Dormitorio principal',
			'Cocina / Comedor + Camas de 1 plaza',
			'Totalmente equipado',
		],
		images: [
			GuilleUnit1,
			GuilleUnit2,
			GuilleUnit3,
			GuilleUnit4,
			GuilleUnit5,
		],
		environments: 'Dos ambientes',
		people: 5,
		title: 'Guille',
	},
	{
		id: 'mauro-i',
		tag: 'Rancho II',
		description: [
			'Monoambiente',
			'Cocina / Comedor',
			'Camas de 1 plaza / 1½ plaza',
			'Totalmente equipado',
		],
		images: [MauroIUnit1, MauroIUnit2, MauroIUnit3],
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro I',
	},
	{
		id: 'mauro-ii',
		tag: 'Rancho II',
		description: [
			'Monoambiente',
			'Cocina / Comedor',
			'Camas de 1 plaza / 2 plazas',
			'Totalmente equipado',
		],
		images: [MauroIIUnit1, MauroIIUnit2, MauroIIUnit3, MauroIIUnit4],
		environments: 'Monoambiente',
		people: 3,
		title: 'Mauro II',
	},
	{
		id: 'don-yiyo',
		tag: 'Rancho II',
		description: [
			'Monoambiente amplio',
			'Cocina / Comedor',
			'Camas de 1 plaza / 2 plazas',
			'Totalmente equipado',
		],
		images: [DonYiyoUnit1, DonYiyoUnit2, DonYiyoUnit3, DonYiyoUnit4],
		environments: 'Monoambiente (amplio)',
		people: 4,
		title: 'Don Yiyo',
	},
	{
		id: 'monoambiente',
		tag: 'Rancho I',
		description: [
			'Monoambiente amplio',
			'Cocina / Comedor',
			'Camas de 1 plaza / 2 plazas',
			'Totalmente equipado',
		],
		images: [MonoUnit1, MonoUnit2, MonoUnit3],
		environments: 'Monoambiente',
		people: 3,
		title: 'Monoambiente',
	},
];

export default async function DynamicUnitPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;

	return (
		<>
			<div className={styles.page}>
				<ShortAnimation>
					{unitsData.map((item) => {
						if (item.id === id) {
							return <DynamicUnitPath key={id} {...item} />;
						}
					})}
				</ShortAnimation>
			</div>
		</>
	);
}
