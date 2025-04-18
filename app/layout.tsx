import type React from "react"
import type {Metadata} from "next/dist/lib/metadata/types/metadata-interface"
import {Inter} from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {MainLayout} from "@/components/MainLayout";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: {
		template: '%s | Vntransp Logistics - Dịch vụ vận tải & logistics',
		default: 'Vntransp Logistics - Dịch vụ vận tải & logistics',
	},
	description: "Vntransp Logistics - Đối tác tin cậy trong lĩnh vực vận tải và logistics",
	keywords: ['Vntransp', 'logistic'],
	openGraph: {
		title: 'Vntransp Logistics',
		description: 'Vntransp Logistics - Đối tác tin cậy trong lĩnh vực vận tải và logistics',
		siteName: 'vntransp',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Ảnh Open Graph',
			},
		],
		locale: 'vi_VN',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	icons: {
		icon: '/logo-short.ico',
	},
};

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="vi">
		<head>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
		</head>
		
		<body className={inter.className}>
		<MainLayout>
			<Header/>
			<main className="overflow-hidden mb-10">
				{children}
			</main>
			<Footer/>
		</MainLayout>
		</body>
		</html>
	)
}


