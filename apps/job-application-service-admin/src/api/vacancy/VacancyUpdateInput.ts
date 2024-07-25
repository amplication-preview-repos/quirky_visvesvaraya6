import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ApplicationUpdateManyWithoutVacanciesInput } from "./ApplicationUpdateManyWithoutVacanciesInput";

export type VacancyUpdateInput = {
  title?: string | null;
  description?: string | null;
  qualifications?: string | null;
  company?: CompanyWhereUniqueInput | null;
  applications?: ApplicationUpdateManyWithoutVacanciesInput;
};
