import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobVacancyListRelationFilter } from "../jobVacancy/JobVacancyListRelationFilter";

export type EmployerWhereInput = {
  id?: StringFilter;
  companyName?: StringNullableFilter;
  email?: StringNullableFilter;
  jobVacancies?: JobVacancyListRelationFilter;
};
