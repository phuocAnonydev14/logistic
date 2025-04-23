"use client"

import {useQuery} from "@tanstack/react-query";
import {CategoryGetAllFilter, categoryService} from "@/services/category.service";

export const useGetCategories = ({filter}:{filter?:CategoryGetAllFilter}) => {
  return useQuery({
    queryKey: ["categories", filter], // Include filter in queryKey for proper caching
    queryFn: () => categoryService.getAllCategories(filter),
    staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
    refetchOnWindowFocus: false, // Optional: prevents refetch on window focus
    refetchOnMount: false, // Optional: prevents refetch when component mounts
    refetchOnReconnect: false // Optional: prevents refetch on network reconnect
  });
}
