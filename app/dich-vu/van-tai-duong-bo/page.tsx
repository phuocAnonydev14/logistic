import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ServiceSidebar from "@/components/service-sidebar"

export default function RoadTransportPage() {
  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">DỊCH VỤ VẬN TẢI ĐƯỜNG BỘ</h1>
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
            <ServiceSidebar activeService="van-tai-duong-bo" />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Vận chuyển nội địa là một phần quan trọng của chuỗi logistics. Với vậy với bề dày kinh nghiệm nhiều năm
                trong lĩnh vực giao nhận vận chuyển bằng đường bộ, đường sắt và đường biển, kết hợp cùng đội ngũ nhân
                viên chuyên nghiệp và tận tâm với nghề, chúng tôi tạo điều kiện thuận lợi nhất để cung cấp cho các bạn
                những dịch vụ vận chuyển chất lượng cao trên mọi miền của đất nước. Chúng tôi thực hiện các công việc
                giao nhận vận chuyển tập trung về kho, bảo quản, phân loại và tổ chức vận chuyển, bốc dỡ, giao nhận đến
                các địa điểm được yêu cầu, thu chi hộ cho chủ hàng... thông qua hệ thống kho bãi đủ tiêu chuẩn và chương
                trình phần mềm quản lý theo yêu cầu của các công ty đa quốc gia.
              </p>

              <div className="my-8 text-center">
                <Image
                  src="/van-tai-duong-bo.jpg"
                  alt="Dịch vụ vận chuyển hàng hóa"
                  width={800}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
                Các dịch vụ vận tải đường bộ chúng tôi cung cấp
              </h2>

              <p className="text-gray-700 mb-4">
                Hòa Phát Logistics cung cấp các dịch vụ vận tải đường bộ đa dạng, đáp ứng mọi nhu cầu vận chuyển hàng
                hóa của khách hàng trên toàn quốc:
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Dịch vụ vận tải nội địa</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển hàng hóa đi các tỉnh thành trên toàn quốc</li>
                    <li>Vận chuyển hàng hóa nội thành Hà Nội, TP. HCM, TP Đà Nẵng...</li>
                    <li>Vận chuyển hàng siêu trường siêu trọng</li>
                    <li>Vận chuyển hàng dự án, công trình</li>
                    <li>Vận chuyển hàng hóa theo chuyến, theo tuyến</li>
                    <li>Vận chuyển hàng container nguyên chuyến</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Dịch vụ vận tải quốc tế đường bộ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vận chuyển hàng hóa đi Lào, Campuchia, Trung Quốc, Thái Lan</li>
                    <li>Thủ tục hải quan trọn gói</li>
                    <li>Dịch vụ door-to-door xuyên biên giới</li>
                  </ul>
                </div>
              </div>

              <div className="my-8 text-center">
                <Image
                  src="/van-tai-duong-bo-2.jpg"
                  alt="Đội xe vận tải đường bộ"
                  width={800}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Quá trình dịch vụ vận chuyển đường bộ</h2>

              <p className="text-gray-700 mb-4">Quy trình vận chuyển chuyên nghiệp và hiệu quả:</p>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 1: Tiếp nhận yêu cầu</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Tiếp nhận thông tin về hàng hóa, điểm đi, điểm đến</li>
                    <li>Tư vấn phương tiện phù hợp với loại hàng hóa</li>
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 4: Thực hiện vận chuyển</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Điều phối phương tiện đến địa điểm lấy hàng</li>
                    <li>Kiểm tra, đối chiếu hàng hóa</li>
                    <li>Vận chuyển hàng hóa đến điểm đích</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 5: Bàn giao hàng hóa</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Bàn giao hàng hóa tại điểm đích</li>
                    <li>Ký biên bản bàn giao, xác nhận hoàn thành</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Bước 6: Thanh toán</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Xuất hóa đơn tài chính</li>
                    <li>Thanh toán theo thỏa thuận trong hợp đồng</li>
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Đúng thời gian</h3>
                  <p className="text-gray-700">
                    Cam kết giao hàng đúng thời gian, đúng địa điểm theo thỏa thuận với khách hàng.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Giá cả cạnh tranh</h3>
                  <p className="text-gray-700">Cung cấp dịch vụ với giá cả hợp lý, cạnh tranh trên thị trường.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Đội ngũ chuyên nghiệp</h3>
                  <p className="text-gray-700">Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm với công việc.</p>
                </div>
              </div>

              <div className="my-8 text-center">
                <Image
                  src="/van-tai-duong-bo-3.jpg"
                  alt="Cam kết chất lượng dịch vụ"
                  width={800}
                  height={400}
                  className="rounded-md mx-auto"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Các dịch vụ khác</h2>

              <p className="text-gray-700 mb-4">
                Ngoài dịch vụ vận tải đường bộ, Hòa Phát Logistics còn cung cấp các dịch vụ khác như:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dịch vụ vận tải đường biển, đường sông</li>
                <li>Dịch vụ vận tải đường sắt Bắc - Nam</li>
                <li>Dịch vụ kê khai thuế xuất khẩu</li>
                <li>Dịch vụ cho thuê kho, bãi</li>
                <li>Dịch vụ tư vấn logistics toàn diện</li>
              </ul>

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
