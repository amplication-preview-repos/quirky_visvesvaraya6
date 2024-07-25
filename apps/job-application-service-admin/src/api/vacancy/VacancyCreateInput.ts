import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ApplicationCreateNestedManyWithoutVacanciesInput } from "./ApplicationCreateNestedManyWithoutVacanciesInput";

export type VacancyCreateInput = {
  title?: string | null;
  description?: string | null;
  qualifications?: string | null;
  company?: CompanyWhereUniqueInput | null;
  applications?: ApplicationCreateNestedManyWithoutVacanciesInput;
};
