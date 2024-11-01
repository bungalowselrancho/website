//! Next Types
import { StaticImageData } from 'next/image';

//* SVG
export type SVGProps = {
	className?: string;
	fill?: string;
	width: number;
	height: number;
	onClick?: () => void;
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

//* Icons Carousel
export type IconsCarouselItemType = {
	title: string;
	children: React.ReactNode;
};

export type IconsCarouselProps = {
	items: IconsCarouselItemType[];
};

//* Images Carousel

export type ImagesCarouselItemType = {
	title: string;
	src: StaticImageData;
};

export type ImagesCarouselProps = {
	items: ImagesCarouselItemType[];
};

//* Unit Images Carousel

export type UnitImagesCarouselItemType = {
	title: string;
	images: StaticImageData[];
};

export type UnitImagesCarouselProps = {
	items: UnitImagesCarouselItemType;
};

//* Accordion

export type AccordionProps = {
	question: string;
	answer: React.ReactNode | string;
};

//* Dynamic Unit
export type DynamicUnitProps = {
	id: string;
	tag: string;
	title: string;
	description: string[];
	images: StaticImageData[];
	environments: string;
	people: number;
	children?: React.ReactNode;
};

//* Dynamic Unit Card

export type DynamicUnitCardProps = Pick<
	DynamicUnitProps,
	'tag' | 'title' | 'images'
>;
