export interface NewsType {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  category: string
  slug: string
  tags?: string[]
}

export const newsItems: NewsType[] = [
  {
    id: 1,
    title: "Hòa Phát Logistics mở rộng đội xe vận tải đường bộ",
    excerpt:
      "Hòa Phát Logistics vừa đầu tư thêm 20 xe container mới nhằm nâng cao năng lực vận chuyển và đáp ứng nhu cầu ngày càng tăng của khách hàng.",
    content: `
      <p>Hòa Phát Logistics vừa đầu tư thêm 20 xe container mới nhằm nâng cao năng lực vận chuyển và đáp ứng nhu cầu ngày càng tăng của khách hàng. Đây là một phần trong chiến lược phát triển dài hạn của công ty, nhằm mở rộng quy mô và nâng cao chất lượng dịch vụ.</p>
      
      <p>Theo ông Nguyễn Văn A, Giám đốc Hòa Phát Logistics, việc đầu tư thêm 20 xe container mới sẽ giúp công ty tăng cường năng lực vận chuyển lên 30%, đáp ứng tốt hơn nhu cầu của khách hàng, đặc biệt là trong mùa cao điểm.</p>
      
      <p>"Chúng tôi luôn đặt chất lượng dịch vụ lên hàng đầu. Việc đầu tư thêm phương tiện vận tải mới không chỉ giúp chúng tôi mở rộng quy mô mà còn nâng cao chất lượng dịch vụ, đảm bảo hàng hóa của khách hàng được vận chuyển an toàn, đúng thời gian", ông A chia sẻ.</p>
      
      <p>Các xe container mới được trang bị công nghệ hiện đại, hệ thống GPS theo dõi hành trình, giúp khách hàng có thể theo dõi vị trí hàng hóa theo thời gian thực. Ngoài ra, các xe còn được trang bị hệ thống cảnh báo an toàn, giúp giảm thiểu rủi ro trong quá trình vận chuyển.</p>
      
      <p>Với việc mở rộng đội xe, Hòa Phát Logistics kỳ vọng sẽ tăng trưởng doanh thu 20% trong năm nay và tiếp tục khẳng định vị thế là một trong những công ty logistics hàng đầu tại Việt Nam.</p>
      
      <p>Hòa Phát Logistics hiện đang cung cấp các dịch vụ vận tải đường bộ, đường biển, đường sắt và dịch vụ kho bãi cho các khách hàng trong và ngoài nước. Công ty đã và đang là đối tác tin cậy của nhiều thương hiệu lớn như Toll, Gemadep, Taisun, Tân Á, Vigracera, Habeco và nhiều đối tác khác.</p>
    `,
    image: "/news-1.jpg",
    date: "15/03/2023",
    author: "Admin",
    category: "Tin công ty",
    slug: "mo-rong-doi-xe-van-tai",
    tags: ["vận tải đường bộ", "container", "đầu tư"],
  },
  {
    id: 2,
    title: "Xu hướng logistics xanh và vận tải bền vững",
    excerpt:
      "Logistics xanh đang trở thành xu hướng tất yếu trong ngành vận tải toàn cầu. Hòa Phát Logistics đang từng bước áp dụng các giải pháp thân thiện với môi trường.",
    content: `
      <p>Logistics xanh đang trở thành xu hướng tất yếu trong ngành vận tải toàn cầu. Hòa Phát Logistics đang từng bước áp dụng các giải pháp thân thiện với môi trường, góp phần vào sự phát triển bền vững của ngành logistics Việt Nam.</p>
      
      <p>Theo các chuyên gia, logistics xanh không chỉ là xu hướng mà còn là yêu cầu bắt buộc trong bối cảnh biến đổi khí hậu ngày càng nghiêm trọng. Các doanh nghiệp logistics đang phải đối mặt với áp lực giảm phát thải carbon, sử dụng năng lượng hiệu quả và áp dụng các giải pháp thân thiện với môi trường.</p>
      
      <p>Tại Hòa Phát Logistics, công ty đã và đang triển khai nhiều giải pháp nhằm hướng tới logistics xanh. Cụ thể, công ty đã đầu tư vào đội xe tiêu chuẩn Euro 5, giúp giảm đáng kể lượng khí thải độc hại. Ngoài ra, công ty còn áp dụng các giải pháp tối ưu hóa lộ trình vận chuyển, giúp tiết kiệm nhiên liệu và giảm phát thải carbon.</p>
      
      <p>"Chúng tôi nhận thức rõ trách nhiệm của mình đối với môi trường và xã hội. Vì vậy, chúng tôi đang từng bước áp dụng các giải pháp logistics xanh, không chỉ để đáp ứng yêu cầu của khách hàng mà còn để góp phần vào sự phát triển bền vững của ngành logistics Việt Nam", ông Nguyễn Văn B, Phó Giám đốc Hòa Phát Logistics chia sẻ.</p>
      
      <p>Bên cạnh đó, Hòa Phát Logistics cũng đang nghiên cứu và thử nghiệm các phương tiện vận tải sử dụng năng lượng sạch như xe điện, xe hybrid. Công ty kỳ vọng trong tương lai gần sẽ có thể đưa vào sử dụng các phương tiện này, góp phần giảm đáng kể lượng khí thải độc hại.</p>
      
      <p>Xu hướng logistics xanh không chỉ mang lại lợi ích cho môi trường mà còn giúp doanh nghiệp tiết kiệm chi phí, nâng cao hình ảnh và tăng tính cạnh tranh trên thị trường. Đây là xu hướng tất yếu mà các doanh nghiệp logistics cần phải hướng tới trong tương lai.</p>
    `,
    image: "/news-2.jpg",
    date: "02/04/2023",
    author: "Admin",
    category: "Tin ngành",
    slug: "xu-huong-logistics-xanh",
    tags: ["logistics xanh", "vận tải bền vững", "môi trường"],
  },
  {
    id: 3,
    title: "Hòa Phát Logistics ký kết hợp tác với đối tác Nhật Bản",
    excerpt:
      "Hòa Phát Logistics vừa ký kết thỏa thuận hợp tác chiến lược với Yamato Logistics - một trong những công ty logistics hàng đầu Nhật Bản.",
    content: `
      <p>Hòa Phát Logistics vừa ký kết thỏa thuận hợp tác chiến lược với Yamato Logistics - một trong những công ty logistics hàng đầu Nhật Bản. Đây là bước đi quan trọng trong chiến lược mở rộng thị trường và nâng cao chất lượng dịch vụ của Hòa Phát Logistics.</p>
      
      <p>Theo thỏa thuận, hai bên sẽ hợp tác trong các lĩnh vực vận tải đường biển, đường hàng không và dịch vụ kho bãi. Yamato Logistics sẽ hỗ trợ Hòa Phát Logistics trong việc áp dụng các tiêu chuẩn quản lý chất lượng của Nhật Bản, đồng thời hai bên sẽ cùng nhau phát triển các giải pháp logistics tích hợp cho khách hàng.</p>
      
      <p>Ông Tanaka Hiroshi, Giám đốc Yamato Logistics tại Việt Nam cho biết: "Chúng tôi rất ấn tượng với sự phát triển và tiềm năng của Hòa Phát Logistics. Thông qua hợp tác này, chúng tôi kỳ vọng sẽ mang đến cho khách hàng tại Việt Nam những dịch vụ logistics chất lượng cao theo tiêu chuẩn Nhật Bản."</p>
      
      <p>Về phía Hòa Phát Logistics, ông Nguyễn Văn C, Chủ tịch HĐQT chia sẻ: "Hợp tác với Yamato Logistics là một bước đi chiến lược trong quá trình phát triển của chúng tôi. Chúng tôi tin rằng, với kinh nghiệm và công nghệ của Yamato Logistics, cùng với sự am hiểu thị trường và mạng lưới rộng khắp của Hòa Phát Logistics, hai bên sẽ cùng nhau tạo ra những giá trị mới cho khách hàng."</p>
      
      <p>Thỏa thuận hợp tác này không chỉ mang lại lợi ích cho hai công ty mà còn góp phần thúc đẩy sự phát triển của ngành logistics Việt Nam, đặc biệt là trong bối cảnh hội nhập quốc tế ngày càng sâu rộng.</p>
      
      <p>Dự kiến, hai bên sẽ bắt đầu triển khai các hoạt động hợp tác từ tháng 6/2023, với mục tiêu tăng trưởng doanh thu 30% trong năm đầu tiên.</p>
    `,
    image: "/news-3.jpg",
    date: "18/05/2023",
    author: "Admin",
    category: "Tin công ty",
    slug: "hop-tac-voi-doi-tac-nhat-ban",
    tags: ["hợp tác quốc tế", "Nhật Bản", "chiến lược phát triển"],
  },
  {
    id: 4,
    title: "Giải pháp tối ưu chi phí vận chuyển cho doanh nghiệp",
    excerpt:
      "Chi phí logistics chiếm tỷ trọng lớn trong cơ cấu chi phí của doanh nghiệp. Bài viết chia sẻ các giải pháp giúp doanh nghiệp tối ưu chi phí vận chuyển.",
    content: `
      <p>Chi phí logistics chiếm tỷ trọng lớn trong cơ cấu chi phí của doanh nghiệp, đặc biệt là các doanh nghiệp sản xuất và thương mại. Theo thống kê, chi phí logistics tại Việt Nam chiếm khoảng 16-17% GDP, cao hơn nhiều so với mức trung bình 9-10% của các nước phát triển. Điều này đặt ra thách thức lớn cho các doanh nghiệp Việt Nam trong việc nâng cao năng lực cạnh tranh.</p>
      
      <p>Để giúp doanh nghiệp tối ưu chi phí vận chuyển, Hòa Phát Logistics xin chia sẻ một số giải pháp sau:</p>
      
      <h3>1. Tối ưu hóa lộ trình vận chuyển</h3>
      <p>Việc lập kế hoạch và tối ưu hóa lộ trình vận chuyển giúp tiết kiệm thời gian, nhiên liệu và chi phí vận hành. Các công cụ phần mềm quản lý vận tải (TMS) có thể giúp doanh nghiệp lập kế hoạch và tối ưu hóa lộ trình vận chuyển một cách hiệu quả.</p>
      
      <h3>2. Hợp nhất các lô hàng nhỏ</h3>
      <p>Thay vì vận chuyển nhiều lô hàng nhỏ, doanh nghiệp có thể hợp nhất chúng thành một lô hàng lớn để tiết kiệm chi phí. Điều này đặc biệt hiệu quả đối với vận chuyển đường dài.</p>
      
      <h3>3. Sử dụng dịch vụ logistics bên thứ ba (3PL)</h3>
      <p>Việc thuê ngoài dịch vụ logistics cho các nhà cung cấp dịch vụ logistics bên thứ ba (3PL) như Hòa Phát Logistics có thể giúp doanh nghiệp tiết kiệm chi phí đáng kể. Các nhà cung cấp 3PL có mạng lưới rộng khắp, kinh nghiệm và công nghệ hiện đại, giúp tối ưu hóa quy trình logistics và giảm chi phí.</p>
      
      <h3>4. Áp dụng công nghệ trong quản lý logistics</h3>
      <p>Việc áp dụng các công nghệ như hệ thống quản lý kho (WMS), hệ thống quản lý vận tải (TMS), Internet of Things (IoT) giúp doanh nghiệp quản lý hiệu quả quy trình logistics, giảm thiểu sai sót và tối ưu hóa chi phí.</p>
      
      <h3>5. Đàm phán với nhà cung cấp dịch vụ logistics</h3>
      <p>Doanh nghiệp nên chủ động đàm phán với nhà cung cấp dịch vụ logistics để có được mức giá tốt nhất. Việc ký kết hợp đồng dài hạn với nhà cung cấp cũng giúp doanh nghiệp được hưởng các ưu đãi về giá và dịch vụ.</p>
      
      <p>Tại Hòa Phát Logistics, chúng tôi luôn sẵn sàng tư vấn và cung cấp các giải pháp tối ưu chi phí vận chuyển cho doanh nghiệp. Với kinh nghiệm nhiều năm trong ngành và mạng lưới rộng khắp, chúng tôi cam kết mang đến cho khách hàng dịch vụ chất lượng cao với chi phí hợp lý nhất.</p>
      
      <p>Để được tư vấn chi tiết, vui lòng liên hệ với chúng tôi qua hotline 0906.362.588 hoặc email hpl@vantaihoaphat.com.</p>
    `,
    image: "/news-4.jpg",
    date: "10/06/2023",
    author: "Admin",
    category: "Tin ngành",
    slug: "toi-uu-chi-phi-van-chuyen",
    tags: ["chi phí logistics", "tối ưu hóa", "giải pháp vận chuyển"],
  },
  {
    id: 5,
    title: "Hòa Phát Logistics triển khai hệ thống quản lý vận tải TMS",
    excerpt:
      "Hòa Phát Logistics vừa triển khai hệ thống quản lý vận tải TMS hiện đại, giúp tối ưu hóa quy trình vận hành và nâng cao chất lượng dịch vụ.",
    content: `
      <p>Hòa Phát Logistics vừa chính thức triển khai hệ thống quản lý vận tải TMS (Transportation Management System) hiện đại, đánh dấu bước tiến quan trọng trong quá trình số hóa và tối ưu hóa quy trình vận hành của công ty.</p>
      
      <p>Hệ thống TMS được triển khai giúp Hòa Phát Logistics quản lý toàn diện quy trình vận tải từ lúc tiếp nhận đơn hàng, lập kế hoạch vận chuyển, điều phối phương tiện, theo dõi hành trình đến khi giao hàng và thanh toán. Hệ thống cũng tích hợp các tính năng như tối ưu hóa lộ trình, quản lý chi phí, báo cáo hiệu suất và quản lý tài xế.</p>
      
      <p>Ông Nguyễn Văn D, Giám đốc Công nghệ thông tin của Hòa Phát Logistics cho biết: "Việc triển khai hệ thống TMS là một phần trong chiến lược chuyển đổi số của công ty. Hệ thống giúp chúng tôi tối ưu hóa quy trình vận hành, giảm thiểu sai sót, tiết kiệm thời gian và chi phí, từ đó nâng cao chất lượng dịch vụ và sự hài lòng của khách hàng."</p>
      
      <p>Với hệ thống TMS, khách hàng của Hòa Phát Logistics có thể theo dõi trực tuyến vị trí và tình trạng hàng hóa theo thời gian thực, nhận thông báo tự động về tình trạng giao hàng và truy cập các báo cáo chi tiết về dịch vụ vận chuyển.</p>
      
      <p>"Chúng tôi kỳ vọng hệ thống TMS sẽ giúp tăng hiệu suất vận hành lên 30%, giảm 20% thời gian xử lý đơn hàng và tiết kiệm 15% chi phí vận chuyển. Đây là những con số đáng kể, giúp chúng tôi nâng cao năng lực cạnh tranh trên thị trường", ông D chia sẻ thêm.</p>
      
      <p>Hòa Phát Logistics dự kiến sẽ tiếp tục đầu tư vào công nghệ trong thời gian tới, với mục tiêu trở thành công ty logistics hàng đầu về ứng dụng công nghệ tại Việt Nam.</p>
    `,
    image: "/news-5.jpg",
    date: "25/07/2023",
    author: "Admin",
    category: "Tin công ty",
    slug: "trien-khai-he-thong-tms",
    tags: ["TMS", "công nghệ", "quản lý vận tải", "chuyển đổi số"],
  },
  {
    id: 6,
    title: "Tác động của công nghệ 4.0 đến ngành logistics",
    excerpt:
      "Công nghệ 4.0 đang tạo ra những thay đổi mạnh mẽ trong ngành logistics. Bài viết phân tích các xu hướng công nghệ và tác động của chúng.",
    content: `
      <p>Cuộc cách mạng công nghiệp 4.0 đang tạo ra những thay đổi mạnh mẽ trong mọi lĩnh vực, và ngành logistics không phải là ngoại lệ. Các công nghệ như Internet vạn vật (IoT), trí tuệ nhân tạo (AI), blockchain, dữ liệu lớn (Big Data) đang dần được ứng dụng rộng rãi, mang lại những cải tiến đáng kể trong quy trình vận hành và chất lượng dịch vụ.</p>
      
      <h3>Internet vạn vật (IoT) trong logistics</h3>
      <p>IoT cho phép kết nối các thiết bị, phương tiện, hàng hóa thông qua mạng internet, giúp theo dõi và quản lý hàng hóa theo thời gian thực. Các cảm biến IoT được gắn trên container, xe tải, hàng hóa giúp cung cấp thông tin về vị trí, nhiệt độ, độ ẩm, tình trạng hàng hóa, giúp doanh nghiệp logistics quản lý hiệu quả chuỗi cung ứng.</p>
      
      <h3>Trí tuệ nhân tạo (AI) và học máy (Machine Learning)</h3>
      <p>AI và Machine Learning giúp dự đoán nhu cầu vận chuyển, tối ưu hóa lộ trình, dự báo thời gian giao hàng và phát hiện các vấn đề tiềm ẩn trong chuỗi cung ứng. Các thuật toán AI cũng giúp tự động hóa quy trình xử lý đơn hàng, phân loại hàng hóa và quản lý kho bãi.</p>
      
      <h3>Blockchain trong quản lý chuỗi cung ứng</h3>
      <p>Blockchain mang lại tính minh bạch và an toàn cho chuỗi cung ứng. Công nghệ này giúp theo dõi hàng hóa từ nguồn gốc đến điểm đích, xác thực thông tin và giảm thiểu gian lận. Các hợp đồng thông minh (smart contracts) trên nền tảng blockchain cũng giúp tự động hóa quy trình thanh toán và thực hiện hợp đồng.</p>
      
      <h3>Dữ liệu lớn (Big Data) và phân tích dữ liệu</h3>
      <p>Dữ liệu lớn giúp doanh nghiệp logistics phân tích và đưa ra quyết định dựa trên thông tin chính xác. Việc phân tích dữ liệu về lưu lượng giao thông, thời tiết, nhu cầu thị trường giúp tối ưu hóa lộ trình vận chuyển, quản lý kho bãi và dự báo nhu cầu.</p>
      
      <h3>Tự động hóa và robot</h3>
      <p>Các kho hàng hiện đại đang dần được tự động hóa với sự hỗ trợ của robot và các hệ thống tự động. Điều này giúp tăng hiệu suất làm việc, giảm sai sót và tiết kiệm chi phí nhân công.</p>
      
      <p>Tại Hòa Phát Logistics, chúng tôi đang từng bước ứng dụng các công nghệ 4.0 vào quy trình vận hành. Hệ thống TMS (Transportation Management System) mới triển khai là một ví dụ điển hình, giúp chúng tôi quản lý toàn diện quy trình vận tải và nâng cao chất lượng dịch vụ.</p>
      
      <p>Trong tương lai, chúng tôi sẽ tiếp tục đầu tư vào công nghệ, với mục tiêu trở thành công ty logistics hàng đầu về ứng dụng công nghệ tại Việt Nam, mang đến cho khách hàng những trải nghiệm dịch vụ tốt nhất.</p>
    `,
    image: "/news-6.jpg",
    date: "08/08/2023",
    author: "Admin",
    category: "Tin ngành",
    slug: "cong-nghe-4-0-trong-logistics",
    tags: ["công nghệ 4.0", "IoT", "AI", "blockchain", "big data"],
  },
]

export const getNewsBySlug = (slug: string) => {
  return newsItems.find((news) => news.slug === slug)
}

export const getNewsByCategory = (category: string) => {
  return newsItems.filter((news) => news.category === category)
}

export const getRelatedNews = (slug: string, limit = 3) => {
  const currentNews = getNewsBySlug(slug)
  if (!currentNews) return []

  return newsItems.filter((news) => news.slug !== slug && news.category === currentNews.category).slice(0, limit)
}
