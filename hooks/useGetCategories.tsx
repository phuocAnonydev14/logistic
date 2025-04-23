"use client"

import {useQuery} from "@tanstack/react-query";
import {CategoryGetAllFilter, categoryService} from "@/services/category.service";
import {Category} from "@/types/app.type";
import {useAtom, atom} from 'jotai'

const categoryAtom = atom<Category[]>([])

export const useGetCategories = ({filter}: { filter?: CategoryGetAllFilter }) => {
	
	const [category, setCategory] = useAtom(categoryAtom)
	
	return useQuery({
		queryKey: ["categories"], // Include filter in queryKey for proper caching
		queryFn: async () => {
			if (category.length) return category
			const res = await categoryService.getAllCategories(filter)
			setCategory(res)
			return res
		},
		staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
	});
}
