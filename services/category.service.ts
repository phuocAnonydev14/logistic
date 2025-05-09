import HttpService from "@/services/http.service";
import {Category, Pagination, Product} from "@/types/app.type";

export interface CategoryGetAllFilter {
  limit?: number;
  page?: number;
  order?: { [a: string]: string };
  filter?: Record<keyof Product, string | number | boolean>;
  search?: Record<keyof Product, string | number | boolean>;
}

class CategoryService extends HttpService {
  async getAllCategories(query: CategoryGetAllFilter) {
    return (await this.get<{ data: Category[]; pagination: Pagination }>(
      "/categories",
      query,
      true,
    ))?.data
  }

  async getCategoryDetail(slug: string) {
    return (await this.get<Category>(`/categories/${slug}`, {}, true))?.data
  }
}

export const categoryService = new CategoryService();
