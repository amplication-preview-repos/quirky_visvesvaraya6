import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";

export type DocumentWhereInput = {
  id?: StringFilter;
  fileUrl?: JsonFilter;
  name?: StringNullableFilter;
  jobSeeker?: JobSeekerWhereUniqueInput;
};
