import type React from "react"
import type {Metadata} from "next/dist/lib/metadata/types/metadata-interface"
import {Inter} from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: "Hòa Phát Logistics - Dịch vụ vận tải & logistics",
	description: "Hòa Phát Logistics - Đối tác tin cậy trong lĩnh vực vận tải và logistics",
	generator: 'v0.dev'
}

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="vi">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
		<body className={inter.className}>
		<Header/>
		{/*<MainLayout>*/}
		<main>
					{children}
		</main>
		{/*</MainLayout>*/}
		<Footer/>
		</body>
		</html>
	)
}


import './globals.css'
import {MainLayout} from "@/components/MainLayout";