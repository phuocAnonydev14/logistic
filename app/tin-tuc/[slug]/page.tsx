import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, Tag, ChevronRight } from "lucide-react"
import { getNewsBySlug, getRelatedNews } from "@/data/news"
import {blogService} from "@/services/blog.service";
import moment from "moment";

export default  async function NewsDetailPage({ params }: any) {
  const slug = (await params).slug

  const news = await blogService.getBlogDetail(slug)
  console.log("newsDetail",news)
  
  // const relatedNews = getRelatedNews(params.slug, 3)

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
            <Link href="/tin-tuc" className="text-gray-600 hover:text-blue-900">
              TIN TỨC
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image src={news?.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
              </div>

              <div className="py-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{news.title}</h1>
                

                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 my-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{moment(news.createdAt).format("MM-DD-YYYY")}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Bài viết liên quan</h2>

              {/*<div className="space-y-6">*/}
              {/*  {relatedNews.map((item) => (*/}
              {/*    <div key={item.id} className="flex gap-4">*/}
              {/*      <div className="flex-shrink-0 relative w-24 h-24">*/}
              {/*        <Image*/}
              {/*          src={item.image || "/placeholder.svg"}*/}
              {/*          alt={item.title}*/}
              {/*          fill*/}
              {/*          className="object-cover rounded-md"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <Link href={`/tin-tuc/${item.slug}`}>*/}
              {/*          <h3 className="font-medium text-gray-800 hover:text-blue-900 transition-colors line-clamp-2">*/}
              {/*            {item.title}*/}
              {/*          </h3>*/}
              {/*        </Link>*/}
              {/*        <p className="text-sm text-gray-500 mt-1">{item.date}</p>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  ))}*/}
              {/*</div>*/}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Danh mục</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tin-tuc?category=Tin%20công%20ty" className="text-gray-700 hover:text-blue-900">
                      Tin công ty
                    </Link>
                  </li>
                  <li>
                    <Link href="/tin-tuc?category=Tin%20ngành" className="text-gray-700 hover:text-blue-900">
                      Tin ngành
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Liên hệ</h2>
                <p className="text-gray-700 mb-2">Để được tư vấn chi tiết, vui lòng liên hệ:</p>
                <p className="text-gray-700 font-medium">Hotline: 0906.362.588</p>
                <p className="text-gray-700 font-medium">Email: hpl@vantaivntransp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
