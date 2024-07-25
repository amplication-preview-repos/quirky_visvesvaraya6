import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";

export type JobSeekerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  skills?: StringNullableFilter;
  applications?: ApplicationListRelationFilter;
  documents?: DocumentListRelationFilter;
};
