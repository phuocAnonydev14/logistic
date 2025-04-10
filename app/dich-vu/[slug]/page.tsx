import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import ServiceSidebar from "@/components/service-sidebar"
import { getServiceBySlug } from "@/data/services"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    console.error(`Service with slug "${params.slug}" not found`)
    notFound()
  }

  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-900">
              TRANG CHỦ
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <Link href="/dich-vu" className="text-gray-600 hover:text-blue-900">
              DỊCH VỤ
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <ServiceSidebar activeService={service.id} />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">{service.content}</p>

              {service.images && service.images.length > 0 && (
                <div className="my-8 text-center">
                  <Image
                    src={service.images[0] || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={400}
                    className="rounded-md mx-auto"
                  />
                </div>
              )}

              {service.process && (
                <>
                  <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">{service.process.title}</h2>

                  <div className="space-y-4 mt-4">
                    {service.process.steps.map((step, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                          Bước {index + 1}: {step.title}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.images && service.images.length > 1 && (
                <div className="my-8 text-center">
                  <Image
                    src={service.images[1] || "/placeholder.svg"}
                    alt={`${service.title} - Hình ảnh 2`}
                    width={800}
                    height={400}
                    className="rounded-md mx-auto"
                  />
                </div>
              )}

              {service.commitments && (
                <>
                  <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Hòa Phát Logistics luôn cam kết</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {service.commitments.map((commitment, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{commitment.title}</h3>
                        <p className="text-gray-700">{commitment.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.images && service.images.length > 2 && (
                <div className="my-8 text-center">
                  <Image
                    src={service.images[2] || "/placeholder.svg"}
                    alt={`${service.title} - Hình ảnh 3`}
                    width={800}
                    height={400}
                    className="rounded-md mx-auto"
                  />
                </div>
              )}

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  LIÊN HỆ NGAY ĐỂ ĐƯỢC 0906.362.588 TƯ VẤN MIỄN PHÍ
                </h2>
                <p className="text-gray-700 mb-4">Công ty Cổ Phần Vận Tải Hòa Phát (Hòa Phát Logistics)</p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li>
                    <strong>Hotline:</strong> 0906.362.588
                  </li>
                  <li>
                    <strong>Email:</strong> hpl@vantaihoaphat.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
