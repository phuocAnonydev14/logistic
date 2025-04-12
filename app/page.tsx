"use client"

import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import CompanyNewsSection from "@/components/company-news-section"
import PartnersSection from "@/components/partners-section"
import {HomeCarousel} from "@/components/home-page/banner-carousel";

export default function Home() {
  return (
        <>
          <div className="sm:h-[80dvh] h-[50dvh]">
            <HomeCarousel />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[1400px]">
              <AboutSection />
              <ServicesSection />
              <CompanyNewsSection />
            </div>
              <PartnersSection />
          </div>
        </>
  )
}
