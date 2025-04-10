"use client"

import {useEffect, useRef, useState} from "react"
import Image from "next/image"

const partners = [
	{
		id: 1,
		name: "Toll",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		id: 2,
		name: "Gemadep",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		id: 3,
		name: "Taisun",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		id: 4,
		name: "Tân Á",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.png"
	},
	{
		id: 5,
		name: "Vigracera",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
	{
		id: 6,
		name: "Habeco",
		logo: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
	},
]

export default function PartnersSection() {
	const [duplicatedPartners, setDuplicatedPartners] = useState([...partners, ...partners])
	const scrollRef = useRef<HTMLDivElement>(null)
	const [scrollWidth, setScrollWidth] = useState(0)
	const [containerWidth, setContainerWidth] = useState(0)
	
	useEffect(() => {
		if (scrollRef.current) {
			// Tính toán chiều rộng của container và nội dung để điều chỉnh animation
			const scrollContainer = scrollRef.current
			setScrollWidth(scrollContainer.scrollWidth / 2)
			setContainerWidth(scrollContainer.offsetWidth)
		}
	}, [])
	
	// Tính toán thời gian animation dựa trên chiều rộng
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
								className="flex-shrink-0 bg-white  flex flex-col  justify-center items-center"
								style={{minWidth: "150px"}}
							>
								<div className="relative h-16 w-full">
									<Image
										src={partner.logo || "/placeholder.svg?height=64&width=150"}
										alt={partner.name}
										fill
										className="object-contain"
									/>
								</div>
								<p>{partner.name}</p>
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
