import { ApplicationCreateNestedManyWithoutJobListingsInput } from "./ApplicationCreateNestedManyWithoutJobListingsInput";

export type JobListingCreateInput = {
  description?: string | null;
  location?: string | null;
  title?: string | null;
  salaryRange?: string | null;
  postedBy?: string | null;
  applications?: ApplicationCreateNestedManyWithoutJobListingsInput;
};
