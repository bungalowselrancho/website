//* Next Types
import { StaticImageData } from 'next/image';

//* SVG Component
export type SVGProps = {
	fill?: string;
	width: number;
	height: number;
};

//* Title Component
export type TitleProps = {
	variant?: string;
	font?: string;
	color?: string;
	children: React.ReactNode;
};

//* Text Component
export type TextProps = {
	variant?: string;
	font?: string;
	color?: string;
	partOf?: string;
	children: React.ReactNode;
};

//* Button Component
export type ButtonProps = {
	variant: string;
	size: string;
	fullWidth?: boolean;
	children: React.ReactNode;
};

//* Card Component
export type CardProps = {
	tag: string;
	image: StaticImageData;
	environments: string;
	people: number;
	title: string;
	route: string;
	children?: React.ReactNode;
};

//* Tag Component
export type TagProps = {
	children?: React.ReactNode;
};
