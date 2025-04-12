import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Liên hệ" />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Thông tin liên hệ</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">Số 123 Đường ABC, Quận XYZ, Thành phố Hà Nội</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Điện thoại</h3>
                    <p className="text-gray-600">0906.362.588</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">hpl@vantaivntransp.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Giờ làm việc</h3>
                    <p className="text-gray-600">24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Văn phòng chi nhánh</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Chi nhánh Hồ Chí Minh</h4>
                    <p className="text-gray-600">Số 456 Đường DEF, Quận GHI, TP. Hồ Chí Minh</p>
                    <p className="text-gray-600">Điện thoại: 0987.654.321</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Chi nhánh Đà Nẵng</h4>
                    <p className="text-gray-600">Số 789 Đường JKL, Quận MNO, TP. Đà Nẵng</p>
                    <p className="text-gray-600">Điện thoại: 0912.345.678</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Chi nhánh Hải Phòng</h4>
                    <p className="text-gray-600">Số 101 Đường PQR, Quận STU, TP. Hải Phòng</p>
                    <p className="text-gray-600">Điện thoại: 0923.456.789</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Gửi yêu cầu</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966105045093!2d105.7800433!3d21.0277269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0x75bea4c33b6f8bf5!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
