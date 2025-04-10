"use client"

import * as React from "react"

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import {useEffect, useState} from "react";
import Image from "next/image";


const images = [
	'https://images.pexels.com/photos/2681883/pexels-photo-2681883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/20337840/pexels-photo-20337840/free-photo-of-view-of-a-loft-style-living-room-with-a-brown-leather-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

export function HomeCarousel() {
	
	const [api, setApi] = useState<CarouselApi>();
	
	
	useEffect(() => {
		if (!api) return;
		let currentIndex = 0
		setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
			api?.scrollTo(currentIndex)
		}, 10000)
	}, [api]);
	
	return (
		<Carousel
			setApi={setApi}
			className="relative h-[50dvh] sm:h-[80dvh] w-full"
			opts={{
				loop: true,
			}}>
			<CarouselContent className="relative h-full">
				{images.map((image, index) => (
					<CarouselItem key={index} className="h-full">
						<div
							className="flex justify-center p-0"
						>
							<Image
								width={2000}
								height={1000}
								priority
								style={{objectFit: "cover"}}
								src={image}
								className="sm:h-[80dvh] h-[50dvh] w-full select-none object-cover object-center"
								alt=""
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-1 top-1/2 bg-white sm:left-10" color="#fff" style={{zIndex: "10"}}/>
			<CarouselNext className="absolute right-1 top-1/2 bg-white  sm:right-10" color="#fff" style={{zIndex: "10"}}/>
		</Carousel>
	)
}
