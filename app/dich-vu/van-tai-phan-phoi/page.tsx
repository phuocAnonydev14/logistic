import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ServiceSidebar from "@/components/service-sidebar"

export default function DistributionTransportPage() {
  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">DỊCH VỤ VẬN TẢI PHÂN PHỐI</h1>
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
            <ServiceSidebar activeService="van-tai-phan-phoi" />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dịch vụ vận tải phân phối của Hòa Phát Logistics cung cấp giải pháp vận chuyển và phân phối hàng hóa tới
                các điểm bán lẻ, đại lý, cửa hàng trên toàn quốc. Với mạng lưới rộng khắp và đội xe đa dạng, chúng tôi
                đảm bảo hàng hóa của khách hàng được phân phối đến đúng địa điểm, đúng thời gian với chi phí tối ưu.
              </p>

              <div className="my-8 text-center">
                <Image
                  src="/van-tai-phan-phoi.jpg"
                  alt="Dịch vụ vận tải phân phối"
                  width={800}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Dịch vụ vận tải phân phối của chúng tôi</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Phân phối hàng tiêu dùng</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Phân phối hàng tiêu dùng đến các siêu thị, cửa hàng tiện lợi</li>
                    <li>Đảm bảo thời gian giao hàng theo lịch trình của khách hàng</li>
                    <li>Hệ thống theo dõi hàng hóa thời gian thực</li>
                    <li>Báo cáo giao nhận chi tiết</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Phân phối hàng công nghiệp</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Phân phối thiết bị, vật tư công nghiệp đến các nhà máy, công trình</li>
                    <li>Phương tiện chuyên dụng đảm bảo an toàn hàng hóa</li>
                    <li>Đội ngũ nhân viên được đào tạo chuyên nghiệp</li>
                    <li>Quy trình giao nhận chặt chẽ</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Liên hệ với chúng tôi</h3>
                <p className="text-gray-700 mb-4">
                  Để được tư vấn chi tiết về dịch vụ vận tải phân phối, vui lòng liên hệ với chúng tôi qua:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Hotline: 0906.362.588</li>
                  <li>Email: hpl@vantaihoaphat.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
