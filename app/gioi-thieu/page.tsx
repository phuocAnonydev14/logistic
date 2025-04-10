import Image from "next/image"
import { Truck, Ship, Plane, Warehouse, Award, Users, Clock, Target } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div>
      <section id="about" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Về Chúng Tôi</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://hoaphatlogistics.vn/wp-content/uploads/2023/11/DSC07297-scaled.jpg" alt="Logistics Company" className="rounded-lg shadow-xl" />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Sứ mệnh của chúng tôi</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <p>Áp dụng công nghệ hiện đại, phát triển logistics xanh và bền vững.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <p>Liên tục cải tiến hướng đến dịch vụ tối ưu nhất cho khách hàng.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                  <p>Tạo ra giá trị cho cổ đông, đối tác và nhân viên.</p>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-600">
                Với đội ngũ chuyên nghiệp và nhiều năm kinh nghiệm trong ngành logistics,
                chúng tôi cam kết mang đến những giải pháp tối ưu, hiệu quả và thân thiện
                với môi trường cho mọi nhu cầu vận chuyển của khách hàng.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Đội ngũ chuyên nghiệp</h4>
                    <p className="text-sm text-gray-600">Trên 200 nhân viên</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phạm vi hoạt động</h4>
                    <p className="text-sm text-gray-600">Toàn quốc & Quốc tế</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="values" className="py-16 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Những giá trị cốt lõi định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition duration-300 value-card hover:shadow-lg">
              <div className="icon-container w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition duration-300">
                <i className="fas fa-star text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dịch vụ hoàn hảo</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Đặt khách hàng làm trung tâm trong mọi suy nghĩ và hành động.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Xác định sự tín nhiệm, hài lòng của khách hàng là mục tiêu hàng đầu.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition duration-300 value-card hover:shadow-lg">
              <div className="icon-container w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition duration-300">
                <i className="fas fa-sync-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Học hỏi - Cải tiến liên tục</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Không ngừng cải tiến, sáng tạo trong công việc để tối ưu chi phí và hiệu suất.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Chủ động thích ứng với thay đổi để tận dụng và phát huy các cơ hội mới.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Luôn học hỏi, nâng cao năng lực bản thân.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition duration-300 value-card hover:shadow-lg">
              <div className="icon-container w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition duration-300">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Chính trực</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Đặt lợi ích của công ty là kim chỉ nam cho mọi hành động và quyết định.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Luôn cam kết và trách nhiệm trong mọi nhiệm vụ.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Trung thực, liêm chính.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition duration-300 value-card hover:shadow-lg">
              <div className="icon-container w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition duration-300">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tinh thần đồng đội</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Biết lắng nghe và tôn trọng.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Tin tưởng và đồng cảm.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Hỗ trợ cùng hoàn thành nhiệm vụ.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition duration-300 value-card hover:shadow-lg">
              <div className="icon-container w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition duration-300">
                <i className="fas fa-fire text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Nhiệt tâm</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Luôn hăng hái, chủ động trong công việc.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><i className="fas fa-check text-sm mt-1"></i></span>
                  <p>Thực hiện công việc với sự nhiệt huyết và đam mê.</p>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-2 lg:col-span-3 gradient-bg rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between mt-6">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">Bạn cần giải pháp logistics hoàn hảo?</h3>
                <p class="text-blue-100">
                  Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn các giải pháp tối ưu
                  cho doanh nghiệp của bạn.
                </p>
              </div>
              <a href="#contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">NT</span>
                </div>
                <div>
                  <h4 className="font-semibold">Nguyễn Thành</h4>
                  <p className="text-sm text-gray-600">Giám đốc Công ty XYZ</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                "Dịch vụ logistics chuyên nghiệp và đáng tin cậy. Chúng tôi đã hợp tác hơn 3 năm và
                luôn hài lòng với chất lượng dịch vụ. Đặc biệt ấn tượng với giải pháp logistics xanh
                của công ty."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">LH</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lê Hương</h4>
                  <p className="text-sm text-gray-600">Quản lý vận hành - ABC Trading</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-gray-600 italic">
                "Hệ thống theo dõi hàng hóa thời gian thực giúp chúng tôi dễ dàng kiểm soát
                quá trình vận chuyển. Đội ngũ nhân viên nhiệt tình, chuyên nghiệp và luôn
                sẵn sàng hỗ trợ khi cần thiết."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">LH</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lê Hương</h4>
                  <p className="text-sm text-gray-600">Quản lý vận hành - ABC Trading</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="text-gray-600 italic">
                "Hệ thống theo dõi hàng hóa thời gian thực giúp chúng tôi dễ dàng kiểm soát
                quá trình vận chuyển. Đội ngũ nhân viên nhiệt tình, chuyên nghiệp và luôn
                sẵn sàng hỗ trợ khi cần thiết."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
