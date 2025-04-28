import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import ServiceSidebar from "@/components/service-sidebar"
import {categoryService} from "@/services/category.service";
import parse from "html-react-parser";
import {Category} from "@/types/app.type";


export default async function ServicePage({ params }: any) {
  const {
    slug
  } = await params;
  const service: Category = await categoryService.getCategoryDetail(slug)

  if (!service) {
    console.error(`Service with slug "${params.slug}" not found`)
    notFound()
  }

  return (
    <div>
      {/* Page Title */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
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
            <ServiceSidebar activeService={service.id.toString()} />
          </div>

          {/* Main Content */}
          <div>
            <img src={service?.thumbnail?.imageUrl || ""} alt="" className="h-auto w-full max-h-80 max-w-[90%] object-cover mb-4 rounded-md shadow-lg"/>
            <div className="space-y-2">{parse(service?.content || '')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
