import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";

export type JobListingWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  title?: StringNullableFilter;
  salaryRange?: StringNullableFilter;
  postedBy?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
};
