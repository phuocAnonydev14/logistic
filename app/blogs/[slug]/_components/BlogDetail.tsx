"use client";

import { BlogType } from "@/types/blog.type";
import { useDetectLanguage } from "@/hooks/useDetectLanguage";
import parse from "html-react-parser";
import { Fragment } from "react";
import {SizeBackground} from "@/components/common/ImageContent";
import {Banner} from "@/components/Banner";

interface BlogDetailProps {
  blog: BlogType;
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  const { langPrefix } = useDetectLanguage();
  const title = blog[`title${langPrefix}`] || "";
  const desc = blog[`desc${langPrefix}`] || "";
  const content = blog[`content${langPrefix}`] || "";
  const img =
    blog.thumbnail?.imageUrl ||
    "https://images.unsplash.com/photo-1737467030068-88ad20e617ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Fragment>
      <Banner
        header={title}
        size={SizeBackground.BIG}
        content={desc}
        urlImage={img}
      />
      <div className="mx-auto max-w-[800px] p-4 md:py-11">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {parse(content)}
        </div>
      </div>
    </Fragment>
  );
};
