import {Category} from "@/types/app.type";

const categories: Category[] = [
  {
    id: 1,
    name_VN: "Thiết bị tương tác",
    name_EN: "Interactive Devices",
    slug: "interactive-devices",
    image:
      "https://example.com/images/category/interactive-devices.jpg"
    ,
    description_VN: "Các thiết bị tương tác thông minh",
    description_EN: "Smart interactive devices"
  },
  {
    id: 2,
    name_VN: "Thiết bị hiển thị",
    name_EN: "Display Devices",
    slug: "display-devices",
    image:
      "https://example.com/images/category/display-devices.jpg"
    ,
    description_VN: "Các thiết bị hiển thị chất lượng cao",
    description_EN: "High-quality display devices"
  }
];

const products: any[] = [
  {
    id: 1,
    name_VN: "Bảng Tương Tác Thông Minh Gaoke GK 880H",
    name_EN: "Gaoke GK 880H Smart Interactive Board",
    slug: "gaoke-gk-880h-smart-interactive-board",
    images:
      ["https://images.unsplash.com/photo-1733507267128-e65b38dad170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1733507267128-e65b38dad170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1733507267128-e65b38dad170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1733507267128-e65b38dad170?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      ]
    ,
    description_VN: "<p>Bảng tương tác thông minh với độ phân giải cao. Thiết bị đào tạo nghề cơ điện tử là các công cụ hỗ trợ học tập và thực hành trong lĩnh vực cơ điện tử, bao gồm hệ thống điều khiển tự động, robot, bộ kit lắp ráp, và thiết bị đo lường cơ điện.</p>",
    description_EN: "<p>Smart interactive board with high resolution.</p>",
    ingredients: "<p>Chất liệu bền bỉ, dễ sử dụng.</p>",
    price: 1500,
    category: categories[0],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: 2,
    name_VN: "Màn hình LED Samsung 4K",
    name_EN: "Samsung 4K LED Display",
    slug: "samsung-4k-led-display",
    images:
      ["https://example.com/images/products/samsung-4k-led.jpg"]
    ,
    description_VN: "<p>Màn hình LED 4K với màu sắc chân thực.</p>",
    description_EN: "<p>4K LED display with realistic colors.</p>",
    ingredients: "<p>Công nghệ LED tiên tiến.</p>",
    price: 1200,
    category: categories[1],
    createdAt: "2023-01-02",
    updatedAt: "2023-01-02"
  },
  {
    id: 3,
    name_VN: "Máy chiếu Sony Full HD",
    name_EN: "Sony Full HD Projector",
    slug: "sony-full-hd-projector",
    images:
      ["https://example.com/images/products/sony-full-hd-projector.jpg"]
    ,
    description_VN: "<p>Máy chiếu Full HD với độ sáng cao.</p>",
    description_EN: "<p>Full HD projector with high brightness.</p>",
    ingredients: "<p>Công nghệ chiếu sáng tiên tiến.</p>",
    price: 800,
    category: categories[1],
    createdAt: "2023-01-03",
    updatedAt: "2023-01-03"
  },
  {
    id: 4,
    name_VN: "Bảng Tương Tác Thông Minh Gaoke GK 880H/104S",
    name_EN: "Gaoke GK 880H/104S Smart Interactive Board",
    slug: "gaoke-gk-880h-104s-smart-interactive-board",
    images:
      ["https://example.com/images/products/gaoke-gk-880h-104s.jpg"]
    ,
    description_VN: "<p>Bảng tương tác thông minh với kích thước 104 inch.</p>",
    description_EN: "<p>Smart interactive board with 104-inch size.</p>",
    ingredients: "<p>Chất liệu bền bỉ, dễ sử dụng.</p>",
    price: 1700,
    category: categories[0],
    createdAt: "2023-01-04",
    updatedAt: "2023-01-04"
  },
  {
    id: 5,
    name_VN: "Màn hình LG UltraFine 5K",
    name_EN: "LG UltraFine 5K Display",
    slug: "lg-ultrafine-5k-display",
    images:
      ["https://example.com/images/products/lg-ultrafine-5k.jpg"]
    ,
    description_VN: "<p>Màn hình UltraFine 5K với độ phân giải cao.</p>",
    description_EN: "<p>UltraFine 5K display with high resolution.</p>",
    ingredients: "<p>Công nghệ hiển thị tiên tiến.</p>",
    price: 2000,
    category: categories[1],
    createdAt: "2023-01-05",
    updatedAt: "2023-01-05"
  },
  {
    id: 6,
    name_VN: "Bảng Tương Tác Thông Minh Gaoke GK 880H/130S",
    name_EN: "Gaoke GK 880H/130S Smart Interactive Board",
    slug: "gaoke-gk-880h-130s-smart-interactive-board",
    images:
      ["https://example.com/images/products/gaoke-gk-880h-130s.jpg"]
    ,
    description_VN: "<p>Bảng tương tác thông minh với kích thước 130 inch.</p>",
    description_EN: "<p>Smart interactive board with 130-inch size.</p>",
    ingredients: "<p>Chất liệu bền bỉ, dễ sử dụng.</p>",
    price: 1900,
    category: categories[0],
    createdAt: "2023-01-06",
    updatedAt: "2023-01-06"
  },
  {
    id: 7,
    name_VN: "Máy chiếu Epson 3LCD",
    name_EN: "Epson 3LCD Projector",
    slug: "epson-3lcd-projector",
    images:
      ["https://example.com/images/products/epson-3lcd-projector.jpg"]
    ,
    description_VN: "<p>Máy chiếu 3LCD với màu sắc sống động.</p>",
    description_EN: "<p>3LCD projector with vibrant colors.</p>",
    ingredients: "<p>Công nghệ 3LCD tiên tiến.</p>",
    price: 900,
    category: categories[1],
    createdAt: "2023-01-07",
    updatedAt: "2023-01-07"
  },
  {
    id: 8,
    name_VN: "Bảng Tương Tác Thông Minh Gaoke GK 880H/150S",
    name_EN: "Gaoke GK 880H/150S Smart Interactive Board",
    slug: "gaoke-gk-880h-150s-smart-interactive-board",
    images:
      ["https://example.com/images/products/gaoke-gk-880h-150s.jpg"]
    ,
    description_VN: "<p>Bảng tương tác thông minh với kích thước 150 inch.</p>",
    description_EN: "<p>Smart interactive board with 150-inch size.</p>",
    ingredients: "<p>Chất liệu bền bỉ, dễ sử dụng.</p>",
    price: 2100,
    category: categories[0],
    createdAt: "2023-01-08",
    updatedAt: "2023-01-08"
  },
  {
    id: 9,
    name_VN: "Màn hình Dell UltraSharp 8K",
    name_EN: "Dell UltraSharp 8K Display",
    slug: "dell-ultrasharp-8k-display",
    images:
      ["https://example.com/images/products/dell-ultrasharp-8k.jpg"]
    ,
    description_VN: "<p>Màn hình UltraSharp 8K với độ phân giải cực cao.</p>",
    description_EN: "<p>UltraSharp 8K display with ultra-high resolution.</p>",
    ingredients: "<p>Công nghệ hiển thị tiên tiến.</p>",
    price: 2500,
    category: categories[1],
    createdAt: "2023-01-09",
    updatedAt: "2023-01-09"
  },
  {
    id: 10,
    name_VN: "Máy chiếu BenQ 4K",
    name_EN: "BenQ 4K Projector",
    slug: "benq-4k-projector",
    images:
      ["https://example.com/images/products/benq-4k-projector.jpg"]
    ,
    description_VN: "<p>Máy chiếu 4K với độ sáng cao và màu sắc chính xác.</p>",
    description_EN: "<p>4K projector with high brightness and accurate colors.</p>",
    ingredients: "<p>Công nghệ chiếu sáng tiên tiến.</p>",
    price: 1100,
    category: categories[1],
    createdAt: "2023-01-10",
    updatedAt: "2023-01-10"
  }
];

export {categories, products};
