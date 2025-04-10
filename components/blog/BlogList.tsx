"use client";

import {BlogItem} from "@/components/blog/BlogItem";
import {BlogType} from "@/types/blog.type";
import {useState} from "react";
import {useDetectLanguage} from "@/hooks/useDetectLanguage";
import {Button} from "@/components/ui/button";
import {usePagination} from "@/hooks/usePagination";
import {blogService} from "@/services/blog.service";
import Link from "next/link";

interface BlogListProps {
  isHomePage?: boolean;
}

export const BlogList = ({isHomePage}: BlogListProps) => {
  const {isVie} = useDetectLanguage()
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const {
    pagination,
    loading,
    handleFetchPreviousPage,
    handleFetchNextPage,
    handleFetchSpecificPage,
    currentPage,
    data
  } = usePagination<BlogType>({
    data: blogs,
    setData: (value) => setBlogs(value),
    dataCallerAction: (page) =>
      blogService.getAllBlogs({
        page,
        filter: JSON.stringify({ draft: false }),
        limit: isHomePage ? 4 : 100
      }),
  });

  return (
    <div>
      <p className="mb-4 text-center text-xl font-semibold md:text-3xl ">{isVie ? "Tin tức" : "News"}</p>
      <div className="justify-cente w-fullr flex">
        <div className="grid w-full grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-3">
          {data?.map((blog, index) => {
            if (isHomePage && index > 2) return <div key={index}></div>;
            return <BlogItem blog={blog} key={index}/>;
          })}
        </div>
      </div>
      {isHomePage && <div className="mt-3 flex justify-center">
        <Link href="/blogs"><Button>Explore more</Button></Link>
      </div>}
    </div>
  );
};


export const mockBlogs: BlogType[] = [
  {
    id: 1,
    title_EN: "Introduction to TypeScript",
    title_VN: "Giới thiệu về TypeScript",
    desc_EN: "A beginner's guide to TypeScript and its features.",
    desc_VN: "Hướng dẫn cơ bản về TypeScript và các tính năng của nó.",
    content_EN: "TypeScript is a strongly typed programming language that builds on JavaScript.",
    content_VN: "TypeScript là một ngôn ngữ lập trình có kiểu mạnh được phát triển từ JavaScript.",
    slug: "introduction-to-typescript",
    thumbnail: {
      id: 101,
      imageUrl: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      type: "image/jpeg",
      collect_id: 1,
      set_id: 1,
    },
  },
  {
    id: 2,
    title_EN: "Understanding React Hooks",
    title_VN: "Tìm hiểu React Hooks",
    desc_EN: "Learn how to use React Hooks to manage state and lifecycle in functional components.",
    desc_VN: "Học cách sử dụng React Hooks để quản lý state và vòng đời trong functional components.",
    content_EN: "React Hooks allow you to use state and other features in function components.",
    content_VN: "React Hooks cho phép bạn sử dụng state và các tính năng khác trong function components.",
    slug: "understanding-react-hooks",
    thumbnail: {
      id: 102,
      imageUrl: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      type: "image/jpeg",
      collect_id: 1,
      set_id: 2,
    },
  },
  {
    id: 3,
    title_EN: "Getting Started with NestJS",
    title_VN: "Bắt đầu với NestJS",
    desc_EN: "A guide to building scalable server-side applications with NestJS.",
    desc_VN: "Hướng dẫn xây dựng ứng dụng server-side có khả năng mở rộng với NestJS.",
    content_EN: "NestJS is a progressive Node.js framework for building efficient and scalable applications.",
    content_VN: "NestJS là một framework Node.js hiện đại để xây dựng ứng dụng hiệu quả và có khả năng mở rộng.",
    slug: "getting-started-with-nestjs",
    thumbnail: {
      id: 103,
      imageUrl: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      type: "image/jpeg",
      collect_id: 2,
      set_id: 3,
    },
  },
  {
    id: 4,
    title_EN: "Building a REST API with Express.js",
    title_VN: "Xây dựng REST API với Express.js",
    desc_EN: "Step-by-step guide to creating a REST API using Express.js.",
    desc_VN: "Hướng dẫn từng bước để tạo một REST API bằng Express.js.",
    content_EN: "Express.js is a minimal and flexible Node.js web application framework.",
    content_VN: "Express.js là một framework ứng dụng web nhẹ và linh hoạt cho Node.js.",
    slug: "building-rest-api-expressjs",
    thumbnail: {
      id: 104,
      imageUrl: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      type: "image/jpeg",
      collect_id: 3,
      set_id: 4,
    },
  },
  {
    id: 5,
    title_EN: "Mastering Golang for Backend Development",
    title_VN: "Thành thạo Golang trong phát triển Backend",
    desc_EN: "Learn how to build high-performance backend applications with Golang.",
    desc_VN: "Học cách xây dựng ứng dụng backend hiệu suất cao với Golang.",
    content_EN: "Golang is an open-source programming language that makes it easy to build simple, reliable, and efficient software.",
    content_VN: "Golang là một ngôn ngữ lập trình mã nguồn mở giúp dễ dàng xây dựng phần mềm đơn giản, đáng tin cậy và hiệu quả.",
    slug: "mastering-golang-backend-development",
    thumbnail: {
      id: 105,
      imageUrl: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      type: "image/jpeg",
      collect_id: 4,
      set_id: 5,
    },
  },
];
