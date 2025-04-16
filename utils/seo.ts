// utils/metadata.ts

import type { Metadata, ResolvingMetadata, Viewport } from 'next';

type MetadataProps = {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	pathname?: string;
	noIndex?: boolean;
};

/**
 * Creates a complete metadata configuration for Next.js pages
 * @param props Custom metadata properties to override defaults
 * @param parent Parent metadata for template values (used internally by Next.js)
 * @returns Complete Next.js Metadata object
 */
export async function generateMetadata(
	props: MetadataProps = {},
	parent?: ResolvingMetadata
): Promise<Metadata> {
	// You can use parent metadata if needed
	const parentMetadata = await parent;
	
	// Base URL for absolute URLs
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
	
	// Default values
	const {
		title = 'Default Site Title',
		description = 'Default site description that provides a summary of your website.',
		keywords = ['default', 'keywords', 'nextjs'],
		image = '/default-og-image.jpg',
		pathname = '/',
		noIndex = false,
	} = props;
	
	// Create the full URL for OG images
	const ogImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
	
	// Create full canonical URL
	const url = `${baseUrl}${pathname}`;
	
	return {
		// Basic metadata
		title: {
			default: title,
			template: `%s | Site Name`,
		},
		description,
		keywords,
		
		// App information
		applicationName: 'Your Application Name',
		authors: [
			{ name: 'Your Name', url: 'https://yourwebsite.com' },
			{ name: 'Your Company', url: 'https://yourcompany.com' },
		],
		generator: 'Next.js',
		
		// Creator information
		creator: 'Your Name or Company',
		publisher: 'Your Publisher Name',
		
		// Robots configuration
		robots: {
			index: !noIndex,
			follow: !noIndex,
			nocache: false,
			googleBot: {
				index: !noIndex,
				follow: !noIndex,
				noimageindex: false,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		
		// Icons configuration
		icons: {
			icon: [
				{ url: '/favicon.ico' },
				{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
				{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			],
			apple: [
				{ url: '/apple-touch-icon.png', sizes: '180x180' },
			],
		},
		
		// PWA manifest
		manifest: '/manifest.json',
		
		// Open Graph metadata
		openGraph: {
			title,
			description,
			url,
			siteName: 'Your Site Name',
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			locale: 'en_US',
			type: 'website',
		},
		
		// Twitter metadata
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			creator: '@yourusername',
			site: '@yoursite',
			images: [ogImageUrl],
		},
		
		// Verification codes
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
			yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
			yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
		},
		
		// Canonical and alternate URLs
		alternates: {
			canonical: url,
			languages: {
				'en-US': `${baseUrl}/en${pathname}`,
				'vi-VN': `${baseUrl}/vi${pathname}`,
			},
		},
		
		// Other settings
		referrer: 'origin-when-cross-origin',
		colorScheme: 'dark light',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
	};
}

/**
 * Creates a viewport configuration for Next.js
 * @returns Viewport configuration
 */
export function generateViewport(): Viewport {
	return {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
		userScalable: true,
		viewportFit: 'cover',
		themeColor: [
			{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
			{ media: '(prefers-color-scheme: dark)', color: '#121212' },
		],
	};
}