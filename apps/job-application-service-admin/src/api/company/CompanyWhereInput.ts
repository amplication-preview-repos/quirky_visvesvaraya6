import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VacancyListRelationFilter } from "../vacancy/VacancyListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  companyName?: StringNullableFilter;
  vacancies?: VacancyListRelationFilter;
};
