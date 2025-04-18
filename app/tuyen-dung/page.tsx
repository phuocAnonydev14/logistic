import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Banknote } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import dataJson from './why-choose-us.json'

const jobs = [
  {
    id: 1,
    title: "Nhân viên điều phối vận tải",
    location: "Hà Nội",
    type: "Toàn thời gian",
    salary: "15-20 triệu",
    description:
      "Chúng tôi đang tìm kiếm nhân viên điều phối vận tải có kinh nghiệm để quản lý và điều phối đội xe vận tải đường bộ.",
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Logistics, Quản trị kinh doanh hoặc các ngành liên quan",
      "Có ít nhất 2 năm kinh nghiệm trong lĩnh vực điều phối vận tải",
      "Kỹ năng giao tiếp và đàm phán tốt",
      "Thành thạo tin học văn phòng",
      "Có khả năng làm việc dưới áp lực cao",
    ],
    benefits: [
      "Mức lương cạnh tranh, thưởng theo hiệu quả công việc",
      "Đóng BHXH, BHYT, BHTN đầy đủ theo quy định",
      "Môi trường làm việc chuyên nghiệp, năng động",
      "Cơ hội thăng tiến và phát triển nghề nghiệp",
      "Các chế độ phúc lợi theo quy định của công ty",
    ],
    deadline: "30/04/2023",
    slug: "nhan-vien-dieu-phoi-van-tai",
  },
  {
    id: 2,
    title: "Nhân viên kinh doanh logistics",
    location: "Hồ Chí Minh",
    type: "Toàn thời gian",
    salary: "15-25 triệu",
    description:
      "Chúng tôi cần tuyển nhân viên kinh doanh logistics để phát triển thị trường và chăm sóc khách hàng hiện có.",
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Kinh tế, Ngoại thương, Logistics hoặc các ngành liên quan",
      "Có ít nhất 1 năm kinh nghiệm trong lĩnh vực kinh doanh logistics",
      "Kỹ năng giao tiếp và đàm phán tốt",
      "Thành thạo tiếng Anh giao tiếp",
      "Có khả năng làm việc độc lập và theo nhóm",
    ],
    benefits: [
      "Mức lương cạnh tranh + hoa hồng theo doanh số",
      "Đóng BHXH, BHYT, BHTN đầy đủ theo quy định",
      "Môi trường làm việc chuyên nghiệp, năng động",
      "Cơ hội thăng tiến và phát triển nghề nghiệp",
      "Các chế độ phúc lợi theo quy định của công ty",
    ],
    deadline: "15/05/2023",
    slug: "nhan-vien-kinh-doanh-logistics",
  },
  {
    id: 3,
    title: "Lái xe container",
    location: "Hải Phòng",
    type: "Toàn thời gian",
    salary: "12-18 triệu",
    description: "Chúng tôi cần tuyển lái xe container có kinh nghiệm để vận chuyển hàng hóa trong nước và quốc tế.",
    requirements: [
      "Có bằng lái xe hạng C, D, E, FC",
      "Có ít nhất 2 năm kinh nghiệm lái xe container",
      "Có kiến thức về luật giao thông đường bộ",
      "Có sức khỏe tốt, chịu được áp lực công việc",
      "Có tinh thần trách nhiệm cao",
    ],
    benefits: [
      "Mức lương cạnh tranh + phụ cấp theo chuyến",
      "Đóng BHXH, BHYT, BHTN đầy đủ theo quy định",
      "Được trang bị đầy đủ thiết bị bảo hộ lao động",
      "Được đào tạo và nâng cao tay nghề",
      "Các chế độ phúc lợi theo quy định của công ty",
    ],
    deadline: "20/05/2023",
    slug: "lai-xe-container",
  },
]

export default function RecruitmentPage() {
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
            {jobs.map((job) => (
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

                  <div className="text-center">
                    <Link href={`/tuyen-dung/${job.slug}`}>
                      <Button className="bg-blue-700 hover:bg-blue-800">Xem chi tiết</Button>
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
