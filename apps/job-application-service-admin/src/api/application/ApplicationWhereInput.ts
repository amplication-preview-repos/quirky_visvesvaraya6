import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VacancyWhereUniqueInput } from "../vacancy/VacancyWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  jobSeeker?: StringNullableFilter;
  documents?: JsonFilter;
  vacancy?: VacancyWhereUniqueInput;
};
