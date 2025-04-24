"use client"

import Link from "next/link"
import {cn} from "@/lib/utils"
import {useAtomValue} from "jotai";
import {categoryAtom} from "@/hooks/useGetCategories";

interface ServiceSidebarProps {
	activeService: string
}

export default function ServiceSidebar({activeService}: ServiceSidebarProps) {
	const services = useAtomValue(categoryAtom)
	
	return (
		<div className="bg-gray-100 rounded-lg overflow-hidden">
			{services?.map((service) => (
				<Link key={service.id} href={`/dich-vu/${service.slug}`}>
					<div
						className={cn(
							"p-4 border-b border-gray-200 hover:bg-gray-200 transition-colors",
							activeService === service.slug ? "bg-blue-700 text-white hover:bg-blue-800" : "text-gray-700",
						)}
					>
						<span className="text-sm font-medium">{service.name}</span>
					</div>
				</Link>
			))}
		</div>
	)
}
