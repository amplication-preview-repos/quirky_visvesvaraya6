import { VacancyUpdateManyWithoutCompaniesInput } from "./VacancyUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  email?: string | null;
  password?: string | null;
  companyName?: string | null;
  vacancies?: VacancyUpdateManyWithoutCompaniesInput;
};
