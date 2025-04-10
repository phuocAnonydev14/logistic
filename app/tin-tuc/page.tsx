import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ChevronRight } from "lucide-react"
import { newsItems } from "@/data/news"

export default function NewsPage() {
  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">TIN TỨC</h1>
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
            <span className="text-gray-600">TIN TỨC</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/tin-tuc/${item.slug}`}>
                <div className="relative h-48 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                </div>

                <Link href={`/tin-tuc/${item.slug}`}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-900 transition-colors">{item.title}</h3>
                </Link>

                <p className="text-gray-600 mb-4">{item.excerpt}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-900 rounded-full">{item.category}</span>
                  <Link href={`/tin-tuc/${item.slug}`} className="text-blue-900 font-medium hover:underline">
                    Xem thêm
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
