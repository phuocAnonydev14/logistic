"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Clock, Mail, ChevronDown, Facebook, Youtube, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import Logo from "@/components/asset/logo.jpg"

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isNewsOpen, setIsNewsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="mr-6">
            <Image src={Logo.src} alt="Hòa Phát Logistics" width={220} height={60} className="h-20 w-auto" />
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Hỗ trợ dịch vụ</p>
              <p className="font-semibold">0906.362.588</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Giờ mở cửa</p>
              <p className="font-semibold">24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-red-600" />
            <div>
              <p className="text-xs text-gray-500">Mail liên hệ</p>
              <p className="font-semibold">hpl@vantaihoaphat.com</p>
            </div>
          </div>

          <Link href="/lien-he">
            <Button className="bg-red-600 hover:bg-red-700 text-white">LIÊN HỆ</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="Hòa Phát Logistics" width={100} height={50} className="h-12 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            <Link href="/" className="block py-2 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>
              Trang chủ
            </Link>
            <Link
              href="/gioi-thieu"
              className="block py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Giới thiệu
            </Link>

            <div className="py-2 border-b border-gray-200">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Dịch vụ</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </div>

              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/dich-vu/van-tai-duong-bo"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vận tải đường bộ
                  </Link>
                  <Link
                    href="/dich-vu/van-tai-duong-bien"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vận tải đường biển
                  </Link>
                  <Link
                    href="/dich-vu/van-tai-hang-khong"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vận tải hàng không
                  </Link>
                  <Link
                    href="/dich-vu/kho-bai"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dịch vụ kho bãi
                  </Link>
                </div>
              )}
            </div>

            <div className="py-2 border-b border-gray-200">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsNewsOpen(!isNewsOpen)}
              >
                <span>Tin tức</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isNewsOpen ? "rotate-180" : ""}`} />
              </div>

              {isNewsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/tin-tuc/tin-cong-ty"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tin công ty
                  </Link>
                  <Link
                    href="/tin-tuc/tin-nganh"
                    className="block py-1 text-gray-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tin ngành
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/tuyen-dung"
              className="block py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tuyển dụng
            </Link>
            <Link
              href="/lien-he"
              className="block py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Hỗ trợ dịch vụ</p>
                <p className="font-semibold">0906.362.588</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-xs text-gray-500">Mail liên hệ</p>
                <p className="font-semibold">hpl@vantaihoaphat.com</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="Zalo" width={20} height={20} />
              
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.png" alt="Zalo" width={20} height={20} />
              </Link>
              <Link href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                <Image src="/zalo-icon.png" alt="Zalo" width={20} height={20} />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <ul className="hidden md:flex flex-wrap">
              <li className="py-4 px-4 hover:bg-blue-800">
                <Link href="/">Trang chủ</Link>
              </li>
              <li className="py-4 px-4 hover:bg-blue-800">
                <Link href="/gioi-thieu">Giới thiệu</Link>
              </li>
              <li
                className="relative py-4 px-4 hover:bg-blue-800 flex items-center cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Dịch vụ</span>
                <ChevronDown className="h-4 w-4 ml-1" />

                {isServicesOpen && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-md min-w-[200px] z-10">
                    <Link href="/dich-vu/van-tai-duong-bo" className="block px-4 py-2 hover:bg-gray-100">
                      Vận tải đường bộ
                    </Link>
                    <Link href="/dich-vu/van-tai-duong-bien" className="block px-4 py-2 hover:bg-gray-100">
                      Vận tải đường biển
                    </Link>
                    <Link href="/dich-vu/van-tai-hang-khong" className="block px-4 py-2 hover:bg-gray-100">
                      Vận tải hàng không
                    </Link>
                    <Link href="/dich-vu/kho-bai" className="block px-4 py-2 hover:bg-gray-100">
                      Dịch vụ kho bãi
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="relative py-4 px-4 hover:bg-blue-800 flex items-center cursor-pointer"
                onMouseEnter={() => setIsNewsOpen(true)}
                onMouseLeave={() => setIsNewsOpen(false)}
              >
                <span>Tin tức</span>
                <ChevronDown className="h-4 w-4 ml-1" />

                {isNewsOpen && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-md min-w-[200px] z-10">
                    <Link href="/tin-tuc/tin-cong-ty" className="block px-4 py-2 hover:bg-gray-100">
                      Tin công ty
                    </Link>
                    <Link href="/tin-tuc/tin-nganh" className="block px-4 py-2 hover:bg-gray-100">
                      Tin ngành
                    </Link>
                  </div>
                )}
              </li>
              <li className="py-4 px-4 hover:bg-blue-800">
                <Link href="/tuyen-dung">Tuyển dụng</Link>
              </li>
              <li className="py-4 px-4 hover:bg-blue-800">
                <Link href="/lien-he">Liên hệ</Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <Link href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                <Image src="/zalo-icon.png" alt="Zalo" width={24} height={24} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="Zalo" width={20} height={20} />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.png" alt="Zalo" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
