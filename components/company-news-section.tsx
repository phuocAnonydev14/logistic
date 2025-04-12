import Image from "next/image"
import Link from "next/link"
import {InternalNews} from "@/components/internal-news";
import {ExternalNews} from "@/components/external-news";

export const companyNews = [
  {
    id: 1,
    title: "HÒA PHÁT LOGISTICS – 15 NĂM KHÁT VỌNG GIÁ TRỊ",
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "hoa-phat-logistics-15-nam-khat-vong-gia-tri",
    category: "Tin công ty",
  },
  {
    id: 2,
    title: "HÒA PHÁT LOGISTICS – ĐỨNG ĐÚNG VỊ TRÍ, VƯƠN ĐẾN TẦM CAO",
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "hoa-phat-logistics-dung-dung-vi-tri-vuon-den-tam-cao",
    category: "Tin công ty",
  },
  {
    id: 3,
    title: "HÒA PHÁT LOGISTICS THAM DỰ HỘI THẢO GIAO ĐỔI KINH DOANH – ĐƯỜNG ĐẾN THÀNH CÔNG",
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "hoa-phat-logistics-tham-du-hoi-thao-giao-doi-kinh-doanh",
    category: "Tin công ty",
  },{
    id: 4,
    title: "HÒA PHÁT LOGISTICS THAM DỰ HỘI THẢO GIAO ĐỔI KINH DOANH – ĐƯỜNG ĐẾN THÀNH CÔNG",
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "hoa-phat-logistics-tham-du-hoi-thao-giao-doi-kinh-doanh",
    category: "Tin công ty",
  },
]

const socialNews = [
  {
    id: 1,
    title: "Xuất khẩu hàng hóa qua các cửa khẩu trong cuối tháng",
    slug: "xuat-khau-hang-hoa-qua-cac-cua-khau-trong-cuoi-thang",
  },
  {
    id: 2,
    title: "Thủ tục thông quan hàng hóa xuất nhập khẩu",
    slug: "thu-tuc-thong-quan-hang-hoa-xuat-nhap-khau",
  },
  {
    id: 3,
    title: "Miễn phí gửi xe máy đến kho TTC phía Tây phố Nội Bài",
    slug: "mien-phi-gui-xe-may-den-kho-ttc-phia-tay-pho-noi-bai",
  },
  {
    id: 4,
    title: "Khai bãi, Tân Sơn Nhất quang đãng chuyến bay về Tân Cảnh",
    slug: "khai-bai-tan-son-nhat-quang-dang-chuyen-bay-ve-tan-canh",
  },
  {
    id: 5,
    title: "Hàng loạt các dự án hạ tầng giao thông Miền Bắc dự kiến Covid-19",
    slug: "hang-loat-cac-du-an-ha-tang-giao-thong-mien-bac-du-kien-covid-19",
  },
]

const companyImages = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Kho bãi Hòa Phát Logistics",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Cảng container Hòa Phát",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Đội xe vận tải Hòa Phát",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Cảng biển Hòa Phát",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tàu vận tải Hòa Phát",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Khu công nghiệp Hòa Phát",
  },
]

export default function CompanyNewsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Tin công ty */}
        <InternalNews isHomePage />

        {/* Tin xã hội */}
        <ExternalNews isHomePage />

        {/* Hình ảnh công ty */}
        <div>
          <div className="bg-[#003366] py-2 px-4 mb-4">
            <h2 className="text-3xl font-bold text-white">HÌNH ẢNH CÔNG TY</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {companyImages.map((image) => (
              <div key={image.id} className="relative h-20 md:h-40 border border-gray-200 overflow-hidden">
                <Image
                  src={image.image || "/placeholder.svg?height=96&width=96"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
