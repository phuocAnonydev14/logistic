import HttpService from "@/services/http.service";

class AppointmentService extends HttpService {
  async makeAppointment(params: any) {
    return this.post<any>("/appointment", params);
  }
}

export const appointmentService = new AppointmentService();
