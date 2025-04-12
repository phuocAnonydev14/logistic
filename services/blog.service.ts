import HttpService from "@/services/http.service";
import {
  IGenericResponse,
  IGenericResponsePagination,
} from "@/types/service.type";
import { BlogType } from "@/types/blog.type";
import {GetAllFilter, Pagination} from "@/types/app.type";

class BlogService extends HttpService {
  async getAllBlogs(query: GetAllFilter) {
    return (await this.get<IGenericResponsePagination<BlogType[], Pagination>>(
      "/blogs",
      { ...query, limit: query.limit || 100 },
    ))?.data;
  }

  async getBlogDetail(slug: string) {
    return (await this.get<IGenericResponse<BlogType>>(
      `/blogs/${slug}`,
      { view: true },
      true,
    ))?.data;
  }

  async likeBlog(blogId: number) {
    return this.post<any, any>(`/like`, { blogId }, {}, false);
  }

  async unlikeBlog(blogId: number) {
    return this.remove(`/like/${blogId}`, {}, false);
  }
}

export const blogService = new BlogService();
