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
import dataJson from "./home-page.json"

export function HomeCarousel() {
	
	const [api, setApi] = useState<CarouselApi>();
	
	
	useEffect(() => {
		if (!api) return;
		let currentIndex = 0
		setInterval(() => {
			currentIndex = (currentIndex + 1) % dataJson.carouselImage.length;
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
				{dataJson.carouselImage.map((image, index) => (
					<CarouselItem key={index} className="size-full ">
						<div
							className="flex justify-center p-0"
						>
							<img
								width={2000}
								height={1000}
								style={{objectFit: "cover"}}
								src={image}
								className="sm:h-[80dvh] h-[50dvh] w-full select-none object-cover object-center translate-x-5"
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
