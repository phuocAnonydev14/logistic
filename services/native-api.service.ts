import HttpService from "@/services/http.service";

interface SendEmailParams {
  to: string;
  subject?: string;
  text?: string;
}

class NativeApiService extends HttpService {
  constructor() {
    super("/api");
  }

  subscribe(params: SendEmailParams) {
    return this.post<any, any>("/subscribe", params);
  }

  bookAppointment<T>(params: T) {
    return this.post<any, any>("/book-appointment", params);
  }
}

export const nativeApiService = new NativeApiService();
