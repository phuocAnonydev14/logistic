"use client"

import {useQuery} from "@tanstack/react-query";
import {CategoryGetAllFilter, categoryService} from "@/services/category.service";

export const useGetCategories = ({filter}:{filter?:CategoryGetAllFilter}) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAllCategories(filter),
  });
}
