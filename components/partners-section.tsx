"use client"

import {useEffect, useRef, useState} from "react"
import Image from "next/image"
import dataJson from "@/components/home-page/home-page.json"

export default function PartnersSection() {
	const [duplicatedPartners, setDuplicatedPartners] = useState([...dataJson.partners, ...dataJson.partners])
	const scrollRef = useRef<HTMLDivElement>(null)
	const [scrollWidth, setScrollWidth] = useState(0)
	const [containerWidth, setContainerWidth] = useState(0)
	
	useEffect(() => {
		if (scrollRef.current) {
			const scrollContainer = scrollRef.current
			setScrollWidth(scrollContainer.scrollWidth / 2)
			setContainerWidth(scrollContainer.offsetWidth)
		}
	}, [])
	
	const animationDuration = scrollWidth > 0 ? scrollWidth / 50 : 20 // Tốc độ chạy
	
	return (
		<section className="py-16 md:block hidden">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Đối tác của chúng tôi</h2>
				
				<div className="relative overflow-hidden">
					<div
						ref={scrollRef}
						className="flex items-center gap-20"
						style={{
							animation: `scrollPartners ${animationDuration}s linear infinite`,
						}}
					>
						{duplicatedPartners.map((partner, index) => (
							<div
								key={`${partner.id}-${index}`}
								className="flex-shrink-0 bg-white  flex flex-col justify-center items-center"
								style={{minWidth: "150px"}}
							>
								<div className="relative h-16">
									<img
										src={partner.image || "/placeholder.svg?height=64&width=150"}
										alt={partner.name}
										className="object-cover w-28 h-auto"
									/>
								</div>
								<p className="mt-1 font-semibold text-sm">{partner.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			
			<style jsx global>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }
			`}</style>
		</section>
	)
}
