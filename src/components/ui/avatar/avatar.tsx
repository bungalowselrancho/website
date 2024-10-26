//* Types
import { AvatarProps } from '@/types';

//* Components
import Image from 'next/image';

export default function Avatar(props: AvatarProps) {
	return (
		<Image
			quality={100}
			fill={true}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			src={props.src}
			alt={`Testimonios | Bungalows El Rancho`}
		></Image>
	);
}
