"use client"

import Link from "next/link";
import Image from "next/image";
import {companyNews} from "@/components/company-news-section";
import {useQuery} from "@tanstack/react-query";
import {blogService} from "@/services/blog.service";

export const InternalNews = ({isHomePage}: { isHomePage?: boolean }) => {
	
	const {data} = useQuery({queryKey: ["internal"], queryFn: async () => {
		return await  blogService.getAllBlogs({filter: JSON.stringify({tag:'internal'})})
		}
	})
	
	if(!data || !data.length) return null
		
	
	return <div>
		<div>
			{!isHomePage ?
				<h2 className="text-3xl font-bold text-center m-6">Tin công ty</h2>
				:
				<div className="bg-[#003366] py-2 px-4 mb-4">
					<h2 className="text-3xl font-bold text-white">Tin công ty</h2>
				</div>
			}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{data?.map((news, index) => {
					if (isHomePage && index >= 3) return
					return <Link key={news.id} href={`/tin-tuc/${news.slug}`} className="block h-full">
						<div
							className="bg-white border border-gray-200 overflow-hidden h-full hover:shadow-lg transition-all group">
							<div className="relative h-48 w-full overflow-hidden">
								<div className="absolute top-0 right-0 z-10 bg-red-600 text-white text-xs font-medium py-1 px-2">
									NEW
								</div>
								<Image
									src={news.image || "/placeholder.svg?height=192&width=384"}
									alt={news.title}
									fill
									className="object-cover group-hover:scale-105 transition-all"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-bold text-sm text-gray-800">{news.title}</h3>
							</div>
						</div>
					</Link>
				})}
			</div>
		</div>
	</div>
}