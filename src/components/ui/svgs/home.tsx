import { SVGProps } from '@/types';

const HomeIcon = (props: SVGProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fill={props.fill}
			d="M10.592 1.965a.833.833 0 0 0-1.184 0l-7.5 7.5A.834.834 0 0 0 2.5 10.89h.833v5.833A1.666 1.666 0 0 0 5 18.39h10a1.666 1.666 0 0 0 1.667-1.667V10.89h.833a.833.833 0 0 0 .771-1.154.834.834 0 0 0-.18-.271l-7.5-7.5ZM5 16.723V8.731l5-5 5 5v7.992H5Z"
		/>
	</svg>
);
export default HomeIcon;
