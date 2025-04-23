import HttpService from "@/services/http.service";
import {IGenericResponse} from "@/types/service.type";
import {RecruitmentType} from "@/types/recruitment.type";

class AppointmentService extends HttpService {
  async makeAppointment(params: any) {
    return this.post<IGenericResponse<RecruitmentType>>("/appointment", params);
  }
}

export const appointmentService = new AppointmentService();
