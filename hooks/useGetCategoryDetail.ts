"use client"

import {useQuery} from "@tanstack/react-query";
import {categoryService} from "@/services/category.service";

export const useGetCategoryDetail = (slug: string) => {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () => categoryService.getCategoryDetail(slug),
  });
}
