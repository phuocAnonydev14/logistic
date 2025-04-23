import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Banknote } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import dataJson from './why-choose-us.json'
import {recruitmentService} from "@/services/recruitment.service";

export default async function RecruitmentPage() {
  
  const res = await recruitmentService.getRecruitment({})
  
  return (
    <div>
      <PageHeader title="Tuyển dụng" />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Cơ hội nghề nghiệp tại Vntransp Logistics
            </h2>
            <p className="text-gray-600">
              Vntransp Logistics luôn tìm kiếm những nhân tài để cùng nhau phát triển. Chúng tôi cung cấp môi trường làm
              việc chuyên nghiệp, năng động và nhiều cơ hội thăng tiến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {res?.data?.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{job.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-blue-900" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-blue-900" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Banknote className="h-4 w-4 text-blue-900" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="text-left">
                    <Link href={`/lien-he`}>
                      <Button className="bg-blue-700 hover:bg-blue-800">Liên hệ</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={dataJson.image.src}
                alt={dataJson.image.alt}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">{dataJson.title}</h2>
              
              <div className="space-y-4">
                {dataJson.reasons.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
