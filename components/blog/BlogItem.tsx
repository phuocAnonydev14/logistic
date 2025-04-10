"use client";

import { Button } from "@/components/ui/button";
import { BlogType } from "@/types/blog.type";
import { useDetectLanguage } from "@/hooks/useDetectLanguage";
import Link from "next/link";

interface BlogItemProps {
  blog: BlogType;
}

export const BlogItem = ({ blog }: BlogItemProps) => {
  const { langPrefix } = useDetectLanguage();

  const title = blog[`title${langPrefix}`];
  const desc = blog[`desc${langPrefix}`];
  const img =
    blog.thumbnail?.imageUrl ||
    "https://images.unsplash.com/photo-1737467030068-88ad20e617ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex w-full flex-1 flex-col transition-all duration-300 hover:shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
      <img
        src={img}
        alt="BLog cart"
        className="h-[300px] w-full object-cover"
      />
      <div className="content flex h-full flex-1 flex-col items-center justify-between gap-8 bg-[#f6f6f6] px-4 py-5 text-center">
        <h2 className={`flex-1 text-balance text-2xl`}>
          {title}
        </h2>
        {/*<span className="flex-1 text-balance text-[14px]">{desc}</span>*/}
        <Link href={`/blogs/${blog.slug || ""}`}>
          <Button
            variant="secondary"
            className="inline w-fit bg-white"
            size="lg"
          >
            <p className="font-medium">Read more</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
