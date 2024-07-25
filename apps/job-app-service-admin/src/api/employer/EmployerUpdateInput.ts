import { JobVacancyUpdateManyWithoutEmployersInput } from "./JobVacancyUpdateManyWithoutEmployersInput";

export type EmployerUpdateInput = {
  companyName?: string | null;
  email?: string | null;
  jobVacancies?: JobVacancyUpdateManyWithoutEmployersInput;
};
