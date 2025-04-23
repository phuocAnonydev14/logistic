import HttpService from "@/services/http.service";

class RecruitmentService extends HttpService {
  async getRecruitment(params: any) {
    return this.get<any>("/recruitment", params);
  }
}

export const recruitmentService = new RecruitmentService();
