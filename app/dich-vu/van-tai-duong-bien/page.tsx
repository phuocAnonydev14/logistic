import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ServiceSidebar from "@/components/service-sidebar"

export default function SeaTransportPage() {
  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">DỊCH VỤ VẬN TẢI ĐƯỜNG BIỂN</h1>
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
            <ServiceSidebar activeService="van-tai-duong-bien" />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dịch vụ vận tải đường biển của Hòa Phát Logistics cung cấp giải pháp vận chuyển hàng hóa bằng đường biển
                nội địa và quốc tế, phù hợp với hàng hóa có khối lượng lớn, tiết kiệm chi phí. Với mạng lưới đối tác
                rộng khắp và đội ngũ nhân viên giàu kinh nghiệm, chúng tôi cam kết mang đến dịch vụ vận tải đường biển
                chất lượng cao, đáp ứng mọi nhu cầu vận chuyển của khách hàng.
              </p>

              <div className="my-8 text-center">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Dịch vụ vận tải đường biển"
                  width={800}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Dịch vụ vận tải đường biển của chúng tôi</h2>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Vận chuyển container (FCL)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển container nguyên chuyến</li>
                    <li>Đa dạng loại container: 20', 40', 40'HC, 45'HC, Reefer, Open Top, Flat Rack</li>
                    <li>Kết nối với các cảng lớn trong và ngoài nước</li>
                    <li>Thủ tục hải quan trọn gói</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Vận chuyển hàng lẻ (LCL)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển hàng lẻ, ghép chung container</li>
                    <li>Phù hợp với lô hàng nhỏ, tiết kiệm chi phí</li>
                    <li>Dịch vụ đóng gói, bảo quản hàng hóa</li>
                    <li>Theo dõi hàng hóa thời gian thực</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Vận chuyển hàng rời (Bulk Cargo)</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển hàng rời như: than, quặng, nông sản, xi măng...</li>
                    <li>Tàu chuyên dụng với trọng tải lớn</li>
                    <li>Chi phí cạnh tranh cho hàng hóa khối lượng lớn</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Quy trình vận chuyển đường biển</h2>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 1: Tiếp nhận yêu cầu</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Tiếp nhận thông tin về hàng hóa, cảng đi, cảng đến</li>
                    <li>Tư vấn phương án vận chuyển phù hợp</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 2: Báo giá dịch vụ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Báo giá chi tiết, minh bạch</li>
                    <li>Tư vấn lựa chọn phương án vận chuyển tối ưu</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 3: Ký hợp đồng</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Ký kết hợp đồng vận chuyển</li>
                    <li>Xác nhận lịch trình, phương tiện</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 4: Làm thủ tục hải quan</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Hỗ trợ khách hàng làm thủ tục hải quan xuất nhập khẩu</li>
                    <li>Chuẩn bị các giấy tờ, chứng từ cần thiết</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 5: Vận chuyển hàng hóa</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển hàng hóa đến cảng đích an toàn, đúng thời gian</li>
                    <li>Theo dõi hành trình vận chuyển</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 6: Giao hàng và thanh toán</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Giao hàng tại cảng đích</li>
                    <li>Hoàn tất thủ tục thanh toán</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Hòa Phát Logistics luôn cam kết</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">An toàn hàng hóa</h3>
                  <p className="text-gray-700">
                    Đảm bảo an toàn tuyệt đối cho hàng hóa trong suốt quá trình vận chuyển, có bảo hiểm hàng hóa theo
                    yêu cầu.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Đúng lịch trình</h3>
                  <p className="text-gray-700">
                    Cam kết vận chuyển đúng lịch trình, không làm ảnh hưởng đến kế hoạch kinh doanh của khách hàng.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Chi phí hợp lý</h3>
                  <p className="text-gray-700">Cung cấp dịch vụ với chi phí hợp lý, cạnh tranh trên thị trường.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Hỗ trợ 24/7</h3>
                  <p className="text-gray-700">Đội ngũ nhân viên sẵn sàng hỗ trợ khách hàng 24/7.</p>
                </div>
              </div>

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
