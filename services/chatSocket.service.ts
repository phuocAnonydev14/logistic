import HttpService from "@/services/http.service";
import { GetAllFilter } from "@/types/app.type";
import { IGenericResponsePagination } from "@/types/service.type";
import { Message } from "@/types/chat.type";
import { Pagination } from "@/types/product.type";

class ChatSocketService extends HttpService {
  /*
  return this.get<IGenericResponsePagination<BlogType[], Pagination>>(
      "/blog",
      { ...query, limit: query.limit || 20 },
    );
   */
  async getMessages(query: GetAllFilter) {
    return this.get<IGenericResponsePagination<Message[], Pagination>>(
      "/chat",
      {
        ...query,
        limit: query.limit || 20,
        order: JSON.stringify({ createdAt: "DESC" }),
      },
    );
  }

  async updateRoom(id: number, data: any) {
    return this.update(`/rooms/${id}`, data);
  }
}

export const chatSocketService = new ChatSocketService();
