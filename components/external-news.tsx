"use client"

import Link from "next/link";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import {blogService} from "@/services/blog.service";

export const ExternalNews = ({isHomePage}: { isHomePage?: boolean }) => {
	
	const {data} = useQuery({queryKey: ["external"], queryFn: async () => {
		return await  blogService.getAllBlogs({filter: JSON.stringify({tag:'external'})})
		}
	})
	
	if(!data || !data.length) return null
	
	if(isHomePage){
		return <div>
			<div className="bg-[#003366] py-2 px-4 mb-4">
				<h2 className="text-3xl font-bold text-white">Tin ngành</h2>
			</div>
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
				{data?.map((news, index) => (
					index < 6 && <Link
						key={news.id}
						href={`/tin-tuc/${news.slug}`}
						className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-900 py-1"
					>
						<div className="h-1.5 w-1.5 bg-blue-700 rounded-full"></div>
						<span className="text-lg font-semibold">{news.title}</span>
					</Link>
				))}
			</div>
		</div>
	}
		
	
	return <div >
		<div className="mb-10">
			{!isHomePage ?
				<h2 className="text-3xl font-bold text-center m-6">Tin ngành</h2>
				:
				<div className="bg-[#003366] py-2 px-4 mb-4">
					<h2 className="text-3xl font-bold text-white">Tin ngành</h2>
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
									src={news?.thumbnail?.imageUrl || "https://plus.unsplash.com/premium_photo-1677535536188-84ae32f3f309?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxsb2dpc3RpY3xlbnwwfHwwfHx8MA%3D%3D"}
									alt={news.title || ""}
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