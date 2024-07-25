import { ApplicationUpdateManyWithoutJobVacanciesInput } from "./ApplicationUpdateManyWithoutJobVacanciesInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobVacancyUpdateInput = {
  title?: string | null;
  description?: string | null;
  applications?: ApplicationUpdateManyWithoutJobVacanciesInput;
  employer?: EmployerWhereUniqueInput | null;
};
