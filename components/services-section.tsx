"use client"

import Link from "next/link"
import {useGetCategories} from "@/hooks/useGetCategories";
import {Category} from "@/types/app.type";
import parse from "html-react-parser";

export default function ServicesSection() {

  const {data} = useGetCategories({})
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dịch vụ của chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((service: Category) => (
            <Link key={service.id} href={`/dich-vu/${service.slug}`}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <img src="https://vntransplogistics.vn/wp-content/uploads/2023/10/hpl-van-tai-duong-bo.jpeg" className="w-full h-[200px] object-cover" loading="lazy"/>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-center line-clamp-3 text-ellipsis">{parse(service.description || '')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
