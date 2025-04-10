import HttpService from "@/services/http.service";
import { IGenericResponse } from "@/types/service.type";

class AnonymousUserService extends HttpService {
  async createAnonymousUser() {
    return (
      await this.post<IGenericResponse<{ id: string }>, {}>(
        "/anonymousUser",
        {},
      )
    )?.data;
  }
}

export const anonymousUserService = new AnonymousUserService();
