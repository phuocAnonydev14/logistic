import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Về chúng tôi</h3>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Vntransp Logistics" width={150} height={75} className="h-16 w-auto" />
            </Link>
            <p className="text-gray-600 mb-4">
              Vntransp Logistics - Đối tác tin cậy trong lĩnh vực vận tải và logistics, mang đến giải pháp vận chuyển
              tối ưu cho doanh nghiệp của bạn.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <span className="text-gray-600">162 Đường Phương Liệt, Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-gray-600">0902.190.866</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-600">daphuongthucvntransp@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-gray-600">Hoạt động: 24/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dich-vu/van-tai-duong-bo" className="text-gray-600 hover:text-blue-900">
                  Vận tải đường bộ
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/van-tai-duong-bien" className="text-gray-600 hover:text-blue-900">
                  Vận tải đường biển
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/van-tai-hang-khong" className="text-gray-600 hover:text-blue-900">
                  Vận tải hàng không
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/kho-bai" className="text-gray-600 hover:text-blue-900">
                  Dịch vụ kho bãi
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/tu-van-logistics" className="text-gray-600 hover:text-blue-900">
                  Tư vấn logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Kết nối với chúng tôi</h3>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://zalo.me/0902190866"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <Image src="/zalo-icon.png" alt="Zalo" width={20} height={20} />
              </Link>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-4">Hotline</h3>
            <div className="bg-red-600 text-white px-4 py-2 rounded-md inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-bold">0902.190.866</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Vntransp Logistics. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
