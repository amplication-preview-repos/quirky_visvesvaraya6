import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { JobListingWhereUniqueInput } from "../jobListing/JobListingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicationWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  documents?: JsonFilter;
  jobListing?: JobListingWhereUniqueInput;
  applicant?: StringNullableFilter;
};
