import {MapPin, Phone, Mail, Clock} from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
	return (
		<div>
			<PageHeader title="Liên hệ"/>
			
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">CÔNG TY TNHH TIẾP VẬN ĐA PHƯƠNG THỨC
								VNTRANSP</h2>
							<div className="space-y-6 mb-8">
								<div className="flex items-start gap-4">
									<div className="bg-blue-100 p-3 rounded-full">
										<MapPin className="h-6 w-6 text-blue-900"/>
									</div>
									<div>
										<h3 className="font-semibold text-lg mb-1">Địa chỉ</h3>
										<p className="text-gray-600 w-[70%]"> 162 Đường Phương Liệt, Phường Phương Liệt, Quận Thanh Xuân,
											Thành phố Hà Nội</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="bg-blue-100 p-3 rounded-full">
										<Phone className="h-6 w-6 text-blue-900"/>
									</div>
									<div>
										<h3 className="font-semibold text-lg mb-1">Điện thoại</h3>
										<p className="text-gray-600">0906286444</p>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="bg-blue-100 p-3 rounded-full">
										<Mail className="h-6 w-6 text-blue-900"/>
									</div>
									<div>
										<h3 className="font-semibold text-lg mb-1">Email</h3>
										<p className="text-gray-600">daphuongthucvntransp@gmail.com</p>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="bg-blue-100 p-3 rounded-full">
										<Clock className="h-6 w-6 text-blue-900"/>
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
										<h4 className="font-medium mb-1">Chi nhánh Hà Nội</h4>
										<p className="text-gray-600"> 162 Đường Phương Liệt, Phường Phương Liệt, Quận Thanh Xuân,
											Thành phố Hà Nội</p>
										<p className="text-gray-600">Điện thoại: 0906286444</p>
									</div>
								</div>
							</div>
						</div>
						
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Gửi yêu cầu</h2>
							<ContactForm/>
						</div>
					</div>
				</div>
			</section>
			
			<section className="py-8">
				<div className="container mx-auto px-4">
					<div className="w-full h-[400px] rounded-lg overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8803302337246!2d105.83893169999999!3d20.9974336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7acecb3fff%3A0xc0e5d3f38631cd8b!2zMTYyIFAuIFBoxrDGoW5nIExp4buHdCwgUGjGsMahbmcgTGnhu4d0LCBUaGFuaCBYdcOibiwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1744528457856!5m2!1svi!2s"
							width="100%"
							height="100%"
							style={{border: 0}}
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
