//! Next Types
import { StaticImageData } from 'next/image';

//* SVG
export type SVGProps = {
	className?: string;
	fill?: string;
	width: number;
	height: number;
};

//* Title
export type TitleProps = {
	variant?: string;
	font?: string;
	color?: string;
	partOf?: string;
	children: React.ReactNode;
};

//* Text
export type TextProps = {
	variant?: string;
	font?: string;
	color?: string;
	partOf?: string;
	children: React.ReactNode;
};

//* Button
export type ButtonProps = {
	variant: string;
	size: string;
	fullWidth?: boolean;
	children: React.ReactNode;
};

//* Avatar
export type AvatarProps = {
	src: StaticImageData;
};

//* Card
export type CardProps = {
	tag: string;
	image: StaticImageData;
	environments: string;
	people: number;
	title: string;
	route: string;
	children?: React.ReactNode;
};

//* Details Card
export type DetailsCardProps = {
	title: string;
	details: string;
	children?: React.ReactNode;
};

//* Testimonial Card
export type TestimonialCardProps = {
	rate: number[];
	comment: string;
	avatar: StaticImageData;
	author: string;
	date: string;
	children?: React.ReactNode;
};

//* Tag
export type TagProps = {
	children?: React.ReactNode;
};

//* Carousel
export type CarouselItemType = {
	title: string;
	children: React.ReactNode;
};

export type CarouselProps = {
	items: CarouselItemType[];
};

//* Accordion

export type AccordionProps = {
	question: string;
	answer: React.ReactNode | string;
};
