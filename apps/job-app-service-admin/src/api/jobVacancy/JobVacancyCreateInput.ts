import { ApplicationCreateNestedManyWithoutJobVacanciesInput } from "./ApplicationCreateNestedManyWithoutJobVacanciesInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobVacancyCreateInput = {
  title?: string | null;
  description?: string | null;
  applications?: ApplicationCreateNestedManyWithoutJobVacanciesInput;
  employer?: EmployerWhereUniqueInput | null;
};
