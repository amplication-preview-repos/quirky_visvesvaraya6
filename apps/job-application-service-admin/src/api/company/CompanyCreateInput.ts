import { VacancyCreateNestedManyWithoutCompaniesInput } from "./VacancyCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  email?: string | null;
  password?: string | null;
  companyName?: string | null;
  vacancies?: VacancyCreateNestedManyWithoutCompaniesInput;
};
