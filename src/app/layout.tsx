//* Config
import type { Metadata } from 'next';
import localFont from 'next/font/local';

//* Metadata
export const metadata: Metadata = {
	title: 'Bungalows El Rancho',
	description: 'Sitio web oficial de Bungalows El Rancho',
	metadataBase: new URL('https://bungalowselrancho.com.ar'),
	openGraph: {
		title: 'Bungalows El Rancho',
		description: 'Sitio web oficial de Bungalows El Rancho',
		url: 'https://bungalowselrancho.com.ar',
		siteName: 'Bungalows El Rancho',
		images: [
			{
				url: new URL(
					'https://res.cloudinary.com/dz0fbmmt0/image/upload/v1730426565/thumbnail_gjfctw.png'
				),
			},
		],
	},
	twitter: {
		title: 'Bungalows El Rancho',
		description: 'Sitio web oficial de Bungalows El Rancho',
		images: [
			new URL(
				'https://res.cloudinary.com/dz0fbmmt0/image/upload/v1730426565/thumbnail_gjfctw.png'
			),
		],
	},

	icons: [
		{
			rel: 'icon',
			url: '/icon-default.png',
			href: '/icon-default.png',
		},
		{
			media: '(prefers-color-scheme: light)',
			rel: 'icon',
			url: '/icon1.png',
			href: '/icon1.png',
		},
		{
			media: '(prefers-color-scheme: dark)',
			rel: 'icon',
			url: '/icon2.png',
			href: '/icon2.png',
		},
	],
};

//* Fonts
const arvoBold = localFont({
	src: '../../public/fonts/ArvoBold.woff',
	variable: '--font-arvo-bold',
});

const latoBold = localFont({
	src: '../../public/fonts/LatoBold.woff',
	variable: '--font-lato-bold',
});

const latoRegular = localFont({
	src: '../../public/fonts/LatoRegular.woff',
	variable: '--font-lato-regular',
});

const latoRegularItalic = localFont({
	src: '../../public/fonts/LatoRegularItalic.woff',
	variable: '--font-lato-regular-italic',
});

//* Components
import { Header, Footer } from '@/components/layout';

//* Styles
import '@/styles/globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${arvoBold.variable} ${latoBold.variable} ${latoRegular.variable} ${latoRegularItalic.variable}`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
