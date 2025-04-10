"use client"

import Image from "next/image"

const partners = [
  { id: 1, name: "Toll", logo: "/partners/toll.png" },
  { id: 2, name: "Gemadep", logo: "/partners/gemadep.png" },
  { id: 3, name: "Taisun", logo: "/partners/taisun.png" },
  { id: 4, name: "Tân Á", logo: "/partners/tan-a.png" },
  { id: 5, name: "Vigracera", logo: "/partners/vigracera.png" },
  { id: 6, name: "Habeco", logo: "/partners/habeco.png" },
]

// Nhân đôi danh sách đối tác để tạo hiệu ứng chạy liên tục
const duplicatedPartners = [...partners, ...partners]

export default function PartnersSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Đối tác của chúng tôi</h2>

        <div className="relative overflow-hidden">
          <div className="partners-scroll flex">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-8 p-4 bg-white rounded-lg shadow-sm"
                style={{ minWidth: "150px" }}
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo || "/placeholder.svg?height=64&width=150"}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partners-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
