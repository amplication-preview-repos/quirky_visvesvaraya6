import { InputJsonValue } from "../../types";
import { JobListingWhereUniqueInput } from "../jobListing/JobListingWhereUniqueInput";

export type ApplicationUpdateInput = {
  status?: "Option1" | null;
  documents?: InputJsonValue;
  jobListing?: JobListingWhereUniqueInput | null;
  applicant?: string | null;
};
