import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hòa Phát Logistics</h2>
            <p className="text-gray-600 mb-4">
              Hòa Phát Logistics vinh hạnh được coi là đối tác tin cậy hàng đầu của nhiều thương hiệu lớn như: Toll,
              Gemadep, Taisun, Tân Á, Vigracera, Habeco, và nhiều đối tác khác trong lĩnh vực vận tải và logistics.
            </p>
            <p className="text-gray-600 mb-6">
              Với đội ngũ nhân viên chuyên nghiệp, trang thiết bị hiện đại và mạng lưới rộng khắp, chúng tôi cam kết
              mang đến dịch vụ vận tải và logistics chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.
            </p>
            <Link href="/gioi-thieu">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-700 hover:text-white">
                Xem thêm
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DRZymVT5i6w"
                title="Hòa Phát Logistics"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
