import { JobVacancyCreateNestedManyWithoutEmployersInput } from "./JobVacancyCreateNestedManyWithoutEmployersInput";

export type EmployerCreateInput = {
  companyName?: string | null;
  email?: string | null;
  jobVacancies?: JobVacancyCreateNestedManyWithoutEmployersInput;
};
