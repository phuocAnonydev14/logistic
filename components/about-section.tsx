import Link from "next/link"
import { Button } from "@/components/ui/button"
import dataJson from "@/components/home-page/home-page.json"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Vntransp Logistics</h2>
            {dataJson.about.content.map((item, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {item}
              </p>
            ))}
            <Link href="/gioi-thieu">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white">
                Xem thêm
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              {/*<iframe*/}
              {/*  width="100%"*/}
              {/*  height="100%"*/}
              {/*  src={dataJson.about.youtube}*/}
              {/*  title="Vntransp Logistics"*/}
              {/*  frameBorder="0"*/}
              {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
              {/*  allowFullScreen*/}
              {/*  className="absolute inset-0"*/}
              {/*></iframe>*/}
              <img src="https://images.pexels.com/photos/6379249/pexels-photo-6379249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
