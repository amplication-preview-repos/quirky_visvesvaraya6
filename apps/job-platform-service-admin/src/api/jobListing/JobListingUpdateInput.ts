import { ApplicationUpdateManyWithoutJobListingsInput } from "./ApplicationUpdateManyWithoutJobListingsInput";

export type JobListingUpdateInput = {
  description?: string | null;
  location?: string | null;
  title?: string | null;
  salaryRange?: string | null;
  postedBy?: string | null;
  applications?: ApplicationUpdateManyWithoutJobListingsInput;
};
