export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title_VN: "Trang chủ",
      href: "/",
      title_EN: "Home",
    },
    {
      href: "/about-us",
      title_VN: "Về chúng tôi",
      title_EN: "About Us",
    },
    {
      href: '/products',
      title_VN: "Sản phẩm",
      title_EN: "Products",
      child: true
    },
    {
      href: '/contact-us',
      title_VN: "Liên hệ",
      title_EN: "Contact Us",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

export type AnchorItem = {
  name_VN: string;
  name_EN: string;
  href: string;
  children?: AnchorItem[];
};

export type AnchorListItem = {
  name_VN: string;
  name_EN: string;
  children?: AnchorItem[];
  image?: string;
  href?: string;
};

export const anchorList: any[] = [
  {
    name_VN: "Trang chủ",
    href: "/",
    name_EN: "Home",
  },
  {
    href: "/about-us",
    name_VN: "Về chúng tôi",
    name_EN: "About Us",
  },
  {
    "href": "/categories/all-category",
    "name_VN": "Sản phẩm",
    "name_EN": "Products",
    "children": []
  },{
    href: '/blogs',
    name_VN: "Tin tức",
    name_EN: "News",
  },
  {
    href: '/contact',
    name_VN: "Liên hệ",
    name_EN: "Contact Us",
  }
]
