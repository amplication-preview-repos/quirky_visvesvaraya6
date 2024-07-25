import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobVacancyWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
  employer?: EmployerWhereUniqueInput;
};
