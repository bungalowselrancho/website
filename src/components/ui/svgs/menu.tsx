//* Types
import { SVGProps } from '@/types';

const MenuIcon = (props: SVGProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fill={props.fill || '#001400'}
			d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
		/>
	</svg>
);

export default MenuIcon;
