import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";

export type VacancyWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  qualifications?: StringNullableFilter;
  company?: CompanyWhereUniqueInput;
  applications?: ApplicationListRelationFilter;
};
