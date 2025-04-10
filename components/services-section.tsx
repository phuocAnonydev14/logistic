import Link from "next/link"
import { Truck, Ship, Plane, Warehouse } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Vận tải đường bộ",
    description: "Dịch vụ vận chuyển hàng hóa bằng đường bộ với đội xe hiện đại, đa dạng trọng tải.",
    icon: Truck,
    link: "/dich-vu/van-tai-duong-bo",
  },
  {
    id: 2,
    title: "Vận tải đường biển",
    description: "Giải pháp vận chuyển hàng hóa bằng đường biển nội địa và quốc tế.",
    icon: Ship,
    link: "/dich-vu/van-tai-duong-bien",
  },
  {
    id: 3,
    title: "Vận tải hàng không",
    description: "Dịch vụ vận chuyển hàng hóa bằng đường hàng không nhanh chóng, an toàn.",
    icon: Plane,
    link: "/dich-vu/van-tai-hang-khong",
  },
  {
    id: 4,
    title: "Dịch vụ kho bãi",
    description: "Hệ thống kho bãi hiện đại, đáp ứng nhu cầu lưu trữ và phân phối hàng hóa.",
    icon: Warehouse,
    link: "/dich-vu/kho-bai",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dịch vụ của chúng tôi</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.link}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
