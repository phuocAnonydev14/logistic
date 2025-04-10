import Link from "next/link"
import { cn } from "@/lib/utils"
import { getSidebarServices } from "@/data/services"

interface ServiceSidebarProps {
  activeService: string
}

export default function ServiceSidebar({ activeService }: ServiceSidebarProps) {
  const services = getSidebarServices()

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      {services.map((service) => (
        <Link key={service.id} href={service.href}>
          <div
            className={cn(
              "p-4 border-b border-gray-200 hover:bg-gray-200 transition-colors",
              activeService === service.id ? "bg-blue-700 text-white hover:bg-blue-800" : "text-gray-700",
            )}
          >
            <span className="text-sm font-medium">{service.title}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
