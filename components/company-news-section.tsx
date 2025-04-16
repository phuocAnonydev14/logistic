import Image from "next/image"
import {InternalNews} from "@/components/internal-news";
import {ExternalNews} from "@/components/external-news";
import dataJson from "@/components/home-page/home-page.json"


export default function CompanyNewsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <InternalNews isHomePage />
        <ExternalNews isHomePage />
        <div>
          <div className="bg-[#003366] py-2 px-4 mb-4">
            <h2 className="text-3xl font-bold text-white">HÌNH ẢNH CÔNG TY</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {dataJson.images.map((image, index) => (
              <div key={index} className="relative h-20 md:h-40 border border-gray-200 overflow-hidden">
                <Image
                  src={image || "/placeholder.svg?height=96&width=96"}
                  alt={image}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
