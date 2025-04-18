import { Truck, Ship, Warehouse, FileText, Package } from "lucide-react"

export interface ServiceType {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: any
  slug: string
  features: string[]
  content?: string
  images?: string[]
  process?: {
    title: string
    steps: {
      title: string
      description: string
    }[]
  }
  commitments?: {
    title: string
    description: string
  }[]
}

export const services: ServiceType[] = [
  {
    id: "van-tai-duong-bo",
    title: "DỊCH VỤ VẬN TẢI ĐƯỜNG BỘ",
    shortTitle: "Vận tải đường bộ",
    description:
      "Dịch vụ vận chuyển hàng hóa bằng đường bộ với đội xe hiện đại, đa dạng trọng tải, phù hợp với mọi loại hàng hóa.",
    icon: Truck,
    slug: "van-tai-duong-bo",
    features: [
      "Đội xe đa dạng từ 0.5 tấn đến 45 tấn",
      "Vận chuyển nội địa và xuyên biên giới",
      "Theo dõi hàng hóa thời gian thực",
      "Bảo hiểm hàng hóa toàn trình",
    ],
    content:
      "Vận chuyển nội địa là một phần quan trọng của chuỗi logistics. Với vậy với bề dày kinh nghiệm nhiều năm trong lĩnh vực giao nhận vận chuyển bằng đường bộ, đường sắt và đường biển, kết hợp cùng đội ngũ nhân viên chuyên nghiệp và tận tâm với nghề, chúng tôi tạo điều kiện thuận lợi nhất để cung cấp cho các bạn những dịch vụ vận chuyển chất lượng cao trên mọi miền của đất nước. Chúng tôi thực hiện các công việc giao nhận vận chuyển tập trung về kho, bảo quản, phân loại và tổ chức vận chuyển, bốc dỡ, giao nhận đến các địa điểm được yêu cầu, thu chi hộ cho chủ hàng... thông qua hệ thống kho bãi đủ tiêu chuẩn và chương trình phần mềm quản lý theo yêu cầu của các công ty đa quốc gia.",
    images: ["/van-tai-duong-bo.jpg", "/van-tai-duong-bo-2.jpg", "/van-tai-duong-bo-3.jpg"],
    process: {
      title: "Quá trình dịch vụ vận chuyển đường bộ",
      steps: [
        {
          title: "Tiếp nhận yêu cầu",
          description: "Tiếp nhận thông tin về hàng hóa, điểm đi, điểm đến và tư vấn phương tiện phù hợp",
        },
        {
          title: "Báo giá dịch vụ",
          description: "Báo giá chi tiết, minh bạch và tư vấn lựa chọn phương án vận chuyển tối ưu",
        },
        {
          title: "Ký hợp đồng",
          description: "Ký kết hợp đồng vận chuyển và xác nhận lịch trình, phương tiện",
        },
        {
          title: "Thực hiện vận chuyển",
          description: "Điều phối phương tiện, kiểm tra hàng hóa và vận chuyển đến điểm đích",
        },
        {
          title: "Bàn giao hàng hóa",
          description: "Bàn giao hàng hóa tại điểm đích và ký biên bản xác nhận hoàn thành",
        },
        {
          title: "Thanh toán",
          description: "Xuất hóa đơn tài chính và thanh toán theo thỏa thuận trong hợp đồng",
        },
      ],
    },
    commitments: [
      {
        title: "An toàn hàng hóa",
        description:
          "Đảm bảo an toàn tuyệt đối cho hàng hóa trong suốt quá trình vận chuyển, có bảo hiểm hàng hóa theo yêu cầu.",
      },
      {
        title: "Đúng thời gian",
        description: "Cam kết giao hàng đúng thời gian, đúng địa điểm theo thỏa thuận với khách hàng.",
      },
      {
        title: "Giá cả cạnh tranh",
        description: "Cung cấp dịch vụ với giá cả hợp lý, cạnh tranh trên thị trường.",
      },
      {
        title: "Đội ngũ chuyên nghiệp",
        description: "Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm với công việc.",
      },
    ],
  },
  {
    id: "van-tai-phan-phoi",
    title: "DỊCH VỤ VẬN TẢI PHÂN PHỐI",
    shortTitle: "Vận tải phân phối",
    description: "Giải pháp vận chuyển và phân phối hàng hóa tới các điểm bán lẻ, đại lý, cửa hàng trên toàn quốc.",
    icon: Package,
    slug: "van-tai-phan-phoi",
    features: [
      "Phân phối hàng tiêu dùng đến các siêu thị, cửa hàng",
      "Phân phối thiết bị, vật tư công nghiệp",
      "Hệ thống theo dõi hàng hóa thời gian thực",
      "Báo cáo giao nhận chi tiết",
    ],
    content:
      "Dịch vụ vận tải phân phối của Vntransp Logistics cung cấp giải pháp vận chuyển và phân phối hàng hóa tới các điểm bán lẻ, đại lý, cửa hàng trên toàn quốc. Với mạng lưới rộng khắp và đội xe đa dạng, chúng tôi đảm bảo hàng hóa của khách hàng được phân phối đến đúng địa điểm, đúng thời gian với chi phí tối ưu.",
    images: ["/van-tai-phan-phoi.jpg"],
    process: {
      title: "Quy trình phân phối hàng hóa",
      steps: [
        {
          title: "Tiếp nhận yêu cầu",
          description: "Tiếp nhận thông tin về hàng hóa, kế hoạch phân phối và các yêu cầu đặc biệt",
        },
        {
          title: "Lập kế hoạch phân phối",
          description: "Xây dựng kế hoạch phân phối tối ưu về lộ trình, thời gian và chi phí",
        },
        {
          title: "Nhận hàng tại kho",
          description: "Nhận hàng tại kho của khách hàng hoặc kho của Vntransp Logistics",
        },
        {
          title: "Phân loại hàng hóa",
          description: "Phân loại hàng hóa theo tuyến phân phối, điểm đến",
        },
        {
          title: "Thực hiện phân phối",
          description: "Vận chuyển và giao hàng đến các điểm bán lẻ, đại lý theo kế hoạch",
        },
        {
          title: "Báo cáo kết quả",
          description: "Cung cấp báo cáo chi tiết về kết quả phân phối, tình trạng giao nhận",
        },
      ],
    },
    commitments: [
      {
        title: "Đúng thời gian",
        description: "Cam kết phân phối hàng hóa đúng thời gian theo kế hoạch đã thống nhất",
      },
      {
        title: "Đầy đủ, chính xác",
        description: "Đảm bảo phân phối đầy đủ, chính xác số lượng, chủng loại hàng hóa đến từng điểm",
      },
      {
        title: "Báo cáo minh bạch",
        description: "Cung cấp báo cáo minh bạch, chi tiết về tình trạng phân phối",
      },
      {
        title: "Linh hoạt, thích ứng",
        description: "Linh hoạt điều chỉnh kế hoạch phân phối theo yêu cầu thực tế của khách hàng",
      },
    ],
  },
  {
    id: "van-tai-duong-bien",
    title: "DỊCH VỤ VẬN TẢI ĐƯỜNG BIỂN",
    shortTitle: "Vận tải đường biển",
    description:
      "Giải pháp vận chuyển hàng hóa bằng đường biển nội địa và quốc tế, phù hợp với hàng hóa có khối lượng lớn.",
    icon: Ship,
    slug: "van-tai-duong-bien",
    features: [
      "Vận chuyển container và hàng rời",
      "Dịch vụ FCL và LCL",
      "Kết nối với các cảng lớn trong và ngoài nước",
      "Thủ tục hải quan trọn gói",
    ],
    content:
      "Dịch vụ vận tải đường biển của Vntransp Logistics cung cấp giải pháp vận chuyển hàng hóa bằng đường biển nội địa và quốc tế, phù hợp với hàng hóa có khối lượng lớn, tiết kiệm chi phí. Với mạng lưới đối tác rộng khắp và đội ngũ nhân viên giàu kinh nghiệm, chúng tôi cam kết mang đến dịch vụ vận tải đường biển chất lượng cao, đáp ứng mọi nhu cầu vận chuyển của khách hàng.",
    images: ["/placeholder.svg?height=400&width=800"],
    process: {
      title: "Quy trình vận chuyển đường biển",
      steps: [
        {
          title: "Tiếp nhận yêu cầu",
          description: "Tiếp nhận thông tin về hàng hóa, cảng đi, cảng đến và các yêu cầu đặc biệt",
        },
        {
          title: "Báo giá dịch vụ",
          description: "Báo giá chi tiết, minh bạch và tư vấn lựa chọn phương án vận chuyển tối ưu",
        },
        {
          title: "Ký hợp đồng",
          description: "Ký kết hợp đồng vận chuyển và xác nhận lịch trình, phương tiện",
        },
        {
          title: "Làm thủ tục hải quan",
          description: "Hỗ trợ khách hàng làm thủ tục hải quan xuất nhập khẩu",
        },
        {
          title: "Vận chuyển hàng hóa",
          description: "Vận chuyển hàng hóa đến cảng đích an toàn, đúng thời gian",
        },
        {
          title: "Giao hàng và thanh toán",
          description: "Giao hàng tại cảng đích và hoàn tất thủ tục thanh toán",
        },
      ],
    },
    commitments: [
      {
        title: "An toàn hàng hóa",
        description: "Đảm bảo an toàn tuyệt đối cho hàng hóa trong suốt quá trình vận chuyển",
      },
      {
        title: "Đúng lịch trình",
        description: "Cam kết vận chuyển đúng lịch trình, không làm ảnh hưởng đến kế hoạch kinh doanh của khách hàng",
      },
      {
        title: "Chi phí hợp lý",
        description: "Cung cấp dịch vụ với chi phí hợp lý, cạnh tranh trên thị trường",
      },
      {
        title: "Hỗ trợ 24/7",
        description: "Đội ngũ nhân viên sẵn sàng hỗ trợ khách hàng 24/7",
      },
    ],
  },
  {
    id: "van-tai-duong-sat",
    title: "DỊCH VỤ VẬN TẢI ĐƯỜNG SẮT BẮC - NAM",
    shortTitle: "Vận tải đường sắt",
    description:
      "Dịch vụ vận chuyển hàng hóa bằng đường sắt từ Bắc vào Nam và ngược lại, phù hợp với hàng hóa có khối lượng lớn, cần vận chuyển đường dài.",
    icon: Truck,
    slug: "van-tai-duong-sat",
    features: [
      "Vận chuyển hàng hóa Bắc - Nam",
      "An toàn, đúng tiến độ",
      "Chi phí hợp lý cho hàng hóa khối lượng lớn",
      "Kết hợp với vận tải đường bộ tạo giải pháp trọn gói",
    ],
    images: ["/placeholder.svg?height=400&width=800"],
  },
  {
    id: "ke-khai-thue-xuat-khau",
    title: "DỊCH VỤ KÊ KHAI THUẾ XUẤT KHẨU",
    shortTitle: "Kê khai thuế xuất khẩu",
    description:
      "Dịch vụ tư vấn và thực hiện các thủ tục kê khai thuế xuất khẩu, đảm bảo tuân thủ quy định pháp luật và tối ưu chi phí cho doanh nghiệp.",
    icon: FileText,
    slug: "ke-khai-thue-xuat-khau",
    features: [
      "Tư vấn chính sách thuế xuất khẩu",
      "Kê khai và nộp thuế xuất khẩu",
      "Hoàn thuế xuất khẩu",
      "Đại diện doanh nghiệp làm việc với cơ quan thuế",
    ],
    images: ["/placeholder.svg?height=400&width=800"],
  },
  {
    id: "cho-thue-kho-bai",
    title: "DỊCH VỤ CHO THUÊ KHO, BÃI",
    shortTitle: "Cho thuê kho, bãi",
    description:
      "Hệ thống kho bãi hiện đại, đáp ứng nhu cầu lưu trữ và phân phối hàng hóa với quy trình quản lý chuyên nghiệp.",
    icon: Warehouse,
    slug: "cho-thue-kho-bai",
    features: [
      "Kho hàng tiêu chuẩn quốc tế",
      "Hệ thống quản lý kho WMS",
      "Dịch vụ đóng gói, dán nhãn",
      "Phân phối và giao nhận hàng hóa",
    ],
    images: ["/placeholder.svg?height=400&width=800"],
  },
]

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug)
}

export const getSidebarServices = () => {
  return services.map((service) => ({
    id: service.id,
    title: service.title,
    href: `/dich-vu/${service.slug}`,
  }))
}
