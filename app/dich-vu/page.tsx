import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { services } from "@/data/services"

export default function ServicesPage() {
  return (
    <div className="container">
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">DỊCH VỤ</h1>
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
            <span className="text-gray-600">DỊCH VỤ</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Dịch vụ của chúng tôi</h2>
          <p className="text-gray-600">
            Vntransp Logistics cung cấp các giải pháp vận tải và logistics toàn diện, đáp ứng mọi nhu cầu vận chuyển và
            lưu trữ hàng hóa của doanh nghiệp với chất lượng cao và chi phí hợp lý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.shortTitle}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                      </div>
                      <p className="text-sm text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="inline-block px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
