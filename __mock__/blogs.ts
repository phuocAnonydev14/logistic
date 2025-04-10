import {BlogType} from "@/types/blog.type";

export const mockBlogs: BlogType[] = Array.from({length: 10}, (_, i) => ({
  id: i + 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  title_EN: `Blog Title EN ${i + 1}`,
  title_VN: `Tiêu đề Blog VN ${i + 1}`,
  desc_EN: `This is the English description for blog ${i + 1}.`,
  desc_VN: `Đây là mô tả tiếng Việt cho blog ${i + 1}.`,
  content_EN: `English content for blog ${i + 1}. Detailed content goes here...`,
  content_VN: `Nội dung tiếng Việt cho blog ${i + 1}. Nội dung chi tiết ở đây...`,
  slug: `blog-title-${i + 1}`,
  view: Math.floor(Math.random() * 1000),
  image: {
    imageUrl: `https://source.unsplash.com/random/150x150?sig=${i}`
  },
}));
