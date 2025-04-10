import HttpService from "@/services/http.service";
import { IGenericResponse } from "@/types/service.type";
import { CreateOrder, Order } from "@/types/order.type";

class OrderService extends HttpService {
  async createOrder(data: CreateOrder) {
    return (
      await this.post<IGenericResponse<Order>, any>(
        "/order/checkout",
        { ...data },
        {},
        false,
      )
    )?.data;
  }

  async getOrders(userId: number) {
    const filter = JSON.stringify({ user: { id: userId } });
    const order = JSON.stringify({ createdAt: "DESC" });
    return (
      await this.get<IGenericResponse<Order[]>>(
        `/order/get-all`,
        {
          filter,
          type: "paginated",
          order,
        },
        false,
      )
    )?.data;
  }
}

export const orderService = new OrderService();
