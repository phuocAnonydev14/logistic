import {BlogDetail} from "@/app/[lang]/blogs/[slug]/_components/BlogDetail";
import {mockBlogs} from "@/__mock__/blogs";

// const handleFetchBlogDetail = async (
//   slug: string,
// ): Promise<BlogType | null> => {
//   try {
//     const res = await blogService.getBlogDetail(slug);
//     return res?.data || null;
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  // const blog = await handleFetchBlogDetail(slug);

  return (
    <div>
      <BlogDetail blog={mockBlogs[0]} />
    </div>
  );
}
